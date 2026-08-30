import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PillTag } from "@/components/ui/pill-tag";
import { NumberedRow } from "@/components/ui/numbered-row";

export function ProjectsProgrammes() {
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
                — ACTIVE INITIATIVES —
              </div>
            </motion.div>

            {/* H2: "Projects &" / "Programmes" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-2 text-4xl font-display leading-none text-[color:#1F1B1D]"
            >
              <div className="block">Projects &</div>
              <div className="block mt-2">
                <span className="text-[color:#4A0E24] font-display italic">Programmes</span>
              </div>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[color:#6E6660] leading-relaxed"
            >
              From a mobile health lab in rural Kenya to a luxury empowerment summit in Berlin — SFN's work is as diverse as the women it serves.
            </motion.p>

            {/* Outline button: "GET INVOLVED" */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <Link
                to="/programs"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-manrope uppercase tracking-wider border border-[color:#4A0E24] bg-transparent text-[color:#4A0E24] rounded-md hover:bg-[color:#4A0E24]/10 transition-colors"
              >
                GET INVOLVED
              </Link>
            </motion.div>
          </div>

          {/* Right column: 4 numbered rows */}
          <div className="flex-1 space-y-6">
            {/* Row 1: IMARA HER Project */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={1}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="pink">FLAGSHIP INITIATIVE</PillTag>
                  <span className="ml-2">IMARA HER Project</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#6E6660] text-sm leading-relaxed pl-8">
                SFN's cornerstone community project. Delivers vocational training, sanitary dignity products, and reproductive health services to girls and women in rural Kenya.
              </p>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-6"></div>

            {/* Row 2: IMARA HER Mobile Lab */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={2}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="lavender">MOBILE HEALTH</PillTag>
                  <span className="ml-2">IMARA HER Mobile Lab</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#6E6660] text-sm leading-relaxed pl-8">
                A dedicated mobile clinic travelling to Kenya's most underserved interior communities, providing reproductive health services and psychosocial support on the ground.
              </p>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-6"></div>

            {/* Row 3: Empower HER Berlin */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={3}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="gold-outline">
                    GLOBAL CHAPTER 🇩🇪
                  </PillTag>
                  <span className="ml-2">Empower HER Berlin</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#6E6660] text-sm leading-relaxed pl-8">
                SFN's international wing in Germany. Convenes African diaspora women and European leaders under the theme 'Leadership, Empowerment, Healing and Global Collaboration.'
              </p>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#6E6660]/20 my-6"></div>

            {/* Row 4: Leadership Academy */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={4}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="maroon">PROFESSIONAL GROWTH</PillTag>
                  <span className="ml-2">Leadership Academy</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#6E6660] text-sm leading-relaxed pl-8">
                A transformative programme equipping women with executive presence, strategic thinking, and the tools to lead — unapologetically and on their own terms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}