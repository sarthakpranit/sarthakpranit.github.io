
import { useState, useEffect } from "react";
import SocialLinks from "./sections/SocialLinks";

const AboutSection = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    // Load social links data
    const loadSocialLinks = async () => {
      const socialLinksData = [
        { name: "Twitter", url: "#" },
        { name: "Instagram", url: "#" },
        { name: "LinkedIn", url: "#" },
        { name: "Dribbble", url: "#" },
        { name: "CV", url: "#", isCV: true }
      ];
      setSocialLinks(socialLinksData);
    };

    loadSocialLinks();
  }, []);

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
        
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  );
};

export default AboutSection;
