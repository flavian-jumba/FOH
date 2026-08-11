import { createFileRoute } from "@tanstack/react-router";
import { Flag, Globe2, HeartHandshake, Sparkles } from "lucide-react";

import gallery4 from "@/assets/gallery-4.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { ORG } from "@/components/site/site-data";

const title = "About Us — Simply Feminine Network";
const description =
  "Founded in 2021 by Agnes Vorreiter and led by CEO Tabitha Mwelu John, Simply Feminine Network restores dignity to women and children affected by Kenya's justice system.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Dignity first",
    body: "We begin with what a woman needs to feel human again — not with what is easiest to report.",
  },
  {
    icon: Sparkles,
    title: "Mental health as infrastructure",
    body: "Self-esteem, body image and psychological safety are treated as core programming, not an add-on.",
  },
  {
    icon: Globe2,
    title: "Diaspora to grassroots",
    body: "We convert global networks in Berlin and beyond into financing for Kenyan community enterprise.",
  },
  {
    icon: Flag,
    title: "Accountable always",
    body: "Every drive, cohort and shilling is documented and reported back to the communities we serve.",
  },
];

const timeline = [
  { year: "2021", text: "Simply Feminine Network is founded by Agnes Vorreiter, a Kenyan model and entrepreneur based in Germany." },
  { year: "2022", text: "First prison and remand outreaches begin in Nairobi, delivering dignity kits and counselling." },
  { year: "2023", text: "Sanitary towel drives cross 10,000 pads distributed across schools and communities." },
  { year: "2024", text: "IMARA HER launches — Kenya's first solar-powered mobile empowerment lab reaching Nairobi, Kitui and Kisumu." },
  { year: "2025", text: "Named NGO of the Year at the Pride of Kenya Awards; the Women's Leadership Summit convenes in Berlin." },
  { year: "2026", text: "The 3rd Annual Charity Gala carries the movement into a new phase of institutional partnership." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A network built by women who refused to look away"
        description={`${ORG.name} is a Kenyan non-governmental organization empowering women, improving mental health and restoring dignity to women and children affected by the criminal justice system.`}
      />

      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="zoom-media overflow-hidden rounded-[2.5rem] shadow-lift">
              <img
                src={gallery4}
                alt="Women of the network celebrating together"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="space-y-5">
              <p className="eyebrow text-accent">Our story</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                From one woman's conviction to a movement on two continents
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Established in {ORG.founded} by {ORG.founder}, the network began with a simple act:
                carrying sanitary pads and undergarments into a remand facility where women were
                serving time alongside their children. What we found was a dignity emergency hiding
                inside a justice system.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Today, under CEO {ORG.ceo}, we run prison outreach, menstrual health drives,
                hospital visits, mental-health circles and the IMARA HER mobile empowerment lab —
                while our Berlin summits channel diaspora capital straight into grassroots Kenyan
                enterprise.
              </p>
              <dl className="grid gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-3xl bg-card p-5 shadow-soft">
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Founder
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">{ORG.founder}</dd>
                </div>
                <div className="rounded-3xl bg-card p-5 shadow-soft">
                  <dt className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Chief Executive
                  </dt>
                  <dd className="mt-1 font-display text-lg font-semibold">{ORG.ceo}</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <SectionHeading eyebrow="What guides us" title="Four commitments we do not trade" />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal as="li" key={value.title} delay={i * 0.08}>
              <div className="card-lift h-full rounded-[1.75rem] bg-card p-7 shadow-soft">
                <span className="gradient-primary grid size-12 place-items-center rounded-2xl text-primary-foreground">
                  <value.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section
        className="py-24"
        style={{ backgroundImage: "var(--gradient-tint)" }}
        aria-labelledby="journey"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="Journey" title="Five years, one direction" />
          <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.year} delay={i * 0.06} className="relative">
                <span
                  className="gradient-primary absolute top-2 -left-[41px] size-4 rounded-full ring-4 ring-background"
                  aria-hidden="true"
                />
                <p className="font-display text-2xl font-semibold text-primary">{item.year}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
