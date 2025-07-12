import React, { useState, useEffect, Suspense, ComponentType } from "react";
import { iconRegistry, LazyUsers, LazyTarget } from "../utils/iconImports";

// Example component showing different icon import approaches
const IconExample = () => {
  const [dynamicIcon, setDynamicIcon] = useState<ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Example of using dynamic imports
  const loadDynamicIcon = async () => {
    setIsLoading(true);
    try {
      const iconModule = await iconRegistry.users();
      setDynamicIcon(iconModule.default);
    } catch (error) {
      console.error('Failed to load icon:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load a dynamic icon on component mount
    loadDynamicIcon();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Icon Import Optimization Examples</h2>
      
      {/* Approach 1: Regular imports (already optimized) */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">1. Regular Imports (Recommended for frequently used icons)</h3>
        <p className="text-sm text-muted-foreground">
          These are imported directly and bundled with the main chunk. 
          Best for icons used on every page or in critical UI elements.
        </p>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Sun/Moon icons (from ThemeToggle):</span>
          <span className="text-xs bg-muted px-2 py-1 rounded">Bundled in main chunk</span>
        </div>
      </div>

      {/* Approach 2: Dynamic imports */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">2. Dynamic Imports (For less frequently used icons)</h3>
        <p className="text-sm text-muted-foreground">
          These create separate chunks and are loaded on-demand. 
          Good for icons used in specific pages or features.
        </p>
        <div className="flex items-center space-x-4">
          <button 
            onClick={loadDynamicIcon}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load Dynamic Icon'}
          </button>
          {dynamicIcon && (
            <div className="flex items-center space-x-2">
              {React.createElement(dynamicIcon, { className: "h-5 w-5" })}
              <span className="text-sm">Dynamically loaded</span>
            </div>
          )}
        </div>
      </div>

      {/* Approach 3: Lazy loading with Suspense */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">3. Lazy Loading with Suspense (For conditional rendering)</h3>
        <p className="text-sm text-muted-foreground">
          These are wrapped in React.lazy and require Suspense boundaries.
          Good for icons that are conditionally rendered.
        </p>
        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-5 w-5 bg-muted animate-pulse rounded" />}>
            <LazyUsers className="h-5 w-5" />
          </Suspense>
          <Suspense fallback={<div className="h-5 w-5 bg-muted animate-pulse rounded" />}>
            <LazyTarget className="h-5 w-5" />
          </Suspense>
          <span className="text-sm">Lazy loaded with Suspense</span>
        </div>
      </div>

      {/* Bundle size comparison */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Bundle Size Impact</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Regular Imports</h4>
            <p className="text-muted-foreground">Icons bundled in main chunk</p>
            <p className="text-xs mt-2">✅ Faster initial load for critical icons</p>
            <p className="text-xs">❌ Larger initial bundle</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Dynamic Imports</h4>
            <p className="text-muted-foreground">Icons in separate chunks</p>
            <p className="text-xs mt-2">✅ Smaller initial bundle</p>
            <p className="text-xs">❌ Additional network requests</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Lazy Loading</h4>
            <p className="text-muted-foreground">Icons loaded on demand</p>
            <p className="text-xs mt-2">✅ Optimal for conditional rendering</p>
            <p className="text-xs">❌ Requires Suspense boundaries</p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Recommendations</h3>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>• Use regular imports for icons used on every page (Sun, Moon, ArrowLeft, etc.)</li>
          <li>• Use dynamic imports for page-specific icons (Users, Target, etc.)</li>
          <li>• Use lazy loading for conditionally rendered icons</li>
          <li>• Consider creating an icon registry for better organization</li>
        </ul>
      </div>
    </div>
  );
};

export default IconExample; 