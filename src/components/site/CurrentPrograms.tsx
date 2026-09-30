import { motion } from "framer-motion";
import currentProgramOne from "@/assets/CurrentPrograms/01.png";
import currentProgramTwo from "@/assets/CurrentPrograms/02.png";

import { Eyebrow, Reveal } from "./Reveal";

const CURRENT_PROGRAMS = [
  {
    number: "01",
    partner: "In partnership with Afripads",
    title: "Reusable Menstrual Products Program",
    description:
      "We are working with communities, particularly adolescent girls and young women, to improve access to sustainable menstrual health solutions through reusable menstrual products. The programme combines product access with menstrual health education and community engagement through local leaders, faith-based institutions and community structures.",
    image: currentProgramOne,
  },
  {
    number: "02",
    partner: "In partnership with RANA Africa",
    title: "Community Resilience & Pandemic Preparedness",
    description:
      "Through our partnership with RANA Africa, FOH is strengthening community resilience and preparedness for pandemics and other public health emergencies. The programme equips communities with knowledge, strengthens local response systems and promotes community-led approaches to preparedness and response.",
    image: currentProgramTwo,
  },
] as const satisfies readonly {
  number: string;
  partner: string;
  title: string;
  description: string;
  image: string;
}[];

function ProgramPhoto({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden border border-[color:color-mix(in_oklab,var(--cream)_20%,transparent)] sm:aspect-[16/11]">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
  );
}

export function CurrentPrograms() {
  return (
    <section className="section-pad bg-charcoal" aria-labelledby="current-programs-title">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="rose">In progress</Eyebrow>
          <h2
            id="current-programs-title"
            className="mt-5 font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]"
          >
            Current <span className="italic-accent">Programs</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-cream/65 sm:text-base">
            Practical partnerships and community-led action, creating healthier and more resilient
            futures.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {CURRENT_PROGRAMS.map((program, index) => (
            <Reveal key={program.number} delay={index * 80}>
              <motion.article
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full border border-[color:color-mix(in_oklab,var(--cream)_14%,transparent)] bg-[color:color-mix(in_oklab,var(--cream)_4%,transparent)] p-4 sm:p-5"
              >
                <ProgramPhoto image={program.image} title={program.title} />
                <div className="px-1 pb-2 pt-7 sm:px-2">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold/80">
                      {program.number}
                    </span>
                    <span className="h-px flex-1 bg-[color:color-mix(in_oklab,var(--cream)_16%,transparent)]" />
                  </div>
                  <p className="mt-5 text-[0.63rem] font-semibold tracking-[0.16em] uppercase text-rose-light">
                    {program.partner}
                  </p>
                  <h3 className="mt-3 font-display text-2xl leading-[1.12] font-semibold text-cream lg:text-[1.8rem]">
                    {program.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/65">
                    {program.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
