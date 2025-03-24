import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { loadProjects } from "@/lib/content";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await loadProjects();
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/cv/SarthakPranit_CV.pdf'; // Update this path to your actual CV file
    link.download = 'SarthakPranit_CV.pdf'; // The name that will be used when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with center alignment */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative">
        <div className="max-w-4xl text-center animate-fade-in">
          {/* Profile Avatar */}
          <div className="mb-8">
            <Avatar className="h-32 w-32 mx-auto border-4 border-white dark:border-gray-700 shadow-lg">
              <AvatarImage 
                src="/lovable-uploads/66670f6f-be04-44ee-9d6e-bfb17e8e3691.png" 
                alt="Sarthak Pranit" 
                className="object-cover object-center"
              />
              <AvatarFallback className="text-3xl font-bold bg-primary text-primary-foreground">SP</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance font-sans dark:text-white">
            Sarthak Pranit
          </h1>
          <p className="text-2xl font-medium text-primary mb-4">
            Lead Product Designer | AI-Powered Personalization
          </p>
          <p className="text-xl text-dark/80 max-w-2xl mx-auto text-balance font-sans dark:text-gray-300">
            Strategic designer with 8+ years of expertise in recommendation systems and scalable UX platforms. 
            Driving €200M+ in revenue uplift through AI-powered products.
          </p>

          <div className="flex gap-4 mt-6 justify-center">
            <Button 
              className="bg-primary hover:bg-primary-hover text-white"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-dark/20 hover:bg-lightGray dark:border-gray-700 dark:hover:bg-gray-700 dark:text-white"
              onClick={downloadCV}
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
        
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={scrollToProjects}
            className="animate-bounce dark:text-white"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Selected Projects</h2>
            <p className="text-dark/80 dark:text-gray-300">
              A showcase of my work in AI-driven personalization, recommendation systems, and scalable design platforms.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail}
                categories={project.categories}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
