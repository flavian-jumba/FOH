import { SectionHeading } from "./SectionHeading";
import { PARTNERS } from "./site-data";

export function PartnersSection({ withHeading = true }: { withHeading?: boolean }) {
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section
      className="overflow-hidden py-24 lg:py-28"
      style={{ backgroundImage: "var(--gradient-tint)" }}
      id="partners"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {withHeading ? (
          <SectionHeading
            eyebrow="Partners"
            title="Trusted by institutions on two continents"
            description="Corporate CSR teams, county governments, diaspora networks and development partners who fund and carry this work with us."
          />
        ) : null}
      </div>

      <div
        className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <ul className="marquee-track flex w-max items-center gap-4">
          {row.map((partner, i) => (
            <li
              key={`${partner}-${i}`}
              className="flex h-24 w-56 shrink-0 items-center justify-center rounded-3xl bg-card px-6 text-center font-display text-base font-semibold text-muted-foreground shadow-soft grayscale transition-all duration-500 hover:text-primary hover:grayscale-0"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
      <ul className="sr-only">
        {PARTNERS.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
