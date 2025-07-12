
import { useMemo } from "react";
import ExperienceList from "./sections/ExperienceList";

const ExperienceSection = () => {
  // Load experiences from JSON at build time
  const experiences = useMemo(() => {
    const modules = import.meta.glob('/src/content/experience.json', { eager: true });
    const mod = modules['/src/content/experience.json'] as { default: any[] } | undefined;
    if (!mod) return [];
    return mod.default;
  }, []);

  return (
    <div className="space-y-8 mb-20">
      <h2 className="text-base uppercase tracking-widest text-muted-foreground font-semibold mb-8">
        Previously
      </h2>
      <ExperienceList experiences={experiences} />
    </div>
  );
};

export default ExperienceSection;
