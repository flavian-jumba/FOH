import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { ShieldCheck, MapPin, Users, Globe, HeartHandshake, DollarSign, Building2, Calendar } from "lucide-react";

import prideOfKenya from "@/assets/program-dignity.jpg";
import schlossHotel from "@/assets/program-justice.jpg";
import kituiCounty from "@/assets/program-mentorship.jpg";
import kisumuWomensTrust from "@/assets/event-gala.jpg";
import diasporaLeadersForum from "@/assets/story-1.jpg";
import dignityKitsCoalition from "@/assets/program-dignity.jpg";
import imaraHer from "@/assets/program-mentorship.jpg";
import nairobiDiasporaCouncil from "@/assets/story-2.jpg";

// Partners data grouped by type with spotlight partners
const PARTNERS_BY_TYPE = [
  {
    type: "Corporate CSR Partners",
    icon: Building2,
    color: "primary",
    background: "cream",
    spotlight: [
      {
        name: "Schloss Hotel Berlin",
        logo: schlossHotel,
        partnership: "Providing venue and accommodations for our annual Women's Leadership Summit in Berlin, enabling crucial diaspora engagement.",
        url: "https://schloss-hotel-berlin.de"
      },
      {
        name: "Pride of Kenya Awards",
        logo: prideOfKenya,
        partnership: "Recognizing our work through their prestigious NGO of the Year award, amplifying our mission across Kenya and beyond.",
        url: "https://prideofkenya.co.ke"
      }
    ],
    partners: [
      "Schloss Hotel Berlin",
      "Pride of Kenya Awards",
      "Diaspora Leaders Forum",
      "Dignity Kits Coalition",
      "IMARA HER",
      "Nairobi Diaspora Council"
    ]
  },
  {
    type: "County Government Partners",
    icon: MapPin,
    color: "primary",
    background: "mist",
    spotlight: [
      {
        name: "Kitui County Government",
        logo: kituiCounty,
        partnership: "Collaborating on outreach programs that bring our IMARA HER mobile lab and sanitary towel drives to rural communities.",
        url: "https://kitui.go.ke"
      },
      {
        name: "Kisumu Women's Trust",
        logo: kisumuWomensTrust,
        partnership: "Grassroots partnership delivering menstrual health education and economic empowerment initiatives at the community level.",
        url: "https://kisumuwomenstrust.org"
      }
    ],
    partners: [
      "Kitui County Government",
      "Kisumu Women's Trust",
      "Nairobi County Health Department",
      "Machakos County Social Services"
    ]
  },
  {
    type: "Diaspora & Development Partners",
    icon: Globe,
    color: "primary",
    background: "cream",
    spotlight: [
      {
        name: "Diaspora Leaders Forum",
        logo: diasporaLeadersForum,
        partnership: "Connecting European-based African professionals with grassroots Kenyan enterprises through our Berlin summits.",
        url: "https://diaspora-leaders-forum.org"
      },
      {
        name: "Nairobi Diaspora Council",
        logo: nairobiDiasporaCouncil,
        partnership: "Facilitating remittances and skills transfer from the Kenyan diaspora in Europe to support local women's initiatives.",
        url: "https://nairobidiaspora.org"
      }
    ],
    partners: [
      "Diaspora Leaders Forum",
      "Nairobi Diaspora Council",
      "German Development Agency (GIZ)",
      "European Union Kenya Office",
      "UN Women Kenya",
      "African Diaspora Network"
    ]
  }
] as const;

export function PartnersSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <>
      {withHeading ? (
        <>
          <SectionHeading
            eyebrow="Partners"
            title="Trusted by institutions on two continents"
            description="Corporate CSR teams, county governments, diaspora networks and development partners who fund and carry this work with us."
            className="mb-16 lg:mb-20"
          />

          {/* Partners & Collaborators Marquee */}
          <section className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 h-0.5"
                 style={{ backgroundImage: "var(--gradient)" }}
                 aria-hidden="true">
            </div>

            <div className="mx-auto max-w-7xl px-6 py-12">
              <div className="space-y-6">
                <p className="text-xs font-manrope text-primary/70 uppercase tracking-wider">
                  PARTNERS & COLLABORATORS
                </p>
                <h2 className="text-3xl font-display text-plum md:text-4xl">
                  Those who move the work forward.
                </h2>

                {/* Logo Marquee */}
                <div className="relative overflow-hidden marquee-track">
                  <div className="flex space-x-12">
                    {/* First set of logos */}
                    <div className="flex space-x-12">
                      <img src="/assets/partners/ntv-kenya.svg" alt="NTV Kenya" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/glee-nairobi.svg" alt="Glee Hotel Nairobi" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/sarova-stanley.png" alt="Sarova Stanley Nairobi" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/lost-beach-rugby.png" alt="Lost Beach Rugby Festival" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                    </div>
                    {/* Second set of logos for seamless loop */}
                    <div className="flex space-x-12">
                      <img src="/assets/partners/ntv-kenya.svg" alt="NTV Kenya" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/glee-nairobi.svg" alt="Glee Hotel Nairobi" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/sarova-stanley.png" alt="Sarova Stanley Nairobi" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                      <img src="/assets/partners/lost-beach-rugby.png" alt="Lost Beach Rugby Festival" className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* Partners sections by type */}
      <div className="space-y-0">
        {PARTNERS_BY_TYPE.map((section, sectionIndex) => (
          <section
            key={section.type}
            className="relative"
            style={{ backgroundColor: `var(--${section.background})` }}
          >
            {/* Gradient rule as section separator (except for first section) */}
            {sectionIndex > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
                   style={{ backgroundImage: "var(--gradient)" }}
                   aria-hidden="true">
              </div>
            )}

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              <SectionHeading
                eyebrow={section.type}
                title="Our valued collaborators"
                className="mb-12 text-center"
              />

              {/* Spotlight Partners */}
              <Reveal as="div" key={`spotlight-${sectionIndex}`} delay={sectionIndex * 0.05}>
                <div className="grid gap-8 lg:grid-cols-[45%_45%] lg:justify-center">
                  {section.spotlight.map((partner, idx) => (
                    <div
                      key={partner.name}
                      className={`flex flex-col lg:flex-row items-start gap-8 border-l-4 border-${section.color}/20 pl-6 py-6`}
                    >
                      {/* Circular logo badge */}
                      <div className="flex-shrink-0 lg:flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-4 border-${section.color}/20 shadow-lg flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-display text-${section.color}">{partner.name}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {partner.partnership}
                        </p>
                        <Link to={partner.url} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            size="sm"
                            className={`border-${section.color}/20 hover:border-${section.color}/30 text-${section.color}`}
                          >
                            Visit Website
                            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* All Partners List */}
              <Reveal as="div" key={`all-partners-${sectionIndex}`} delay={sectionIndex * 0.05 + 0.1}>
                <div className="mt-16">
                  <h3 className="text-lg font-semibold text-${section.color} mb-6">
                    Complete Partner Network
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {section.partners.map((partnerName, idx) => (
                      <Reveal
                        key={partnerName}
                        delay={idx * 0.02}
                        as="div"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className={`border-${section.color}/20 hover:border-${section.color}/30 px-4 py-2 text-xs font-medium`}
                        >
                          {partnerName}
                        </Button>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        {/* Gradient CTA pause point - signature "pause point" for the page */}
        <section className="relative">
          {/* Full-width gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl py-16 px-6 text-center">
            <SectionHeading
              eyebrow="Join our network"
              title="Become a partner today"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Our partnership model is built on shared values, mutual respect, and a commitment to creating measurable impact that lasts.
              Whether you represent a corporation, government agency, or civil society organization, we welcome the opportunity to explore collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate">
                <Button
                  variant="gold"
                  size="lg"
                >
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}