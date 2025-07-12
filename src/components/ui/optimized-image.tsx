import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { useOptimizedImage } from '@/hooks/use-optimized-image';
import { generateSrcSet, generateSizes } from '@/utils/image-utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  aspectRatio?: 'square' | 'video' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(({ 
  src, 
  alt, 
  width, 
  height, 
  className, 
  priority = false,
  placeholder = '/placeholder.svg',
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  aspectRatio = 'auto',
  objectFit = 'cover',
  loading,
  onLoad,
  onError,
  ...props
}, ref) => {
  const { isLoaded, hasError, isIntersecting, imageRef, handleLoad, handleError } = useOptimizedImage({
    priority,
    placeholder,
    onLoad,
    onError
  });

  // Generate responsive image sources for better performance
  const srcSet = generateSrcSet(src, [400, 800, 1200, 1600], placeholder);

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    auto: ''
  };

  // Object fit classes
  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        aspectRatioClasses[aspectRatio],
        className
      )}
      style={{ width, height }}
    >
      {/* Placeholder/loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-muted-foreground/60 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm">Image failed to load</p>
          </div>
        </div>
      )}
      
      <img
        ref={(node) => {
          // Handle both refs
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          imageRef(node);
        }}
        src={hasError ? placeholder : (isIntersecting ? src : '')}
        alt={alt}
        width={width}
        height={height}
        srcSet={hasError ? undefined : srcSet}
        sizes={sizes}
        loading={loading || (priority ? "eager" : "lazy")}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          "transition-all duration-300",
          objectFitClasses[objectFit],
          isLoaded ? "opacity-100" : "opacity-0",
          "w-full h-full"
        )}
        {...props}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage'; 