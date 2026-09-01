import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

import { Reveal, Eyebrow } from "./Reveal";
import { NewsletterSection } from "@/components/site/NewsletterSection";

const SIGNATURE_EVENTS = [
  {
    id: "grand-ball",
    location: "Kenyatta International Convention Centre",
    city: "Nairobi",
    type: "Invitation Only",
    typeColor: "var(--rose)",
    title: "SFN Grand Ball",
    description:
      "SFN's flagship charity ball at the Kenyatta International Convention Centre — a curated gathering of diplomats, corporate leaders, and changemakers.",
    date: "TBC 2026",
    cta: "Request Invitation",
  },
  {
    id: "gala-night",
    location: "Serena Hotel",
    city: "Nairobi",
    type: "Invitation Only",
    typeColor: "var(--rose)",
    title: "Nairobi Charity Gala Night",
    description:
      "An elegant evening of philanthropy and recognition supporting the IMARA HER Mobile Lab and girl-child empowerment initiatives across rural Kenya.",
    date: "TBC 2026",
    cta: "Register Interest",
  },
  {
    id: "networking-dinner",
    location: "Schlosshotel Berlin",
    city: "Berlin",
    type: "International Summit",
    typeColor: "var(--gold)",
    title: "Empower HER Networking Dinner",
    description:
      "A luxury women's networking and empowerment dinner in Berlin, convening African and European women leaders under H.E. Ambassador Stella Mokaya Orina.",
    date: "TBC 2026",
    cta: "Request Invitation",
  },
] as const;

export function EventsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section
      className="relative isolate overflow-hidden py-20 lg:py-28"
      id="events"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        {withHeading ? (
          <Reveal className="mb-16 lg:mb-20">
            <div>
              <Eyebrow>Calendar of Impact</Eyebrow>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.2rem]">
                Signature
                <br />
                <span className="italic font-light" style={{ color: "var(--rose-light)" }}>
                  Events
                </span>
              </h2>
            </div>
          </Reveal>
        ) : null}

        {/* Event Cards */}
        <div className="space-y-0">
          {SIGNATURE_EVENTS.map((event, idx) => (
            <Reveal key={event.id} delay={idx * 50}>
              <div
                className="hairline py-8 lg:py-10 flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center"
                style={{
                  borderTopColor: "color-mix(in oklab, var(--cream) 12%, transparent)",
                  borderTopWidth: "1px",
                }}
              >
                {/* Left Column - Date/Location Info */}
                <div className="lg:col-span-3 flex flex-col gap-1">
                  <div className="text-sm font-semibold tracking-[0.1em] uppercase text-cream/60">
                    {event.date}
                  </div>
                  <div className="text-sm font-medium tracking-[0.05em] uppercase text-cream/80">
                    {event.location}
                  </div>
                </div>

                {/* Middle Column - Badge and Content */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  {/* Type Badge */}
                  <div
                    className="w-fit text-[0.65rem] font-semibold tracking-[0.18em] uppercase px-3 py-1.5"
                    style={{
                      color: event.typeColor,
                      border: `1px solid ${event.typeColor}`,
                      opacity: 0.7,
                    }}
                  >
                    {event.type}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold text-cream lg:text-[1.8rem] leading-[1.1]">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-cream/70 max-w-md">
                    {event.description}
                  </p>
                </div>

                {/* Right Column - CTA Button */}
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.location.href = "/contact"}
                    className="px-6 py-3 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-300"
                    style={{
                      color: "var(--charcoal)",
                      backgroundColor: "var(--cream)",
                      border: "1px solid var(--cream)",
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

      {/* Newsletter Section at Bottom */}
      <div className="mt-20 lg:mt-28 border-t-2" style={{ borderTopColor: "color-mix(in oklab, var(--cream) 12%, transparent)" }}>
        <NewsletterSection />
      </div>
    </section>
  );
}