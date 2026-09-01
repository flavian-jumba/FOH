import { createFileRoute } from "@tanstack/react-router";
import { OurStory } from "@/components/site/OurStory";

const title = "Our Mission — Simply Feminine Network";
const description =
  "Our mission is to serve, uplift, and celebrate women at every stage of their journey through women's health advocacy, ending gender-based violence, mentorship, and community empowerment.";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/mission" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: MissionPage,
});

function MissionPage() {
  return (
    <>
      <section className="relative bg-[color:#FBF1E8]">
        <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-8 py-20">
          <div className="text-[color:#C9A76B] text-xs font-manrope uppercase tracking-wider mb-4">
            — OUR MISSION —
          </div>
          <h1 className="text-4xl font-display font-bold text-[color:#1F1B1D] mb-2">Our Mission</h1>
          <h2 className="text-[color:#4A0E24] text-3xl font-display italic mb-6">
            To serve, uplift, and celebrate women
          </h2>
          <p className="text-[color:#6E6660] text-base leading-relaxed mb-6">
            Simply Feminine Network is a women-led NGO founded by Tabitha Mwelu John with a
            singular, unwavering purpose: to serve, uplift, and celebrate women at every stage of
            their journey.
          </p>
          <p className="text-[color:#6E6660] text-base leading-relaxed">
            We pursue this mission through our four pillars of advocacy: Women's
            Health/Endometriosis Awareness, Ending Gender-Based Violence, Mentorship/Leadership
            Development, and Community Uplift/Social Empowerment. From rural Kenya to global
            summits, we work to ensure every woman has access to healthcare, dignity, education, and
            the opportunity to thrive.
          </p>
        </div>
      </section>
    </>
  );
}
