
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
    <header>
      {/* Back to Blog */}
      <div className="mb-12">
        <Button 
          variant="ghost" 
          asChild 
          className="pl-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <Link 
            to="/blog" 
            className="flex items-center text-dark dark:text-gray-200 hover:text-primary"
            aria-label="Back to all articles"
          >
            <ArrowLeft size={16} className="mr-2" aria-hidden="true" />
            <span>Back to Blog</span>
          </Link>
        </Button>
      </div>

      {/* Post Header */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-wrap gap-3 items-center">
          <time 
            dateTime={new Date(date).toISOString()} 
            className="text-sm text-dark/80 dark:text-gray-300"
          >
            {date}
          </time>
          <span className="w-1 h-1 rounded-full bg-dark/50 dark:bg-gray-400" aria-hidden="true"></span>
          {categories.map((category: string, index: number) => (
            <React.Fragment key={category}>
              <span className="text-sm text-dark/80 dark:text-gray-300">
                {category}
              </span>
              {index < categories.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-dark/50 dark:bg-gray-400" aria-hidden="true"></span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-balance dark:text-white">
          {title}
        </h1>
        
        {author && (
          <div className="flex items-center space-x-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-lightGray dark:bg-gray-700 overflow-hidden" aria-hidden="true">
              {/* Author avatar would go here */}
            </div>
            <span className="text-dark font-medium dark:text-white">
              {author}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
