import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
  toggleTheme: () => void;
  isSystemTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export const ThemeProvider = ({ 
  children, 
  defaultTheme = 'system',
  storageKey = 'theme'
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check for stored theme preference
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as Theme;
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  });

  const [isDark, setIsDark] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(theme === 'system');

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    setIsSystemTheme(newTheme === 'system');
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, newTheme);
    }
  }, [storageKey]);

  const toggleTheme = useCallback(() => {
    if (theme === 'system') {
      // If system theme, switch to explicit light/dark based on current state
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme === 'dark' ? 'light' : 'dark');
    } else {
      // Toggle between light and dark
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const updateTheme = () => {
      const root = window.document.documentElement;
      
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setIsDark(systemTheme === 'dark');
        root.classList.toggle('dark', systemTheme === 'dark');
      } else {
        setIsDark(theme === 'dark');
        root.classList.toggle('dark', theme === 'dark');
      }
    };

    updateTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme]);

  // Prevent flash of unstyled content
  useEffect(() => {
    const root = window.document.documentElement;
    root.style.colorScheme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      isDark, 
      toggleTheme,
      isSystemTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}; 