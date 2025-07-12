import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { loadMarkdownContent } from "@/utils/contentLoader";
import CountdownTimer from "../CountdownTimer";

const COUNTDOWN_PLACEHOLDER = '___COUNTDOWN_PLACEHOLDER___';

const HeroContent = () => {
  // Load markdown content at build time (Vite only)
  const heroContent = useMemo(() => loadMarkdownContent('/src/content/hero.md'), []);

  // Find the line with the timer placeholder
  const lines = heroContent.split(/\r?\n/);
  const timerLineIndex = lines.findIndex(line => line.includes('{COUNTDOWN_TIMER}'));

  return (
    <section className="mb-12">
      {/* Simple dot indicator */}
      <div className="w-3 h-3 bg-foreground rounded-full mb-16"></div>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Render all lines before the timer line as markdown */}
        {lines.slice(0, timerLineIndex).join('\n').trim() && (
          <ReactMarkdown>{lines.slice(0, timerLineIndex).join('\n')}</ReactMarkdown>
        )}
        {/* Render the timer line as markdown, replacing the placeholder with the timer */}
        {timerLineIndex !== -1 && (
          <ReactMarkdown
            components={{
              p({ children }) {
                // Flatten children to an array
                const flat = Array.isArray(children) ? children : [children];
                return (
                  <p>
                    {flat.map((child, i) => {
                      if (typeof child === 'string') {
                        return child.split('{COUNTDOWN_TIMER}').flatMap((part, j, arr) =>
                          j < arr.length - 1
                            ? [part, <CountdownTimer key={j} />]
                            : part
                        );
                      }
                      return child;
                    })}
                  </p>
                );
              },
            }}
          >
            {lines[timerLineIndex]}
          </ReactMarkdown>
        )}
        {/* Render all lines after the timer line as markdown */}
        {lines.slice(timerLineIndex + 1).join('\n').trim() && (
          <ReactMarkdown>{lines.slice(timerLineIndex + 1).join('\n')}</ReactMarkdown>
        )}
      </div>
    </section>
  );
};

export default HeroContent;
