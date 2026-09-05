import { createFileRoute } from "@tanstack/react-router";
import { OurStory } from "@/components/site/OurStory";

const title = "Our Mission — Footprints of Hope";
const description =
  "Footprints of Hope creates pathways to education, economic independence, menstrual health and psychosocial wellbeing in Busia County, Kenya.";

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
            Obtaining diamonds from the rough
          </h2>
          <p className="text-[color:#6E6660] text-base leading-relaxed mb-6">
            Footprints of Hope is a community-driven organization in Busia County, Kenya,
            transforming the lives of adolescent girls, young women and youth through economic
            empowerment, menstrual health education and psychosocial support.
          </p>
          <p className="text-[color:#6E6660] text-base leading-relaxed">
            We work through teen mothers' reintegration, women and youth in agribusiness, menstrual
            health and hygiene, and mental health and well-being through Nhanga Sessions. Our aim is
            not temporary assistance, but lasting education, dignity, skills and opportunity.
          </p>
        </div>
      </section>
    </>
  );
}
