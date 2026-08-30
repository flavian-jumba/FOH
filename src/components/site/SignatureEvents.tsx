import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PillTag } from "@/components/ui/pill-tag";
import { NumberedRow } from "@/components/ui/numbered-row";

export function SignatureEvents() {
  return (
    <section className="relative bg-[color:#17090E]">
      {/* Tinted photo background */}
      <div className="absolute inset-0 -z-20">
        <div className="inset-0 bg-[url('/assets/events-bg.jpg')] bg-cover bg-center" />
        <div className="inset-0 bg-[color:#17090E]/80" />
      </div>

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
                — CURATED GATHERINGS —
              </div>
            </motion.div>

            {/* H2: "Signature Events" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-4xl font-display font-bold text-white"
            >
              Signature Events
            </motion.h2>

            {/* Bordered notice box */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 p-4 border border-[color:#C9BFBB]/40 rounded-md"
            >
              <div className="flex items-start space-x-3">
                {/* Lock icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <span className="text-[color:#C9A76B]" aria-hidden="true">🔒</span>
                </div>
                <div className="flex-1">
                  <p className="text-[color:#FFFFFF] text-sm leading-relaxed">
                    SFN's flagship charity balls are invitation-only and not sold to the public. Attendance is reserved for verified diplomats, corporate leaders, and strategic partners.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: 3 numbered rows */}
          <div className="flex-1 space-y-6">
            {/* Row 1: TBC 2025 - SFN Grand Ball - Nairobi */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={1}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="maroon">INVITATION ONLY</PillTag>
                  <span className="ml-2">SFN Grand Ball</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#C9BFBB] text-sm leading-relaxed pl-8">
                Nairobi — location: "KICC · Kenyatta International Convention Centre" — "SFN's flagship charity ball — a curated gathering of diplomats, corporate leaders, and changemakers. Not sold to the public. Attendance is by verified invitation only."
              </p>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#C9BFBB]/40 my-6"></div>

            {/* Row 2: TBC 2025 - Nairobi Grand Ball */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={2}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="maroon">INVITATION ONLY</PillTag>
                  <span className="ml-2">Nairobi Grand Ball</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#C9BFBB] text-sm leading-relaxed pl-8">
                Nairobi Serena Hotel — "An elegant evening of philanthropy and recognition supporting the IMARA HER Mobile Lab and girl-child empowerment initiatives across rural Kenya."
              </p>
            </motion.div>

            {/* Divider line */}
            <div className="h-0.5 bg-[color:#C9BFBB]/40 my-6"></div>

            {/* Row 3: TBC 2025 - Empower HER Networking Dinner */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <NumberedRow index={3}>
                <div className="flex items-start space-x-2">
                  <PillTag variant="gold-outline">INTERNATIONAL SUMMIT</PillTag>
                  <span className="ml-2">Empower HER Networking Dinner</span>
                </div>
              </NumberedRow>
              <p className="mt-2 text-[color:#C9BFBB] text-sm leading-relaxed pl-8">
                Schlosshotel Berlin, Germany — "A luxury women's networking and empowerment dinner in Berlin, convening African and European women leaders under H.E. Ambassador Stella Mokaya Orina."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}