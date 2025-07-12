import { useState, useCallback, useRef, useEffect } from 'react';

interface UseOptimizedImageOptions {
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

interface UseOptimizedImageReturn {
  isLoaded: boolean;
  hasError: boolean;
  isIntersecting: boolean;
  imageRef: (node: HTMLImageElement | null) => void;
  handleLoad: () => void;
  handleError: () => void;
}

export const useOptimizedImage = ({
  priority = false,
  placeholder = '/placeholder.svg',
  onLoad,
  onError
}: UseOptimizedImageOptions = {}): UseOptimizedImageReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const imageRef = useCallback((node: HTMLImageElement | null) => {
    if (node && !priority) {
      // Disconnect previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      // Create new observer
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: '50px', // Start loading 50px before the image comes into view
          threshold: 0.1
        }
      );

      observerRef.current.observe(node);
    }
  }, [priority]);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    isLoaded,
    hasError,
    isIntersecting,
    imageRef,
    handleLoad,
    handleError
  };
}; 