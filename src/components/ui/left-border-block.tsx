import * as React from "react";

interface LeftBorderBlockProps {
  borderColor?: "gold" | "maroon";
  children: React.ReactNode;
  className?: string;
}

export function LeftBorderBlock({
  borderColor = "gold",
  children,
  className,
}: LeftBorderBlockProps) {
  // Border color based on variant
  const borderColorMap = {
    gold: "bg-[color:#C9A76B]",
    maroon: "bg-[color:#4A0E24]",
  }[borderColor];

  return (
    <div className={`${className} flex items-start space-x-3`}>
      {/* Left border accent */}
      <div className={`h-5 w-0.5 ${borderColorMap} flex-shrink-0`}></div>

      {/* Content */}
      <div className="flex-1 space-y-1">{children}</div>
    </div>
  );
}
