import { useEffect, useMemo, useState } from "react";

type MermaidProps = {
  chart: string;
};

export function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const renderId = useMemo(
    () => `mermaid-${Math.random().toString(36).slice(2)}`,
    [],
  );

  useEffect(() => {
    let isMounted = true;

    const renderMermaid = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({ startOnLoad: false });
        const { svg } = await mermaid.render(renderId, chart);

        if (isMounted) {
          setSvg(svg);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Unable to render diagram.",
          );
        }
      }
    };

    renderMermaid();

    return () => {
      isMounted = false;
    };
  }, [chart, renderId]);

  if (error) {
    return (
      <pre>
        Mermaid render error: {error}
        {"\n"}
        {chart}
      </pre>
    );
  }

  if (!svg) {
    return <pre>{chart}</pre>;
  }

  return (
    <div
      className="mermaid"
      aria-label="Mermaid diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
