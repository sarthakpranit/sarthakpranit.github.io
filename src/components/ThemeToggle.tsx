
import { Moon, Sun } from "../utils/iconImports";
import { useTheme } from "@/hooks/use-theme";

interface ThemeToggleProps {
  className?: string;
  variant?: 'minimal' | 'default';
}

const ThemeToggle = ({ className, variant = 'minimal' }: ThemeToggleProps) => {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'default') {
    return (
      <div className={`fixed top-6 right-6 z-10 ${className || ''}`}>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full bg-muted hover:bg-accent transition-colors ${className || ''}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
