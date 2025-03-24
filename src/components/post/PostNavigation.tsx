
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type PostInfo = {
  id: string;
  title: string;
};

type PostNavigationProps = {
  prevPost: PostInfo | null;
  nextPost: PostInfo | null;
  onNavigate: (direction: 'next' | 'prev') => void;
};

const PostNavigation: React.FC<PostNavigationProps> = ({ 
  prevPost, 
  nextPost, 
  onNavigate 
}) => {
  return (
    <nav className="mt-16" aria-label="Post navigation">
      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('prev')}
          aria-label={prevPost ? `Previous post: ${prevPost.title}` : "Previous post"}
          disabled={!prevPost}
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <div className="flex items-center text-dark hover:text-primary dark:text-gray-300">
            <ArrowLeft size={16} className="mr-2" />
            <span>Previous</span>
          </div>
        </Button>
        
        <Button 
          variant="ghost" 
          asChild
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <Link 
            to="/blog" 
            className="flex items-center text-dark hover:text-primary dark:text-gray-300"
            aria-label="View all articles"
          >
            <span>All Articles</span>
          </Link>
        </Button>
        
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('next')}
          aria-label={nextPost ? `Next post: ${nextPost.title}` : "Next post"}
          disabled={!nextPost}
          className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
        >
          <div className="flex items-center text-dark hover:text-primary dark:text-gray-300">
            <span>Next</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </Button>
      </div>
    </nav>
  );
};

export default PostNavigation;
