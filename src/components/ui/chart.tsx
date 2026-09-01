import * as React from "react";
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

// Since we are not implementing the chart, we return null and do not need context.
export const ChartContext = React.createContext(null);

export function Chart({ config, children }: { config: ChartConfig; children: React.ReactNode }) {
  // Placeholder: render children or null.
  return <>{children}</>;
}
