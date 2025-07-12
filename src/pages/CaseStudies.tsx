import { useState, useEffect } from "react";
import { ArrowLeft } from "../utils/iconImports";
import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { OptimizedImage } from "../components/ui/optimized-image";
import { useTheme } from "@/hooks/use-theme";
import { loadCaseStudyMetadata } from "@/utils/contentLoader";

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
    // Load case studies
    try {
      console.log('Loading case study metadata...');
      const studies = loadCaseStudyMetadata();
      console.log('Loaded studies:', studies);
      setCaseStudies(studies);
    } catch (error) {
      console.error('Error loading case studies:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle variant="default" />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Back Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-20">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A collection of projects where design meets strategy. Each case study 
              represents a unique challenge and the thoughtful solutions we crafted together.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="group">
                {/* Project Image */}
                <Link to={study.link} className="block mb-8 overflow-hidden rounded-lg bg-muted">
                  <OptimizedImage 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-64 md:h-80 transition-transform duration-500 group-hover:scale-105"
                    aspectRatio="video"
                    objectFit="cover"
                    priority={index === 0} // Prioritize first image
                  />
                </Link>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-12">
                  {/* Main Content */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <Link to={study.link}>
                        <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                          {study.title}
                        </h2>
                      </Link>
                      <p className="text-lg text-muted-foreground mb-4">
                        {study.subtitle}
                      </p>
                    </div>

                    <Link 
                      to={study.link}
                      className="inline-flex items-center text-foreground hover:text-primary transition-colors group/link"
                    >
                      View Case Study
                      <ArrowLeft className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                        Client
                      </h3>
                      <p className="text-foreground">{study.client}</p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                        Year
                      </h3>
                      <p className="text-foreground">{study.year}</p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                        Role
                      </h3>
                      <div className="space-y-1">
                        {study.roles.map((role, roleIndex) => (
                          <p key={roleIndex} className="text-foreground">{role}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-32 pt-16 border-t border-border">
            <div className="text-center">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Interested in working together?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss your next project and how we can bring your vision to life.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
