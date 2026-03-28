import { useState, useCallback, ChangeEvent, FocusEvent } from "react";

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validate?: (value: string) => boolean;
    message?: string;
  };
}

interface FormErrors {
  [key: string]: string;
}

export function useFormValidation(initialValues: Record<string, string>, rules: ValidationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback(
    (name: string, value: string): string => {
      const fieldRules = rules[name];
      if (!fieldRules) return "";

      // Required validation
      if (fieldRules.required && !value.trim()) {
        return fieldRules.message || `${name} is required`;
      }

      // Empty field - skip other validations
      if (!value.trim()) return "";

      // Min length validation
      if (fieldRules.minLength && value.length < fieldRules.minLength) {
        return fieldRules.message || `${name} must be at least ${fieldRules.minLength} characters`;
      }

      // Max length validation
      if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
        return fieldRules.message || `${name} must be no more than ${fieldRules.maxLength} characters`;
      }

      // Pattern validation (for email, etc.)
      if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
        return fieldRules.message || `${name} is invalid`;
      }

      // Custom validation
      if (fieldRules.validate && !fieldRules.validate(value)) {
        return fieldRules.message || `${name} is invalid`;
      }

      return "";
    },
    [rules]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));

      // Validate on change if field has been touched
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField]
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(values).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(values).reduce(
        (acc, key) => {
          acc[key] = true;
          return acc;
        },
        {} as Record<string, boolean>
      )
    );

    return isValid;
  }, [values, validateField]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  return {
    values,
    setValues,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    resetForm,
    isValid: Object.keys(errors).length === 0,
  };
}
