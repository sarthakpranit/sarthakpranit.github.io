import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { loadMarkdownContent } from "@/utils/contentLoader";

const HeroContent = () => {
  // Load markdown content at build time (Vite only)
  const heroContent = useMemo(() => loadMarkdownContent('/src/content/hero.md'), []);

  return (
    <section className="mb-12">
      {/* Simple dot indicator */}
      <div className="w-3 h-3 bg-foreground rounded-full mb-16"></div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{heroContent}</ReactMarkdown>
      </div>
    </section>
  );
};

export default HeroContent;
