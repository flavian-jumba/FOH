import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

// Partners data grouped by partnership type
const PARTNERS_BY_TYPE = [
  {
    id: "hospitality",
    type: "Hospitality & Venues",
    categoryBadge: "VENUE",
    partners: [
      { name: "Nairobi Serena Hotel", abbreviation: "NS", url: "https://serena.co.ke" },
      { name: "Glee Hotel Nairobi", abbreviation: "GH", url: "https://gleoholels.com" },
      { name: "KICC", abbreviation: "KC", url: "https://kicc.co.ke" },
    ],
  },
  {
    id: "empowerment",
    type: "Empowerment Programs",
    categoryBadge: "PROGRAMS",
    partners: [
      { name: "Sanitary Haven Foundation", abbreviation: "SHF", url: "#" },
      { name: "Shadow Children's Home", abbreviation: "SCH", url: "#" },
      { name: "Pamoja School of Etiquette & Modelling Kenya", abbreviation: "PSE", url: "#" },
    ],
  },
  {
    id: "community",
    type: "Community & Culture",
    categoryBadge: "CHAPTER",
    partners: [
      { name: "Pride of Kenya Awards", abbreviation: "POK", url: "https://prideofkenya.co.ke" },
      { name: "Safari Edition Wines", abbreviation: "SEW", url: "#" },
      { name: "Afrossy Fashion Designs", abbreviation: "AFD", url: "#" },
    ],
  },
  {
    id: "diaspora",
    type: "Diaspora & Networks",
    categoryBadge: "NETWORK",
    partners: [
      { name: "Diaspora Leaders Forum", abbreviation: "DLF", url: "#" },
      { name: "UN Women Kenya", abbreviation: "UNW", url: "#" },
    ],
  },
] as const;

export function PartnersSection({ withHeading = true }: { withHeading?: boolean }) {
  const [activeTab, setActiveTab] = useState(PARTNERS_BY_TYPE[0].id);

  const activeSection = PARTNERS_BY_TYPE.find((section) => section.id === activeTab);

  return (
    <section className="bg-charcoal">
      {withHeading && (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <SectionHeading
            eyebrow="Partners & Collaborators"
            title="Trusted by institutions on two continents"
            description="Corporate CSR teams, county governments, diaspora networks and development partners who fund and carry this work with us."
            className="text-center"
          />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-6">
          {PARTNERS_BY_TYPE.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeTab === section.id
                  ? "text-gold border-b-2 border-gold pb-3"
                  : "text-white/60 hover:text-white/80"
              }`}
            >
              {section.type}
            </button>
          ))}
        </div>

        {/* Partner Cards Grid */}
        {activeSection && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeSection.partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.05}>
                <Link to={partner.url} target="_blank" rel="noopener noreferrer" className="h-full">
                  <div className="h-full flex flex-col items-start gap-4 border border-white/10 p-6 rounded-lg bg-white/2 hover:bg-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer">
                    {/* Abbreviation Badge */}
                    <div className="w-12 h-12 rounded bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
                      <span className="text-xs font-bold text-gold uppercase">
                        {partner.abbreviation}
                      </span>
                    </div>

                    {/* Partner Name */}
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-white group-hover:text-gold transition-colors duration-300">
                        {partner.name}
                      </h3>
                    </div>

                    {/* Category Badge */}
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold/70 border border-gold/30 px-2 py-1 rounded">
                      {activeSection.categoryBadge}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="mx-auto max-w-3xl px-6 py-12 text-center border-t border-white/10">
        <SectionHeading
          eyebrow="Join our network"
          title="Become a partner today"
          className="mb-6"
        />
        <p className="text-sm text-white/60 mb-8 leading-relaxed">
          Our partnership model is built on shared values, mutual respect, and a commitment to
          creating measurable impact that lasts.
        </p>
        <Button
          className="bg-gold text-charcoal hover:bg-gold/90"
        >
          Explore Partnerships
        </Button>
      </div>
    </section>
  );
}
