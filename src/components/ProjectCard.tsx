
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
    <article className="group block p-6 -mx-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
      <Link 
        to={`/project/${id}`}
        className="flex flex-col md:flex-row gap-6 items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
        aria-labelledby={`project-title-${id}`}
      >
        <div className="w-full md:w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-lightGray dark:bg-gray-800">
          <img 
            src={thumbnail} 
            alt={`Thumbnail for ${title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <span 
                key={category} 
                className="text-xs font-medium uppercase tracking-wider text-dark/80 dark:text-gray-300"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h3 
            id={`project-title-${id}`}
            className="text-xl font-medium text-balance group-hover:text-primary transition-colors dark:text-white"
          >
            {title}
          </h3>
          
          <p className="text-dark/80 text-balance dark:text-gray-300">
            {description}
          </p>
          
          <div className="pt-2 flex items-center text-primary font-medium">
            <span>View project</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
