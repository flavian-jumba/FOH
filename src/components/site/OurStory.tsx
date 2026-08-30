import { Image } from "next/image";
import { motion } from "framer-motion";
import { LeftBorderBlock } from "@/components/ui/left-border-block";
import { PillTag } from "@/components/ui/pill-tag";

export function OurStory() {
  return (
    <section className="relative bg-[color:#FBF1E8]">
      {/* Two-column layout */}
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Left column: image collage */}
          <div className="relative">
            {/* Main portrait photo */}
            <Image
              src="/assets/story-main.jpg"
              alt="Woman in a blazer, thumbs up gesture"
              className="rounded-none w-full h-[400px] object-cover"
              width={800}
              height={400}
              style={{ objectPosition: "center" }}
            />

            {/* Small maroon badge card overlapping top-left */}
            <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-[color:#4A0E24] text-[color:#FFFFFF] text-[0.65rem]">
              🏆
            </div>

            {/* Second smaller photo overlapping bottom-right */}
            <Image
              src="/assets/story-secondary.jpg"
              alt="Second supporting image"
              className="absolute bottom-4 right-4 w-[100px] h-[100px] rounded-md object-cover object-top-left border-2 border-[color:#FBF1E8]"
              width={100}
              height={100}
            />
          </div>

          {/* Right column: text content */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
              — OUR STORY —
            </div>

            {/* H2: "Built by Women," / "For Women" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-4xl font-display leading-none text-[color:#1F1B1D]"
            >
              <div className="block">Built by Women,</div>
              <div className="block mt-2">
                <span className="text-[color:#4A0E24] font-display italic">For Women</span>
              </div>
            </motion.h2>

            {/* First paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[color:#6E6660] leading-relaxed"
            >
              Simply Feminine Network is a women-led NGO founded by <span className="font-semibold">Tabitha Mwelu John</span> with a singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of their journey.
            </motion.p>

            {/* Second paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[color:#6E6660] leading-relaxed"
            >
              From rural Kenya to the corridors of Schlosshotel Berlin, SFN operates at the intersection of health advocacy, economic empowerment, and community dignity — and was honoured as the NGO of the Year at the 2025 Pride of Kenya Awards.
            </motion.p>

            {/* Left-border pull-quote block */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <LeftBorderBlock borderColor="maroon">
                <p className="text-[color:#4A0E24] text-[1.125rem] font-display italic leading-relaxed">
                  Women of Purpose — Giving Back with Grace.
                </p>
                <p className="mt-2 text-[color:#6E6660] text-[0.875rem] font-manrope uppercase tracking-wider">
                  SFN MOTTO
                </p>
              </LeftBorderBlock>
            </motion.div>

            {/* Three separate left-border list items */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Purpose */}
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Purpose</span>
                  <span className="text-[color:#6E6660]">Every initiative is anchored in a clear, measurable impact for women and girls.</span>
                </div>
              </LeftBorderBlock>

              {/* Grace */}
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Grace</span>
                  <span className="text-[color:#6E6660]">We serve with dignity, warmth, and the quiet power of a united sisterhood.</span>
                </div>
              </LeftBorderBlock>

              {/* Action */}
              <LeftBorderBlock borderColor="maroon">
                <div className="flex items-start space-x-2">
                  <span className="text-[color:#4A0E24] font-semibold">Action</span>
                  <span className="text-[color:#6E6660]">From mobile labs to global summits — we don't just advocate. We do.</span>
                </div>
              </LeftBorderBlock>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}