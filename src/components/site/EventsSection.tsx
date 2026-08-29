import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

import galaImage from "@/assets/event-gala.jpg";
import summitImage from "@/assets/event-summit.jpg";
import dignityImage from "@/assets/program-dignity.jpg";
import justiceImage from "@/assets/program-justice.jpg";
import mentorshipImage from "@/assets/program-mentorship.jpg";
import story1Image from "@/assets/story-1.jpg";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EVENTS } from "./site-data";
import { NewsletterSection } from "@/components/site/NewsletterSection";

const images: Record<string, string> = { gala: galaImage, summit: summitImage };

export function EventsSection({ withHeading = true }: { withHeading?: boolean }) {
  // Determine which event is featured (gala if it's sooner, otherwise summit)
  const now = new Date();
  const galaDate = new Date(EVENTS[0].date);
  const summitDate = new Date(EVENTS[1].date);
  const featuredEvent = galaDate > now ? EVENTS[0] : EVENTS[1];
  const secondaryEvents = EVENTS.filter(event => event.id !== featuredEvent.id);

  // Past events data - using program and story images for past moments
  const PAST_EVENTS = [
    {
      id: "outreach-2024",
      title: "Nairobi Prison Outreach",
      date: "March 15, 2024",
      image: dignityImage,
      alt: "Team distributing dignity kits in Nairobi women's prison",
      location: "Nairobi Women's Prison",
      description: "Our team delivered essential hygiene products and conducted mental health sessions for 87 incarcerated women and their children."
    },
    {
      id: "summit-2023",
      title: "Berlin Leadership Summit",
      date: "June 10, 2023",
      image: summitImage,
      alt: "African diaspora leaders discussing enterprise development",
      location: "Schloss Hotel Berlin",
      description: "Diaspora leaders and SFN team convened to create financing pipelines for grassroots Kenyan women's enterprises."
    },
    {
      id: "drive-2024",
      title: "Nairobi School Drive",
      date: "September 22, 2024",
      image: mentorshipImage,
      alt: "Volunteers distributing sanitary kits to schoolgirls",
      location: "Migosi Secondary School, Kisumu",
      description: "Over 2,000 sanitary kits distributed to adolescent girls with menstrual health education sessions."
    },
    {
      id: "forum-2024",
      title: "Advocacy Forum",
      date: "November 5, 2024",
      image: story1Image,
      alt: "Panel discussion on women's rights in justice system",
      location: "Nairobi Governors Office",
      description: "Stakeholders convened to discuss policy reforms for gender-responsive justice delivery."
    }
  ] as const;

  return (
    <section className="relative" id="events">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {withHeading ? (
          <SectionHeading
            eyebrow="Events"
            title="Where people gather, conversations become action."
            description="Our events bring together communities, advocates, partners, and supporters to create meaningful change for women and children affected by Kenya's justice system."
            className="mb-16 lg:mb-20"
          />
        ) : null}

        {/* Hero Featured Event - Full width with distinctive treatment */}
        <div className="relative">
          <Reveal className="mb-20 lg:mb-24">
            <div className="relative group">
              {/* Featured event image - use full-bleed treatment */}
              <div className="aspect-[16/9] w-full rounded-none overflow-hidden">
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
                <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
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

        {/* Upcoming Events Section */}
        <section className="relative" style={{ backgroundColor: "var(--mist)" }}>
          {/* Gradient rule as section divider */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <Reveal as="div" key="upcoming-events-title">
              <h2 className="text-3xl font-bold text-plum mb-6">
                Upcoming Events
              </h2>
            </Reveal>

            <p className="text-base text-muted-foreground max-w-lg mx-auto mb-12 lg:mb-16 leading-relaxed">
              Mark your calendars for these transformative gatherings where commitment meets community.
            </p>

            <Reveal as="div" key="upcoming-events-grid">
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
        </section>

        {/* Past Events Section - Photo-forward archive */}
        <section className="relative" style={{ backgroundColor: "var(--cream)" }}>
          {/* Gradient rule as section divider */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
            <Reveal as="div" key="past-events-title">
              <h2 className="text-3xl font-bold text-plum mb-6">
                Moments That Moved Us
              </h2>
            </Reveal>

            <p className="text-base text-muted-foreground max-w-lg mx-auto mb-12 lg:mb-16 leading-relaxed">
              These are the moments where our work took shape — in prisons, schools, and community spaces across Kenya.
            </p>

            <Reveal as="div" key="past-events-grid">
              <div className="grid gap-8 lg:grid-cols-3">
                {PAST_EVENTS.map((event, index) => (
                  <Reveal
                    as="div"
                    key={event.id}
                    delay={index * 0.05}
                    className="group"
                  >
                    {/* Circular photo badge treatment - signature motif */}
                    <div className="relative aspect-[1/1] w-full rounded-none overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={event.image}
                        alt={event.alt}
                        loading="lazy"
                        className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        style={{ borderRadius: "50%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold text-plum mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {event.date} • {event.location}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gradient CTA Pause Point - Signature "pause point" for the page */}
        <section className="relative">
          {/* Full-width gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl py-16 px-6 text-center">
            <SectionHeading
              eyebrow="Be part of the change"
              title="Join us at our next gathering"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our events are more than gatherings — they're where awareness becomes action, where partnerships are forged,
              and where the journey toward dignity gains momentum. Be part of the conversations that create lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate">
                <Button
                  variant="gold"
                  size="lg"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative">
          <Reveal as="div" key="newsletter-section">
            <NewsletterSection />
          </Reveal>
        </section>
      </div>
    </section>
  );
}