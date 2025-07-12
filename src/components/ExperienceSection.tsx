
import { useState, useEffect } from "react";
import ExperienceList from "./sections/ExperienceList";

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    // Load experience data
    const loadExperiences = async () => {
      // In a real implementation, you'd fetch from the JSON file
      const experienceData = [
        {
          company: "Company One",
          role: "Product Designer",
          period: "2022-2024"
        },
        {
          company: "Company Two",
          role: "Product Designer",
          period: "2020-2022"
        },
        {
          company: "Company Three",
          role: "UX Design Intern",
          period: "2019"
        }
      ];
      setExperiences(experienceData);
    };

    loadExperiences();
  }, []);

  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        Previously
      </h2>
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default ExperienceSection;
