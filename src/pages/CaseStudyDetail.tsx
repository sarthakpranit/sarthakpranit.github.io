import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, Target, Lightbulb, Zap, TrendingUp, Quote } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { OptimizedImage } from "../components/ui/optimized-image";
import { useTheme } from "@/hooks/use-theme";
import { loadCaseStudyById, loadAllCaseStudies } from "@/utils/contentLoader";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    setIsVisible(true);
    
    if (!id) {
      setError('No case study ID provided');
      setIsLoading(false);
      return;
    }

    try {
      const studyId = parseInt(id);
      const loadedCaseStudy = loadCaseStudyById(studyId);
      
      if (!loadedCaseStudy) {
        setError('Case study not found');
        setIsLoading(false);
        return;
      }

      setCaseStudy(loadedCaseStudy);
    } catch (error) {
      console.error('Error loading case study:', error);
      setError('Failed to load case study');
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-6">{error || 'The requested case study could not be found.'}</p>
          <Link 
            to="/case-studies"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const { frontmatter, sections } = caseStudy;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle variant="default" />
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Back Navigation */}
          <Link
            to="/case-studies"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-16"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-6 leading-tight">
              {frontmatter.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {frontmatter.subtitle}
            </p>
            <div className="mt-8">
              {frontmatter.roles.map((role: string, index: number) => (
                <span
                  key={index}
                  className="inline-block bg-muted rounded-full px-3 py-1 text-sm font-semibold text-muted-foreground mr-2 mb-2"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>

          {/* Hero Image */}
          <OptimizedImage
            src={frontmatter.heroImage}
            alt={frontmatter.title}
            className="w-full rounded-lg shadow-md mb-16"
            priority={true}
            aspectRatio="video"
            objectFit="cover"
          />

          {/* Introduction */}
          {sections.introduction && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Introduction
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {sections.introduction}
              </p>
            </section>
          )}

          {/* Problem */}
          {sections.problem && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Problem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {sections.problem}
              </p>
            </section>
          )}

          {/* Solution */}
          {sections.solution && (
            <section className="mb-16">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {sections.solution}
              </p>
            </section>
          )}

          {/* Conclusion */}
          {sections.conclusion && (
            <section className="mb-24">
              <h2 className="text-2xl font-medium text-foreground mb-4">
                Conclusion
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {sections.conclusion}
              </p>
            </section>
          )}

          {/* Project Details */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-8">
              Project Details
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                  Client
                </h3>
                <p className="text-foreground">{frontmatter.client}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                  Year
                </h3>
                <p className="text-foreground">{frontmatter.year}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
                  Role
                </h3>
                <div className="space-y-1">
                  {frontmatter.roles.map((role: string, roleIndex: number) => (
                    <p key={roleIndex} className="text-foreground">{role}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="pt-16 border-t border-border">
            <div className="flex justify-between items-center">
              <Link
                to="/case-studies"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
