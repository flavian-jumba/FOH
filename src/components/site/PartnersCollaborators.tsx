import { Eyebrow, Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

const partnerLogos = [
  { name: "Nairobi Serena Hotel", kind: "serena" },
  { name: "Glee Hotel, Nairobi", kind: "glee" },
  { name: "KICC", kind: "kicc" },
  { name: "Sanitary Haven Foundation", kind: "sanitary" },
  { name: "Shadow Children’s Home", kind: "shadow" },
  { name: "Safari Edition Wines", kind: "safari" },
  { name: "Afrossy Fashion Designs", kind: "afrossy" },
  { name: "Pamoja School of Etiquette & Modelling Kenya", kind: "pamoja" },
  { name: "Pride of Kenya Awards", kind: "poka" },
] as const;

function TextWordmark({
  title,
  subtitle,
  accent = "var(--gold)",
  uppercase = true,
}: {
  title: string;
  subtitle?: string;
  accent?: string;
  uppercase?: boolean;
}) {
  return (
    <div className="flex w-full items-center justify-center text-center">
      <div>
        <div
          className="font-display text-[1.35rem] font-semibold tracking-[0.14em]"
          style={{
            color: "var(--cream)",
            letterSpacing: uppercase ? "0.18em" : "0.04em",
            textTransform: uppercase ? "uppercase" : "none",
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            className="mt-2 text-[0.62rem] font-medium tracking-[0.28em] uppercase"
            style={{ color: accent }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function LogoTile({ name, kind }: { name: string; kind: string }) {
  const renderLogo = () => {
    if (kind === "glee") {
      return (
        <img
          src="/assets/partners/glee-nairobi.svg"
          alt={name}
          className="h-auto max-h-[90px] w-full max-w-[220px] object-contain"
        />
      );
    }

    if (kind === "serena") {
      return <TextWordmark title="Nairobi Serena" subtitle="Hotel" accent="var(--rose-light)" />;
    }

    if (kind === "kicc") {
      return <TextWordmark title="KICC" subtitle="Kenyatta International Convention Centre" accent="var(--gold)" />;
    }

    if (kind === "sanitary") {
      return <TextWordmark title="Sanitary Haven" subtitle="Foundation" accent="var(--rose-light)" />;
    }

    if (kind === "shadow") {
      return <TextWordmark title="Shadow" subtitle="Children's Home" accent="var(--rose-light)" />;
    }

    if (kind === "safari") {
      return <TextWordmark title="Safari Edition" subtitle="Wines" accent="var(--gold)" />;
    }

    if (kind === "afrossy") {
      return <TextWordmark title="Afrossy" subtitle="Fashion Designs" accent="var(--gold)" uppercase={false} />;
    }

    if (kind === "pamoja") {
      return <TextWordmark title="Pamoja" subtitle="Etiquette & Modelling Kenya" accent="var(--gold)" uppercase={false} />;
    }

    if (kind === "poka") {
      return <TextWordmark title="Pride of Kenya" subtitle="Awards" accent="var(--gold)" uppercase={false} />;
    }

    return <TextWordmark title={name} />;
  };

  return (
    <li className="h-full">
      <Reveal>
        <div
          className="flex min-h-[190px] items-center justify-center border border-white/10 p-6 transition-colors duration-500 md:min-h-[220px]"
          style={{
            backgroundColor: "color-mix(in oklab, var(--cream) 3%, transparent)",
          }}
        >
          <div className="w-full max-w-[260px]">{renderLogo()}</div>
        </div>
      </Reveal>
    </li>
  );
}

export function PartnersCollaborators() {
  return (
    <section id="partners" className="section-pad" style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="rose">Our Global Network</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]">
              Partners & <span className="italic-accent">Collaborators</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/65">
              From Nairobi to Berlin, SFN is backed by hospitality leaders, community partners, and
              mission-aligned collaborators who share our vision for dignity, leadership, and
              impact.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {partnerLogos.map((partner, index) => (
            <Reveal as="li" key={partner.name} delay={index * 60}>
              <LogoTile name={partner.name} kind={partner.kind} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div
            className="mt-14 flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: "1px solid color-mix(in oklab, var(--cream) 14%, transparent)" }}
          >
            <p className="max-w-lg text-sm leading-relaxed text-cream/65">
              Interested in a partnership that puts women's health, dignity, and leadership at the
              centre of your impact strategy?
            </p>
            <Link to="/partners" className="btn-base btn-outline self-start">
              Become a Partner
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
