import { motion } from "framer-motion";

export function FourPillars() {
  return (
    <section className="relative bg-[color:#3E0F22]">
      {/* Tinted photo background */}
      <div className="absolute inset-0 -z-20">
        <div className="inset-0 bg-[url('/assets/pillars-bg.jpg')] bg-cover bg-center" />
        <div className="inset-0 bg-[color:#3E0F22]/60" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        {/* Centered eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-center"
        >
          <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
            — WHAT WE STAND FOR —
          </div>
        </motion.div>

        {/* Centered H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 text-4xl font-display font-bold text-white text-center"
        >
          Our 4 Pillars of Advocacy
        </motion.h2>

        {/* Centered subtext */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-base text-[color:#FFFFFF]/90 max-w-xl mx-auto text-center"
        >
          Every programme, event, and partnership SFN undertakes is anchored in one of four core advocacy areas.
        </motion.p>

        {/* 4-column row with thin vertical dividers */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex gap-8"
        >
          {/* Pillar 1: Women's Health / Endometriosis Awareness */}
          <div className="flex-1 border-r-[1px] border-[color:#C9BFBB]/40">
            <div className="flex items-start space-x-3">
              {/* Small outline icon in gold */}
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-[color:#C9A76B]">○</span>
              </div>
              <div className="flex-1 space-y-1">
                {/* Small gold index number */}
                <div className="flex items-start">
                  <span className="text-[color:#C9A76B] font-mono">01</span>
                </div>
                <div className="mt-0.5 space-y-1">
                  {/* Bold white title */}
                  <h3 className="text-[color:#FFFFFF] text-base font-display">Women's Health / Endometriosis Awareness</h3>
                  {/* Small uppercase gray subtitle */}
                  <p className="text-[color:#C9BFBB] text-[0.875rem] font-manrope uppercase tracking-wider">
                    Education, advocacy, and amplifying voices
                  </p>
                  {/* Gray body paragraph */}
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Providing education, advocacy, and amplifying voices around Endometriosis — a condition affecting 1 in 10 women globally that remains critically under-discussed across Africa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: End GBV / Gender-Based Violence */}
          <div className="flex-1 border-r-[1px] border-[color:#C9BFBB]/40">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-[color:#C9A76B]">○</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start">
                  <span className="text-[color:#C9A76B] font-mono">02</span>
                </div>
                <div className="mt-0.5 space-y-1">
                  <h3 className="text-[color:#FFFFFF] text-base font-display">End GBV / Gender-Based Violence</h3>
                  <p className="text-[color:#C9BFBB] text-[0.875rem] font-manrope uppercase tracking-wider">
                    Awareness, support, and policy advocacy
                  </p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Fighting Gender-Based Violence through awareness campaigns, survivor support, and policy-level advocacy that demands accountability and lasting systemic change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Mentorship / Leadership Development */}
          <div className="flex-1 border-r-[1px] border-[color:#C9BFBB]/40">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-[color:#C9A76B]">○</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start">
                  <span className="text-[color:#C9A76B] font-mono">03</span>
                </div>
                <div className="mt-0.5 space-y-1">
                  <h3 className="text-[color:#FFFFFF] text-base font-display">Mentorship / Leadership Development</h3>
                  <p className="text-[color:#C9BFBB] text-[0.875rem] font-manrope uppercase tracking-wider">
                    Skills, confidence, and networks
                  </p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Structured mentorship programmes and capacity-building initiatives that equip girls and women entrepreneurs with the skills, confidence, and networks to lead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 4: Community Uplift / Social Empowerment */}
          <div className="flex-1">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="text-[color:#C9A76B]">○</span>
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-start">
                  <span className="text-[color:#C9A76B] font-mono">04</span>
                </div>
                <div className="mt-0.5 space-y-1">
                  <h3 className="text-[color:#FFFFFF] text-base font-display">Community Uplift / Social Empowerment</h3>
                  <p className="text-[color:#C9BFBB] text-[0.875rem] font-manrope uppercase tracking-wider">
                    Dignity programmes and grassroots interventions
                  </p>
                  <p className="text-[color:#C9BFBB] text-sm leading-relaxed">
                    Restoring the dignity of the girl-child through targeted social support, sanitary dignity programmes, and community-led grassroots interventions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}