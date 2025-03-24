
import React from 'react';
import MarkdownRenderer from "@/components/ui/markdown";

type ProjectContentProps = {
  content: string;
};

const ProjectContent: React.FC<ProjectContentProps> = ({ content }) => {
  return (
    <section className="pt-16">
      <div className="container-tight">
        <MarkdownRenderer content={content} />
      </div>
    </section>
  );
};

export default ProjectContent;
