import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

const SUPPORT_LIST = [
  {
    id: "education",
    date: "Education",
    title: "Support a young",
    titleItalic: "mother",
    body: "Help teenage mothers return to school, complete their education and build a pathway toward independence.",
    cta: "Support FOH",
  },
  {
    id: "agribusiness",
    date: "Agribusiness",
    title: "Empower women",
    titleItalic: "through skills",
    body: "Support poultry and vegetable farming, financial literacy and entrepreneurship for sustainable income generation.",
    cta: "Partner with FOH",
  },
  {
    id: "mentorship",
    date: "Mentorship",
    title: "Create room for",
    titleItalic: "hope",
    body: "Bring your experience, networks and encouragement to mentorship and safe spaces for young women.",
    cta: "Get involved",
  },
] as const;

export function SignatureEvents() {
  return (
    <section className="relative overflow-hidden bg-[color:#4A0E24] font-karla text-[color:#FBF1E8]">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/assets/events-bg.jpg')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />

      <div className="relative py-24 lg:py-32">
        <Reveal className="mx-auto mb-20 max-w-7xl px-5 text-center sm:px-8">
          <span className="mb-4 block text-[0.7rem] font-bold tracking-[0.5em] text-[color:#C8A24D] uppercase">
            Sow Seeds of Hope
          </span>
          <h2 className="font-cormorant text-5xl font-light italic lg:text-6xl">
            Create Opportunity
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[color:#FBF1E8]/60">
            Every contribution helps build education, skills, dignity and sustainable opportunity
            for girls, young women and youth.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-7xl border-t border-[color:#FBF1E8]/10 md:grid-cols-3">
          {SUPPORT_LIST.map((event, index) => (
            <Reveal
              key={event.id}
              delay={index * 0.06}
              className="group border-b border-[color:#FBF1E8]/10 md:border-r md:border-b-0 md:last:border-r-0"
            >
              <div className="space-y-6 px-8 py-14 transition-transform duration-700 group-hover:-translate-y-2 lg:px-12 lg:py-16">
                <span className="block text-[0.7rem] tracking-[0.2em] text-[color:#C8A24D] uppercase">
                  {event.date}
                </span>
                <h3 className="font-cormorant text-3xl leading-tight font-light lg:text-4xl">
                  {event.title}
                  <br />
                  <span className="italic">{event.titleItalic}</span>
                </h3>
                <p className="text-sm leading-relaxed text-[color:#FBF1E8]/60">{event.body}</p>
                <Link
                  to="/events"
                  className="inline-block border-b border-[color:#C8A24D] pb-2 text-[0.7rem] font-bold tracking-[0.3em] text-[color:#C8A24D] uppercase"
                >
                  {event.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
