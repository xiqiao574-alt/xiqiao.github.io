import React, { useEffect, useRef } from 'react';

interface LatexRendererProps {
  content: string;
  block?: boolean;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ content, block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current && window.katex) {
      try {
        window.katex.render(content, containerRef.current, {
          throwOnError: false,
          displayMode: block,
        });
      } catch (e) {
        console.error("KaTeX rendering error:", e);
        containerRef.current.innerText = content;
      }
    }
  }, [content, block]);

  return <span ref={containerRef} className={block ? "block my-2" : "inline"} />;
};

export default LatexRenderer;