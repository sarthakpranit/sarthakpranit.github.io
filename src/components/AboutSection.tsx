
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { loadMarkdownContent } from "@/utils/contentLoader";
import SocialLinks from "./sections/SocialLinks";

const AboutSection = () => {
  // Load markdown content at build time (Vite only)
  const aboutContent = useMemo(() => loadMarkdownContent('/src/content/about.md'), []);

  return (
    <div className="space-y-8">
      <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
        About
      </h2>
      <div className="space-y-6">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown>{aboutContent}</ReactMarkdown>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default AboutSection;
