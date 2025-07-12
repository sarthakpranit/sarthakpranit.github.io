
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import HeroSection from "../components/HeroSection";
import ExperienceSection from "../components/ExperienceSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import AboutSection from "../components/AboutSection";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle variant="default" />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <HeroSection />
          <ExperienceSection />
          <CaseStudiesSection />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
