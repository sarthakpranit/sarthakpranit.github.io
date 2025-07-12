import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Users, Target, Lightbulb, Zap, TrendingUp, Quote } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const caseStudyData = {
    id: 1,
    title: "CUJO Smart Firewall",
    subtitle: "Redesigning home network security for the modern family",
    heroImage: "/placeholder.svg",
    introduction:
      "CUJO provides the power of enterprise security solutions for simple and elegant devices. I helped CUJO shape their brand and user experience.",
    problem:
      "The challenge was to simplify complex network security concepts for everyday users, making it accessible and manageable through an intuitive interface.",
    solution:
      "We designed a user-friendly mobile app and web dashboard that provides real-time threat detection, parental controls, and device management, all while maintaining a seamless user experience.",
    approach: [
      {
        icon: Users,
        title: "User-Centric Design",
        description:
          "Focused on understanding user needs and behaviors through research and testing to create a product that resonates with their daily lives.",
      },
      {
        icon: Target,
        title: "Clear Objectives",
        description:
          "Defined clear goals for the product, ensuring that every feature and design element contributed to the overall user experience and security objectives.",
      },
      {
        icon: Lightbulb,
        title: "Innovative Solutions",
        description:
          "Developed creative solutions to complex security challenges, making advanced technology accessible and easy to use for the average consumer.",
      },
    ],
    results: [
      {
        icon: Zap,
        title: "Enhanced Security",
        description:
          "CUJO users experienced a significant reduction in network threats and vulnerabilities, providing peace of mind for families and businesses.",
      },
      {
        icon: TrendingUp,
        title: "Increased User Engagement",
        description:
          "The intuitive design led to higher user engagement and satisfaction, with more users actively managing their network security.",
      },
      {
        icon: Quote,
        title: "Positive Feedback",
        description:
          "Users praised the simplicity and effectiveness of CUJO, highlighting its ability to protect their digital lives without requiring technical expertise.",
      },
    ],
    conclusion:
      "The CUJO project demonstrated the power of user-centric design in transforming complex technology into an accessible and valuable tool for everyday users. By focusing on simplicity and ease of use, we helped CUJO establish itself as a leader in home network security.",
    year: "2024",
    client: "CUJO AI",
    roles: ["Product Design", "User Research", "Prototyping"],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
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
              {caseStudyData.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudyData.subtitle}
            </p>
            <div className="mt-8">
              {caseStudyData.roles.map((role, index) => (
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
          <img
            src={caseStudyData.heroImage}
            alt={caseStudyData.title}
            className="w-full rounded-lg shadow-md mb-16"
          />

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudyData.introduction}
            </p>
          </section>

          {/* Problem */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Problem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudyData.problem}
            </p>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Solution
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudyData.solution}
            </p>
          </section>

          {/* Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-8">
              Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudyData.approach.map((item, index) => (
                <div key={index} className="space-y-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-8">
              Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudyData.results.map((item, index) => (
                <div key={index} className="space-y-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Image Gallery */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium text-foreground mb-8">
              Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudyData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${caseStudyData.title} - ${index + 1}`}
                  className="w-full rounded-lg shadow-md"
                />
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-24">
            <h2 className="text-2xl font-medium text-foreground mb-4">
              Conclusion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudyData.conclusion}
            </p>
          </section>

          {/* Footer Navigation */}
          <div className="flex justify-between items-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
            <Link
              to="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              Next Project
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
