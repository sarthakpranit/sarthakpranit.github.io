import { useMemo } from "react";

interface SocialLink {
  name: string;
  url: string;
  isCV?: boolean;
}

const SocialLinks = () => {
  // Load social links from JSON at build time
  const links = useMemo(() => {
    const modules = import.meta.glob('/src/content/social-links.json', { eager: true });
    const mod = modules['/src/content/social-links.json'] as { default: SocialLink[] } | undefined;
    if (!mod) return [];
    return mod.default;
  }, []);

  return (
    <div className="flex space-x-6">
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          className={`text-muted-foreground hover:text-foreground transition-colors ${
            link.isCV ? 'font-medium' : ''
          }`}
          {...(link.isCV && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
