import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative bg-[color:#FBF1E8]">
      <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
        {/* Centered eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-center"
        >
          <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider">
            — VOICES OF OUR COMMUNITY —
          </div>
        </motion.div>

        {/* Centered H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-4xl font-display font-bold text-[color:#1F1B1D] text-center"
        >
          What Our Members Say
        </motion.h2>

        {/* 3-column testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-8 sm:grid-cols-3"
        >
          {/* Card 1: HIGHLIGHTED - solid maroon background, white text */}
          <div className="relative bg-[color:#4A0E24] text-[color:#FFFFFF] p-6 rounded-lg">
            {/* Quote mark icon */}
            <div className="mb-4 text-[color:#FFFFFF]/50 text-[2.5rem]" aria-hidden="true">
              "
            </div>
            <p className="mb-4 text-[color:#FFFFFF] text-[1.125rem] font-display leading-relaxed">
              Simply Feminine Network gave me the community and the courage I didn't know I needed. Within six months I had launched my business and found my people.
            </p>
            <div className="flex items-start space-x-3">
              {/* Avatar photo */}
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[color:#C9BFBB]/20">
                <span className="text-[color:#FFFFFF]/50 text-[1.25rem]" aria-hidden="true">👤</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[color:#FFFFFF] font-semibold">Adaeze Okafor</p>
                <p className="text-[color:#FFFFFF]/80 text-[0.875rem]">Founder, Haus of Adaeze</p>
              </div>
            </div>
          </div>

          {/* Card 2: white background, maroon quote icon */}
          <div className="relative bg-[color:#FFFFFF] border-[color:#4A0E24] p-6 rounded-lg">
            <div className="mb-4 text-[color:#4A0E24] text-[2.5rem]" aria-hidden="true">
              "
            </div>
            <p className="mb-4 text-[color:#6E6660] text-[1.125rem] font-display leading-relaxed">
              The mentorship programme changed my career trajectory completely. My mentor became my greatest champion, and I became someone else's.
            </p>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[color:#C9BFBB]/20">
                <span className="text-[color:#6E6660]/50 text-[1.25rem]" aria-hidden="true">👤</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[color:#6E6660] font-semibold">Priya Sharma</p>
                <p className="text-[color:#6E6660]/80 text-[0.875rem]">Director, Global Partnerships</p>
              </div>
            </div>
          </div>

          {/* Card 3: white background */}
          <div className="relative bg-[color:#FFFFFF] p-6 rounded-lg">
            <div className="mb-4 text-[color:#C9BFBB] text-[2.5rem]" aria-hidden="true">
              "
            </div>
            <p className="mb-4 text-[color:#6E6660] text-[1.125rem] font-display leading-relaxed">
              I walked into the Leadership Academy as a manager. I walked out as a CEO in the making. The transformation was real, and it was lasting.
            </p>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[color:#C9BFBB]/20">
                <span className="text-[color:#6E6660]/50 text-[1.25rem]" aria-hidden="true">👤</span>
              </div>
              <div className="space-y-0.5">
                <p className="text-[color:#6E6660] font-semibold">Sophia Mensah</p>
                <p className="text-[color:#6E6660]/80 text-[0.875rem]">CEO, Luminary Health</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel dot indicators below */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex justify-center space-x-2"
        >
          {/* First dot active/maroon */}
          <div className="h-2.5 w-2.5 rounded-full bg-[color:#4A0E24]"></div>
          {/* Remaining dots gray */}
          <div className="h-2.5 w-2.5 rounded-full bg-[color:#C9BFBB]/40"></div>
          <div className="h-2.5 w-2.5 rounded-full bg-[color:#C9BFBB]/40"></div>
        </motion.div>
      </div>
    </section>
  );
}