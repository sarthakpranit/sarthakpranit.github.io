
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Projects", path: "/" },
    { name: "Experience", path: "/timeline" },
    { name: "Articles", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12",
        isScrolled
          ? "bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-lg font-semibold tracking-tight animate-hover dark:text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/66670f6f-be04-44ee-9d6e-bfb17e8e3691.png" 
              alt="Sarthak Pranit" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          Sarthak Pranit
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium hover-link",
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-dark dark:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-lightGray dark:hover:bg-dark/30 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-lightGray dark:hover:bg-dark/30 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-dark" />
            )}
          </button>
          
          <button
            className="text-dark dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="animate-fade-in" />
            ) : (
              <Menu size={24} className="animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-dark pt-24 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-xl font-medium animate-fade-up",
                  location.pathname === link.path
                    ? "text-primary font-medium"
                    : "text-dark dark:text-white"
                )}
                style={{ animationDelay: `${navLinks.indexOf(link) * 0.1}s` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Close Button - Bottom Right */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed bottom-8 right-8 p-3 bg-lightGray dark:bg-gray-800 rounded-full shadow-lg text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors z-50"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
