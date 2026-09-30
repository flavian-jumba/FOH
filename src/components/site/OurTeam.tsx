import { useState } from "react";
import { ChevronDown } from "lucide-react";

import ajuangShammah from "@/assets/board/ajuang-shammah.jpg.png";
import joanWanyama from "@/assets/board/joan-wanyama.jpg.png";
import roselynBarasa from "@/assets/board/roselyn-barasa.jpg.png";
import tessyMwasiagi from "@/assets/board/tessy-mwasiagi.jpg.png";
import { cn } from "@/lib/utils";
import { Eyebrow, Reveal } from "./Reveal";

const BOARD_MEMBERS = [
  {
    id: "ajuang-shammah",
    name: "Ajuang Shammah",
    role: "Founder, Executive Director & Board Secretary",
    image: ajuangShammah,
    imagePosition: "14% 30%",
    bio: "Ajuang Shammah is the Founder and Executive Director of Footprints of Hope. She provides strategic and organisational leadership for the work of the organisation, while also serving as Secretary to the Board. Her leadership keeps the Board connected to the communities, programmes and purpose at the heart of Footprints of Hope.",
  },
  {
    id: "roselyn-barasa",
    name: "Ms Roselyn Barasa",
    role: "Board Chair",
    image: roselynBarasa,
    imagePosition: "50% 22%",
    bio: "Ms Roselyn Barasa chairs the Board of Directors. She is passionate about ensuring adolescent girls and young women have access to quality education and the opportunity to thrive. Based in Busia, she also runs a Level 5 hospital and a funeral home, bringing practical leadership and a deep commitment to community wellbeing to Footprints of Hope.",
  },
  {
    id: "joan-wanyama",
    name: "Joan Wangui Wanyama",
    role: "Board Member · Resource Mobilization",
    image: joanWanyama,
    imagePosition: "50% 25%",
    bio: "Joan Wangui Wanyama leads resource mobilization for the Board. She is a Ph.D. candidate at the University of North Carolina at Chapel Hill School of Social Work and a Research Associate at Global Social Development Innovations (GSDI). With more than a decade of experience, Joan has coordinated and supported child safeguarding, gender mainstreaming, disability inclusion and community-service initiatives across Sub-Saharan Africa. Her research focuses on data-driven interventions that improve health and economic outcomes for adolescent girls and young women in low- and middle-income countries.",
  },
  {
    id: "tessy-mwasiagi",
    name: "Tessy Mwasiagi",
    role: "Operations & Programme Coordination",
    image: tessyMwasiagi,
    imagePosition: "50% 18%",
    bio: "Tessy Mwasiagi is responsible for operations and programme coordination across Busia County. She helps ensure Footprints of Hope programmes are thoughtfully planned, well supported and delivered consistently for the girls, young women and communities we serve.",
  },
] as const;

type BoardMember = (typeof BOARD_MEMBERS)[number];

function Portrait({
  member,
  activeId,
  openMember,
  onHover,
  className,
}: {
  member: BoardMember;
  activeId: string | null;
  openMember: (id: string) => void;
  onHover: (id: string | null) => void;
  className: string;
}) {
  const isActive = activeId === member.id;
  const isDimmed = activeId !== null && !isActive;

  return (
    <button
      type="button"
      className={cn(
        "group relative flex shrink-0 cursor-pointer overflow-hidden border border-[color:color-mix(in_oklab,var(--cream)_20%,transparent)] text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy",
        className,
        isDimmed ? "opacity-35" : "opacity-100",
      )}
      aria-label={`Read ${member.name}'s full profile`}
      onClick={() => openMember(member.id)}
      onFocus={() => onHover(member.id)}
      onBlur={() => onHover(null)}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: member.imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(41,20,25,0.75))]" />
      <span className="absolute right-3 bottom-3 left-3 text-[0.58rem] font-semibold tracking-[0.13em] text-cream uppercase">
        {member.name}
      </span>
    </button>
  );
}

export function OurTeam() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);
  const columns = [
    BOARD_MEMBERS.filter((_, index) => index % 3 === 0),
    BOARD_MEMBERS.filter((_, index) => index % 3 === 1),
    BOARD_MEMBERS.filter((_, index) => index % 3 === 2),
  ];
  const openMember = (id: string) => {
    setActiveId(id);
    setOpenMemberId((current) => (current === id ? null : id));
  };
  return (
    <section
      id="team"
      className="section-pad overflow-hidden bg-cream"
      aria-labelledby="board-title"
    >
      <div className="shell">
        <Reveal className="max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2
            id="board-title"
            className="mt-5 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.4rem]"
          >
            Meet our <span className="italic font-light text-burgundy">Board</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our Board brings together experience, care and a shared commitment to expanding
            opportunity for girls and young women in Busia County.
          </p>
        </Reveal>

        <Reveal className="mt-14" delay={80}>
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
            <div className="flex w-full max-w-[35rem] shrink-0 gap-2 overflow-x-auto pb-2 sm:gap-3 lg:w-[52%] lg:overflow-visible">
              {columns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className={cn(
                    "flex flex-col gap-2 sm:gap-3",
                    columnIndex === 1 && "mt-12 sm:mt-16",
                    columnIndex === 2 && "mt-6 sm:mt-9",
                  )}
                >
                  {column.map((member) => (
                    <Portrait
                      key={member.id}
                      member={member}
                      activeId={activeId}
                      openMember={openMember}
                      onHover={setActiveId}
                      className={cn(
                        "h-32 w-28 sm:h-40 sm:w-36 md:h-44 md:w-40",
                        columnIndex === 1 && "sm:h-44 sm:w-40 md:h-48 md:w-44",
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="w-full lg:flex-1 lg:pt-3">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
                {BOARD_MEMBERS.map((member) => {
                  const isActive = activeId === member.id;
                  const isOpen = openMemberId === member.id;
                  const contentId = `${member.id}-profile`;

                  return (
                    <div
                      key={member.id}
                      className={cn(
                        "border-b border-[color:color-mix(in_oklab,var(--burgundy)_16%,transparent)] pb-4 transition-opacity duration-300 lg:pb-5",
                        activeId !== null && !isActive ? "opacity-40" : "opacity-100",
                      )}
                      onMouseEnter={() => setActiveId(member.id)}
                      onMouseLeave={() => setActiveId(null)}
                    >
                      <button
                        type="button"
                        className="w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => openMember(member.id)}
                        onFocus={() => setActiveId(member.id)}
                        onBlur={() => setActiveId(null)}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "h-2.5 rounded-full bg-burgundy/25 transition-all duration-300",
                              isActive ? "w-7 bg-burgundy" : "w-3",
                            )}
                          />
                          <span
                            className={cn(
                              "font-display text-xl font-semibold text-charcoal transition-colors",
                              isActive && "text-burgundy",
                            )}
                          >
                            {member.name}
                          </span>
                          <ChevronDown
                            className={cn(
                              "ml-auto h-4 w-4 shrink-0 text-burgundy transition-transform duration-300",
                              isOpen && "rotate-180",
                            )}
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-2 pl-6 text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
                          {member.role}
                        </p>
                      </button>
                      <div
                        id={contentId}
                        className={cn(
                          "grid transition-[grid-template-rows,margin] duration-300",
                          isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]",
                        )}
                      >
                        <p className="overflow-hidden pl-6 text-sm leading-relaxed text-charcoal/80">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
