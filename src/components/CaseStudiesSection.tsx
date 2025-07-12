
import { useState, useEffect } from "react";
import CaseStudyCard from "./sections/CaseStudyCard";

const CaseStudiesSection = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    // Load case studies data
    const loadCaseStudies = async () => {
      const caseStudyData = [
        {
          id: 1,
          title: "CUJO Smart Firewall",
          subtitle: "Redesigning home network security for the modern family",
          roles: "Product Design, User Research",
          link: "/case-study/1"
        },
        {
          id: 2,
          title: "Healthcare Platform",
          subtitle: "Streamlining patient care through digital innovation",
          roles: "UX/UI Design, Design System",
          link: "/case-study/2"
        },
        {
          id: 3,
          title: "Fintech Dashboard",
          subtitle: "Creating intuitive financial management tools",
          roles: "Product Strategy, Visual Design",
          link: "/case-study/3"
        }
      ];
      setCaseStudies(caseStudyData);
    };

    loadCaseStudies();
  }, []);

  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        Case Studies
      </h2>
      
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.id}
            id={study.id}
            title={study.title}
            subtitle={study.subtitle}
            roles={study.roles}
            link={study.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
