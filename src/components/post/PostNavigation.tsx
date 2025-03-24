
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
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={() => onNavigate('prev')}>
          <div className="flex items-center text-dark hover:text-primary">
            <ArrowLeft size={16} className="mr-2" />
            <span>Previous</span>
          </div>
        </Button>
        
        <Button variant="ghost" asChild>
          <Link to="/blog" className="flex items-center text-dark hover:text-primary">
            <span>All Articles</span>
          </Link>
        </Button>
        
        <Button variant="ghost" onClick={() => onNavigate('next')}>
          <div className="flex items-center text-dark hover:text-primary">
            <span>Next</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default PostNavigation;
