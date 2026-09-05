import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import teenImage from "@/assets/teen.png";
import agribusinessImage from "@/assets/agri.png";
import menstrualHealthImage from "@/assets/menstral.png";
import mentalHealthImage from "@/assets/mental.png";

const projects = [
  {
    num: "01",
    img: teenImage,
    alt: "Teen mothers supported through Footprints of Hope",
    tag: "Education & Opportunity",
    title: "Teen Mothers' Reintegration Program",
    copy: "Helping teenage mothers return to school, regain educational opportunities and access vocational or economic pathways toward independence.",
  },
  {
    num: "02",
    img: agribusinessImage,
    alt: "Women and youth participating in agribusiness",
    tag: "Skills & Income",
    title: "Women & Youth in Agribusiness",
    copy: "Training young women and youth in poultry farming, agribusiness, financial literacy and entrepreneurship to support sustainable income generation.",
  },
  {
    num: "03",
    img: menstrualHealthImage,
    alt: "Menstrual health and hygiene education",
    tag: "Health & Dignity",
    title: "Menstrual Health & Hygiene",
    copy: "Improving access to menstrual products, reproductive health education and menstrual health awareness so girls can remain in school and participate with confidence.",
  },
  {
    num: "04",
    img: mentalHealthImage,
    alt: "Mental health and wellbeing support session",
    tag: "Safe Spaces & Support",
    title: "Mental Health & Well-being",
    copy: "Nhanga Sessions create safe spaces for young women to discuss challenges, receive mentorship and psychosocial support, and strengthen community and peer connection.",
  },
];

export function ProjectsProgrammes() {
  return (
    <section id="projects" className="section-pad bg-cream">
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4"
              >
                <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
                  — OUR WORK —
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]"
              >
                Four focus areas.
                <br />
                <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
                  One shared purpose.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                FOH works with girls, young women and youth in Busia County through practical,
                community-driven programmes that build education, dignity, skills and opportunity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10"
              >
                <Link to="/programs" className="btn-base btn-outline-dark">
                  Explore Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <motion.ul
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-px"
              >
                {projects.map((p, i) => (
                  <motion.li
                    key={p.num}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.36 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    as="li"
                  >
                    <article className="hairline group grid gap-6 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
                      <div className="overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.alt}
                          width={1200}
                          height={1504}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ aspectRatio: "4 / 5" }}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-sm font-semibold tracking-[0.2em] text-gold/60">
                            {p.num}
                          </span>
                          <span
                            className="text-[0.62rem] font-semibold tracking-[0.26em] uppercase"
                            style={{ color: "var(--rose)" }}
                          >
                            {p.tag}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-2xl leading-tight font-semibold text-charcoal lg:text-[1.75rem]">
                          {p.title}
                        </h3>
                        <p
                          className="mt-4 text-sm leading-relaxed"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {p.copy}
                        </p>
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
