import { useEffect, useMemo, useState } from "react";

type MermaidProps = {
  chart: string;
};

export function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const renderId = useMemo(
    () => `mermaid-${Math.random().toString(36).slice(2)}`,
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateScheme = () => setIsDarkMode(mediaQuery.matches);

    updateScheme();
    mediaQuery.addEventListener("change", updateScheme);

    return () => {
      mediaQuery.removeEventListener("change", updateScheme);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const renderMermaid = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: isDarkMode ? "dark" : "default",
          themeVariables: isDarkMode
            ? {
                background: "#0f172a",
                primaryColor: "#1e293b",
                primaryTextColor: "#f8fafc",
                secondaryColor: "#0b1220",
                secondaryTextColor: "#e2e8f0",
                tertiaryColor: "#111827",
                tertiaryTextColor: "#f1f5f9",
                lineColor: "#cbd5f5",
                textColor: "#e2e8f0",
                nodeBorder: "#cbd5f5",
                mainBkg: "#0f172a",
              }
            : undefined,
        });
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
  }, [chart, isDarkMode, renderId]);

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
