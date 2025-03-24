
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/use-theme';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      'prose prose-lg max-w-none',
      'prose-headings:font-medium prose-headings:tracking-tight',
      'prose-p:text-dark prose-p:leading-relaxed',
      'prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary-hover',
      'prose-blockquote:border-l-primary prose-blockquote:bg-primary-muted prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-sm',
      'prose-strong:font-semibold',
      'prose-img:rounded-md prose-img:shadow-sm',
      'prose-pre:bg-lightGray prose-pre:text-dark',
      'prose-hr:border-lightGray',
      // Dark mode specific styling
      isDark && 'dark:prose-invert',
      isDark && 'dark:prose-headings:text-white',
      isDark && 'dark:prose-p:text-gray-200',
      isDark && 'dark:prose-strong:text-white',
      isDark && 'dark:prose-blockquote:bg-gray-800 dark:prose-blockquote:text-gray-200',
      isDark && 'dark:prose-pre:bg-gray-800 dark:prose-pre:text-gray-200',
      isDark && 'dark:prose-hr:border-gray-700',
      className
    )}>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
