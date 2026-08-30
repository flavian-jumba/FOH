import { Globe2, HeartHandshake, Sparkles, Flag, User, Menu, BookOpen, Shield, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ORG } from "@/components/site/site-data";
import { createFileRoute } from "@tanstack/react-router";

const title = "About Us — Simply Feminine Network";
const description =
  "Founded in 2021 by Agnes Vorreiter and led by CEO Tabitha Mwelu John, Simply Feminine Network restores dignity to women and children affected by Kenya's justice system.";

// Leadership team data
const leadership = [
  {
    name: "Tabitha Mwelu John",
    role: "Chief Executive Officer",
    bio: "Tabitha leads SFN's strategic vision and oversees program implementation across Kenya's justice system.",
    image: "/assets/default-leader.jpg", // Placeholder - in reality would be actual team photos
    alt: "Tabitha Mwelu John, CEO of Simply Feminine Network"
  },
  {
    name: "Agnes Vorreiter",
    role: "Founder & Board Chair",
    bio: "Agnes founded SFN in 2021 after witnessing the dignity gap in Kenya's remand facilities.",
    image: "/assets/default-leader.jpg", // Placeholder
    alt: "Agnes Vorreiter, Founder of Simply Feminine Network"
  },
  {
    name: "Dr. Wanjiku Kamau",
    role: "Director of Programs",
    bio: "Wanjiku oversees our prison outreach, menstrual health drives, and mental health initiatives.",
    image: "/assets/default-leader.jpg", // Placeholder
    alt: "Dr. Wanjiku Kamau, Director of Programs"
  }
];

// Values/commitments data
const values = [
  {
    title: "Dignity First",
    icon: Globe2,
    body: "We believe every woman and child deserves dignity, regardless of their circumstances or past mistakes."
  },
  {
    title: "Mental Health as Infrastructure",
    icon: HeartHandshake,
    body: "Self-esteem, body image and psychological safety are treated as core programming, not an add-on."
  },
  {
    title: "Education as Liberation",
    icon: Sparkles,
    body: "Access to education and vocational training creates pathways to sustainable livelihoods and independence."
  },
  {
    title: "Accountable Always",
    icon: Flag,
    body: "Every drive, cohort and shilling is documented and reported back to the communities we serve."
  },
  {
    title: "Community Led",
    icon: User,
    body: "Our programs are designed and implemented with, not for, the women and children we serve."
  }
];

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

function AboutPage() {
  // Background alternation: start with cream, then mist, then cream, etc.
  // We'll use inline styles for background alternation

  return (
    <>
      {/* PageHero with cream background */}
      <PageHero
        eyebrow="About us"
        title="A network built by women who refused to look away"
        description={`${ORG.name} is a Kenyan non-governmental organization empowering women, improving mental health and restoring dignity to women and children affected by the criminal justice system.`}
      />

      {/* Founding story pull-quote - mist background */}
      <section className="relative" style={{ backgroundColor: "var(--mist)" }}>
        <div className="mx-auto max-w-3xl py-20 px-6 lg:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <blockquote className="italic text-2xl font-display text-plum leading-relaxed bg-transparent p-0">
              “We began with a simple act: carrying sanitary pads and undergarments into a remand facility where women were serving time alongside their children. What we found was a dignity emergency hiding inside a justice system.”
            </blockquote>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Established in {ORG.founded} by {ORG.founder}, the network began with that simple act of compassion.
              Today, under CEO {ORG.ceo}, we run prison outreach, menstrual health drives, hospital visits,
              mental-health circles and the IMARA HER mobile empowerment lab — while our Berlin summits
              channel diaspora capital straight into grassroots Kenyan enterprise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership/team section - cream background with editorial grid */}
      <section className="relative" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <SectionHeading
            eyebrow="Leadership"
            title="The women who lead our mission"
            className="mb-10"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {leadership.map((leader, index) => (
              <Reveal
                key={leader.name}
                delay={index * 0.05}
                as="div"
                className="flex flex-col lg:flex-row items-start gap-6"
              >
                {/* Circular photo badge - signature motif */}
                <div className="flex-shrink-0 lg:flex-shrink-0 w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-display text-plum">{leader.name}</h3>
                  <p className="font-medium text-muted-foreground">{leader.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values/commitments section - mist background */}
      <section className="relative" style={{ backgroundColor: "var(--mist)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionHeading
            eyebrow="What guides us"
            title="Our core commitments"
            className="mb-10"
          />

          <div className="space-y-8">
            {[...values].map((value, idx) => (
              <Reveal
                key={value.title}
                delay={idx * 0.06}
                as="div"
                className="border-l-4 border-primary/20 pl-6 py-4"
              >
                <div className="flex items-start gap-4">
                  {/* Circular badge for values - using signature motif */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-plum">{value.title}</h3>
                    <p className="text-muted-foreground">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient CTA pause point - using the gradient treatment */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10"
             style={{ backgroundImage: "var(--gradient)" }}
             aria-hidden="true">
        </div>

        <div className="mx-auto max-w-2xl py-16 px-6 text-center">
          <SectionHeading
            eyebrow="Join our movement"
            title="Become a donor today"
            className="mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-6 leading-relaxed">
            Your support directly fuels our prison outreach, menstrual health drives,
            and women's empowerment programs across Kenya.
          </p>

                  </div>
      </section>
    </>
  );
}