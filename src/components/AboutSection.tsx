
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadMarkdownContent } from "@/utils/contentLoader";
import SocialLinks from "./sections/SocialLinks";

const AboutSection = () => {
  // Load markdown content at build time (Vite only)
  const aboutContent = useMemo(() => loadMarkdownContent('/src/content/about.md'), []);

  return (
    <div className="space-y-8">
      <h2 className="text-base uppercase tracking-widest text-muted-foreground font-semibold mb-8">
        About
      </h2>
      <div className="space-y-6">
        <div className="max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{aboutContent}</ReactMarkdown>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
};

export default AboutSection;
