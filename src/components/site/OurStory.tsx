import { motion } from "framer-motion";
import { LeftBorderBlock } from "@/components/ui/left-border-block";
import ceoImage from "@/assets/ceo.png";

export function OurStory() {
  return (
    <section id="story" className="section-pad bg-cream">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        {/* Image column */}
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -top-5 -left-5 hidden h-full w-full lg:block"
              style={{ border: "1px solid color-mix(in oklab, var(--gold) 55%, transparent)" }}
            />
            <img
              src={ceoImage}
              alt="Footprints of Hope representative"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full object-cover"
              style={{ aspectRatio: "4 / 5", boxShadow: "var(--shadow-lift)" }}
            />
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
              — OUR STORY —
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]"
          >
            From vulnerability
            <br />
            <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
              to opportunity.
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mt-7 border-l-2 pl-5 font-display text-xl leading-snug italic lg:text-2xl"
              style={{ borderColor: "var(--gold)", color: "var(--burgundy)" }}
            >
              “Obtaining Diamonds From The Rough.”
            </p>
            <p className="mt-3 pl-5 text-[0.6rem] font-semibold tracking-[0.32em] text-gold uppercase">
              Footprints of Hope
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 space-y-5 text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            <p>
              Footprints of Hope is a community-driven organization in Busia County, Kenya,
              transforming the lives of adolescent girls, young women and youth through economic
              empowerment, menstrual health education and psychosocial support.
            </p>
            <p>
              Poverty can interrupt education and limit financial independence. Teenage mothers may
              struggle to return to school, while young women can face limited access to business
              skills, capital and markets. FOH responds with pathways to learning, skills, dignity
              and sustainable opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Purpose */}
            <motion.div
              key="purpose"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Dignity</span>
                  <span className="text-[color:#6E6660]">
                    We centre the resilience, potential and agency of every girl and young woman.
                  </span>
                </div>
              </LeftBorderBlock>
            </motion.div>

            {/* Grace */}
            <motion.div
              key="grace"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Opportunity</span>
                  <span className="text-[color:#6E6660]">
                    We help create practical routes to education, skills and economic independence.
                  </span>
                </div>
              </LeftBorderBlock>
            </motion.div>

            {/* Action */}
            <motion.div
              key="action"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Hope</span>
                  <span className="text-[color:#6E6660]">
                    Sustainable opportunities help communities break cycles of poverty.
                  </span>
                </div>
              </LeftBorderBlock>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
