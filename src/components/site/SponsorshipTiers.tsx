import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

const tiers = [
  {
    name: "Title Partner",
    dot: "var(--gold)",
    amount: "KES 5M+",
    benefits: ["Naming rights on the SFN Grand Ball", "Keynote platform & stage recognition", "Dedicated impact report", "Head table for twelve guests"],
  },
  {
    name: "Platinum Partner",
    dot: "var(--gold)",
    amount: "KES 2.5M",
    benefits: ["Premium branding across all events", "Panel or fireside participation", "Quarterly impact briefings", "Head table for eight guests"],
  },
  {
    name: "Gold Partner",
    dot: "var(--rose)",
    amount: "KES 1M",
    benefits: ["Branding across gala collateral", "Programme-level recognition", "Bi-annual impact summary", "Table for six guests"],
  },
  {
    name: "Community Partner",
    dot: "var(--rose)",
    amount: "In-kind",
    benefits: ["Recognition on SFN platforms", "Volunteer & field engagement", "Annual impact newsletter", "Two invitations per event"],
  },
];

export function SponsorshipTiers() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-cream">
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Partnership Tiers</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.2rem]">
              Sponsorship
              <br />
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                Tiers
              </span>
            </h2>
            <p className="mt-7 text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Every tier is structured around measurable outcomes — dignity kits delivered, clinics
              reached, women mentored — and reported back to you in full.
            </p>
            <motion.a
              href="/partners"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="btn-base btn-primary mt-10"
            >
              Request Partnership Pack
            </motion.a>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <ul>
                {tiers.map((t, i) => {
                  const isActive = active === i;
                  return (
                    <Reveal as="li" key={t.name} delay={i * 70}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className="hairline w-full cursor-pointer py-7 text-left"
                      >
                        <div className="flex items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <span
                              className="h-2.5 w-2.5 rounded-full transition-colors duration-300"
                              style={{ backgroundColor: isActive ? "var(--rose-light)" : t.dot }}
                            />
                            <h3
                              className="font-display text-xl font-semibold transition-colors lg:text-2xl"
                              style={{ color: isActive ? "var(--burgundy)" : "var(--charcoal)" }}
                            >
                              {t.name}
                            </h3>
                            <span className="text-[0.68rem] font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--gold)" }}>
                              {t.amount}
                            </span>
                          </div>

                          <div
                            className="grid overflow-hidden transition-all duration-500"
                            style={{ gridTemplateRows: isActive ? "1fr" : "0fr", opacity: isActive ? 1 : 0 }}
                          >
                            <ul className="min-h-0 space-y-2 pt-5 pl-6">
                              {t.benefits.map((b) => (
                                <li
                                  key={b}
                                  className="flex items-start gap-3 text-sm leading-relaxed"
                                  style={{ color: "var(--muted-foreground)" }}
                                >
                                  <span className="mt-2 h-px w-3 shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </button>
                    </Reveal>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}