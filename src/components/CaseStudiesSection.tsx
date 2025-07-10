
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform Redesign",
      subtitle: "Redesigning the shopping experience for a major retailer",
      roles: "Product Design, User Research",
      link: "/case-studies"
    },
    {
      title: "Healthcare App Interface",
      subtitle: "Streamlining patient care through digital solutions",
      roles: "UX/UI Design, Prototyping",
      link: "/case-studies"
    },
    {
      title: "Fintech Dashboard",
      subtitle: "Creating intuitive financial management tools",
      roles: "Product Strategy, Visual Design",
      link: "/case-studies"
    }
  ];

  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        Case Studies
      </h2>
      
      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <Link
            key={index}
            to={study.link}
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
