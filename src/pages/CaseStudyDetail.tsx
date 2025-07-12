
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
      approach: "Our design approach focused on progressive disclosure and contextual guidance. We conducted extensive user research with families to understand their mental models around network security and identified key pain points in existing solutions.",
      researchInsights: [
        "73% of users don't understand technical security terminology",
        "Most families want 'set it and forget it' solutions",
        "Visual indicators are more effective than text-based alerts",
        "Parents need granular control over children's device access"
      ],
      designProcess: "We started with user journey mapping to identify critical touchpoints, then moved into rapid prototyping and user testing. The design system was built around clear visual hierarchy and intuitive iconography.",
      solution: "We designed an intuitive mobile app that serves as the central hub for network monitoring and control. The interface uses clear visual indicators and plain language to communicate security status, making complex technical information accessible to all family members.",
      keyFeatures: [
        "One-tap device blocking and unblocking",
        "Visual network map showing all connected devices",
        "Smart notifications that explain threats in plain language",
        "Parental controls with scheduling capabilities"
      ],
      results: [
        "40% reduction in setup time compared to competitors",
        "92% user satisfaction rating in post-launch surveys",
        "35% increase in feature adoption after UI redesign",
        "67% decrease in customer support tickets"
      ],
      metrics: {
        setupTime: "3 minutes",
        userSatisfaction: "92%",
        featureAdoption: "+35%",
        supportTickets: "-67%"
      },
      testimonials: [
        {
          quote: "Finally, a security solution that doesn't make me feel like I need a computer science degree.",
          author: "Sarah M., Parent"
        },
        {
          quote: "The visual interface makes it so easy to see what's happening on our network.",
          author: "Mike T., Small Business Owner"
        }
      ],
      nextSteps: "Based on user feedback, we're exploring AI-powered threat detection and expanding parental control features for the next version.",
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600"
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
      approach: "We employed a human-centered design methodology, conducting ethnographic research in clinical settings and interviewing patients across different age groups and technical abilities.",
      researchInsights: [
        "80% of patients prefer visual appointment scheduling",
        "Medical staff need quick access to patient history",
        "Elderly patients struggle with multi-step processes",
        "Real-time communication reduces anxiety for patients"
      ],
      designProcess: "Through iterative design workshops with medical professionals, we created workflows that mirror existing clinical processes while introducing digital efficiencies.",
      solution: "We created a modular design system with clear information hierarchy and progressive disclosure. Key features were surfaced prominently while advanced functionality remained accessible but not overwhelming.",
      keyFeatures: [
        "Simplified appointment booking with visual calendar",
        "Patient dashboard with health metrics tracking",
        "Secure messaging between patients and providers",
        "Mobile-first design for accessibility"
      ],
      results: [
        "60% reduction in task completion time",
        "85% of users successfully completed complex workflows",
        "50% decrease in support tickets after launch",
        "95% patient satisfaction score"
      ],
      metrics: {
        taskTime: "-60%",
        workflowSuccess: "85%",
        supportTickets: "-50%",
        satisfaction: "95%"
      },
      testimonials: [
        {
          quote: "This platform has transformed how we interact with our patients. Everything is so much more efficient.",
          author: "Dr. Jennifer L., Family Medicine"
        },
        {
          quote: "I can finally manage my health information without feeling overwhelmed.",
          author: "Robert K., Patient, Age 68"
        }
      ],
      nextSteps: "Future iterations will include AI-powered health insights and integration with wearable devices for continuous monitoring.",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=600"
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
      approach: "We used behavioral economics principles to design interfaces that encourage positive financial habits while providing clear, actionable insights through data visualization.",
      researchInsights: [
        "Users check financial apps most frequently on mobile",
        "Visual progress indicators motivate saving behavior",
        "Categorized spending helps users identify patterns",
        "Predictive insights reduce financial anxiety"
      ],
      designProcess: "Working closely with financial advisors and behavioral economists, we designed interfaces that translate complex financial concepts into intuitive visual language.",
      solution: "We implemented a layered information architecture with smart defaults and customizable views. Data visualizations were designed to tell a story, not just display numbers.",
      keyFeatures: [
        "Intelligent expense categorization",
        "Goal tracking with visual progress indicators",
        "Investment portfolio optimization suggestions",
        "Predictive cash flow analysis"
      ],
      results: [
        "45% increase in daily active users",
        "70% improvement in goal completion rates",
        "25% reduction in customer support inquiries",
        "83% of users report better financial awareness"
      ],
      metrics: {
        dailyUsers: "+45%",
        goalCompletion: "+70%",
        supportTickets: "-25%",
        awareness: "83%"
      },
      testimonials: [
        {
          quote: "I finally understand where my money goes each month. The visual breakdowns are incredibly helpful.",
          author: "Lisa R., Freelance Designer"
        },
        {
          quote: "The goal tracking feature has helped me save more in six months than I did all last year.",
          author: "James P., Software Engineer"
        }
      ],
      nextSteps: "Next phase includes AI-powered financial coaching and integration with cryptocurrency tracking for modern investors.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=800",
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=600"
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
          <div className="mb-20">
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
              className="w-full h-64 md:h-96 object-cover rounded-lg"
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudy.challenge}
            </p>
            
            {/* Challenge Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={caseStudy.images[1]} 
                alt={`${caseStudy.title} - Challenge`}
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </section>

          {/* Research & Approach */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Research & Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudy.approach}
            </p>
            
            {/* Research Insights */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-foreground mb-4">Key Research Insights</h3>
              <div className="space-y-3">
                {caseStudy.researchInsights.map((insight, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <img 
                src={caseStudy.images[2]} 
                alt={`${caseStudy.title} - Process 1`}
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src={caseStudy.images[3]} 
                alt={`${caseStudy.title} - Process 2`}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </section>

          {/* Design Process */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Design Process</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.designProcess}
            </p>
          </section>

          {/* Solution */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudy.solution}
            </p>

            {/* Key Features */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="text-lg font-medium text-foreground mb-4">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results & Impact */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Results & Impact</h2>
            
            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Object.entries(caseStudy.metrics).map(([key, value], index) => (
                <div key={index} className="text-center p-6 bg-muted/20 rounded-lg">
                  <div className="text-2xl font-medium text-primary mb-2">{value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Results */}
            <div className="space-y-4">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">What People Say</h2>
            <div className="space-y-6">
              {caseStudy.testimonials.map((testimonial, index) => (
                <blockquote key={index} className="border-l-4 border-primary pl-6 py-4">
                  <p className="text-lg text-muted-foreground italic mb-3">
                    "{testimonial.quote}"
                  </p>
                  <cite className="text-sm text-muted-foreground/80 not-italic">
                    — {testimonial.author}
                  </cite>
                </blockquote>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-20">
            <h2 className="text-2xl font-medium text-foreground mb-6">Next Steps</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.nextSteps}
            </p>
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
