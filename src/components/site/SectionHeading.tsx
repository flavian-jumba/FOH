import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  as: Tag = "h2",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-4 flex items-center gap-3 text-primary-soft">
          {align === "center" ? (
            <span className="h-px w-8 flex-1 bg-border sm:flex-none" aria-hidden="true" />
          ) : null}
          {eyebrow}
          <span className="h-px w-8 flex-1 bg-border sm:flex-none" aria-hidden="true" />
        </p>
      ) : null}
      <Tag className="text-balance text-3xl leading-[1.08] font-semibold sm:text-4xl lg:text-5xl">
        {title}
      </Tag>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
