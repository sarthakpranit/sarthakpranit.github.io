
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-lightGray dark:border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">Sarthak Pranit</h3>
            <p className="text-sm text-dark/70 max-w-xs dark:text-gray-400">
              Lead Product Designer specializing in AI-driven personalization, 
              recommendation systems, and scalable UX platforms.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark/70 dark:text-gray-400">Navigation</h4>
            <nav aria-label="Footer navigation" className="flex flex-col space-y-3">
              <Link to="/" className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1">Projects</Link>
              <Link to="/timeline" className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1">Experience</Link>
              <Link to="/blog" className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1">Articles</Link>
              <Link to="/about" className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1">About</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark/70 dark:text-gray-400">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://linkedin.com/in/sarthakpranit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/sarthakpranit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                aria-label="Twitter profile"
              >
                Twitter
              </a>
              <a 
                href="https://medium.com/@sarthakpranit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                aria-label="Medium blog"
              >
                Medium
              </a>
              <a 
                href="mailto:sarthakpranit@gmail.com" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded px-2 py-1"
                aria-label="Email sarthakpranit@gmail.com"
              >
                sarthakpranit@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-lightGray dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-dark/60 dark:text-gray-500">
            © {currentYear} Sarthak Pranit. All rights reserved.
          </p>
          <p className="text-xs text-dark/60 mt-2 md:mt-0 dark:text-gray-500">
            Lead Product Designer · Amsterdam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
