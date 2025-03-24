
import React from 'react';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';

const BlogHeader: React.FC = () => {
  return (
    <div className="mb-16 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">Articles & Case Studies</h1>
      <p className="text-xl text-dark/80 dark:text-gray-300 max-w-2xl">
        Deep dives into my work on AI-driven personalization, recommendation systems, 
        and creating impactful digital experiences at scale.
      </p>
    </div>
  );
};

export default BlogHeader;
