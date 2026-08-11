import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";

type Section = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: Section[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={updated} />
      <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-8">
        <div className="space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.05}>
              <article className="rounded-[1.75rem] bg-card p-7 shadow-soft sm:p-9">
                <h2 className="font-display text-xl font-semibold sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
