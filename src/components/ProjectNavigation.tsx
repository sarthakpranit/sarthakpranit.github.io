import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

type ProjectNavigationProps = {
  currentProjectId: string;
  projects: Array<{
    id: string;
    title: string;
    thumbnail?: string;
  }>;
};

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({ 
  currentProjectId,
  projects
}) => {
  const otherProjects = projects.filter(p => p.id !== currentProjectId);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="pt-20 pb-32">
      <div className="container-tight">
        <Separator className="mb-12" />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Other Projects</h2>
          <p className="text-muted-foreground">Explore more of my work</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="flex-[0_0_300px]">
                  <Link 
                    to={`/project/${project.id}`} 
                    className="block group"
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">No image</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-left group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectNavigation; 