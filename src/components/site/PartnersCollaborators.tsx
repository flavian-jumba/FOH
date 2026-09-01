import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";

const categories = [
  {
    key: "berlin",
    label: "Empower HER Berlin",
    items: [
      { name: "Embassy of Kenya, Berlin", initials: "EK", tag: "Diplomatic" },
      { name: "Schlosshotel Berlin", initials: "SB", tag: "Venue" },
      { name: "African Diaspora Council", initials: "AD", tag: "Network" },
      { name: "Empower HER e.V.", initials: "EH", tag: "Chapter" },
    ],
  },
  {
    key: "kenya",
    label: "Kenya Partners",
    items: [
      { name: "Ministry of Health, Kenya", initials: "MH", tag: "Government" },
      { name: "Kenyatta National Hospital", initials: "KN", tag: "Health" },
      { name: "County Women Networks", initials: "CW", tag: "Grassroots" },
      { name: "IMARA HER Mobile Lab", initials: "IM", tag: "Programme" },
    ],
  },
  {
    key: "venue",
    label: "Ven Partners",
    items: [
      { name: "KICC Nairobi", initials: "KI", tag: "Venue" },
      { name: "Nairobi Serena Hotel", initials: "NS", tag: "Venue" },
      { name: "Villa Rosa Kempinski", initials: "VR", tag: "Hospitality" },
      { name: "Sarova Stanley", initials: "SS", tag: "Hospitality" },
    ],
  },
  {
    key: "community",
    label: "Community & Sports",
    items: [
      { name: "Girl Child Dignity Drive", initials: "GC", tag: "Community" },
      { name: "SFN Wellness Runs", initials: "WR", tag: "Sports" },
      { name: "Endometriosis Kenya", initials: "EN", tag: "Advocacy" },
      { name: "Youth Mentorship Circle", initials: "YM", tag: "Mentorship" },
    ],
  },
];

export function PartnersCollaborators() {
  const [active, setActive] = useState(categories[0]!.key);
  const current = categories.find((c) => c.key === active) ?? categories[0]!;

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
              From Nairobi to Berlin, SFN is backed by diplomats, media houses, luxury venues, and
              grassroots organisations who share our vision.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
            style={{ borderBottom: "1px solid color-mix(in oklab, var(--cream) 14%, transparent)" }}
          >
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className="relative cursor-pointer pb-4 text-[0.68rem] font-semibold tracking-[0.22em] uppercase transition-colors"
                style={{
                  color:
                    active === c.key
                      ? "var(--gold)"
                      : "color-mix(in oklab, var(--cream) 55%, transparent)",
                }}
              >
                {c.label}
                <span
                  className="absolute -bottom-px left-0 h-px transition-all duration-400"
                  style={{ width: active === c.key ? "100%" : 0, backgroundColor: "var(--gold)" }}
                />
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {current.items.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 70}>
              <div
                className="group h-full p-7 transition-colors duration-500"
                style={{
                  border: "1px solid color-mix(in oklab, var(--cream) 12%, transparent)",
                  backgroundColor: "color-mix(in oklab, var(--cream) 4%, transparent)",
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center font-display text-sm font-semibold tracking-[0.1em]"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--rose-light) 14%, transparent)",
                    color: "var(--rose-light)",
                  }}
                >
                  {p.initials}
                </span>
                <h3 className="mt-6 font-display text-lg leading-snug font-semibold text-cream">
                  {p.name}
                </h3>
                <span
                  className="mt-4 inline-flex px-2.5 py-1 text-[0.56rem] font-semibold tracking-[0.24em] uppercase"
                  style={{
                    color: "var(--gold)",
                    backgroundColor: "color-mix(in oklab, var(--gold) 18%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--gold) 30%, transparent)",
                  }}
                >
                  {p.tag}
                </span>
              </div>
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
