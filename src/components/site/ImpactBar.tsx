import { Award } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { CountUpNumber } from "./CountUpNumber";
import { Reveal } from "./Reveal";
import { STATS } from "./site-data";

export function ImpactBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section aria-labelledby="impact-heading" className="relative z-30 mt-6 px-5 sm:px-8">
      <h2 id="impact-heading" className="sr-only">
        Our impact in numbers
      </h2>
      <Reveal className="mx-auto max-w-6xl">
        <div ref={ref} className="glass rounded-[2rem] p-6 shadow-lift sm:p-10">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-primary-tint px-5 py-3 text-center">
            <Award className="size-4 text-accent" aria-hidden="true" />
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Winner · NGO of the Year — Pride of Kenya Awards
            </p>
          </div>
          <dl className="mt-8 grid gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="text-gradient font-display text-4xl font-semibold sm:text-5xl">
                    <CountUpNumber end={stat.value} suffix={stat.suffix} active={inView} />
                  </span>
                  <span className="mt-2 block text-sm text-muted-foreground">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
