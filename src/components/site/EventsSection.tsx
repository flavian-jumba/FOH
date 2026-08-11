import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { useEffect, useState } from "react";

import galaImage from "@/assets/event-gala.jpg";
import summitImage from "@/assets/event-summit.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EVENTS } from "./site-data";

const images: Record<string, string> = { gala: galaImage, summit: summitImage };

function useCountdown(target: string) {
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) return setParts({ d: 0, h: 0, m: 0, s: 0 });
      setParts({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return parts;
}

function Countdown({ target }: { target: string }) {
  const parts = useCountdown(target);
  const cells = [
    { label: "Days", value: parts?.d },
    { label: "Hrs", value: parts?.h },
    { label: "Min", value: parts?.m },
    { label: "Sec", value: parts?.s },
  ];

  return (
    <div className="grid grid-cols-4 gap-2" role="timer" aria-live="off">
      {cells.map((cell) => (
        <div key={cell.label} className="rounded-2xl bg-primary-tint px-2 py-3 text-center">
          <span className="block font-display text-xl font-semibold text-primary tabular-nums">
            {cell.value === undefined ? "--" : String(cell.value).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function EventsSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section
      className="relative py-24 lg:py-32"
      style={{ backgroundImage: "var(--gradient-tint)" }}
      id="events"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {withHeading ? (
          <SectionHeading
            eyebrow="Upcoming"
            title="Where the movement gathers"
            description="Two rooms a year change what is possible for a thousand women — one in Nairobi, one in Berlin."
          />
        ) : null}

        <ul className="mt-16 grid gap-8 lg:grid-cols-2">
          {EVENTS.map((event, i) => (
            <Reveal as="li" key={event.id} delay={i * 0.1}>
              <article className="zoom-media card-lift flex h-full flex-col overflow-hidden rounded-[2rem] bg-card shadow-soft">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={images[event.id]}
                    alt={`${event.title} in ${event.city}`}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="size-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.05_300_/_0.65)] to-transparent"
                    aria-hidden="true"
                  />
                  <div className="glass absolute top-5 left-5 rounded-2xl px-4 py-3 text-center">
                    <span className="block font-display text-2xl leading-none font-semibold text-primary">
                      {event.day}
                    </span>
                    <span className="mt-1 block text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                      {event.month}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-8">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4 text-secondary" aria-hidden="true" />
                      {event.city}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-4 text-secondary" aria-hidden="true" />
                      <time dateTime={event.date}>{event.dateLabel}</time>
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{event.blurb}</p>
                  <div className="mt-auto space-y-5 pt-2">
                    <Countdown target={event.date} />
                    <Button asChild variant="hero" className="w-full">
                      <Link to="/contact">
                        <Ticket aria-hidden="true" />
                        Request an invitation
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
