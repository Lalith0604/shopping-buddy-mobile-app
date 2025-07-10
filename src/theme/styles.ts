
import { theme } from './theme';

// Common layout styles using Tailwind classes
export const layouts = {
  // Container styles
  container: 'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  containerFluid: 'w-full px-4 sm:px-6 lg:px-8',
  
  // Centering utilities
  centered: 'flex items-center justify-center',
  centeredColumn: 'flex flex-col items-center justify-center',
  
  // Screen layouts
  screenContainer: 'min-h-screen bg-background',
  screenContent: 'flex-1 overflow-auto',
  
  // Card layouts
  card: 'bg-card rounded-lg border border-border shadow-sm',
  cardPadded: 'bg-card rounded-lg border border-border shadow-sm p-6',
  
  // Mobile-first responsive grid
  gridResponsive: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4',
  
  // Safe area handling for mobile
  safeAreaTop: 'pt-safe-area-inset-top',
  safeAreaBottom: 'pb-safe-area-inset-bottom',
};

// Button styles
export const buttons = {
  // Base button style
  base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  
  // Size variants
  sizes: {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
    icon: 'h-10 w-10',
    iconSm: 'h-8 w-8',
    iconLg: 'h-12 w-12',
  },
  
  // Color variants
  variants: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
};

// Input styles
export const inputs = {
  base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  textarea: 'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  label: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
};

// Typography styles
export const typography = {
  // Headings
  h1: 'text-4xl font-bold tracking-tight lg:text-5xl',
  h2: 'text-3xl font-semibold tracking-tight',
  h3: 'text-2xl font-semibold tracking-tight',
  h4: 'text-xl font-semibold tracking-tight',
  h5: 'text-lg font-semibold',
  h6: 'text-base font-semibold',
  
  // Body text
  body: 'text-base leading-relaxed',
  bodyLarge: 'text-lg leading-relaxed',
  bodySmall: 'text-sm leading-normal',
  
  // Special text styles
  lead: 'text-xl text-muted-foreground leading-relaxed',
  muted: 'text-sm text-muted-foreground',
  caption: 'text-xs text-muted-foreground uppercase tracking-wide',
};

// Navigation styles
export const navigation = {
  // Tab navigation
  tabBar: 'bg-background border-t border-border px-4 py-2 safe-area-bottom',
  tabContainer: 'flex justify-around items-center max-w-md mx-auto',
  tabButton: 'flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors',
  tabButtonActive: 'text-primary bg-primary/10',
  tabButtonInactive: 'text-muted-foreground hover:text-foreground',
  tabIcon: 'w-6 h-6',
  tabLabel: 'text-xs font-medium',
  
  // Header styles
  header: 'h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
  headerContent: 'h-full flex items-center justify-between px-4',
  headerTitle: 'text-lg font-semibold',
};

// Status and feedback styles
export const feedback = {
  // Loading states
  skeleton: 'animate-pulse bg-muted rounded',
  spinner: 'animate-spin rounded-full border-2 border-muted border-t-primary',
  
  // Status indicators
  badge: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
  badgeSuccess: 'bg-success/10 text-success',
  badgeWarning: 'bg-warning/10 text-warning',
  badgeError: 'bg-destructive/10 text-destructive',
  badgeInfo: 'bg-primary/10 text-primary',
  
  // Alert styles
  alert: 'relative w-full rounded-lg border p-4',
  alertSuccess: 'border-success/20 bg-success/10 text-success-foreground',
  alertWarning: 'border-warning/20 bg-warning/10 text-warning-foreground',
  alertError: 'border-destructive/20 bg-destructive/10 text-destructive-foreground',
  alertInfo: 'border-primary/20 bg-primary/10 text-primary-foreground',
};

// Animation classes
export const animations = {
  fadeIn: 'animate-in fade-in-0 duration-200',
  fadeOut: 'animate-out fade-out-0 duration-200',
  slideUp: 'animate-in slide-in-from-bottom-2 duration-300',
  slideDown: 'animate-in slide-in-from-top-2 duration-300',
  scaleIn: 'animate-in zoom-in-95 duration-200',
  scaleOut: 'animate-out zoom-out-95 duration-200',
};

// Utility functions for dynamic styling
export const createButtonClass = (variant: keyof typeof buttons.variants = 'primary', size: keyof typeof buttons.sizes = 'md') => {
  return `${buttons.base} ${buttons.variants[variant]} ${buttons.sizes[size]}`;
};

export const createCardClass = (padded: boolean = true) => {
  return padded ? layouts.cardPadded : layouts.card;
};
