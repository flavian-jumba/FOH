import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

const EVENT_LIST = [
  {
    id: "grand-ball",
    date: "TBC 2026 · Nairobi",
    title: "SFN Grand",
    titleItalic: "Ball",
    body: "SFN's flagship charity ball at the Kenyatta International Convention Centre — a curated gathering of diplomats, corporate leaders, and changemakers. Attendance is by verified invitation only.",
    cta: "Request invitation",
  },
  {
    id: "serena-ball",
    date: "TBC 2026 · Nairobi Serena",
    title: "Nairobi Charity",
    titleItalic: "Gala Night",
    body: "An elegant evening of philanthropy and recognition supporting the IMARA HER Mobile Lab and girl-child empowerment initiatives across rural Kenya.",
    cta: "Register interest",
  },
  {
    id: "berlin-dinner",
    date: "TBC 2026 · Schlosshotel Berlin",
    title: "Empower HER",
    titleItalic: "Networking Dinner",
    body: "A luxury women's networking and empowerment dinner in Berlin, convening African and European women leaders under H.E. Ambassador Stella Mokaya Orina.",
    cta: "Request invitation",
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
            Calendar of Impact
          </span>
          <h2 className="font-cormorant text-5xl font-light italic lg:text-6xl">Signature Events</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[color:#FBF1E8]/60">
            SFN's flagship charity balls are invitation-only and not sold to the public. Attendance is
            reserved for verified diplomats, corporate leaders, and strategic partners.
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-7xl border-t border-[color:#FBF1E8]/10 md:grid-cols-3">
          {EVENT_LIST.map((event, index) => (
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
