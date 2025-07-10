
import { useState, useEffect } from "react";
import { Moon, Sun, ExternalLink } from "lucide-react";

const Index = () => {
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

  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      subtitle: "Redesigning the shopping experience for a major retailer",
      roles: "Product Design, User Research",
      link: "#"
    },
    {
      title: "Healthcare App Interface",
      subtitle: "Streamlining patient care through digital solutions",
      roles: "UX/UI Design, Prototyping",
      link: "#"
    },
    {
      title: "Fintech Dashboard",
      subtitle: "Creating intuitive financial management tools",
      roles: "Product Strategy, Visual Design",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-10">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Simple dot indicator */}
          <div className="w-3 h-3 bg-foreground rounded-full mb-16"></div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-normal text-foreground mb-12 leading-tight">
            Hi, I'm Your Name.
          </h1>
          
          {/* Description paragraphs */}
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              Some people call me a creative developer. I've been 
              crafting digital experiences for the last few years, 
              combining design and code.
            </p>
            
            <p>
              I live in your city and love building things that 
              matter. Keep up with me on{" "}
              <a href="#" className="text-foreground hover:underline">Instagram</a>{" "}
              or{" "}
              <a href="#" className="text-foreground hover:underline">Twitter</a>.
            </p>
          </div>
          
          {/* Experience section */}
          <div className="space-y-8 mb-20">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Previously
            </h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-foreground font-medium">Company One</h3>
                </div>
                <div className="text-right">
                  <p className="text-foreground">Product Designer</p>
                  <p className="text-sm text-muted-foreground mt-1">2022-2024</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-foreground font-medium">Company Two</h3>
                </div>
                <div className="text-right">
                  <p className="text-foreground">Product Designer</p>
                  <p className="text-sm text-muted-foreground mt-1">2020-2022</p>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl text-foreground font-medium">Company Three</h3>
                </div>
                <div className="text-right">
                  <p className="text-foreground">UX Design Intern</p>
                  <p className="text-sm text-muted-foreground mt-1">2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies section */}
          <div className="space-y-8 mb-20">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              Case Studies
            </h2>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <a
                  key={index}
                  href={study.link}
                  className="block group hover:bg-muted/50 -mx-4 px-4 py-4 rounded-lg transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl text-foreground font-medium mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">{study.subtitle}</p>
                      <p className="text-sm text-muted-foreground">{study.roles}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors ml-4 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* About section */}
          <div className="space-y-8">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
              About
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about creating meaningful digital experiences that solve real problems. 
                When I'm not designing, you can find me exploring new technologies, reading about design 
                philosophy, or enjoying a good cup of coffee.
              </p>
              
              <div className="flex space-x-6">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
