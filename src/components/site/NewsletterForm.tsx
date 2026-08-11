import { Check, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsletterForm({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  if (done) {
    return (
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm",
          tone === "dark" ? "bg-white/10 text-white" : "bg-primary-tint text-primary",
          className,
        )}
        role="status"
      >
        <Check className="size-4" aria-hidden="true" />
        You're on the list. Karibu.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={cn("flex w-full max-w-md gap-2", className)}>
      <label htmlFor={`newsletter-${tone}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-${tone}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className={cn(
          "h-11 min-w-0 flex-1 rounded-full border px-5 text-sm transition-colors outline-none",
          tone === "dark"
            ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-white/50"
            : "border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary/50",
        )}
      />
      <Button type="submit" variant={tone === "dark" ? "gold" : "hero"} aria-label="Subscribe">
        <Send aria-hidden="true" />
        <span className="hidden sm:inline">Subscribe</span>
      </Button>
    </form>
  );
}
