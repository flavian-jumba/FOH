import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function SponsorshipTiers() {
  return (
    <section className="relative bg-[color:#FBF1E8]">
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
                — CORPORATE ALLIANCE —
              </div>
            </motion.div>

            {/* H2: "Sponsorship" / "Tiers" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-2 text-4xl font-display leading-none text-[color:#1F1B1D]"
            >
              <div className="block">Sponsorship</div>
              <div className="block mt-2">
                <span className="text-[color:#4A0E24] font-display italic">Tiers</span>
              </div>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[color:#6E6660] leading-relaxed"
            >
              SFN welcomes corporate and institutional partners through a structured sponsorship framework. Each tier offers distinct visibility, access, and impact.
            </motion.p>

            {/* Solid maroon button: "REQUEST PARTNERSHIP PACK" */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <Link
                to="/partners"
                className="flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider bg-[color:#4A0E24] text-[color:#FFFFFF] rounded-md hover:bg-[color:#3E0F22] transition-colors"
              >
                REQUEST PARTNERSHIP PACK
              </Link>
            </motion.div>
          </div>

          {/* Right column: stacked list of 8 rows */}
          <div className="flex-1 space-y-4">
            {/* Row 1: Title Partner (HIGHLIGHTED) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-[color:#4A0E24] text-[color:#FFFFFF] px-4 py-3 rounded-lg">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#4A0E24]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">1.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#FFFFFF] text-base font-display font-bold">
                        Title Partner
                      </h3>
                      <p className="text-[color:#FFFFFF] text-[0.875rem] font-manrope leading-relaxed">
                        Premier naming rights and highest visibility across all SFN platforms and events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 2: Platinum Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">2.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Platinum Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Top-tier brand presence at flagship events and year-round digital partnership.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 3: Gold Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">3.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Gold Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Prominent recognition across events, media coverage, and community programmes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 4: Silver Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">4.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Silver Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Recognised partnership across select SFN events and online channels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 5: Official Media Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">5.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Official Media Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Exclusive broadcasting and media rights for SFN's major charitable events.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 6: Hospitality Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">6.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Hospitality Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Luxury venue and hospitality collaboration for SFN's invitation-only balls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 7: Fashion & Luxury Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.84, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">7.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Fashion & Luxury Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Brand integration into SFN's fashion, styling, and luxury programming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-4"></div>

            {/* Row 8: Strategic Development Partner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.96, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-3">
                <div className="flex items-start space-x-3">
                  {/* Small colored dot bullet */}
                  <div className="flex-shrink-0 mt-0.5">
                    <span className="text-[color:#C9A76B]">●</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start">
                      <span className="font-bold">8.</span>
                    </div>
                    <div className="mt-0.5 space-y-1">
                      <h3 className="text-[color:#1F1B1D] text-base font-display font-bold">
                        Strategic Development Partner
                      </h3>
                      <p className="text-[color:#6E6660] text-[0.875rem] font-manrope leading-relaxed">
                        Long-term strategic alignment with SFN's mission, projects, and global expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}