import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HandCoins, Handshake, Megaphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PartnersSection } from "@/components/site/PartnersSection";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

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
    icon: HandCoins,
    title: "CSR programs",
    body: "Underwrite a full outreach cycle — kits, transport, counsellors and follow-up — with quarterly impact reporting for your board.",
  },
  {
    icon: Building2,
    title: "Event sponsorship",
    body: "Table and headline sponsorship at the Nairobi Grand Ball and the Berlin Leadership Summit, with vetted brand placement.",
  },
  {
    icon: Handshake,
    title: "In-kind supply",
    body: "Sanitary products, undergarments, textiles, logistics and equipment for the IMARA HER mobile lab.",
  },
  {
    icon: Megaphone,
    title: "Advocacy alliance",
    body: "Joint campaigns on endometriosis awareness, gender-based violence and justice reform in Kenya.",
  },
];

function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partnership that survives the press release"
        description="We work with corporate CSR teams, county governments, diplomatic missions and development institutions who want measurable, reportable outcomes."
      />

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <SectionHeading eyebrow="Ways to partner" title="Four routes into the work" />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier, i) => (
            <Reveal as="li" key={tier.title} delay={i * 0.08}>
              <div className="card-lift h-full rounded-[1.75rem] bg-card p-8 shadow-soft">
                <span className="gradient-primary grid size-12 place-items-center rounded-2xl text-primary-foreground">
                  <tier.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{tier.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{tier.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Start a partnership conversation</Link>
          </Button>
        </Reveal>
      </section>

      <PartnersSection withHeading={false} />
    </>
  );
}
