import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function PartnersCollaborators() {
  return (
    <section className="relative bg-[color:#17090E]">
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="flex gap-12">
          {/* Left column */}
          <div className="flex-1 space-y-6">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
                — OUR GLOBAL NETWORK —
              </div>
            </motion.div>

            {/* H2: "Partners &" / "Collaborators" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-4xl font-display leading-none text-[color:#FFFFFF]"
            >
              <div className="block">Partners &</div>
              <div className="block mt-2">
                <span className="text-[color:#E7A9BC] font-display italic">Collaborators</span>
              </div>
            </motion.h2>

            {/* Right-aligned paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-base text-[color:#C9BFBB] leading-relaxed text-right"
            >
              From Nairobi to Berlin, SFN is backed by diplomats, media houses, luxury venues, and grassroots organisations who share our vision.
            </motion.p>

            {/* Tab row */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-center space-x-4 text-[color:#C9A76B] text-[0.875rem] font-manrope uppercase tracking-wider"
            >
              <span className="border-b-2 border-[color:#C9A76B] pb-1">🇩🇪 EMPOWER HER BERLIN</span>
              <span>🇰🇪 KENYA PARTNERS</span>
              <span>🏛 VENUE PARTNERS</span>
              <span>🎗 COMMUNITY & SPORTS</span>
            </motion.div>

            {/* Card grid for active "Empower HER Berlin" tab */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid gap-6 sm:grid-cols-[45%_45%] lg:grid-cols-[30%_30%_30%]"
            >
              {/* Entry 1: Kenyan Embassy in Germany */}
              <div className="flex flex-col lg:flex-row items-start gap-6 border-l-4 border-[color:#C9A76B]/20 pl-6">
                {/* Circular logo badge */}
                <div className="flex-shrink-0 lg:flex-shrink-0 h-12 w-12 rounded-full border-4 border-[color:#C9A76B]/20 flex items-center justify-center bg-[color:#C9A76B]/20">
                  <span className="text-[color:#FFFFFF]">KE</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[color:#C9A76B] text-xl font-display">Kenyan Embassy in Germany</h3>
                  <p className="text-[color:#C9BFBB] text-[color:#C9A76B] font-sm">DIPLOMATIC</p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Diplomatic Patron — H.E. Ambassador Stella Mokaya Orina
                  </p>
                </div>
              </div>

              {/* Entry 2: Schlosshotel Berlin */}
              <div className="flex flex-col lg:flex-row items-start gap-6 border-l-4 border-[color:#C9A76B]/20 pl-6">
                <div className="flex-shrink-0 lg:flex-shrink-0 h-12 w-12 rounded-full border-4 border-[color:#C9A76B]/20 flex items-center justify-center bg-[color:#C9A76B]/20">
                  <span className="text-[color:#FFFFFF]">SB</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[color:#C9A76B] text-xl font-display">Schlosshotel Berlin</h3>
                  <p className="text-[color:#C9BFBB] text-[color:#C9A76B] font-sm">VENUE</p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Exclusive Luxury Hospitality & Summit Venue Partner
                  </p>
                </div>
              </div>

              {/* Entry 3: Esther Bornefeld */}
              <div className="flex flex-col lg:flex-row items-start gap-6 border-l-4 border-[color:#C9A76B]/20 pl-6">
                <div className="flex-shrink-0 lg:flex-shrink-0 h-12 w-12 rounded-full border-4 border-[color:#C9A76B]/20 flex items-center justify-center bg-[color:#C9A76B]/20">
                  <span className="text-[color:#FFFFFF]">EB</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[color:#C9A76B] text-xl font-display">Esther Bornefeld</h3>
                  <p className="text-[color:#C9BFBB] text-[color:#C9A76B] font-sm">LEADERSHIP</p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Strategic Partner & Keynote Speaker — Empower HER Berlin
                  </p>
                </div>
              </div>

              {/* Entry 4: Miss Africa International */}
              <div className="flex flex-col lg:flex-row items-start gap-6 border-l-4 border-[color:#C9A76B]/20 pl-6">
                <div className="flex-shrink-0 lg:flex-shrink-0 h-12 w-12 rounded-full border-4 border-[color:#C9A76B]/20 flex items-center justify-center bg-[color:#C9A76B]/20">
                  <span className="text-[color:#FFFFFF]">MA</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[color:#C9A76B] text-xl font-display">Miss Africa International</h3>
                  <p className="text-[color:#C9BFBB] text-[color:#C9A76B] font-sm">AMBASSADOR</p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Stephanie Oben — International Diaspora Ambassador
                  </p>
                </div>
              </div>

              {/* Entry 5: Iman Star Pfalz */}
              <div className="flex flex-col lg:flex-row items-start gap-6 border-l-4 border-[color:#C9A76B]/20 pl-6">
                <div className="flex-shrink-0 lg:flex-shrink-0 h-12 w-12 rounded-full border-4 border-[color:#C9A76B]/20 flex items-center justify-center bg-[color:#C9A76B]/20">
                  <span className="text-[color:#FFFFFF]">IS</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[color:#C9A76B] text-xl font-display">Iman Star Pfalz</h3>
                  <p className="text-[color:#C9BFBB] text-[color:#C9A76B] font-sm">DIASPORA</p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Anita Wangoro — African Diaspora Business Network
                  </p>
                </div>
              </div>

              {/* Empty last grid cell */}
              <div className="hidden lg:block"></div>
            </motion.div>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex justify-between items-center"
            >
              <p className="text-[color:#C9BFBB] text-sm">
                Interested in a partnership or sponsorship alliance with SFN?
              </p>
              <Link
                to="/partners"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider border border-[color:#C9BFBB] bg-transparent text-[color:#C9BFBB] rounded-md hover:bg-[color:#C9BFBB]/10 transition-colors"
              >
                BECOME A PARTNER
              </Link>
            </motion.div>
          </div>

          {/* Right column placeholder for other tabs */}
          <div className="flex-1 hidden lg:block">
            {/* This would show content for other tabs when implemented with state */}
            <p className="text-[color:#C9BFBB] text-center py-12">
              Select a tab to view partner details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}