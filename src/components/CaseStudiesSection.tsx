
import { useMemo } from "react";
import CaseStudyCard from "./sections/CaseStudyCard";
import { loadCaseStudyMetadata } from "@/utils/contentLoader";

const CaseStudiesSection = () => {
  // Load case study metadata at build time
  const caseStudies = useMemo(() => loadCaseStudyMetadata(), []);

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
            roles={study.roles.join(', ')}
            link={study.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
