
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  categories: string[];
  featured?: boolean;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  thumbnail, 
  categories, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Link 
      to={`/project/${id}`}
      className="group block p-6 -mx-6 rounded-lg"
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-lightGray">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <span 
                key={category} 
                className="text-xs font-medium uppercase tracking-wider text-dark/70"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl font-medium text-balance group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-dark/80 text-balance">
            {description}
          </p>
          
          <div className="pt-2 flex items-center text-primary font-medium">
            <span>View project</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
