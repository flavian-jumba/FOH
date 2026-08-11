import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

import galaImage from "@/assets/event-gala.jpg";
import summitImage from "@/assets/event-summit.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Button } from "@/components/ui/button";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EVENTS } from "./site-data";

const images: Record<string, string> = { gala: galaImage, summit: summitImage };

export function EventsSection({ withHeading = true }: { withHeading?: boolean }) {
  // Determine which event is featured (gala if it's sooner, otherwise summit)
  const now = new Date();
  const galaDate = new Date(EVENTS[0].date);
  const summitDate = new Date(EVENTS[1].date);
  const featuredEvent = galaDate > now ? EVENTS[0] : EVENTS[1];
  const secondaryEvents = EVENTS.filter(event => event.id !== featuredEvent.id);

  return (
    <section className="relative" id="events">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
        {withHeading ? (
          <>
            <SectionHeading
              eyebrow="Events"
              title="Where people gather, conversations become action."
              description="Our events bring together communities, advocates, partners, and supporters to create meaningful change for women and children affected by Kenya's justice system."
            />
          </>
        ) : null}

        {/* Introduction - compact and purposeful */}
        <div className="mt-16 lg:mt-20 text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Where people gather, conversations become action.
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-2xl mx-auto">
            Simply Feminine Network's events bring together communities, advocates, partners, and supporters to create meaningful change. These gatherings turn attention into action, financing our year-long programmes that restore dignity and empower women across Kenya.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mt-20 lg:mt-24">
          <Reveal className="mb-12">
            <div className="relative group">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
                <img
                  src={images[featuredEvent.id]}
                  alt={`${featuredEvent.title} in ${featuredEvent.city}`}
                  loading="lazy"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.6)]"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>
                    <MapPin className="size-4 text-primary/50" aria-hidden="true" />
                  </span>
                  <span>{featuredEvent.city}</span>
                </div>
                <div className="mt-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <span>
                    <CalendarDays className="size-4 text-primary/50" aria-hidden="true" />
                  </span>
                  <span>{featuredEvent.dateLabel}</span>
                </div>
                <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  {featuredEvent.title}
                </h1>
                <p className="mt-3 text-lg text-white/90 leading-relaxed max-w-xl">
                  {featuredEvent.blurb}
                </p>
                <Button asChild variant="hero" className="mt-6">
                  <Link to="/contact">
                    Request an invitation
                    <Ticket className="ml-2 size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Upcoming Events */}
        <div className="mt-20 lg:mt-24">
          <Reveal as="div" key="upcoming-events">
            <h2 className="text-2xl font-bold text-primary mb-8">
              Upcoming Events
            </h2>
            <div className="grid gap-10 lg:grid-cols-2">
              {secondaryEvents.map((event) => (
                <Reveal as="div" key={event.id} delay={secondaryEvents.indexOf(event) * 0.05} className="group">
                  <div className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-xl border border-primary/10">
                    <div className="aspect-[16/9] w-full">
                      <img
                        src={images[event.id]}
                        alt={`${event.title} in ${event.city}`}
                        loading="lazy"
                        className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                        <span>
                          <MapPin className="size-4 text-primary/50" aria-hidden="true" />
                        </span>
                        <span>{event.city}</span>
                      </div>
                      <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                        <span>
                          <CalendarDays className="size-4 text-primary/50" aria-hidden="true" />
                        </span>
                        <span>{event.dateLabel}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-5">
                        {event.blurb}
                      </p>
                      <Button asChild variant="outline" className="w-fit">
                        <Link to="/contact">
                          Request an invitation
                          <Ticket className="ml-1 size-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* WHY THESE EVENTS MATTER */}
        <div className="mt-24 lg:mt-28">
          <Reveal as="div" key="why-events-matter">
            <SectionHeading
              eyebrow="Our Purpose"
              title="Every gathering has a purpose."
            />
            <div className="mt-10 space-y-12 text-center">
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Awareness
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    Bring important conversations around dignity, justice, women's wellbeing, and community support into the room.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Partnerships
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    Connect communities, organisations, advocates, and people who can contribute to meaningful change.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Action
                  </h3>
                  <p className="text-muted-foreground max-w-lg">
                    Turn conversations, partnerships, and generosity into practical programmes that support women and children.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* MOMENTS THAT MOVED US */}
        <div className="mt-24 lg:mt-28" style={{ backgroundImage: "var(--gradient-tint)" }}>
          <Reveal as="div" key="moments-that-moved-us">
            <SectionHeading
              eyebrow="In Action"
              title="Moments that moved us."
            />
            <div className="mt-12">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Moment 1 */}
                <Reveal as="div" key="moment-1" delay={0.05} className="group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={gallery1}
                      alt="Community outreach in Nairobi"
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      Community Outreach · Nairobi
                    </p>
                  </div>
                </Reveal>

                {/* Moment 2 */}
                <Reveal as="div" key="moment-2" delay={0.1} className="group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={gallery2}
                      alt="Women's leadership forum"
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      Women's Leadership Forum
                    </p>
                  </div>
                </Reveal>

                {/* Moment 3 */}
                <Reveal as="div" key="moment-3" delay={0.15} className="group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={gallery3}
                      alt="Building connections that continue beyond the room"
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      Building connections that continue beyond the room
                    </p>
                  </div>
                </Reveal>

                {/* Moment 4 */}
                <Reveal as="div" key="moment-4" delay={0.2} className="group">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={gallery4}
                      alt="Advocacy and fundraising event"
                      loading="lazy"
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-muted-foreground font-medium">
                      Advocacy and Fundraising
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Final CTA */}
        <div className="mt-24 lg:mt-28 text-center">
          <Reveal as="div" key="final-cta">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Be part of the next conversation.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              Donors, partners, advocates, volunteers, and community members can participate in our work. Join us in creating lasting change for women and children across Kenya.
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">
                  Get involved
                </Link>
              </Button>
              <Button asChild variant="hero" className="w-full sm:w-auto">
                <Link to="/donate">
                  Support our work
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Newsletter Section */}
        <Reveal as="div" key="newsletter-section">
          <NewsletterSection />
        </Reveal>
      </div>
    </section>
  );
}