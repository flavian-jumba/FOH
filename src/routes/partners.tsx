import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PartnersSection } from "@/components/site/PartnersSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ShieldCheck, Calendar, BookOpen, Users } from "lucide-react";

const title = "Partners — Corporate & Institutional Collaboration";
const description =
  "Partner with Simply Feminine Network: CSR programs, event sponsorship, in-kind dignity supplies and diaspora development financing across Kenya and Germany.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const tiers = [
  {
    icon: "CSR programs",
    title: "CSR programs",
    body: "Underwrite a full outreach cycle — kits, transport, counsellors and follow-up — with quarterly impact reporting for your board.",
  },
  {
    icon: "Event sponsorship",
    title: "Event sponsorship",
    body: "Table and headline sponsorship at the Nairobi Grand Ball and the Berlin Leadership Summit, with vetted brand placement.",
  },
  {
    icon: "In-kind supply",
    title: "In-kind supply",
    body: "Sanitary products, undergarments, textiles, logistics and equipment for the IMARA HER mobile lab.",
  },
  {
    icon: "Advocacy alliance",
    title: "Advocacy alliance",
    body: "Joint campaigns on endometriosis awareness, gender-based violence and justice reform in Kenya.",
  },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Change becomes possible when people work together."
        description="We work with organisations, institutions, communities, advocates, and supporters to create measurable and lasting impact for women and children affected by Kenya's justice system."
      />

      {/* Partnership Story */}
      <section className="relative" id="partnership-story">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="Why we partner"
              title="Good partnerships don't end with a logo."
            />
          </Reveal>

          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <div className="lg:pr-8">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                We believe that real change happens through meaningful collaboration. Our partnerships are built on shared values, mutual respect, and a commitment to creating measurable impact that lasts beyond any single initiative.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/assets/gallery-2.jpg"
                  alt="Women in a community workshop setting"
                  loading="lazy"
                  className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Partner */}
      <section className="relative" id="ways-to-partner">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="How to partner"
              title="Four meaningful ways to collaborate"
            />
          </Reveal>

          <div className="space-y-12">
            {tiers.map((tier, index) => {
              const iconMap = [
                <ShieldCheck className="h-6 w-6 text-primary" key="shield" />,
                <Calendar className="h-6 w-6 text-primary" key="calendar" />,
                <BookOpen className="h-6 w-6 text-primary" key="book" />,
                <Users className="h-6 w-6 text-primary" key="users" />
              ];

              return (
                <Reveal as="div" key={tier.title} delay={index * 0.05} className="group">
                  <div className="border-b border-primary/5 pb-8 last:border-b-0 last:pb-0">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        {iconMap[index]}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">{tier.title}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{tier.body}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organisations we work with */}
      <section className="relative" id="organisation-logos" style={{ backgroundImage: "var(--gradient-tint)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="Our partners"
              title="Organisations we work with"
            />
          </Reveal>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <Reveal as="div" key="partner-pride-of-kenya" delay={0.05}>
              <img
                src="/assets/gallery-1.jpg"
                alt="Pride of Kenya partnership"
                loading="lazy"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </Reveal>
            <Reveal as="div" key="partner-schloss-hotel" delay={0.1}>
              <img
                src="/assets/gallery-3.jpg"
                alt="Schloss Hotel Berlin partnership"
                loading="lazy"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </Reveal>
            <Reveal as="div" key="partner-kitui-county" delay={0.15}>
              <img
                src="/assets/gallery-4.jpg"
                alt="Kitui County partnership"
                loading="lazy"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </Reveal>
            <Reveal as="div" key="partner-kisumu-womens-trust" delay={0.2}>
              <img
                src="/assets/gallery-2.jpg"
                alt="Kisumu Women's Trust partnership"
                loading="lazy"
                className="h-12 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </Reveal>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Logos displayed with permission. We're grateful for these organisations' commitment to creating lasting change.
          </p>
        </div>
      </section>

      {/* Impact of Partnerships */}
      <section className="relative" id="partnership-impact">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="What we build together"
              title="Together, we turn support into action."
            />
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-3 text-center">
            <div className="border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-border duration-300">
              <h3 className="text-lg font-semibold text-primary mb-4">Programme Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Helping sustain practical programmes for women and children, from dignity kit distribution to mental health circles and vocational training.
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-border duration-300">
              <h3 className="text-lg font-semibold text-primary mb-4">Community Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extending support through partnerships, networks, and local communities to ensure no woman or girl is left behind.
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-8 hover:border-primary/20 transition-border duration-300">
              <h3 className="text-lg font-semibold text-primary mb-4">Long-Term Change</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building relationships that continue beyond a single campaign or event, creating sustainable pathways to dignity and empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentary Image Section */}
      <section className="relative" id="documentary-images" style={{ backgroundImage: "var(--gradient-tint)" }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="In partnership"
              title="Moments of collaboration"
            />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <img
                src="/assets/gallery-1.jpg"
                alt="Community partners working together on outreach planning"
                loading="lazy"
                className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <img
                src="/assets/gallery-2.jpg"
                alt="Women's organisation leaders in strategic meeting"
                loading="lazy"
                className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/_0.4)]"></div>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <img
                src="/assets/gallery-3.jpg"
                alt="Corporate team volunteering at community workshop"
                loading="lazy"
                className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[oklch(0.25_0.05_300_/.4)]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="relative" id="partnership-cta">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 lg:py-24 text-center">
          <Reveal className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Let's build something that lasts.
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              We're interested in partnerships that move beyond visibility and create meaningful, measurable change for women and children across Kenya.
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">
                  Start a partnership conversation
                </Link>
              </Button>
              <Button asChild variant="hero" className="w-full sm:w-auto">
                <Link to="/about">
                  Learn about our work
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <PartnersSection withHeading={false} />
    </>
  );
}