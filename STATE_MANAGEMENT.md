# State Management Implementation Guide

This guide covers the comprehensive state management system implemented in your portfolio project, including theme management, application state, and various UI state handling.

## Overview

The state management system consists of several components:

1. **Theme Management** - Handles light/dark/system theme preferences
2. **App State Management** - Manages application-wide state and UI interactions
3. **Combined Providers** - Wraps both systems for easy integration
4. **Enhanced Components** - Updated components that use the new state system

## Components

### 1. Theme Management (`src/hooks/use-theme.tsx`)

A comprehensive theme management system with:
- Light, dark, and system theme support
- localStorage persistence
- System theme detection and sync
- Smooth transitions
- Accessibility support

#### Features

- **Three Theme Modes**: `light`, `dark`, `system`
- **System Detection**: Automatically detects and syncs with OS theme
- **Persistence**: Saves preferences to localStorage
- **Smooth Transitions**: CSS transitions for theme changes
- **Accessibility**: Respects `prefers-reduced-motion`

#### Usage

```tsx
import { useTheme } from '@/hooks/use-theme';

const MyComponent = () => {
  const { theme, setTheme, isDark, toggleTheme, isSystemTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Is dark mode: {isDark ? 'Yes' : 'No'}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};
```

#### Provider Setup

```tsx
import { ThemeProvider } from '@/hooks/use-theme';

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="theme">
    <YourApp />
  </ThemeProvider>
);
```

### 2. App State Management (`src/hooks/use-app-state.tsx`)

A centralized state management system using React's useReducer for:
- Loading states
- Navigation state
- UI interactions (sidebar, modals)
- Viewport tracking
- Scroll position
- User preferences
- Error handling

#### State Structure

```tsx
interface AppState {
  // Navigation
  currentPage: string;
  isNavigating: boolean;
  
  // Loading
  isLoading: boolean;
  loadingMessage: string;
  
  // UI
  sidebarOpen: boolean;
  modalOpen: boolean;
  modalType: string | null;
  
  // Preferences
  animationsEnabled: boolean;
  reducedMotion: boolean;
  
  // Viewport
  scrollY: number;
  isScrolled: boolean;
  viewport: {
    width: number;
    height: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  };
  
  // Error
  error: string | null;
}
```

#### Usage

```tsx
import { useAppState } from '@/hooks/use-app-state';

const MyComponent = () => {
  const { 
    state, 
    setLoading, 
    setSidebarOpen, 
    setModalOpen, 
    setError,
    resetState 
  } = useAppState();

  const handleAsyncOperation = async () => {
    setLoading(true, 'Loading data...');
    try {
      // Async operation
      await fetchData();
    } catch (error) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>Loading: {state.isLoading ? 'Yes' : 'No'}</p>
      <p>Current page: {state.currentPage}</p>
      <p>Viewport: {state.viewport.width}x{state.viewport.height}</p>
      <button onClick={() => setSidebarOpen(!state.sidebarOpen)}>
        Toggle Sidebar
      </button>
    </div>
  );
};
```

### 3. Combined Providers (`src/providers/app-providers.tsx`)

A wrapper component that combines both theme and app state providers.

#### Usage

```tsx
import { AppProviders } from '@/providers/app-providers';

const App = () => (
  <AppProviders defaultTheme="system" themeStorageKey="theme">
    <YourApp />
  </AppProviders>
);
```

### 4. Enhanced Theme Toggle (`src/components/ui/theme-toggle.tsx`)

An enhanced theme toggle component with multiple variants.

#### Variants

- **minimal**: Simple toggle button
- **default**: Full theme selector with light/dark/system options
- **dropdown**: Dropdown select for theme selection

#### Usage

```tsx
import { ThemeToggle } from '@/components/ui/theme-toggle';

// Minimal variant (just toggle)
<ThemeToggle variant="minimal" />

// Default variant (full selector)
<ThemeToggle variant="default" showLabels={true} />

// Dropdown variant
<ThemeToggle variant="dropdown" />
```

## Implementation in Your Project

### Updated Files

1. **App.tsx** - Wrapped with AppProviders
2. **ThemeToggle.tsx** - Updated to use new theme hook
3. **CaseStudies.tsx** - Updated to use new theme hook
4. **CaseStudyDetail.tsx** - Updated to use new theme hook
5. **StateManagementExample.tsx** - Demonstrates all features

### Integration Examples

#### Before (Local State)

```tsx
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
}, []);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}, [isDark]);
```

#### After (Centralized State)

```tsx
import { useTheme } from '@/hooks/use-theme';

const { isDark } = useTheme();
// That's it! All the logic is handled by the hook
```

## Advanced Features

### 1. System Theme Detection

The theme system automatically detects and syncs with the operating system's theme preference:

```tsx
// Automatically updates when system theme changes
const { isSystemTheme } = useTheme();

if (isSystemTheme) {
  // Theme will automatically follow system preference
}
```

### 2. Viewport Tracking

The app state automatically tracks viewport changes and provides device detection:

```tsx
const { state } = useAppState();

// Responsive design helpers
if (state.viewport.isMobile) {
  // Mobile-specific logic
} else if (state.viewport.isTablet) {
  // Tablet-specific logic
} else {
  // Desktop-specific logic
}
```

### 3. Scroll Position Monitoring

Track scroll position for animations and UI updates:

```tsx
const { state } = useAppState();

// Show/hide elements based on scroll
const headerClass = state.isScrolled ? 'bg-background/80 backdrop-blur' : 'bg-transparent';
```

### 4. Loading State Management

Centralized loading state for better UX:

```tsx
const { setLoading } = useAppState();

const handleDataFetch = async () => {
  setLoading(true, 'Loading your data...');
  try {
    await fetchData();
  } finally {
    setLoading(false);
  }
};
```

### 5. Error Handling

Global error state management:

```tsx
const { setError } = useAppState();

const handleError = (error: Error) => {
  setError(error.message);
  // Error will automatically clear after 3 seconds
};
```

## Performance Optimizations

### 1. Selective Re-renders

The state system uses React's useReducer and useCallback to minimize unnecessary re-renders:

```tsx
// Only components that use specific state will re-render
const { state } = useAppState();
const { isDark } = useTheme();
```

### 2. Debounced Updates

Viewport and scroll updates are debounced to prevent excessive re-renders:

```tsx
// Scroll and resize events are optimized
useEffect(() => {
  const handleScroll = debounce(() => {
    dispatch({ type: 'SET_SCROLL_Y', payload: window.scrollY });
  }, 16); // ~60fps

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 3. localStorage Optimization

State persistence is optimized to only save necessary data:

```tsx
// Only critical state is persisted
useEffect(() => {
  const persistState = {
    animationsEnabled: state.animationsEnabled,
    currentPage: state.currentPage,
  };
  localStorage.setItem('app-state', JSON.stringify(persistState));
}, [state.animationsEnabled, state.currentPage]);
```

## Best Practices

### 1. Theme Usage

```tsx
// ✅ Good: Use the hook directly
const { isDark, setTheme } = useTheme();

// ❌ Bad: Don't manage theme state locally
const [isDark, setIsDark] = useState(false);
```

### 2. App State Usage

```tsx
// ✅ Good: Use convenience methods
const { setLoading, setError } = useAppState();

// ❌ Bad: Don't dispatch actions directly
const { dispatch } = useAppState();
dispatch({ type: 'SET_LOADING', payload: { isLoading: true } });
```

### 3. Provider Setup

```tsx
// ✅ Good: Use combined providers
<AppProviders>
  <YourApp />
</AppProviders>

// ❌ Bad: Don't nest providers manually
<ThemeProvider>
  <AppProvider>
    <YourApp />
  </AppProvider>
</ThemeProvider>
```

## Migration Guide

### From Local Theme State

1. **Remove local state**:
   ```tsx
   // Remove these
   const [isDark, setIsDark] = useState(false);
   const toggleTheme = () => setIsDark(!isDark);
   ```

2. **Use the hook**:
   ```tsx
   // Add this
   const { isDark, toggleTheme } = useTheme();
   ```

3. **Update components**:
   ```tsx
   // Before
   <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
   
   // After
   <ThemeToggle variant="default" />
   ```

### From Local App State

1. **Identify state to centralize**:
   - Loading states
   - UI interactions
   - Navigation state
   - Error handling

2. **Replace with app state**:
   ```tsx
   // Before
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   
   // After
   const { setLoading, setError } = useAppState();
   ```

## Troubleshooting

### Common Issues

1. **Theme not persisting**: Check localStorage permissions
2. **State not updating**: Ensure component is within provider
3. **Performance issues**: Check for unnecessary re-renders
4. **TypeScript errors**: Verify import paths and types

### Debug Mode

```tsx
// Enable debug logging
const { theme, isDark } = useTheme();
const { state } = useAppState();

console.log('Theme:', theme, 'Is Dark:', isDark);
console.log('App State:', state);
```

## Future Enhancements

1. **State persistence** - More granular localStorage control
2. **State synchronization** - Cross-tab state sync
3. **State analytics** - Track state changes for insights
4. **State validation** - Runtime state validation
5. **State middleware** - Custom state transformations

## Resources

- [React Context API](https://react.dev/reference/react/createContext)
- [React useReducer](https://react.dev/reference/react/useReducer)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) 