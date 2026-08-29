import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Link } from "@tanstack/react-router";
import { ORG } from "@/components/site/site-data";

const title = "Contact — Simply Feminine Network Kenya & Germany";
const description =
  "Reach the Simply Feminine Network team: simplyfemininenetwork@gmail.com, Kenya helpline +254 769 054 165, Germany diaspora liaison +49 1511 565 3888.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Add a short subject"),
  message: z.string().min(20, "Please share a little more (20+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50";

// Form state
const [sent, setSent] = useState(false);
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
} = useForm<FormValues>({ resolver: zodResolver(schema) });

const onSubmit = async (values: FormValues) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setSent(true);
  reset();
};

// Contact channels data
const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: ORG.email,
    href: `mailto:${ORG.email}`,
    background: "cream"
  },
  {
    icon: Phone,
    label: "Kenya operations helpline",
    value: ORG.phoneKe,
    href: `tel:${ORG.phoneKe.replace(/\s/g, "")}`,
    background: "mist"
  },
  {
    icon: Phone,
    label: "Germany diaspora liaison",
    value: ORG.phoneDe,
    href: `tel:${ORG.phoneDe.replace(/\s/g, "")}`,
    background: "cream"
  },
  {
    icon: MapPin,
    label: "Field presence",
    value: "Nairobi · Kitui · Kisumu · Berlin",
    href: undefined,
    background: "mist"
  }
] as const;

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what we can build together"
        description="Corporate CSR teams, development institutions, media and volunteers — our management team responds within three working days."
      />

      {/* Contact details section */}
      <section className="relative">
        {/* Gradient rule as top divider */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-0.5"
             style={{ backgroundImage: "var(--gradient)" }}
             aria-hidden="true">
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <Reveal as="div" key="contact-details-heading">
            <SectionHeading
              eyebrow="Get in touch"
              title="Reach our team"
              description="We're here to answer your questions about partnerships, volunteering, media inquiries, and support."
              className="mb-12"
            />
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact information column */}
            <Reveal as="div" key="contact-info-column" delay={0.05}>
              <div className="space-y-6">
                {CONTACT_CHANNELS.map((channel, index) => (
                  <div
                    key={channel.label}
                    className={`flex items-start gap-4 border-l-4 border-primary/20 pl-6 py-4`}
                  >
                    {/* Circular icon badge - signature motif */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <channel.icon className="h-5 w-5 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-plum">{channel.label}</h3>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="text-lg font-display font-semibold break-words hover:text-primary transition-colors"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-lg font-display font-semibold">{channel.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal as="div" key="contact-form-column" delay={0.1}>
              <div className="glass rounded-[2.5rem] p-7 shadow-lift sm:p-10">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 text-center"
                      role="status"
                    >
                      <span className="gradient-primary mx-auto grid size-18 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)]">
                        <CheckCircle2 className="size-8" aria-hidden="true" />
                      </span>
                      <h2 className="mt-6 font-display text-2xl font-semibold">Message received.</h2>
                      <p className="mx-auto mt-3 max-w-sm text-muted-foreground">
                        Thank you for reaching out. Our management team will be in touch shortly.
                      </p>
                      <Button variant="outline" className="mt-7" onClick={() => setSent(false)}>
                        Send another message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      className="space-y-5"
                    >
                      <h2 className="font-display text-2xl font-semibold">Send us a message</h2>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="c-name" className="text-sm font-medium">
                            Full name
                          </label>
                          <input
                            id="c-name"
                            className={fieldClass}
                            placeholder="Your name"
                            aria-invalid={!!errors.name}
                            {...register("name")}
                          />
                          {errors.name ? (
                            <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
                          ) : null}
                        </div>
                        <div>
                          <label htmlFor="c-email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="c-email"
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
                        <label htmlFor="c-subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="c-subject"
                          className={fieldClass}
                          placeholder="Partnership, media, volunteering…"
                          aria-invalid={!!errors.subject}
                          {...register("subject")}
                        />
                        {errors.subject ? (
                          <p className="mt-2 text-xs text-destructive">{errors.subject.message}</p>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="c-message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="c-message"
                          rows={6}
                          className={cn(fieldClass, "resize-none")}
                          placeholder="How would you like to work with us?"
                          aria-invalid={!!errors.message}
                          {...register("message")}
                        />
                        {errors.message ? (
                          <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
                        ) : null}
                      </div>
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
                            Send message
                          </>
                        )}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
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
            eyebrow="Support our mission"
            title="Every message moves us forward"
            className="mb-6"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're reaching out about partnership opportunities, media inquiries, volunteering,
            or simply to learn more about our work, your message helps us expand our reach and impact
            for women and children across Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/volunteer">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary/30"
              >
                Volunteer
              </Button>
            </Link>
            <Link to="/donate">
              <Button
                variant="gold"
                size="lg"
              >
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}