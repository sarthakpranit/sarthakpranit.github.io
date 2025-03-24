import { Link } from "react-router-dom";
import { NAV_CONFIG, SOCIAL_LINKS, SITE_METADATA } from "@/config/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-lightGray dark:border-gray-800" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">{SITE_METADATA.title}</h3>
            <p className="text-sm text-dark/70 max-w-xs dark:text-gray-400">
              {SITE_METADATA.description}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark/70 dark:text-gray-400">Navigation</h4>
            <nav aria-label="Footer navigation" className="flex flex-col space-y-3">
              {NAV_CONFIG.footer.map((item) => (
                <Link 
                  key={item.id}
                  to={item.path} 
                  className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-dark/70 dark:text-gray-400">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                aria-label="Twitter profile"
              >
                Twitter
              </a>
              <a 
                href={SOCIAL_LINKS.medium}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                aria-label="Medium blog"
              >
                Medium
              </a>
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-sm text-dark hover:text-primary animate-hover dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                aria-label={`Email ${SOCIAL_LINKS.email}`}
              >
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-lightGray dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-dark/60 dark:text-gray-500">
            © {currentYear} {SITE_METADATA.title}. All rights reserved.
          </p>
          <p className="text-xs text-dark/60 mt-2 md:mt-0 dark:text-gray-500">
            {SITE_METADATA.role} · {SITE_METADATA.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
