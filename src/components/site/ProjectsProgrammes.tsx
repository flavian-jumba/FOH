import { Link } from "@tanstack/react-router";

import dignityImage from "@/assets/program-dignity.jpg";
import justiceImage from "@/assets/program-justice.jpg";
import mentorshipImage from "@/assets/program-mentorship.jpg";
import { Reveal } from "./Reveal";

const PROJECTS = [
  {
    id: "imara-her",
    eyebrow: "Flagship Initiative",
    title: "IMARA HER Project &",
    titleItalic: "Mobile Lab",
    body: "SFN's cornerstone community project. Vocational training, sanitary dignity products, and reproductive health services delivered to girls and women in rural Kenya — with a dedicated mobile clinic travelling to the most underserved interior communities.",
    image: dignityImage,
    alt: "Dignity kits with sanitary products prepared for distribution in rural Kenya",
    cta: "Explore the impact",
    solid: true,
  },
  {
    id: "empower-her-berlin",
    eyebrow: "International Relations",
    title: "Empower HER",
    titleItalic: "Berlin Chapter",
    body: "SFN's international wing in Germany. Convening African diaspora women and European leaders under the theme 'Leadership, Empowerment, Healing and Global Collaboration' — a reciprocal flow of talent, capital, and mentorship.",
    image: justiceImage,
    alt: "African diaspora women and European leaders in conversation at a summit",
    cta: "View programme details",
    solid: false,
  },
  {
    id: "leadership-academy",
    eyebrow: "Professional Growth",
    title: "SFN Leadership",
    titleItalic: "Academy",
    body: "A transformative programme equipping women with executive presence, strategic thinking, and the tools to lead — unapologetically and on their own terms.",
    image: mentorshipImage,
    alt: "Young women in a leadership and mentorship workshop",
    cta: "Join the academy",
    solid: false,
  },
] as const;

export function ProjectsProgrammes() {
  return (
    <section className="relative bg-[color:#FBF1E8] font-karla text-[color:#1F1B1D]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-16 lg:py-32">
        <Reveal className="mb-24 max-w-2xl">
          <span className="mb-6 block text-[0.7rem] font-bold tracking-[0.4em] text-[color:#C8A24D] uppercase">
            Active Initiatives
          </span>
          <h2 className="font-cormorant text-5xl leading-[0.95] font-light lg:text-6xl">
            Projects &amp; <span className="italic">Programmes</span>
          </h2>
        </Reveal>

        <div className="space-y-32 lg:space-y-48">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <Reveal className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </Reveal>

              <Reveal delay={0.08} className="w-full lg:w-1/2">
                <span className="mb-6 block text-[0.7rem] font-bold tracking-[0.3em] text-[color:#C8A24D] uppercase">
                  {project.eyebrow}
                </span>
                <h3 className="mb-8 font-cormorant text-4xl leading-tight font-light lg:text-5xl">
                  {project.title}
                  <br />
                  <span className="italic">{project.titleItalic}</span>
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-[color:#1F1B1D]/70">{project.body}</p>
                <Link
                  to="/programs"
                  className={`inline-block px-10 py-4 text-xs font-bold tracking-widest uppercase transition-all hover:-translate-y-1 ${
                    project.solid
                      ? "bg-[color:#4A0E24] text-[color:#FBF1E8] hover:bg-[color:#17090E]"
                      : "border border-[color:#4A0E24] text-[color:#4A0E24] hover:bg-[color:#4A0E24] hover:text-[color:#FBF1E8]"
                  }`}
                >
                  {project.cta}
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
