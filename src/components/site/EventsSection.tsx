import { motion } from "framer-motion";

import { Reveal, Eyebrow } from "./Reveal";

const WAYS_TO_SUPPORT = [
  {
    id: "education",
    location: "15 teenage mothers need school fees",
    type: "Education",
    typeColor: "var(--rose)",
    title: "Help a young mother complete her education",
    description:
      "Your support can help teenage mothers return to learning and move toward vocational and economic opportunities.",
    cta: "Support education",
  },
  {
    id: "poultry",
    location: "Poultry farm setup",
    type: "Sustainable Income",
    typeColor: "var(--rose)",
    title: "Invest in skills and sustainable income",
    description:
      "A poultry farm can create sustainable income and practical skills for young women.",
    cta: "Support agribusiness",
  },
  {
    id: "partnership",
    location: "Funding, training, networks & mentorship",
    type: "Partnership",
    typeColor: "var(--gold)",
    title: "Help FOH reach further",
    description:
      "Partners and mentors can help scale opportunity for girls, young women and their communities.",
    cta: "Partner with FOH",
  },
] as const;

export function EventsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section
      className="relative isolate overflow-hidden py-20 lg:py-28"
      id="support"
      style={{
        backgroundColor: "var(--charcoal)",
        backgroundImage:
          "linear-gradient(180deg, rgba(25, 10, 14, 0.72), rgba(25, 10, 14, 0.84)), url('https://images.unsplash.com/photo-1653821355736-0c2598d0a63e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FsYSUyMGV2ZW50c3xlbnwwfHwwfHx8MA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(203,160,100,0.12),_transparent_45%)]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        {withHeading ? (
          <Reveal className="mb-16 lg:mb-20">
            <div>
              <Eyebrow>Sow Seeds of Hope</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.2rem]">
                Support that creates
                <br />
                <span className="italic font-light" style={{ color: "var(--rose-light)" }}>
                  opportunity
                </span>
              </h2>
            </div>
          </Reveal>
        ) : null}

        {/* Event Cards */}
        <div className="space-y-0">
          {WAYS_TO_SUPPORT.map((event, idx) => (
            <Reveal key={event.id} delay={idx * 50}>
              <div
                className="hairline py-8 lg:py-10 flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center"
                style={{
                  borderTopColor: "color-mix(in oklab, var(--cream) 12%, transparent)",
                  borderTopWidth: "1px",
                }}
              >
                {/* Left Column - Support need */}
                <div className="lg:col-span-3 flex flex-col gap-1.5">
                  <div className="text-[0.72rem] font-medium tracking-[0.08em] uppercase text-cream/75">
                    {event.location}
                  </div>
                </div>

                {/* Middle Column - Badge and Content */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div
                    className="w-fit rounded-full border px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.18em] uppercase backdrop-blur-sm"
                    style={{
                      color: event.typeColor,
                      borderColor: event.typeColor,
                      backgroundColor: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {event.type}
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-cream lg:text-[1.8rem] leading-[1.1] tracking-[-0.02em]">
                    {event.title}
                  </h3>

                  <p className="max-w-md text-sm leading-relaxed text-cream/72">
                    {event.description}
                  </p>
                </div>

                {/* Right Column - CTA Button */}
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => (window.location.href = "/contact")}
                    className="rounded-sm px-6 py-3 text-[0.7rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                    style={{
                      color: "var(--charcoal)",
                      backgroundColor: "rgba(245, 240, 232, 0.96)",
                      border: "1px solid rgba(245, 240, 232, 0.9)",
                    }}
                  >
                    {event.cta}
                  </motion.button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
