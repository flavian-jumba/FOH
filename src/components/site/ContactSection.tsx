import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="relative bg-[color:#4A0E24]">
      {/* Diagonal-stripe texture overlay pattern - using a subtle pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="inset-0 bg-[url('/assets/contact-bg.jpg')] bg-cover bg-center" />
        <div className="inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />
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
                — GET IN TOUCH —
              </div>
            </motion.div>

            {/* H2: "Partner With" / "Simply Feminine" */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-4xl font-display leading-none text-[color:#FFFFFF]"
            >
              <div className="block">Partner With</div>
              <div className="block mt-2">
                <span className="text-[color:#E7A9BC] font-display italic">Simply Feminine</span>
              </div>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-[color:#FFFFFF]/90 leading-relaxed"
            >
              Whether you are a corporation seeking a meaningful CSR partnership, a diplomat, a media house, or an individual who believes in the mission — SFN welcomes you.
            </motion.p>

            {/* Contact info list */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 space-y-4"
            >
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[color:#C9A76B] font-manrope">EMAIL</span>
                <span className="ml-2 text-[color:#FFFFFF]">simplyfemininenetwork@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[color:#C9A76B] font-manrope">KENYA</span>
                <span className="ml-2 text-[color:#FFFFFF]">+254 769 054 165</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[color:#C9A76B] font-manrope">GERMANY</span>
                <span className="ml-2 text-[color:#FFFFFF]">+49 1511 565 3888</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="flex-shrink-0 text-[color:#C9A76B] font-manrope">INSTAGRAM</span>
                <span className="ml-2 text-[color:#FFFFFF]">@simplyfemininenetwork</span>
              </div>
            </motion.div>
          </div>

          {/* Right column: cream card containing a form */}
          <div className="flex-1 bg-[color:#FBF1E8] rounded-[1.5rem] p-8">
            {/* Heading */}
            <motion.h3
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 text-[color:#4A0E24] text-[1.5rem] font-display font-bold"
            >
              Express Your Interest
            </motion.h3>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[color:#6E6660] text-[0.875rem] leading-relaxed"
            >
              Our team will respond within 48 hours.
            </motion.p>

            {/* Form */}
            <form className="space-y-6">
              {/* First Name / Last Name (two columns) */}
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Amara"
                  className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50"
                />
                <input
                  type="text"
                  placeholder="Johnson"
                  className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50"
                />
              </div>

              {/* Email Address */}
              <input
                type="email"
                placeholder="you@organisation.com"
                className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50"
              />

              {/* Organisation/Profession */}
              <input
                type="text"
                placeholder="e.g. Barclays Kenya, Freelance Consultant"
                className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50"
              />

              {/* Partnership Interest (dropdown) */}
              <select
                className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50"
              >
                <option value="" disabled selected>Select a sponsorship tier...</option>
                <option value="title-partner">Title Partner</option>
                <option value="platinum-partner">Platinum Partner</option>
                <option value="gold-partner">Gold Partner</option>
                <option value="silver-partner">Silver Partner</option>
                <option value="media-partner">Official Media Partner</option>
                <option value="hospitality-partner">Hospitality Partner</option>
                <option value="fashion-partner">Fashion & Luxury Partner</option>
                <option value="strategic-partner">Strategic Development Partner</option>
              </select>

              {/* Message (textarea) */}
              <textarea
                placeholder="Tell us about yourself and how you'd like to collaborate..."
                rows="4"
                className="w-full px-4 py-3 text-[color:#6E6660] bg-[color:#FFFFFF]/50 border border-[color:#C9BFBB]/30 rounded-[0.75rem] focus:outline-none focus:ring-2 focus:ring-[color:#4A0E24]/50 resize-none"
              />
            </form>

            {/* Full-width solid maroon button: "SEND MESSAGE" */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-manrope uppercase tracking-wider bg-[color:#4A0E24] text-[color:#FFFFFF] rounded-[0.75rem] hover:bg-[color:#3E0F22] transition-colors"
              >
                SEND MESSAGE
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}