import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Loader2, PartyPopper, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Link } from "@tanstack/react-router";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a reachable phone number"),
  reason: z.string().min(20, "A little more detail helps us place you well (20+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50";

// Volunteer roles data
const VOLUNTEER_ROLES = [
  {
    title: "Prison Outreach Companion",
    description: "Accompany our team to remand facilities and prisons to distribute dignity kits, provide companionship, and support reintegration efforts.",
    timeCommitment: "1-2 days per month",
    skills: ["Interpersonal skills", "Empathy", "Cultural sensitivity"],
    background: "cream"
  },
  {
    title: "Dignity Kit Packing Team",
    description: "Help assemble and pack essential hygiene kits containing sanitary products, undergarments, and toiletries for women and girls in need.",
    timeCommitment: "3-4 hours per session",
    skills: ["Organization", "Attention to detail", "Teamwork"],
    background: "mist"
  },
  {
    title: "Mentorship Facilitator",
    description: "Lead or assist in vocational training workshops, mental health circles, or enterprise mentorship sessions through our IMARA HER mobile lab.",
    timeCommitment: "Weekly or bi-weekly sessions",
    skills: ["Teaching/training", "Vocational skills", "Mental health awareness"],
    background: "cream"
  },
  {
    title: "Transport & Logistics Volunteer",
    description: "Support our outreach operations by helping with transportation, equipment setup, and logistical coordination for field teams.",
    timeCommitment: "Flexible, based on outreach schedules",
    skills: ["Driving", "Logistics", "Physical stamina"],
    background: "mist"
  },
  {
    title: "Storytelling & Documentation",
    description: "Help document our work through photography, videography, writing, or social media to share impact stories and raise awareness.",
    timeCommitment: "Project-based",
    skills: ["Photography/videography", "Writing", "Social media"],
    background: "cream"
  },
  {
    title: "Fundraising & Events Support",
    description: "Assist with organizing fundraising events, donor outreach, or campaign support to help sustain our programs financially.",
    timeCommitment: "Flexible, event-based",
    skills: ["Event planning", "Fundraising", "Donor relations"],
    background: "mist"
  }
] as const;

export function VolunteerSection({ withHeading = true }: { withHeading?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 900));
    void values;
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {withHeading ? (
        <SectionHeading
          eyebrow="Volunteer"
          title="Bring your hands, your skill, your Saturday"
          description="Paralegals, counsellors, tailors, drivers, photographers, fundraisers — the movement has a place for what you already know how to do."
          className="mb-16 lg:mb-20"
        />
      ) : null}

      {/* Introduction section - why volunteer */}
      <section className="relative" style={{ backgroundColor: "var(--mist)" }}>
        {/* Gradient rule as section divider */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
             style={{ backgroundImage: "var(--gradient)" }}
             aria-hidden="true">
        </div>

        <div className="mx-auto max-w-4xl px-6 py-20 lg:py-24">
          <Reveal as="div" key="volunteer-intro">
            <h2 className="text-3xl font-bold text-plum mb-6">
              Why Volunteer with SFN?
            </h2>
            <p className="text-base text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
              Volunteering with Simply Feminine Network means joining a movement that restores dignity,
              empowers women, and transforms communities. Your time and skills directly support our
              prison outreach, dignity kit drives, mentorship programs, and community initiatives
              across Kenya.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Volunteer roles section - editorial grid with alternating backgrounds */}
      <div className="space-y-0">
        {VOLUNTEER_ROLES.map((role, index) => (
          <section
            key={role.title}
            className="relative"
            style={{ backgroundColor: `var(--${role.background})` }}
          >
            {/* Gradient rule as section separator (except for first section) */}
            {index > 0 && (
              <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
                   style={{ backgroundImage: "var(--gradient)" }}
                   aria-hidden="true">
              </div>
            )}

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
              {/* Asymmetric two-column layout */}
              <div className="grid gap-16 lg:grid-cols-[40%_60%]">
                {/* Icon/illustration column */}
                <Reveal
                  key={`${role.title}-icon`}
                  delay={index * 0.08}
                  as="div"
                  className="flex items-center justify-center"
                >
                  <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center shadow-lg">
                    {/* Using a simple icon - in reality would be more illustrative */}
                    <span className="text-primary text-xl">🤝</span>
                  </div>
                </Reveal>

                {/* Content column */}
                <Reveal
                  key={`${role.title}-content`}
                  delay={index * 0.08 + 0.1}
                  as="div"
                  className="space-y-4"
                >
                  <h3 className="text-xl font-display text-plum">{role.title}</h3>
                  <p className="text-muted-foreground">{role.description}</p>
                  <div className="grid gap-4 lg:grid-cols-2 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">Time commitment:</span>
                      <span>{role.timeCommitment}</span>
                    </div>
                    <div>
                      <span className="font-medium">Skills valued:</span>
                      <span>{role.skills.join(", ")}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors">
                    Learn how to apply
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        ))}

        {/* Form section - in a card with white background */}
        <section className="relative" style={{ backgroundColor: "var(--cream)" }}>
          {/* Gradient rule as section divider */}
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
            <Reveal as="div" key="volunteer-form-heading">
              <SectionHeading
                eyebrow="Join our team"
                title="Ready to get involved?"
                description="Tell us about yourself and how you'd like to contribute, and we'll find the right fit for your skills and availability."
                className="mb-8"
              />
            </Reveal>

            <Reveal as="div" key="volunteer-form">
              <div className="glass rounded-[2.5rem] p-7 shadow-lift sm:p-10">
                <AnimatePresence mode="wait">
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="v-name" className="text-sm font-medium">
                          Full name
                        </label>
                        <input
                          id="v-name"
                          className={fieldClass}
                          placeholder="Amina Otieno"
                          aria-invalid={!!errors.name}
                          {...register("name")}
                        />
                        {errors.name ? (
                          <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="v-email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="v-email"
                          type="email"
                          className={fieldClass}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                          {...register("email")}
                        />
                        {errors.email ? (
                          <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="v-phone" className="text-sm font-medium">
                        Phone number
                      </label>
                      <input
                        id="v-phone"
                        type="tel"
                        className={fieldClass}
                        placeholder="+254 7XX XXX XXX"
                        aria-invalid={!!errors.phone}
                        {...register("phone")}
                      />
                      {errors.phone ? (
                        <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="v-reason" className="text-sm font-medium">
                        Why do you want to volunteer?
                      </label>
                      <textarea
                        id="v-reason"
                        rows={5}
                        className={cn(fieldClass, "resize-none")}
                        placeholder="Tell us what you'd love to contribute…"
                        aria-invalid={!!errors.reason}
                        {...register("reason")}
                      />
                      {errors.reason ? (
                        <p className="mt-2 text-xs text-destructive">{errors.reason.message}</p>
                      ) : null}
                    </div>

                    <motion.div whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send aria-hidden="true" />
                            Join the volunteer network
                          </>
                        )}
                      </Button>
                    </motion.div>

                  </motion.form>
                  {submitted ? (
                    <motion.div
                      key="ok"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-6 text-center mt-8"
                      role="status"
                    >
                      <span className="gradient-primary mx-auto grid size-18 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)]">
                        <PartyPopper className="size-8" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 font-display text-2xl font-semibold">
                        Welcome to the network.
                      </h3>
                      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                        Our volunteer coordinator will reach out within three working days with the next
                        outreach dates.
                      </p>
                      <Button variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>
                        Submit another response
                      </Button>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Gradient CTA pause point - signature "pause point" for the page */}
        <section className="relative">
          {/* Full-width gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10"
               style={{ backgroundImage: "var(--gradient)" }}
               aria-hidden="true">
          </div>

          <div className="mx-auto max-w-3xl py-16 px-6 text-center">
            <SectionHeading
              eyebrow="Share your skills"
              title="Your time changes lives"
              className="mb-6"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Every volunteer brings something unique to our movement. Whether you can spare a few hours
              a month or bring professional expertise to share, your contribution helps us reach more
              women and children in need of dignity and empowerment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/donate">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/30"
                >
                  Donate to Support Volunteers
                </Button>
              </Link>
              <Button
                variant="gold"
                size="lg"
              >
                Share This Opportunity
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}