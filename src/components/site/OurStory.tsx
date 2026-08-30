import { Link } from "@tanstack/react-router";

import { Reveal } from "./Reveal";

export function OurStory() {
  return (
    <section className="relative bg-[color:#FBF1E8] font-karla text-[color:#1F1B1D]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Portrait with gold accolade plate */}
          <Reveal className="relative lg:col-span-7">
            <div className="group relative">
              <img
                src="/assets/story-main.jpg"
                alt="Tabitha Mwelu John, founder of Simply Feminine Network"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute right-4 -bottom-8 max-w-[15rem] bg-[color:#C8A24D] p-8 text-[color:#FBF1E8] shadow-2xl sm:right-0 lg:-right-8 lg:p-10">
                <p className="mb-3 font-cormorant text-[0.7rem] tracking-[0.3em] uppercase opacity-90">
                  Accolade
                </p>
                <p className="font-cormorant text-2xl leading-tight font-light italic lg:text-3xl">
                  NGO of the Year 2025
                </p>
              </div>
            </div>
          </Reveal>

          {/* Editorial column */}
          <div className="space-y-10 lg:col-span-5">
            <Reveal className="space-y-4">
              <span className="block text-[0.7rem] font-bold tracking-[0.4em] text-[color:#C8A24D] uppercase">
                The Foundation
              </span>
              <h2 className="font-cormorant text-6xl leading-[0.9] font-light text-[color:#1F1B1D] md:text-7xl">
                Tabitha
                <br />
                <span className="pl-8 italic">Mwelu John</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="font-cormorant text-2xl leading-relaxed font-light text-[color:#4A0E24] italic">
                “Women of Purpose — Giving Back with Grace.”
              </p>
            </Reveal>

            <Reveal delay={0.14} className="space-y-6">
              <p className="text-lg leading-relaxed text-[color:#1F1B1D]/70">
                Simply Feminine Network is a women-led NGO founded by Tabitha Mwelu John with a
                singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of
                their journey.
              </p>
              <p className="text-lg leading-relaxed text-[color:#1F1B1D]/70">
                From rural Kenya to the corridors of Schlosshotel Berlin, SFN operates at the
                intersection of health advocacy, economic empowerment, and community dignity.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="divide-y divide-[color:#1F1B1D]/10 border-y border-[color:#1F1B1D]/10">
                {[
                  ["Purpose", "Every initiative is anchored in a clear, measurable impact for women and girls."],
                  ["Grace", "We serve with dignity, warmth, and the quiet power of a united sisterhood."],
                  ["Action", "From mobile labs to global summits — we don't just advocate. We do."],
                ].map(([term, detail]) => (
                  <div key={term} className="grid gap-2 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                    <dt className="font-cormorant text-xl text-[color:#4A0E24] italic">{term}</dt>
                    <dd className="text-sm leading-relaxed text-[color:#1F1B1D]/65">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.26}>
              <Link
                to="/about"
                className="inline-block border-b-2 border-[color:#C8A24D] pb-2 text-sm font-bold tracking-[0.2em] uppercase transition-colors hover:text-[color:#C8A24D]"
              >
                Discover our journey
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
