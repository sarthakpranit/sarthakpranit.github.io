
import React from 'react';

interface PostImageProps {
  src: string;
  alt: string;
}

const PostImage: React.FC<PostImageProps> = ({ src, alt }) => {
  // Enhance alt text to be more descriptive
  const enhancedAlt = `Featured image for article: ${alt}`;
  
  return (
    <figure className="mb-12 w-full aspect-[16/9] rounded-lg overflow-hidden bg-lightGray dark:bg-gray-800">
      <img 
        src={src} 
        alt={enhancedAlt} 
        className="w-full h-full object-cover"
        loading="lazy" // Add lazy loading for performance
      />
    </figure>
  );
};

export default PostImage;
