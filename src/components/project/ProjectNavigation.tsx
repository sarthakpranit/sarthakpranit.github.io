
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectInfo = {
  id: string;
  title: string;
};

type ProjectNavigationProps = {
  prevProject: ProjectInfo | null;
  nextProject: ProjectInfo | null;
  onNavigate: (direction: 'next' | 'prev') => void;
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ 
  prevProject, 
  nextProject, 
  onNavigate 
}) => {
  return (
    <section className="pt-20">
      <div className="container-tight">
        <div className="flex justify-between items-center">
          <Button variant="ghost" onClick={() => onNavigate('prev')}>
            <div className="flex items-center text-dark hover:text-primary">
              <ArrowLeft size={16} className="mr-2" />
              <span>{prevProject?.title || 'Previous Project'}</span>
            </div>
          </Button>
          
          <Button variant="ghost" asChild>
            <Link to="/" className="flex items-center text-dark hover:text-primary">
              <span>All Projects</span>
            </Link>
          </Button>
          
          <Button variant="ghost" onClick={() => onNavigate('next')}>
            <div className="flex items-center text-dark hover:text-primary">
              <span>{nextProject?.title || 'Next Project'}</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation;
