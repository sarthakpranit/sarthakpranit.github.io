
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const CaseStudyDetail = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Case study data - in a real app this would come from an API or database
  const caseStudyData = {
    "1": {
      title: "CUJO Smart Firewall",
      subtitle: "Redesigning home network security for the modern family",
      client: "CUJO AI",
      year: "2024",
      roles: ["Product Design", "User Research", "Prototyping"],
      overview: "CUJO provides enterprise-level security solutions packaged in simple, elegant devices for home users. The challenge was to make complex network security accessible to everyday families while maintaining the robust protection they needed.",
      challenge: "Home network security has traditionally been either too complex for average users or too simplified to be effective. CUJO needed a solution that could provide enterprise-grade protection while being as easy to use as plugging in a router.",
      solution: "We designed an intuitive mobile app that serves as the central hub for network monitoring and control. The interface uses clear visual indicators and plain language to communicate security status, making complex technical information accessible to all family members.",
      results: [
        "40% reduction in setup time compared to competitors",
        "92% user satisfaction rating in post-launch surveys",
        "35% increase in feature adoption after UI redesign"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    "2": {
      title: "Healthcare Platform",
      subtitle: "Streamlining patient care through digital innovation",
      client: "MedTech Solutions",
      year: "2023",
      roles: ["UX/UI Design", "Design System", "User Testing"],
      overview: "A comprehensive healthcare platform connecting patients, doctors, and medical staff through intuitive digital interfaces. The focus was on reducing complexity while maintaining clinical accuracy and compliance.",
      challenge: "Healthcare workflows are inherently complex, involving multiple stakeholders with different needs and technical comfort levels. The platform needed to serve everyone from tech-savvy millennials to elderly patients with limited digital experience.",
      solution: "We created a modular design system with clear information hierarchy and progressive disclosure. Key features were surfaced prominently while advanced functionality remained accessible but not overwhelming.",
      results: [
        "60% reduction in task completion time",
        "85% of users successfully completed complex workflows",
        "50% decrease in support tickets after launch"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    },
    "3": {
      title: "Fintech Dashboard",
      subtitle: "Creating intuitive financial management tools",
      client: "FinanceFlow",
      year: "2023",
      roles: ["Product Strategy", "Visual Design", "Data Visualization"],
      overview: "Designed a comprehensive financial dashboard that helps users track expenses, manage investments, and plan for the future. The challenge was making complex financial data accessible and actionable for everyday users.",
      challenge: "Financial data can be overwhelming and intimidating. Users needed to understand their financial health at a glance while having access to detailed information when they wanted to dig deeper.",
      solution: "We implemented a layered information architecture with smart defaults and customizable views. Data visualizations were designed to tell a story, not just display numbers.",
      results: [
        "45% increase in daily active users",
        "70% improvement in goal completion rates",
        "25% reduction in customer support inquiries"
      ],
      images: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg"
      ]
    }
  };

  const caseStudy = caseStudyData[id as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary hover:underline">
            Return to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {caseStudy.subtitle}
            </p>
            
            {/* Project Meta */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">
                  Client
                </h3>
                <p className="text-foreground">{caseStudy.client}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">
                  Year
                </h3>
                <p className="text-foreground">{caseStudy.year}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">
                  Role
                </h3>
                <div className="space-y-1">
                  {caseStudy.roles.map((role, index) => (
                    <p key={index} className="text-foreground">{role}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-20">
            <img 
              src={caseStudy.images[0]} 
              alt={caseStudy.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg bg-muted"
            />
          </div>

          {/* Overview */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.overview}
            </p>
          </section>

          {/* Challenge */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </section>

          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <img 
              src={caseStudy.images[1]} 
              alt={`${caseStudy.title} - Process`}
              className="w-full h-64 object-cover rounded-lg bg-muted"
            />
            <img 
              src={caseStudy.images[2]} 
              alt={`${caseStudy.title} - Details`}
              className="w-full h-64 object-cover rounded-lg bg-muted"
            />
          </div>

          {/* Solution */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.solution}
            </p>
          </section>

          {/* Results */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Results</h2>
            <div className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation to other case studies */}
          <div className="pt-16 border-t border-border">
            <div className="flex justify-between items-center">
              <Link 
                to="/case-studies"
                className="inline-flex items-center text-foreground hover:text-primary transition-colors"
              >
                View All Case Studies
                <ExternalLink className="h-4 w-4 ml-2" />
              </Link>
              
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-2">Next Project</p>
                <Link 
                  to="/case-studies"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  View More Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
