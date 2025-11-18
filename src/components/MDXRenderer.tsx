import { lazy, Suspense, ComponentType } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MDXRendererProps {
  mdxFileName: string;
}

export const MDXRenderer = ({ mdxFileName }: MDXRendererProps) => {
  // For now, since MDX isn't fully configured in Vite,
  // we'll use the markdown content from the file
  // In a production setup, this would dynamically import the MDX file

  try {
    // Import the MDX file content as raw markdown
    const modules = import.meta.glob('/src/content/case-studies/*.mdx', {
      eager: true,
      query: '?raw',
      import: 'default',
    });

    const mdxPath = `/src/content/case-studies/${mdxFileName}.mdx`;
    const rawContent = modules[mdxPath] as string | undefined;

    if (!rawContent) {
      return (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>MDX content not found for: {mdxFileName}</p>
        </div>
      );
    }

    // Remove frontmatter
    const contentWithoutFrontmatter = rawContent.replace(/^---[\s\S]*?---/, '').trim();

    return (
      <div className="max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            // Section titles (## in markdown) - increased by 2 points
            h2: ({ children, ...props }) => {
              const text = String(children);
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h2 id={id} className="text-5xl font-bold mt-32 mb-12 text-foreground scroll-mt-24" {...props}>
                  {children}
                </h2>
              );
            },
            // Subsection titles (### in markdown) - increased by 2 points
            h3: ({ children, ...props }) => {
              const text = String(children);
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h3 id={id} className="text-4xl font-semibold mt-12 mb-4 text-foreground scroll-mt-24" {...props}>
                  {children}
                </h3>
              );
            },
            // Sub-subsection titles (#### in markdown) - increased by 2 points
            h4: ({ children, ...props }) => {
              const text = String(children);
              const id = text
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
              return (
                <h4 id={id} className="text-2xl font-semibold mt-8 mb-4 text-foreground scroll-mt-24" {...props}>
                  {children}
                </h4>
              );
            },
            // Paragraphs - increased by 2 points, left-aligned
            p: ({ children, ...props }) => (
              <p className="text-xl text-muted-foreground leading-relaxed mb-4" {...props}>
                {children}
              </p>
            ),
            // Strong/Bold - for subtitles and emphasis, increased by 2 points
            strong: ({ children, ...props }) => (
              <strong className="text-2xl text-muted-foreground font-normal italic block mb-4" {...props}>
                <span className="not-italic">a.k.a </span>{children}
              </strong>
            ),
            // Section dividers
            hr: ({ ...props }) => (
              <hr className="my-16 border-border" {...props} />
            ),
            // Code blocks - increased by 2 points
            code: ({ inline, className, children, ...props }: any) => {
              if (inline) {
                return (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-lg font-mono" {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <code className={`${className} block bg-muted p-4 rounded-lg overflow-x-auto text-lg`} {...props}>
                  {children}
                </code>
              );
            },
            // Lists - increased by 2 points, left-aligned
            ul: ({ children, ...props }) => (
              <ul className="list-disc list-inside space-y-2 mb-6 text-xl text-muted-foreground" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="list-decimal list-inside space-y-2 mb-6 text-xl text-muted-foreground" {...props}>
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li className="text-xl leading-relaxed" {...props}>
                {children}
              </li>
            ),
            // Links
            a: ({ children, href, ...props }) => (
              <a
                href={href}
                className="text-primary hover:underline"
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                {...props}
              >
                {children}
              </a>
            ),
            // Blockquotes (used for image placeholders and highlighted sections) - increased by 2 points
            blockquote: ({ children, ...props }) => (
              <blockquote
                className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-8 my-12 text-center text-muted-foreground not-italic text-xl"
                {...props}
              >
                {children}
              </blockquote>
            ),
          }}
        >
          {contentWithoutFrontmatter}
        </ReactMarkdown>
      </div>
    );
  } catch (error) {
    console.error('Error loading MDX content:', error);
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-destructive">Error loading content. Please check the console for details.</p>
      </div>
    );
  }
};
