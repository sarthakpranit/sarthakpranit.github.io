import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const items: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length; // Number of # symbols
      const text = match[2].replace(/\*\*/g, ''); // Remove bold markers
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      items.push({ id, text, level });
    }

    setTocItems(items);
  }, [content]);

  useEffect(() => {
    // Scroll spy - detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0,
      }
    );

    // Observe all headings
    const headings = document.querySelectorAll('h2[id], h3[id], h4[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [tocItems]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <nav className="sticky top-24 w-64 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
        On this page
      </div>
      <ul className="space-y-2 text-sm border-l-2 border-border">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          const isH2 = item.level === 2;
          const isH3 = item.level === 3;
          const isH4 = item.level === 4;

          return (
            <li
              key={item.id}
              className={`${
                isH2 ? 'pl-4' : isH3 ? 'pl-8' : 'pl-12'
              }`}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block py-1 pl-4 transition-colors border-l-2 -ml-[2px] ${
                  isActive
                    ? 'border-primary text-foreground font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
