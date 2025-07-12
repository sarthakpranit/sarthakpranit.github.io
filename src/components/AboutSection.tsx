
const AboutSection = () => {
  const socialLinks = [
    { name: "Twitter", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Dribbble", url: "#" },
    { name: "CV", url: "#", isCV: true }
  ];

  return (
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
          {socialLinks.map((link, index) => (
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
      </div>
    </div>
  );
};

export default AboutSection;
