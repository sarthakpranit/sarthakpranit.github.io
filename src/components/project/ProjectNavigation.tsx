
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
        <nav aria-label="Project navigation" className="flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('prev')}
            aria-label={prevProject ? `Previous project: ${prevProject.title}` : "Previous project"}
            disabled={!prevProject}
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
              to="/" 
              className="flex items-center text-dark hover:text-primary dark:text-gray-300"
              aria-label="View all projects"
            >
              <span>All Projects</span>
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('next')}
            aria-label={nextProject ? `Next project: ${nextProject.title}` : "Next project"}
            disabled={!nextProject}
            className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
          >
            <div className="flex items-center text-dark hover:text-primary dark:text-gray-300">
              <span>Next</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
          </Button>
        </nav>
      </div>
    </section>
  );
};

export default ProjectNavigation;
