
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
    <article className="group block p-6 -mx-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-colors">
      <Link 
        to={`/post/${id}`}
        className="flex flex-col md:flex-row gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
        aria-labelledby={`blog-title-${id}`}
      >
        {thumbnail && (
          <div className="w-full md:w-28 h-28 flex-shrink-0 overflow-hidden rounded-lg bg-lightGray dark:bg-gray-800">
            <img 
              src={thumbnail} 
              alt={`Thumbnail for article: ${title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        
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
          
          <time 
            dateTime={new Date(date).toISOString()} 
            className="text-sm text-dark/80 dark:text-gray-300 block"
          >
            {date}
          </time>
          
          <h3 
            id={`blog-title-${id}`}
            className="text-xl font-medium text-balance group-hover:text-primary transition-colors dark:text-white"
          >
            {title}
          </h3>
          
          <p className="text-dark/80 text-balance dark:text-gray-300">
            {excerpt}
          </p>
          
          <div className="pt-2 flex items-center text-primary font-medium">
            <span>Read more</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
