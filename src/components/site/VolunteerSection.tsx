import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, PartyPopper, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a reachable phone number"),
  reason: z.string().min(20, "A little more detail helps us place you well (20+ characters)"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "mt-2 w-full rounded-2xl border border-border bg-card px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50";

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
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32" id="volunteer">
      {withHeading ? (
        <SectionHeading
          eyebrow="Volunteer"
          title="Bring your hands, your skill, your Saturday"
          description="Paralegals, counsellors, tailors, drivers, photographers, fundraisers — the movement has a place for what you already know how to do."
        />
      ) : null}

      <Reveal className="mx-auto mt-14 max-w-2xl">
        <div className="glass rounded-[2.5rem] p-7 shadow-lift sm:p-10">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-6 text-center"
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
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
