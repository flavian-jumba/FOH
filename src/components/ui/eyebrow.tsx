import * as React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function Eyebrow({
  children,
  className,
  centered = false,
}: EyebrowProps) {
  // Base eyebrow styles
  const baseClasses = "text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider";

  // Centered version has dashes on both sides
  const content = centered
    ? `— ${children} —`
    : `— ${children}`;

  return (
    <div className={`${baseClasses} ${className} text-center`}>
      {content}
    </div>
  );
}