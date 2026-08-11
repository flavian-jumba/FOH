import { Globe2, HeartHandshake, Sparkles, Flag } from "lucide-react";

import gallery2 from "@/assets/gallery-2.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { ORG } from "@/components/site/site-data";
import { createFileRoute } from "@tanstack/react-router";

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

      <section className="mt-12">
        <Reveal className="mx-auto max-w-4xl">
          <img
            src={gallery2}
            alt="Women and girls in a community session"
            className="rounded-xl shadow-lg mb-8"
          />
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in {ORG.founded} by {ORG.founder}, the network began with a simple act:
              carrying sanitary pads and undergarments into a remand facility where women were
              serving time alongside their children. What we found was a dignity emergency hiding
              inside a justice system.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, under CEO {ORG.ceo}, we run prison outreach, menstrual health drives,
              hospital visits, mental-health circles and the IMARA HER mobile empowerment lab —
              while our Berlin summits channel diaspora capital straight into grassroots Kenyan
              enterprise.
            </p>
            <dl className="space-y-4 text-lg font-medium">
              <div className="flex">
                <dt className="w-20 text-xs font-semibold text-muted-foreground">Founder</dt>
                <dd>{ORG.founder}</dd>
              </div>
              <div className="flex">
                <dt className="w-20 text-xs font-semibold text-muted-foreground">Chief Executive</dt>
                <dd>{ORG.ceo}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="What guides us" title="Four commitments we do not trade" />
        <div className="mt-10 space-y-6 border-t border-primary/10 pt-6">
          {values.map((value, idx) => (
            <Reveal as="div" key={value.title} delay={idx * 0.08} className="pt-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flexibility">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-muted-foreground">{value.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16" style={{ backgroundImage: "var(--gradient-tint)" }}>
        <SectionHeading eyebrow="Journey" title="Five years, one direction" />
        <div className="mt-10 space-y-6">
          {timeline.map((item, idx) => (
            <Reveal as="div" key={item.year} delay={idx * 0.06} className="py-4">
              <div className="flex items-start gap-4">
                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                <div>
                  <p className="font-display text-xl font-semibold text-primary">{item.year}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}