import { useState } from "react";
import { Reveal } from "./Reveal";

// Partners data grouped by partnership type
const PARTNERS_BY_TYPE = [
  {
    id: "empower-her-berlin",
    type: "Empower Her Berlin",
    categoryBadge: "DIPLOMATIC",
    partners: [
      { name: "Embassy of Kenya, Berlin", abbreviation: "EK", url: "https://kenya.go.ke" },
      { name: "Schloss Hotel Berlin", abbreviation: "SB", url: "https://schloss-hotel-berlin.de" },
      { name: "African Diaspora Council", abbreviation: "AD", url: "#" },
      { name: "Empower HER e.V.", abbreviation: "EH", url: "#" },
    ],
  },
  {
    id: "kenya-partners",
    type: "Kenya Partners",
    categoryBadge: "VENUE",
    partners: [
      { name: "Nairobi Serena Hotel", abbreviation: "NS", url: "https://serena.co.ke" },
      { name: "Glee Hotel Nairobi", abbreviation: "GH", url: "https://gleoholels.com" },
      { name: "KICC", abbreviation: "KC", url: "https://kicc.co.ke" },
      { name: "Pride of Kenya Awards", abbreviation: "POK", url: "https://prideofkenya.co.ke" },
    ],
  },
  {
    id: "venue-partners",
    type: "Venue Partners",
    categoryBadge: "VENUE",
    partners: [
      { name: "Safari Edition Wines", abbreviation: "SEW", url: "#" },
      { name: "Sanitary Haven Foundation", abbreviation: "SHF", url: "#" },
      { name: "Shadow Children's Home", abbreviation: "SCH", url: "#" },
      { name: "Afrossy Fashion Designs", abbreviation: "AFD", url: "#" },
    ],
  },
  {
    id: "community-sports",
    type: "Community & Sports",
    categoryBadge: "CHAPTER",
    partners: [
      { name: "Pamoja School of Etiquette & Modelling Kenya", abbreviation: "PSE", url: "#" },
      { name: "Diaspora Leaders Forum", abbreviation: "DLF", url: "#" },
      { name: "UN Women Kenya", abbreviation: "UNW", url: "#" },
    ],
  },
] as const;

export function PartnersSection({ withHeading = true }: { withHeading?: boolean }) {
  const [activeTab, setActiveTab] = useState(PARTNERS_BY_TYPE[0].id);

  const activeSection = PARTNERS_BY_TYPE.find((section) => section.id === activeTab);

  return (
    <section className="bg-charcoal py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        {withHeading && (
          <div className="mb-16 lg:mb-20">
            <p className="text-xs font-manrope text-gold/70 uppercase tracking-widest mb-6">
              Our Global Network
            </p>
            <h1 className="text-5xl lg:text-6xl font-display text-white mb-6">
              Partners & <span className="text-rose italic">Collaborators</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed">
              From Nairobi to Berlin, SFN is backed by diplomats, media houses, luxury venues, and grassroots organisations who share our vision.
            </p>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-white/10 pb-6">
          {PARTNERS_BY_TYPE.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`text-xs font-medium uppercase tracking-widest transition-all duration-300 pb-3 ${
                activeTab === section.id
                  ? "text-gold border-b-2 border-gold"
                  : "text-white/50 hover:text-white/70 border-b-2 border-transparent"
              }`}
            >
              {section.type}
            </button>
          ))}
        </div>

        {/* Partner Cards Grid */}
        {activeSection && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {activeSection.partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.05}>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="h-full block">
                  <div className="h-full flex flex-col items-start gap-6 border border-white/10 p-8 rounded bg-white/[0.02] hover:bg-white/5 hover:border-white/20 transition-all duration-300 group">
                    {/* Abbreviation Badge */}
                    <div className="w-14 h-14 rounded bg-gold/20 border border-gold/40 flex items-center justify-center group-hover:bg-gold/30 group-hover:border-gold/60 transition-all duration-300">
                      <span className="text-sm font-bold text-gold uppercase">
                        {partner.abbreviation}
                      </span>
                    </div>

                    {/* Partner Name */}
                    <h3 className="text-base font-medium text-white group-hover:text-gold transition-colors duration-300 flex-1">
                      {partner.name}
                    </h3>

                    {/* Category Badge */}
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold/70 border border-gold/40 px-3 py-1.5 rounded">
                      {activeSection.categoryBadge}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <p className="text-sm text-white/60 max-w-lg leading-relaxed">
              Interested in a partnership that puts women's health, dignity, and leadership at the centre of your impact strategy?
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
