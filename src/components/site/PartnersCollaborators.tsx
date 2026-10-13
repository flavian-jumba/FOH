import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";
import { PARTNERS, type Partner } from "./partners-data";
import { Eyebrow, Reveal } from "./Reveal";

export function PartnerLogoCard({ partner }: { partner: Partner }) {
  const content = (
    <>
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        loading="lazy"
        decoding="async"
        className={cn(
          "max-h-[56px] w-auto sm:max-h-[88px] max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.04]",
          partner.invert && "brightness-0",
          partner.logoClass,
        )}
      />
      <span className="sr-only">{partner.name}</span>
    </>
  );
  const className =
    "group flex h-[130px] items-center justify-center bg-[color:var(--cream)] px-4 py-5 sm:h-[150px] sm:px-8 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-1 md:h-[170px]";

  return partner.url ? (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
      )}
      aria-label={`${partner.name} (opens in a new tab)`}
    >
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

export function PartnersCollaborators() {
  return (
    <section id="partners" className="section-pad" style={{ backgroundColor: "var(--charcoal)" }}>
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow tone="rose">Work With Us</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]">
              Partners & <span className="italic-accent">Collaborators</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-cream/65">
              FOH welcomes partners and mentors who can contribute funding, training, networks and
              practical expertise to help scale opportunity in Busia County.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <Reveal as="li" key={partner.name} delay={index * 0.06}>
              <PartnerLogoCard partner={partner} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div
            className="mt-14 flex flex-col gap-6 pt-10 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderTop: "1px solid color-mix(in oklab, var(--cream) 14%, transparent)" }}
          >
            <p className="max-w-lg text-sm leading-relaxed text-cream/65">
              We are grateful to the organisations who stand with us. Start a conversation about how
              your support can help create long-term opportunity.
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
