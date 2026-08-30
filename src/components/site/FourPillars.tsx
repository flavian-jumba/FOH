import { Reveal } from "./Reveal";

const PILLARS = [
  {
    numeral: "I.",
    title: "Women's Health",
    kicker: "Endometriosis Awareness",
    body: "Education, advocacy, and amplifying voices around Endometriosis — a condition affecting 1 in 10 women globally that remains critically under-discussed across Africa.",
  },
  {
    numeral: "II.",
    title: "Ending GBV",
    kicker: "Awareness, Support & Policy",
    body: "Fighting Gender-Based Violence through awareness campaigns, survivor support, and policy-level advocacy that demands accountability and lasting systemic change.",
  },
  {
    numeral: "III.",
    title: "Mentorship",
    kicker: "Leadership Development",
    body: "Structured mentorship programmes and capacity-building initiatives that equip girls and women entrepreneurs with the skills, confidence, and networks to lead.",
  },
  {
    numeral: "IV.",
    title: "Community",
    kicker: "Social Empowerment",
    body: "Restoring the dignity of the girl-child through targeted social support, sanitary dignity programmes, and community-led grassroots interventions.",
  },
] as const;

export function FourPillars() {
  return (
    <section className="relative overflow-hidden bg-[color:#17090E] font-karla text-[color:#FBF1E8]">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/assets/pillars-bg.jpg')] bg-cover bg-center opacity-[0.12]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <Reveal className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-cormorant text-5xl font-light lg:text-6xl">
            Advocacy <span className="text-[color:#C8A24D] italic">Pillars</span>
          </h2>
          <div className="mx-12 hidden h-px flex-grow bg-[color:#C8A24D]/20 md:block" />
          <p className="text-xs tracking-[0.25em] uppercase opacity-60">Core Framework 2025</p>
        </Reveal>

        <div className="grid gap-px bg-[color:#C8A24D]/15 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.06}
              className="group bg-[color:#17090E] px-8 py-14 transition-colors duration-500 hover:bg-[color:#3E0F22]"
            >
              <span className="mb-8 block font-cormorant text-5xl text-[color:#C8A24D] transition-transform duration-500 group-hover:translate-x-2">
                {pillar.numeral}
              </span>
              <h3 className="mb-2 font-cormorant text-2xl">{pillar.title}</h3>
              <p className="mb-4 text-[0.7rem] tracking-[0.2em] text-[color:#C8A24D]/80 uppercase">
                {pillar.kicker}
              </p>
              <p className="text-sm leading-relaxed text-[color:#FBF1E8]/60">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
