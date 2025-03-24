
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface PostHeaderProps {
  title: string;
  date: string;
  categories: string[];
  author?: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ 
  title, 
  date, 
  categories, 
  author 
}) => {
  return (
    <>
      {/* Back to Blog */}
      <div className="mb-12">
        <Button variant="ghost" asChild className="pl-0">
          <Link to="/blog" className="flex items-center text-dark dark:text-gray-200 hover:text-primary">
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Blog</span>
          </Link>
        </Button>
      </div>

      {/* Post Header */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="text-sm text-dark/70 dark:text-gray-400">
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-dark/30 dark:bg-gray-500"></span>
          {categories.map((category: string) => (
            <span 
              key={category} 
              className="text-sm text-dark/70 dark:text-gray-400"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-balance dark:text-white">{title}</h1>
        
        {author && (
          <div className="flex items-center space-x-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-lightGray dark:bg-gray-700 overflow-hidden">
              {/* Author avatar would go here */}
            </div>
            <span className="text-dark font-medium dark:text-white">{author}</span>
          </div>
        )}
      </div>
    </>
  );
};

export default PostHeader;
