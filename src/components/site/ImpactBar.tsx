import { Award } from "lucide-react";
import { useRef } from "react";

import { CountUpNumber } from "./CountUpNumber";
import { STATS } from "./site-data";

export function ImpactBar() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section aria-labelledby="impact-heading" className="relative mt-8 px-5 sm:px-8">
      <h2 id="impact-heading" className="sr-only">
        Our impact in numbers
      </h2>
      <div className="mx-auto max-w-6xl">
        <div ref={ref}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="size-4 text-accent" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.18em] text-primary">
              Winner · NGO of the Year — Pride of Kenya Awards
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center border-r-2 border-primary/10 sm:border-r-0 last:sm:border-r-0`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display font-semibold text-3xl sm:text-4xl text-gradient">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} active={true} />
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}