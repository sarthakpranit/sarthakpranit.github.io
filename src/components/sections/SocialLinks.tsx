
interface SocialLink {
  name: string;
  url: string;
  isCV?: boolean;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
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
