import { motion } from "framer-motion";

export function FourPillars() {
  return (
    <section
      id="pillars"
      className="section-pad relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, var(--burgundy) 0%, color-mix(in oklab, var(--burgundy) 82%, var(--charcoal)) 55%, var(--charcoal) 100%)",
      }}
    >
      {/* Tinted photo background */}
      <div className="absolute inset-0 -z-20">
        <div className="inset-0 bg-[url('/assets/pillars-bg.jpg')] bg-cover bg-center" />
        <div className="inset-0 bg-[color:#3E0F22]/60" />
      </div>

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider"
            >
              — WHAT WE STAND FOR —
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl font-display text-4xl leading-[1.08] font-semibold text-cream lg:text-[3.4rem]"
            >
              Our <span className="italic-accent">Focus Areas</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-sm leading-relaxed text-cream/65"
            >
              Four connected areas of work that help girls, young women and youth build a future
              with dignity, skills and opportunity.
            </motion.p>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              title: "Teen Mothers' Reintegration",
              sub: "Education & Opportunity",
              copy: "Helping teenage mothers return to school, access vocational and economic opportunities, and build a pathway toward independence.",
            },
            {
              title: "Women & Youth in Agribusiness",
              sub: "Skills & Sustainable Income",
              copy: "Training young women and youth in poultry farming, agribusiness, financial literacy and entrepreneurship for sustainable income generation.",
            },
            {
              title: "Menstrual Health & Hygiene",
              sub: "Dignity & Participation",
              copy: "Supporting access to menstrual products, reproductive health education and awareness so girls can remain in school and participate confidently in daily life.",
            },
            {
              title: "Mental Health & Well-being",
              sub: "Nhanga Sessions",
              copy: "Creating safe spaces for young women to discuss challenges, receive mentorship, access psychosocial support and build peer connection.",
            },
          ].map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              as="li"
            >
              <div
                className="group h-full p-8 transition-colors duration-500 lg:p-9"
                style={{
                  backgroundColor: "color-mix(in oklab, var(--cream) 5%, transparent)",
                  border: "1px solid color-mix(in oklab, var(--cream) 10%, transparent)",
                }}
              >
                <h3 className="font-display text-2xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-2 text-[0.68rem] font-semibold tracking-[0.22em] text-rose-light uppercase">
                  {p.sub}
                </p>
                <span
                  className="mt-6 block h-px w-10 transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: "var(--gold)" }}
                />
                <p className="mt-6 text-sm leading-relaxed text-cream/65">{p.copy}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
