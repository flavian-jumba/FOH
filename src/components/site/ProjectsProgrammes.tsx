import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import impactOne from "@/assets/ourimpact/01.png";
import impactTwo from "@/assets/ourimpact/02.png";
import impactThree from "@/assets/ourimpact/03.png";
import impactFour from "@/assets/ourimpact/04.png";
import impactFive from "@/assets/ourimpact/05.png";

const projects = [
  {
    num: "01",
    image: impactOne,
    tag: "Learning & Opportunity",
    title: "Education & Vocational Skills Development",
    copy: "Creating opportunities for learning, mentorship and practical skills development so young people can build confident, independent futures.",
  },
  {
    num: "02",
    image: impactTwo,
    tag: "Health & Dignity",
    title: "Health & Social Wellbeing",
    copy: "Promoting menstrual health, sexual and reproductive health and rights (SRHR), psychosocial wellbeing, and access to trusted community health information.",
  },
  {
    num: "03",
    image: impactThree,
    tag: "Livelihoods & Enterprise",
    title: "Women & Economic Empowerment",
    copy: "Supporting women and young people with entrepreneurship, financial literacy and livelihood opportunities. Through our collaboration with KNCCI, women are strengthening their businesses and access to loans and grants.",
  },
  {
    num: "04",
    image: impactFour,
    tag: "Voice & Participation",
    title: "Youth Leadership & Governance",
    copy: "Creating spaces for young people to participate, lead and contribute to decisions that affect their communities, including through the ORPP programme for youth involvement in political action.",
  },
  {
    num: "05",
    image: impactFive,
    tag: "Peace & Resilience",
    title: "Peacebuilding & Community Resilience",
    copy: "Strengthening peaceful, resilient communities, particularly in underserved and border communities, through RANA and our partnership with the National Counterterrorism Center on preventing and countering violent extremism (PCVE).",
  },
] as const satisfies readonly {
  num: string;
  image: string;
  tag: string;
  title: string;
  copy: string;
}[];

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
                  — OUR IMPACT —
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]"
              >
                Five focus areas.
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
                FOH works with young people, women and underserved communities to create locally
                driven solutions that improve lives and strengthen communities.
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
                      <img
                        src={p.image}
                        alt={p.title}
                        className="aspect-[4/5] w-full object-cover border border-[color:color-mix(in_oklab,var(--burgundy)_20%,transparent)]"
                      />
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
