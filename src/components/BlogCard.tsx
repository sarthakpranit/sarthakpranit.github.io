
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail?: string;
  categories: string[];
}

const BlogCard = ({ 
  id, 
  title, 
  excerpt, 
  date,
  thumbnail,
  categories
}: BlogCardProps) => {
  return (
    <Link 
      to={`/post/${id}`}
      className="group block p-6 -mx-6 rounded-lg"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {thumbnail && (
          <div className="w-full md:w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-lightGray dark:bg-gray-800">
            <img 
              src={thumbnail} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <span 
                key={category} 
                className="text-xs font-medium uppercase tracking-wider text-dark/70 dark:text-gray-300"
              >
                {category}
              </span>
            ))}
          </div>
          
          <div className="text-sm text-dark/70 dark:text-gray-400">
            {date}
          </div>
          
          <h3 className="text-xl font-medium text-balance group-hover:text-primary transition-colors dark:text-white">
            {title}
          </h3>
          
          <p className="text-dark/80 text-balance dark:text-gray-300">
            {excerpt}
          </p>
          
          <div className="pt-2 flex items-center text-primary font-medium">
            <span>Read more</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
