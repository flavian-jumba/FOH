import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

type ChartContextReturnType = {
  svg: React.RefObject<RechartsPrimitive.SVGElement>;
  height: number;
  width: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};

export const ChartContext = React.createContext<ChartContextReturnType | null>(
  null,
);

export function Chart({ config, children }: { config: ChartConfig; children: React.ReactNode }) {
  const svgRef = React.useRef<RechartsPrimitive.SVGElement>(null);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  const getColor = (theme: keyof typeof THEMES, itemConfig: ChartConfig[string]) => {
    // If theme is set, try to get the color from the theme-specific config
    const themeColor = itemConfig.theme?.[theme];
    if (themeColor !== undefined && themeColor !== "") {
      return themeColor;
    }
    // Fallback to the default color
    return itemConfig.color;
  };

  const renderChart = () => {
    if (!svgRef.current || width === 0 || height === 0) {
      return null;
    }

    // We only support light theme
    const theme = "light" as const;

    return (
      <RechartsPrimitive.SVGElement
        ref={svgRef}
        width={width}
        height={height}
      >
        {Object.entries(config).map(([key, itemConfig]) => {
          const color = getColor(theme, itemConfig);
          // TODO: Implement actual chart rendering based on config type
          // This is a placeholder - actual implementation would depend on chart type
          return null;
        })}
      </RechartsPrimitive.SVGElement>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={svgRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {renderChart()}
    </div>
  );
}