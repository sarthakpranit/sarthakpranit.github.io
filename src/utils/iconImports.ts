// Icon import optimization utilities
// This file demonstrates different approaches to importing lucide-react icons

// Approach 1: Regular imports (current approach)
// Good for frequently used icons
export { Sun, Moon, ExternalLink, ArrowLeft } from "lucide-react";

// Approach 2: Dynamic imports for less frequently used icons
// This creates separate chunks for each icon, reducing initial bundle size
export const IconExternalLink = () => import("lucide-react").then(module => ({ default: module.ExternalLink }));
export const IconArrowLeft = () => import("lucide-react").then(module => ({ default: module.ArrowLeft }));

// Approach 3: Lazy loading with React.lazy
// Good for icons that are conditionally rendered
import { lazy } from "react";
export const LazyUsers = lazy(() => import("lucide-react").then(module => ({ default: module.Users })));
export const LazyTarget = lazy(() => import("lucide-react").then(module => ({ default: module.Target })));
export const LazyLightbulb = lazy(() => import("lucide-react").then(module => ({ default: module.Lightbulb })));
export const LazyZap = lazy(() => import("lucide-react").then(module => ({ default: module.Zap })));
export const LazyTrendingUp = lazy(() => import("lucide-react").then(module => ({ default: module.TrendingUp })));
export const LazyQuote = lazy(() => import("lucide-react").then(module => ({ default: module.Quote })));

// Approach 4: Icon registry for better tree-shaking
// This approach allows bundlers to better optimize which icons are included
export const iconRegistry = {
  sun: () => import("lucide-react").then(module => ({ default: module.Sun })),
  moon: () => import("lucide-react").then(module => ({ default: module.Moon })),
  externalLink: () => import("lucide-react").then(module => ({ default: module.ExternalLink })),
  arrowLeft: () => import("lucide-react").then(module => ({ default: module.ArrowLeft })),
  arrowRight: () => import("lucide-react").then(module => ({ default: module.ArrowRight })),
  users: () => import("lucide-react").then(module => ({ default: module.Users })),
  target: () => import("lucide-react").then(module => ({ default: module.Target })),
  lightbulb: () => import("lucide-react").then(module => ({ default: module.Lightbulb })),
  zap: () => import("lucide-react").then(module => ({ default: module.Zap })),
  trendingUp: () => import("lucide-react").then(module => ({ default: module.TrendingUp })),
  quote: () => import("lucide-react").then(module => ({ default: module.Quote })),
} as const;

// Usage example:
// const IconComponent = await iconRegistry.sun();
// return <IconComponent.default className="h-4 w-4" />; 