import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, Target, Lightbulb, Zap, TrendingUp, Quote } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";
import { OptimizedImage } from "../components/ui/optimized-image";
import { MDXRenderer } from "../components/MDXRenderer";
import { TableOfContents } from "../components/TableOfContents";
import { useTheme } from "@/hooks/use-theme";
import { loadCaseStudyById, loadAllCaseStudies } from "@/utils/contentLoader";
import { PasswordGate } from '@/components/ui/password-gate';
import { getPassword, getSessionKey, isPasswordProtectionEnabled } from '@/config/passwords';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mdxContent, setMdxContent] = useState<string>('');
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

      // Load raw MDX content for TOC
      if (loadedCaseStudy.content) {
        try {
          const modules = import.meta.glob('/src/content/case-studies/*.mdx', {
            eager: true,
            query: '?raw',
            import: 'default',
          });
          const mdxPath = `/src/content/case-studies/${loadedCaseStudy.content}.mdx`;
          const rawContent = modules[mdxPath] as string | undefined;
          if (rawContent) {
            setMdxContent(rawContent);
          }
        } catch (err) {
          console.error('Error loading MDX for TOC:', err);
        }
      }
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
            to="/"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { frontmatter, sections } = caseStudy;
  const caseStudyId = parseInt(id!);

  // Extracted content for easier wrapping
  const CaseStudyContent = () => (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle variant="default" />

      {/* Hero Section - Full width with gradient */}
      <div className="bg-gradient-to-b from-background via-slate-50/50 to-background dark:from-background dark:via-slate-900/30 dark:to-background py-24 md:py-32 mb-20">
        <div className="max-w-3xl mx-auto px-6 xl:max-w-7xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Back Navigation */}
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              {frontmatter.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 leading-relaxed text-muted-foreground">
              {frontmatter.subtitle}
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap gap-8 text-muted-foreground">
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-muted-foreground/70 mb-1">Role</span>
                <span className="text-xl text-foreground">{frontmatter.roles[0]}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-muted-foreground/70 mb-1">Timeline</span>
                <span className="text-xl text-foreground">{frontmatter.year}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm uppercase tracking-wider text-muted-foreground/70 mb-1">Company</span>
                <span className="text-xl text-foreground">{frontmatter.client}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with sidebar */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl mx-auto xl:mx-0">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>

              {/* Check if we have MDX content or simple sections */}
              {caseStudy.content && caseStudy.content !== "" ? (
                // Render MDX content
                <section className="mb-16">
                  <MDXRenderer mdxFileName={caseStudy.content} />
                </section>
              ) : (
            // Fallback to simple sections rendering
            <>
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
            </>
          )}

              {/* Navigation */}
              <section className="pt-16 mt-32 border-t border-border">
                <div className="flex justify-between items-center">
                  <Link
                    to="/"
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          {mdxContent && (
            <aside className="hidden xl:block flex-shrink-0">
              <TableOfContents content={mdxContent} />
            </aside>
          )}
        </div>
      </div>
    </div>
  );

  // Password protection logic
  if (!isPasswordProtectionEnabled()) {
    return <CaseStudyContent />;
  }

  return (
    <PasswordGate
      password={getPassword(caseStudyId)}
      sessionKey={getSessionKey(caseStudyId)}
      title="This Case Study is Password Protected for sensitive reasons"
      subtitle={`Please enter the password to view \"${frontmatter.title}\".`}
    >
      <CaseStudyContent />
    </PasswordGate>
  );
};

export default CaseStudyDetail;
