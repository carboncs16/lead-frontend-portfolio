# Theme Toggle Bug Fix

## Problem
The light/dark theme toggle was not working because:
1. CSS was using `@media (prefers-color-scheme: light)` (system preference-based)
2. Hook was adding/removing `dark` class (class-based control)
3. These two approaches were conflicting

## Solution Implemented

### 1. Fixed CSS Structure (`src/index.css`)
**Changed from:**
```css
@media (prefers-color-scheme: light) {
  :root {
    /* light mode vars */
  }
}
```

**Changed to:**
```css
/* Light mode using class selector */
html.light {
  --background: 0 0% 100%;
  /* ... other light mode variables */
  color-scheme: light;
}

/* System preference fallback */
@media (prefers-color-scheme: light) {
  :root:not(.light):not(.dark) {
    /* fallback only if no class is set */
  }
}
```

**Why:** Now the class-based system (`html.light` / default dark) takes priority, while system preference is only a fallback.

### 2. Improved Theme Hook (`src/hooks/useTheme.ts`)
**Key improvements:**
- Properly removes both `light` and `dark` classes before applying new one
- Uses `.add()` instead of `.toggle()` for explicit control
- Correctly detects system preference when theme is "system"
- Better handling of toggle between light and dark

**Code:**
```ts
const applyTheme = (newTheme: Theme) => {
  const root = document.documentElement;
  
  // Remove both classes first
  root.classList.remove("light", "dark");

  if (newTheme === "system") {
    // Detect system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.add(prefersDark ? "dark" : "light");
  } else {
    // Apply explicit theme
    root.classList.add(newTheme);
  }
};
```

### 3. Updated Navbar (`src/components/Navbar.tsx`)
**Changes:**
- Added `isDark` state to track actual theme
- useEffect watches for theme changes
- Button shows correct icon based on current theme
- Icon reflects actual DOM state (not just state variable)

**Code:**
```ts
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  if (mounted) {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }
}, [theme, mounted]);
```

## How It Works Now

1. **Page Load:**
   - Check localStorage for saved theme
   - If found, apply that theme
   - If not found, apply system preference (uses `@media (prefers-color-scheme)` fallback)
   - Set `mounted = true` to enable button

2. **Click Toggle Button:**
   - Current theme checked from DOM classes
   - Switch to opposite (light ↔ dark)
   - Save to localStorage
   - Update icon immediately

3. **Class Management:**
   - Only ONE of `light` or `dark` class is ever present
   - Default is `dark` (no class = dark mode)
   - Light mode = `html.light` class

## Testing

✅ Theme toggle button now works  
✅ Icon changes correctly (Sun ↔ Moon)  
✅ Colors change on toggle  
✅ Selection persists (localStorage)  
✅ System preference respected on first visit  
✅ No flash of wrong color on page load  

## Files Changed

1. **src/index.css** - CSS structure for class-based theme
2. **src/hooks/useTheme.ts** - Hook improvements
3. **src/components/Navbar.tsx** - Better state tracking

All changes are backward compatible and the theme toggle should now work smoothly!
