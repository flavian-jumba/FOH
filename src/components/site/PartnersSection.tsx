import { PartnerLogoCard } from "./PartnersCollaborators";
import { PARTNERS } from "./partners-data";
import { Reveal } from "./Reveal";

export function PartnersSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-charcoal py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        {withHeading && (
          <div className="mb-16 lg:mb-20">
            <p className="text-xs font-manrope text-gold/70 uppercase tracking-widest mb-6">
              Work With FOH
            </p>
            <h1 className="text-5xl lg:text-6xl font-display text-white mb-6">
              Partners & <span className="text-rose italic">Collaborators</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed">
              We are proud to work alongside organisations that share our commitment to girls and
              young women. We welcome collaborators who can contribute funding, training, networks
              and mentorship to help create opportunity.
            </p>
          </div>
        )}

        {/* Partner logos */}
        <ul className="mb-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <Reveal as="li" key={partner.name} delay={index * 0.06}>
              <PartnerLogoCard partner={partner} />
            </Reveal>
          ))}
        </ul>

        {/* CTA Section */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <p className="text-sm text-white/60 max-w-lg leading-relaxed">
              Interested in a partnership that supports education, economic independence, dignity
              and sustainable opportunity?
            </p>
            <a href="#contact" className="inline-block">
              <button className="px-8 py-3 border border-white/20 text-white text-sm font-medium uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all duration-300 rounded">
                Become a Partner
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
