import { useState, useEffect } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PasswordGateProps {
  children: React.ReactNode;
  password?: string;
  sessionKey?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const PasswordGate = ({
  children,
  password = import.meta.env.VITE_CASE_STUDY_PASSWORD || 'design2024',
  sessionKey = 'case-study-access',
  title = 'Protected Content',
  subtitle = 'Please enter the password to view this case study.',
  className
}: PasswordGateProps) => {
  const [inputPassword, setInputPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem(sessionKey);
    if (savedAuth === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, [sessionKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    await new Promise(resolve => setTimeout(resolve, 300));

    if (inputPassword === password) {
      setIsAuthenticated(true);
      localStorage.setItem(sessionKey, 'authenticated');
      setInputPassword('');
    } else {
      setError('Incorrect password. Please try again.');
      setInputPassword('');
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
    if (error) setError('');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const resetAuth = () => {
    setIsAuthenticated(false);
    localStorage.removeItem(sessionKey);
    setInputPassword('');
    setError('');
  };

  if (isAuthenticated) {
    return (
      <div className="relative">
        {children}
        {import.meta.env.MODE === 'development' && (
          <button
            onClick={resetAuth}
            className="fixed bottom-4 right-4 p-2 bg-muted rounded-full text-xs opacity-50 hover:opacity-100 transition-opacity"
            title="Reset authentication (dev only)"
          >
            <Lock className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={cn(
      "min-h-screen bg-background text-foreground flex items-center justify-center px-4",
      className
    )}>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-medium text-foreground mb-2">
            {title}
          </h1>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={inputPassword}
                onChange={handleInputChange}
                placeholder="Enter password"
                className={cn(
                  "pr-12",
                  error && "border-destructive focus-visible:ring-destructive"
                )}
                disabled={isLoading}
                autoFocus
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {error && (
              <p className="text-sm text-destructive mt-1">
                {error}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!inputPassword.trim() || isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                <span>Verifying...</span>
              </div>
            ) : (
              'Access Case Study'
            )}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            This content is password protected to maintain client confidentiality.
          </p>
        </div>
      </div>
    </div>
  );
}; 