import { useState } from 'react';
import { OptimizedImage } from './ui/optimized-image';
import { generateOptimizedImageUrl, preloadImage } from '../utils/image-utils';

const ImageOptimizationExample = () => {
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  const handlePreloadImage = async (src: string) => {
    try {
      await preloadImage(src);
      setPreloadedImages(prev => [...prev, src]);
    } catch (error) {
      console.error('Failed to preload image:', error);
    }
  };

  const sampleImages = [
    {
      src: '/placeholder.svg',
      alt: 'Sample Image 1',
      description: 'Priority image (above the fold)'
    },
    {
      src: '/placeholder.svg',
      alt: 'Sample Image 2',
      description: 'Lazy loaded image with video aspect ratio'
    },
    {
      src: '/placeholder.svg',
      alt: 'Sample Image 3',
      description: 'Square aspect ratio with cover object fit'
    },
    {
      src: '/placeholder.svg',
      alt: 'Sample Image 4',
      description: 'Custom sizes and responsive loading'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Image Optimization Examples</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          This component demonstrates various image optimization techniques including lazy loading, 
          responsive images, aspect ratios, and performance optimizations.
        </p>
      </div>

      {/* Optimization Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Lazy Loading</h3>
          <p className="text-sm text-muted-foreground">
            Images load only when they enter the viewport, reducing initial page load time.
          </p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Responsive Images</h3>
          <p className="text-sm text-muted-foreground">
            Automatically serves the right image size based on device and screen size.
          </p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Aspect Ratios</h3>
          <p className="text-sm text-muted-foreground">
            Prevents layout shift with predefined aspect ratios (square, video, auto).
          </p>
        </div>
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Error Handling</h3>
          <p className="text-sm text-muted-foreground">
            Graceful fallbacks and loading states for better user experience.
          </p>
        </div>
      </div>

      {/* Image Examples */}
      <div className="space-y-12">
        {sampleImages.map((image, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{image.description}</h3>
              <button
                onClick={() => handlePreloadImage(image.src)}
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90"
                disabled={preloadedImages.includes(image.src)}
              >
                {preloadedImages.includes(image.src) ? 'Preloaded' : 'Preload'}
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full rounded-lg shadow-md"
                  priority={index === 0}
                  aspectRatio={index === 1 ? 'video' : index === 2 ? 'square' : 'auto'}
                  objectFit="cover"
                  sizes={index === 3 ? "(max-width: 768px) 100vw, 50vw" : undefined}
                  onLoad={() => console.log(`Image ${index + 1} loaded`)}
                  onError={() => console.error(`Image ${index + 1} failed to load`)}
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Configuration:</h4>
                  <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`{
  priority: ${index === 0},
  aspectRatio: "${index === 1 ? 'video' : index === 2 ? 'square' : 'auto'}",
  objectFit: "cover",
  sizes: "${index === 3 ? '(max-width: 768px) 100vw, 50vw' : 'default'}"
}`}
                  </pre>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {index === 0 ? 'Priority loading (eager)' : 'Lazy loading'}</li>
                    <li>• Responsive srcSet generation</li>
                    <li>• Loading and error states</li>
                    <li>• Intersection Observer optimization</li>
                    <li>• Smooth opacity transitions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Tips */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Performance Optimization Tips</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">When to use priority:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Hero images above the fold</li>
              <li>• Critical UI elements</li>
              <li>• First few images in a gallery</li>
              <li>• Images visible on initial page load</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Aspect ratio benefits:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Prevents Cumulative Layout Shift (CLS)</li>
              <li>• Improves Core Web Vitals</li>
              <li>• Better user experience</li>
              <li>• Consistent layout across devices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
        <pre className="text-sm overflow-x-auto">
{`import { OptimizedImage } from './components/ui/optimized-image';

// Basic usage
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full rounded-lg"
/>

// Advanced usage with all features
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full rounded-lg shadow-md"
  priority={true}
  aspectRatio="video"
  objectFit="cover"
  sizes="(max-width: 768px) 100vw, 50vw"
  onLoad={() => console.log('Image loaded')}
  onError={() => console.error('Image failed')}
/>`}
        </pre>
      </div>
    </div>
  );
};

export default ImageOptimizationExample; 