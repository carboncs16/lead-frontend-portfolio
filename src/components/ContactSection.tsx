import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/components/ui/use-toast";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Mail, Phone, Send, AlertCircle, CheckCircle } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useFormValidation(
    { name: "", email: "", message: "" },
    {
      name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        message: "Name must be between 2 and 50 characters",
      },
      email: {
        required: true,
        pattern: EMAIL_REGEX,
        message: "Please enter a valid email address",
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
        message: "Message must be between 10 and 1000 characters",
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    if (!form.validateAll()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        duration: 5000,
      });

      // Reset form
      form.resetForm();
    } catch (error) {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again or reach out directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFieldError = (fieldName: string) => {
    return form.touched[fieldName] ? form.errors[fieldName] : "";
  };

  const isFieldValid = (fieldName: string) => {
    return form.touched[fieldName] && !form.errors[fieldName];
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <p className="reveal font-mono text-xs text-primary tracking-widest uppercase mb-3">
          {"// contact"}
        </p>
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-14 leading-tight">
          Let's Connect
        </h2>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, interesting
              projects, or just connecting over tech. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:punyapurba16@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Mail size={16} className="text-primary" />
                </div>
                punyapurba16@gmail.com
              </a>

              <a
                href="tel:+918763932785"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer"
              >
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Phone size={16} className="text-primary" />
                </div>
                +91 8763932785
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Your Name
                </label>
                {isFieldValid("name") && (
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <CheckCircle size={14} /> Valid
                  </span>
                )}
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.values.name}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                disabled={isLoading}
                className={`w-full bg-card border-2 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  getFieldError("name")
                    ? "border-destructive focus:ring-2 focus:ring-destructive/40"
                    : isFieldValid("name")
                      ? "border-green-500/50 focus:ring-2 focus:ring-green-500/40"
                      : "border-border focus:ring-2 focus:ring-primary/40"
                }`}
              />
              {getFieldError("name") && (
                <div className="flex items-center gap-2 text-xs text-destructive">
                  <AlertCircle size={14} />
                  {getFieldError("name")}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Your Email
                </label>
                {isFieldValid("email") && (
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <CheckCircle size={14} /> Valid
                  </span>
                )}
              </div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.values.email}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                disabled={isLoading}
                className={`w-full bg-card border-2 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  getFieldError("email")
                    ? "border-destructive focus:ring-2 focus:ring-destructive/40"
                    : isFieldValid("email")
                      ? "border-green-500/50 focus:ring-2 focus:ring-green-500/40"
                      : "border-border focus:ring-2 focus:ring-primary/40"
                }`}
              />
              {getFieldError("email") && (
                <div className="flex items-center gap-2 text-xs text-destructive">
                  <AlertCircle size={14} />
                  {getFieldError("email")}
                </div>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Your Message
                </label>
                {isFieldValid("message") && (
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <CheckCircle size={14} /> Valid
                  </span>
                )}
              </div>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.values.message}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                rows={4}
                disabled={isLoading}
                className={`w-full bg-card border-2 rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                  getFieldError("message")
                    ? "border-destructive focus:ring-2 focus:ring-destructive/40"
                    : isFieldValid("message")
                      ? "border-green-500/50 focus:ring-2 focus:ring-green-500/40"
                      : "border-border focus:ring-2 focus:ring-primary/40"
                }`}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  {getFieldError("message") && (
                    <>
                      <AlertCircle size={14} className="text-destructive" />
                      <span className="text-destructive">{getFieldError("message")}</span>
                    </>
                  )}
                </div>
                <span>{form.values.message.length}/1000</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 active:scale-[0.97] transition-all duration-200 glow disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <>
                  <span className="inline-block animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
