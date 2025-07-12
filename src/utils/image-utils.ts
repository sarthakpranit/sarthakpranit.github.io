// Image optimization utilities

export interface ImageSizes {
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface ResponsiveImageConfig {
  sizes: ImageSizes;
  defaultSize?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
}

/**
 * Generate responsive image srcSet
 */
export const generateSrcSet = (
  baseSrc: string, 
  sizes: number[] = [400, 800, 1200, 1600],
  placeholder?: string
): string | undefined => {
  // Skip srcSet generation for placeholder or external URLs
  if (baseSrc === placeholder || baseSrc.startsWith('http')) {
    return undefined;
  }
  
  return sizes
    .map(size => `${baseSrc}?w=${size} ${size}w`)
    .join(', ');
};

/**
 * Generate responsive sizes attribute
 */
export const generateSizes = (breakpoints: Record<string, string> = {}): string => {
  const defaultBreakpoints = {
    '(max-width: 640px)': '100vw',
    '(max-width: 768px)': '100vw',
    '(max-width: 1024px)': '50vw',
    '(max-width: 1280px)': '33vw',
    '(min-width: 1281px)': '25vw'
  };

  const finalBreakpoints = { ...defaultBreakpoints, ...breakpoints };
  
  return Object.entries(finalBreakpoints)
    .map(([query, size]) => `${query} ${size}`)
    .join(', ');
};

/**
 * Generate optimized image URL with parameters
 */
export const generateOptimizedImageUrl = (
  baseSrc: string,
  config: Partial<ResponsiveImageConfig> = {}
): string => {
  const { defaultSize = 800, quality = 80, format = 'webp' } = config;
  
  if (baseSrc.startsWith('http') || baseSrc === '/placeholder.svg') {
    return baseSrc;
  }

  const url = new URL(baseSrc, window.location.origin);
  url.searchParams.set('w', defaultSize.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('f', format);
  
  return url.toString();
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Get image dimensions from URL or element
 */
export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Calculate aspect ratio from dimensions
 */
export const calculateAspectRatio = (width: number, height: number): number => {
  return width / height;
};

/**
 * Get common aspect ratio class
 */
export const getAspectRatioClass = (width: number, height: number): string => {
  const ratio = calculateAspectRatio(width, height);
  
  if (Math.abs(ratio - 1) < 0.1) return 'aspect-square';
  if (Math.abs(ratio - 16/9) < 0.1) return 'aspect-video';
  if (Math.abs(ratio - 4/3) < 0.1) return 'aspect-[4/3]';
  if (Math.abs(ratio - 3/2) < 0.1) return 'aspect-[3/2]';
  
  return '';
};

/**
 * Generate placeholder data URL
 */
export const generatePlaceholder = (width: number, height: number, color = '#f3f4f6'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
};

/**
 * Check if image is in viewport
 */
export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce function for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}; 