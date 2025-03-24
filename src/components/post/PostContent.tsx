
import React from 'react';
import MarkdownRenderer from '@/components/ui/markdown';

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <div className="prose-container dark:text-gray-200 mx-auto my-8">
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default PostContent;
