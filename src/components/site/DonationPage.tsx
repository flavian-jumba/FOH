import { Heart, GraduationCap, Sprout, ShieldCheck } from "lucide-react";

import { DonationForm } from "./DonationForm";
import { Eyebrow, Reveal } from "./Reveal";

const GIVING_PATHWAYS = [
  {
    icon: GraduationCap,
    title: "Keep a girl learning",
    copy: "Help sustain pathways back to school, vocational training and mentorship for teenage mothers and young women.",
  },
  {
    icon: Heart,
    title: "Support dignity and wellbeing",
    copy: "Expand access to menstrual health education, reusable products and trusted community support.",
  },
  {
    icon: Sprout,
    title: "Grow economic independence",
    copy: "Back practical agribusiness, entrepreneurship and financial-literacy opportunities for women and youth.",
  },
] as const;

export function DonationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div
          className="pointer-events-none absolute -top-40 right-[-7rem] h-96 w-96 rounded-full bg-burgundy/60 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-44 left-[-6rem] h-80 w-80 rounded-full bg-gold/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="rose">Give today</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] font-semibold text-cream sm:text-6xl lg:text-7xl">
              Your generosity can become someone&apos;s
              <span className="block pt-2 font-light italic text-rose-light"> next beginning.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/70 sm:text-lg">
              Every gift helps Footprints of Hope create practical routes to education, dignity,
              wellbeing and economic independence for girls and young women in Busia County.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
              <ShieldCheck className="h-8 w-8 text-gold" aria-hidden="true" />
              <p className="mt-5 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">
                Direct, meaningful support
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-cream">
                Give by M-Pesa in just a few moments.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                Enter an amount, confirm the prompt on your phone, and help move opportunity
                forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream" aria-labelledby="giving-pathways-title">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Where your gift goes</Eyebrow>
            <h2
              id="giving-pathways-title"
              className="mt-5 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.25rem]"
            >
              Small acts of generosity.{" "}
              <span className="font-light italic text-burgundy">Lasting impact.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Choose the amount that feels right for you. Together, gifts of every size make it
              possible to keep showing up for the communities we serve.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {GIVING_PATHWAYS.map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="h-full border border-[color:color-mix(in_oklab,var(--burgundy)_14%,transparent)] bg-white p-6 shadow-[0_12px_28px_rgba(48,28,32,0.05)]">
                  <Icon className="h-7 w-7 text-burgundy" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-xl font-semibold text-charcoal">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[color:var(--warm-white)] py-16 sm:py-24"
        aria-labelledby="donate-form-title"
      >
        <div className="shell max-w-4xl">
          <div>
            <div className="text-center">
              <Eyebrow>Make your gift</Eyebrow>
              <h2
                id="donate-form-title"
                className="mt-5 font-display text-4xl font-semibold text-charcoal"
              >
                Give with <span className="font-light italic text-burgundy">M-Pesa</span>
              </h2>
            </div>
            <DonationForm defaultOpen />
          </div>
        </div>
      </section>
    </>
  );
}
