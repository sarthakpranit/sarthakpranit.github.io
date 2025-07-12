import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
  variant?: 'default' | 'minimal' | 'dropdown';
}

export const ThemeToggle = ({ 
  className, 
  showLabels = false,
  variant = 'default' 
}: ThemeToggleProps) => {
  const { theme, setTheme, isDark, toggleTheme, isSystemTheme } = useTheme();

  if (variant === 'dropdown') {
    return (
      <div className={cn("relative", className)}>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
          className="appearance-none bg-muted border border-border rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <Monitor className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "p-2 rounded-full bg-muted hover:bg-accent transition-colors",
          className
        )}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        {isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button>
    );
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <button
        onClick={() => setTheme('light')}
        className={cn(
          "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
          theme === 'light' 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted hover:bg-accent"
        )}
        aria-label="Switch to light mode"
      >
        <Sun className="h-4 w-4" />
        {showLabels && <span className="text-sm">Light</span>}
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={cn(
          "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
          theme === 'dark' 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted hover:bg-accent"
        )}
        aria-label="Switch to dark mode"
      >
        <Moon className="h-4 w-4" />
        {showLabels && <span className="text-sm">Dark</span>}
      </button>

      <button
        onClick={() => setTheme('system')}
        className={cn(
          "flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors",
          theme === 'system' 
            ? "bg-primary text-primary-foreground" 
            : "bg-muted hover:bg-accent"
        )}
        aria-label="Use system theme"
      >
        <Monitor className="h-4 w-4" />
        {showLabels && <span className="text-sm">System</span>}
      </button>
    </div>
  );
}; 