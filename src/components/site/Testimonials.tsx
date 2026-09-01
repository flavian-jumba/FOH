import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";

const quotes = [
  {
    quote:
      "Simply Feminine Network gave me the community and the courage I didn't know I needed. Within six months I had launched my business and found my people.",
    name: "Adaeze Okafor",
    role: "Founder, Haus of Adaeze",
    initials: "AO",
  },
  {
    quote:
      "The mentorship programme changed my career trajectory completely. My mentor became my greatest champion, and I became someone else's.",
    name: "Priya Sharma",
    role: "Director, Global Partnerships",
    initials: "PS",
  },
  {
    quote:
      "I walked into the Leadership Academy as a manager. I walked out as a CEO in the making. The transformation was real, and it was lasting.",
    name: "Sophia Mensah",
    role: "CEO, Luminary Health",
    initials: "SM",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="shell">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>Voices of Our Community</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]">
              What Our{" "}
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                Members Say
              </span>
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {quotes.map((q, i) => {
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
