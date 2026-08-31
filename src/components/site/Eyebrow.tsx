import { useEffect, useRef, useState, type ReactNode } from "react";

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "rose" }) {
  return (
    <span className="eyebrow" style={tone === "rose" ? { color: "var(--rose-light)" } : undefined}>
      <span className="rule-gold" style={tone === "rose" ? { background: "var(--rose-light)" } : undefined} />
      {children}
    </span>
  );
}