import { useState } from 'react';
import { useTheme } from '@/hooks/use-theme';
import { useAppState } from '@/hooks/use-app-state';
import { ThemeToggle } from './ui/theme-toggle';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const StateManagementExample = () => {
  const { theme, setTheme, isDark, toggleTheme, isSystemTheme } = useTheme();
  const { state, setLoading, setSidebarOpen, setModalOpen, setError, resetState } = useAppState();
  const [demoLoading, setDemoLoading] = useState(false);

  const handleDemoLoading = async () => {
    setLoading(true, 'Loading demo content...');
    setDemoLoading(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setDemoLoading(false);
  };

  const handleDemoError = () => {
    setError('This is a demo error message');
    setTimeout(() => setError(null), 3000);
  };

  const handleDemoModal = () => {
    setModalOpen(true, 'demo-modal');
    setTimeout(() => setModalOpen(false), 3000);
  };

  return (
    <div className="p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">State Management Examples</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This component demonstrates the comprehensive state management system including theme management, 
          app state, and various UI interactions.
        </p>
      </div>

      {/* Theme Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Theme Management
            <Badge variant={isDark ? 'default' : 'secondary'}>
              {isDark ? 'Dark' : 'Light'}
            </Badge>
          </CardTitle>
          <CardDescription>
            Manage theme preferences with system detection and persistence
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Current Theme</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Theme:</span>
                  <Badge variant="outline">{theme}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Is Dark:</span>
                  <Badge variant={isDark ? 'default' : 'secondary'}>
                    {isDark ? 'Yes' : 'No'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>System Theme:</span>
                  <Badge variant={isSystemTheme ? 'default' : 'secondary'}>
                    {isSystemTheme ? 'Yes' : 'No'}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Theme Controls</h4>
              <div className="space-y-2">
                <Button onClick={() => setTheme('light')} variant="outline" size="sm">
                  Set Light
                </Button>
                <Button onClick={() => setTheme('dark')} variant="outline" size="sm">
                  Set Dark
                </Button>
                <Button onClick={() => setTheme('system')} variant="outline" size="sm">
                  Set System
                </Button>
                <Button onClick={toggleTheme} variant="outline" size="sm">
                  Toggle Theme
                </Button>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-2">Theme Toggle Components</h4>
            <div className="flex items-center gap-4">
              <ThemeToggle variant="minimal" />
              <span className="text-sm text-muted-foreground">Minimal variant</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App State Management */}
      <Card>
        <CardHeader>
          <CardTitle>App State Management</CardTitle>
          <CardDescription>
            Manage application-wide state including loading, navigation, and UI states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current State Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Loading State</h4>
              <div className="space-y-1 text-sm">
                <div>Loading: {state.isLoading ? 'Yes' : 'No'}</div>
                {state.loadingMessage && (
                  <div>Message: {state.loadingMessage}</div>
                )}
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">UI State</h4>
              <div className="space-y-1 text-sm">
                <div>Sidebar: {state.sidebarOpen ? 'Open' : 'Closed'}</div>
                <div>Modal: {state.modalOpen ? 'Open' : 'Closed'}</div>
                {state.modalType && <div>Modal Type: {state.modalType}</div>}
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Viewport</h4>
              <div className="space-y-1 text-sm">
                <div>Width: {state.viewport.width}px</div>
                <div>Height: {state.viewport.height}px</div>
                <div>Device: {
                  state.viewport.isMobile ? 'Mobile' : 
                  state.viewport.isTablet ? 'Tablet' : 'Desktop'
                }</div>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Scroll State</h4>
              <div className="space-y-1 text-sm">
                <div>Scroll Y: {state.scrollY}px</div>
                <div>Is Scrolled: {state.isScrolled ? 'Yes' : 'No'}</div>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Preferences</h4>
              <div className="space-y-1 text-sm">
                <div>Animations: {state.animationsEnabled ? 'Enabled' : 'Disabled'}</div>
                <div>Reduced Motion: {state.reducedMotion ? 'Yes' : 'No'}</div>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Navigation</h4>
              <div className="space-y-1 text-sm">
                <div>Current Page: {state.currentPage}</div>
                <div>Navigating: {state.isNavigating ? 'Yes' : 'No'}</div>
              </div>
            </div>
          </div>

          {/* State Actions */}
          <div>
            <h4 className="font-medium mb-4">State Actions</h4>
            <div className="flex flex-wrap gap-2">
              <Button 
                onClick={handleDemoLoading} 
                disabled={demoLoading}
                variant="outline"
              >
                {demoLoading ? 'Loading...' : 'Demo Loading'}
              </Button>
              
              <Button onClick={handleDemoError} variant="outline">
                Demo Error
              </Button>
              
              <Button 
                onClick={() => setSidebarOpen(!state.sidebarOpen)} 
                variant="outline"
              >
                Toggle Sidebar
              </Button>
              
              <Button onClick={handleDemoModal} variant="outline">
                Demo Modal
              </Button>
              
              <Button onClick={resetState} variant="destructive">
                Reset State
              </Button>
            </div>
          </div>

          {/* Error Display */}
          {state.error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <h4 className="font-medium text-destructive mb-2">Error</h4>
              <p className="text-sm text-destructive">{state.error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Integration Example */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Example</CardTitle>
          <CardDescription>
            How theme and app state work together
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The theme state automatically persists to localStorage and syncs with system preferences. 
              The app state manages UI interactions and provides a centralized way to handle loading, 
              errors, and navigation states.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Theme Features</h4>
                <ul className="text-sm space-y-1">
                  <li>• System theme detection</li>
                  <li>• localStorage persistence</li>
                  <li>• Smooth transitions</li>
                  <li>• Accessibility support</li>
                </ul>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">App State Features</h4>
                <ul className="text-sm space-y-1">
                  <li>• Centralized state management</li>
                  <li>• Viewport tracking</li>
                  <li>• Scroll position monitoring</li>
                  <li>• Error handling</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StateManagementExample; 