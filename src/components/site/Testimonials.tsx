import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";

const impactPathways = [
  {
    quote:
      "Education can keep a young mother connected to learning, skills and a future of her own choosing.",
    name: "Education",
    role: "Teen Mothers' Reintegration",
    initials: "01",
  },
  {
    quote:
      "Practical agribusiness and financial-literacy skills can strengthen income and economic independence.",
    name: "Economic empowerment",
    role: "Women & Youth in Agribusiness",
    initials: "02",
  },
  {
    quote:
      "Menstrual health education and safe spaces help girls and young women participate with dignity and confidence.",
    name: "Dignity & wellbeing",
    role: "Menstrual Health & Nhanga Sessions",
    initials: "03",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Our Impact</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]">
              Pathways to{" "}
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                opportunity
              </span>
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {impactPathways.map((q, i) => {
            const isActive = active === i;
            return (
              <Reveal as="li" key={q.name} delay={i * 90}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="h-full w-full cursor-pointer p-8 text-left transition-all duration-500 lg:p-10"
                  style={{
                    backgroundColor: isActive ? "var(--burgundy)" : "var(--cream)",
                    border: `1px solid ${isActive ? "var(--burgundy)" : "color-mix(in oklab, var(--charcoal) 10%, transparent)"}`,
                    boxShadow: isActive ? "var(--shadow-lift)" : "none",
                    transform: isActive ? "translateY(-6px)" : "none",
                  }}
                >
                  <span
                    className="block font-display text-5xl leading-none"
                    style={{ color: isActive ? "var(--rose-light)" : "var(--gold)" }}
                  >
                    “
                  </span>
                  <p
                    className="mt-6 text-base leading-relaxed"
                    style={{ color: isActive ? "var(--cream)" : "var(--muted-foreground)" }}
                  >
                    {q.quote}
                  </p>
                  <div
                    className="mt-8 flex items-center gap-4 pt-6"
                    style={{
                      borderTop: `1px solid ${isActive ? "color-mix(in oklab, var(--cream) 22%, transparent)" : "color-mix(in oklab, var(--charcoal) 10%, transparent)"}`,
                    }}
                  >
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full text-[0.7rem] font-semibold tracking-[0.1em]"
                      style={{
                        backgroundColor: isActive
                          ? "var(--rose-light)"
                          : "color-mix(in oklab, var(--burgundy) 10%, transparent)",
                        color: isActive ? "var(--burgundy)" : "var(--burgundy)",
                      }}
                    >
                      {q.initials}
                    </span>
                    <span>
                      <span
                        className="block font-display text-base font-semibold"
                        style={{ color: isActive ? "var(--cream)" : "var(--charcoal)" }}
                      >
                        {q.name}
                      </span>
                      <span
                        className="mt-0.5 block text-[0.62rem] font-semibold tracking-[0.22em] uppercase"
                        style={{ color: isActive ? "var(--rose-light)" : "var(--gold)" }}
                      >
                        {q.role}
                      </span>
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
