import { NewsletterForm } from "./NewsletterForm";
import { Reveal } from "./Reveal";

export function NewsletterSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div>
        <div className="gradient-primary relative overflow-hidden rounded-[2.5rem] px-7 py-14 text-center shadow-lift sm:px-14">
          <div
            className="float-slow pointer-events-none absolute -top-20 -left-16 size-72 rounded-full bg-white/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="float-slow pointer-events-none absolute -right-16 -bottom-24 size-80 rounded-full bg-[oklch(0.82_0.12_85_/_0.25)] blur-3xl [animation-delay:-5s]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="eyebrow text-white/70">Newsletter</p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight font-semibold text-white sm:text-4xl">
              Stay connected to FOH
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Receive updates about our work, opportunities to get involved and the stories behind
              the change we are building together.
            </p>
            <div className="mt-8 flex justify-center">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
