import * as React from "react";

interface PillTagProps {
  variant?: "lavender" | "pink" | "maroon" | "gold-outline";
  children: React.ReactNode;
  className?: string;
}

export function PillTag({
  variant = "lavender",
  children,
  className,
}: PillTagProps) {
  // Base styles for all pill tags
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-manrope uppercase tracking-wider";

  // Variant-specific styles
  const variantClasses = {
    lavender: "bg-[color:#E6E6FA] text-[color:#8A7B9B]", // Lavender background with muted purple text
    pink: "bg-[color:#FFE4E1] text-[color:#FF69B4]", // Pink background with pink text
    maroon: "bg-[color:#4A0E24] text-white", // Maroon background with white text
    "gold-outline": "border border-[color:#C9A76B] text-[color:#C9A76B] bg-transparent", // Gold outline
  }[variant];

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </span>
  );
}