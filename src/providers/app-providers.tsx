import { ReactNode } from 'react';
import { ThemeProvider } from '@/hooks/use-theme';
import { AppProvider } from '@/hooks/use-app-state';

interface AppProvidersProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark' | 'system';
  themeStorageKey?: string;
}

export const AppProviders = ({ 
  children, 
  defaultTheme = 'system',
  themeStorageKey = 'theme'
}: AppProvidersProps) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme} storageKey={themeStorageKey}>
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  );
}; 