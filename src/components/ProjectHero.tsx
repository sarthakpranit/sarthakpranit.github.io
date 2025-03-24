
import { cn } from '@/lib/utils';

interface ProjectHeroProps {
  title: string;
  description: string;
  date: string;
  client?: string;
  role?: string;
  categories: string[];
  heroImage: string;
}

const ProjectHero = ({
  title,
  description,
  date,
  client,
  role,
  categories,
  heroImage
}: ProjectHeroProps) => {
  return (
    <section className="pt-32 pb-16 animate-fade-in">
      <div className="container-tight">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="text-xs font-medium uppercase tracking-wider text-dark/70"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-balance">{title}</h1>
            </div>
            <p className="text-xl text-dark/80 leading-relaxed text-balance">
              {description}
            </p>
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-wider text-dark/70 mb-2">Date</h3>
              <p className="text-dark">{date}</p>
            </div>
            
            {client && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-dark/70 mb-2">Client</h3>
                <p className="text-dark">{client}</p>
              </div>
            )}
            
            {role && (
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-dark/70 mb-2">Role</h3>
                <p className="text-dark">{role}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <div className="w-full aspect-[16/9] bg-lightGray overflow-hidden">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
