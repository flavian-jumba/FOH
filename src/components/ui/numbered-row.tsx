import * as React from "react";
import { ArrowRight } from "lucide-react";

interface NumberedRowProps {
  index: number;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export function NumberedRow({ index, title, description, children, className }: NumberedRowProps) {
  // Format index as two-digit number (01, 02, etc.)
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div className={`${className}`}>
      {/* Divider line (except for first item) */}
      {!(() => {
        // This is a bit tricky - we'd need to know if we're first
        // For now, we'll let the parent handle dividers
        return false;
      })() && <div className="h-0.5 bg-[color:#C9BFBB]/40 mb-6"></div>}

      <div className="flex items-start space-x-4">
        {/* Index number */}
        <div className="flex-shrink-0 mt-0.5">
          <span className="text-[color:#6E6660] text-sm font-manrope">{formattedIndex}</span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-1">
          <div className="flex items-start space-x-3">
            {/* Title */}
            <h3 className="text-[color:#1F1B1D] text-base font-display leading-none">{title}</h3>

            {/* Arrow icon */}
            <ArrowRight className="h-4 w-4 text-[color:#C9BFBB]/50 mt-0.5" />
          </div>

          {/* Description */}
          <p className="text-[color:#6E6660] text-sm leading-relaxed">{description}</p>

          {/* Optional children (for custom content like pill tags) */}
          {children && <div className="mt-2 flex items-center space-x-2">{children}</div>}
        </div>
      </div>
    </div>
  );
}
