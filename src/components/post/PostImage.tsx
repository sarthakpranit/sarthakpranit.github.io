
import React from 'react';

interface PostImageProps {
  src: string;
  alt: string;
}

const PostImage: React.FC<PostImageProps> = ({ src, alt }) => {
  return (
    <div className="mb-12 w-full aspect-[16/9] rounded-lg overflow-hidden bg-lightGray dark:bg-gray-800">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default PostImage;
