
// Global theme configuration for the smart shopping cart app
export const theme = {
  // Spacing system (in rem units for consistency)
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },

  // Color palette using HSL values (matches our design system)
  colors: {
    primary: {
      50: 'hsl(222, 47%, 96%)',
      100: 'hsl(222, 47%, 90%)',
      500: 'hsl(222, 47%, 55%)',
      600: 'hsl(222, 47%, 45%)',
      700: 'hsl(222, 47%, 35%)',
      900: 'hsl(222, 47%, 11%)',
    },
    secondary: {
      50: 'hsl(210, 40%, 98%)',
      100: 'hsl(210, 40%, 96%)',
      500: 'hsl(210, 40%, 70%)',
      600: 'hsl(210, 40%, 60%)',
    },
    accent: {
      50: 'hsl(262, 83%, 96%)',
      500: 'hsl(262, 83%, 58%)',
      600: 'hsl(262, 83%, 48%)',
    },
    success: {
      50: 'hsl(142, 76%, 96%)',
      500: 'hsl(142, 76%, 45%)',
      600: 'hsl(142, 76%, 35%)',
    },
    warning: {
      50: 'hsl(48, 96%, 96%)',
      500: 'hsl(48, 96%, 55%)',
      600: 'hsl(48, 96%, 45%)',
    },
    error: {
      50: 'hsl(0, 84%, 96%)',
      500: 'hsl(0, 84%, 60%)',
      600: 'hsl(0, 84%, 50%)',
    },
    neutral: {
      50: 'hsl(210, 40%, 98%)',
      100: 'hsl(210, 40%, 96%)',
      200: 'hsl(214, 32%, 91%)',
      300: 'hsl(213, 27%, 84%)',
      400: 'hsl(215, 20%, 65%)',
      500: 'hsl(215, 16%, 47%)',
      600: 'hsl(215, 19%, 35%)',
      700: 'hsl(215, 25%, 27%)',
      800: 'hsl(217, 33%, 17%)',
      900: 'hsl(222, 84%, 5%)',
    },
  },

  // Typography system
  fontSizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    md: '1rem',      // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
  },

  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Line heights
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },

  // Border radius
  borderRadius: {
    sm: '0.25rem',  // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem',   // 8px
    xl: '0.75rem',  // 12px
    '2xl': '1rem',  // 16px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
};

// Breakpoints for responsive design
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeSpacing = typeof theme.spacing;
export type ThemeFontSizes = typeof theme.fontSizes;
