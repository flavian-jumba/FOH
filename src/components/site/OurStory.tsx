import { motion } from "framer-motion";
import { LeftBorderBlock } from "@/components/ui/left-border-block";
import storyMain from "@/assets/story-main.jpg";
import storySecondary from "@/assets/story-secondary.jpg";

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
              src={storyMain}
              alt="Tabitha Mwelu John, founder of Simply Feminine Network"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative w-full object-cover"
              style={{ aspectRatio: "4 / 5", boxShadow: "var(--shadow-lift)" }}
            />
            <div
              className="absolute right-0 -bottom-8 hidden w-56 p-6 lg:block"
              style={{ backgroundColor: "var(--charcoal)" }}
            >
              <p className="text-[0.6rem] font-semibold tracking-[0.3em] text-gold uppercase">
                Accolade
              </p>
              <p className="mt-2 font-display text-lg leading-snug font-semibold text-cream">
                NGO of the Year 2025
              </p>
            </div>
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
            Built by Women,
            <br />
            <span className="italic font-light" style={{ color: "var(--burgundy)" }}>
              for Women.
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
              “Women of Purpose — Giving Back with Grace.”
            </p>
            <p className="mt-3 pl-5 text-[0.6rem] font-semibold tracking-[0.32em] text-gold uppercase">
              SFN Motto
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
              Simply Feminine Network is a women-led NGO founded by Tabitha Mwelu John with a
              singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of
              their journey.
            </p>
            <p>
              From rural Kenya to the corridors of Schlosshotel Berlin, SFN operates at the
              intersection of health advocacy, economic empowerment, and community dignity.
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
                  <span className="text-[color:#4A0E24] font-semibold">Purpose</span>
                  <span className="text-[color:#6E6660]">
                    Every initiative is anchored in a clear, measurable impact for women and girls.
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
                  <span className="text-[color:#4A0E24] font-semibold">Grace</span>
                  <span className="text-[color:#6E6660]">
                    We serve with dignity, warmth, and the quiet power of a united sisterhood.
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
                  <span className="text-[color:#4A0E24] font-semibold">Action</span>
                  <span className="text-[color:#6E6660]">
                    From mobile labs to global summits — we don't just advocate. We do.
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
