import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type AlertProps = React.ComponentPropsWithoutRef<typeof alertVariant> & {
  variant?: VariantProps<typeof alertVariants>["variant"];
};

export const alertVariant = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof alertVariants>
>(({ className, variant = "default", ...props }, ref) => (
  <div className={cn(alertVariants({ variant, className }))} ref={ref} {...props} />
));
alertVariant.displayName = "AlertVariant";

export { alertVariant, type AlertProps };