import { useState } from "react";
import { Eyebrow, Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

const supportAreas = [
  {
    name: "Education",
    dot: "var(--gold)",
    benefits: [
      "15 teenage mothers need school fees to complete their education.",
      "Help sustain pathways back to school and vocational training.",
    ],
  },
  {
    name: "Poultry Farming",
    dot: "var(--gold)",
    benefits: [
      "A poultry farm setup can create sustainable income and skills for young women.",
      "Support practical agribusiness and entrepreneurship opportunities.",
    ],
  },
  {
    name: "Vegetable Farming",
    dot: "var(--rose)",
    benefits: [
      "A vegetable farm can generate income to sustain FOH programmes.",
      "Help empower more women through sustainable opportunities.",
    ],
  },
  {
    name: "Partnerships & Mentorship",
    dot: "var(--rose)",
    benefits: [
      "FOH needs funding, training, networks and mentorship to help scale its impact.",
      "Bring your expertise, resources or connections to the work.",
    ],
  },
];

export function SponsorshipTiers() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad bg-cream">
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Why Support FOH</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.2rem]">
              Create lasting
              <br />
              <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                opportunity
              </span>
            </h2>
            <p
              className="mt-7 text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Every contribution can help a young mother return to school, a woman build a business,
              a girl access menstrual health support, and young people gain skills.
            </p>
            <motion.a
              href="/partners"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="btn-base btn-primary mt-10"
            >
              Start a Conversation
            </motion.a>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <ul className="mt-10">
                {supportAreas.map((t, i) => {
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
                          </div>

                          <div
                            className="grid overflow-hidden transition-all duration-500"
                            style={{
                              gridTemplateRows: isActive ? "1fr" : "0fr",
                              opacity: isActive ? 1 : 0,
                            }}
                          >
                            <ul className="min-h-0 space-y-2 pt-5 pl-6">
                              {t.benefits.map((b) => (
                                <li
                                  key={b}
                                  className="flex items-start gap-3 text-sm leading-relaxed"
                                  style={{ color: "var(--muted-foreground)" }}
                                >
                                  <span
                                    className="mt-2 h-px w-3 shrink-0"
                                    style={{ backgroundColor: "var(--gold)" }}
                                  />
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
