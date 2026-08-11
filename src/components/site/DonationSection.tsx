import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CreditCard, Heart, Smartphone } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const AMOUNTS = [500, 1000, 5000] as const;

const IMPACT: Record<number, string> = {
  500: "Provides dignity kits for 3 women leaving remand.",
  1000: "Covers a month of menstrual supplies for a classroom.",
  5000: "Fuels the IMARA HER mobile lab for a full outreach day.",
};

export function DonationSection({ withHeading = true }: { withHeading?: boolean }) {
  const [amount, setAmount] = useState<number | "custom">(1000);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<"mpesa" | "card">("mpesa");
  const [done, setDone] = useState(false);

  const resolved = amount === "custom" ? Number(custom) || 0 : amount;

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" id="donate">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-tint)" }}
        aria-hidden="true"
      />
      <div
        className="float-slow pointer-events-none absolute -right-24 -bottom-24 -z-10 size-96 rounded-full bg-[oklch(0.72_0.135_360_/_0.25)] blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {withHeading ? (
          <SectionHeading
            eyebrow="Give"
            title="Your gift becomes someone's first day of dignity"
            description="Every shilling is programmed against a named outcome — kits packed, girls back in class, women reintegrated."
          />
        ) : null}

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                Where your donation lands
              </h3>
              <ul className="space-y-5">
                {AMOUNTS.map((a) => (
                  <li key={a} className="flex gap-4 rounded-3xl bg-card p-5 shadow-soft">
                    <span className="gradient-primary grid size-12 shrink-0 place-items-center rounded-2xl font-display text-sm font-semibold text-primary-foreground">
                      {a >= 1000 ? `${a / 1000}K` : a}
                    </span>
                    <div>
                      <p className="font-semibold">KES {a.toLocaleString()}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{IMPACT[a]}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="rounded-3xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                This is a demonstration checkout. No payment is processed and no card or M-Pesa
                details are collected.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass relative overflow-hidden rounded-[2.5rem] p-7 shadow-lift sm:p-10">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-8 text-center"
                    role="status"
                  >
                    <motion.span
                      initial={{ scale: 0.4, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                      className="gradient-primary mx-auto grid size-20 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)]"
                    >
                      <CheckCircle2 className="size-9" aria-hidden="true" />
                    </motion.span>
                    <h3 className="mt-7 font-display text-3xl font-semibold">Asante sana.</h3>
                    <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted-foreground">
                      Your gift of{" "}
                      <strong className="text-foreground">KES {resolved.toLocaleString()}</strong>{" "}
                      via {method === "mpesa" ? "M-Pesa" : "card"} has been recorded. A receipt is
                      on its way to your inbox.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-8"
                      onClick={() => {
                        setDone(false);
                        setCustom("");
                      }}
                    >
                      Make another donation
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (resolved > 0) setDone(true);
                    }}
                  >
                    <p className="eyebrow text-primary-soft">Secure giving</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                      Make a donation
                    </h3>

                    <fieldset className="mt-8">
                      <legend className="text-sm font-semibold">Choose an amount</legend>
                      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {AMOUNTS.map((a) => (
                          <button
                            key={a}
                            type="button"
                            onClick={() => setAmount(a)}
                            aria-pressed={amount === a}
                            className={cn(
                              "h-14 rounded-2xl border text-sm font-semibold transition-all duration-300 hover:scale-[1.03]",
                              amount === a
                                ? "gradient-primary border-transparent text-primary-foreground shadow-[var(--shadow-glow)]"
                                : "border-border bg-card text-foreground hover:border-primary/40",
                            )}
                          >
                            KES {a.toLocaleString()}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setAmount("custom")}
                          aria-pressed={amount === "custom"}
                          className={cn(
                            "h-14 rounded-2xl border text-sm font-semibold transition-all duration-300 hover:scale-[1.03]",
                            amount === "custom"
                              ? "gradient-primary border-transparent text-primary-foreground shadow-[var(--shadow-glow)]"
                              : "border-border bg-card text-foreground hover:border-primary/40",
                          )}
                        >
                          Custom
                        </button>
                      </div>
                    </fieldset>

                    <AnimatePresence>
                      {amount === "custom" ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <label htmlFor="custom-amount" className="mt-6 block text-sm font-medium">
                            Custom amount (KES)
                          </label>
                          <input
                            id="custom-amount"
                            inputMode="numeric"
                            value={custom}
                            onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))}
                            placeholder="e.g. 2500"
                            className="mt-2 h-13 w-full rounded-2xl border border-border bg-card px-5 text-sm outline-none focus:border-primary/50"
                          />
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <fieldset className="mt-8">
                      <legend className="text-sm font-semibold">Payment method</legend>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {(
                          [
                            { id: "mpesa", label: "M-Pesa", icon: Smartphone },
                            { id: "card", label: "Credit / Debit", icon: CreditCard },
                          ] as const
                        ).map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setMethod(m.id)}
                            aria-pressed={method === m.id}
                            className={cn(
                              "flex h-14 items-center justify-center gap-2 rounded-2xl border text-sm font-semibold transition-all duration-300 hover:scale-[1.02]",
                              method === m.id
                                ? "border-primary bg-primary-tint text-primary"
                                : "border-border bg-card hover:border-primary/40",
                            )}
                          >
                            <m.icon className="size-4" aria-hidden="true" />
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>

                    <div className="mt-8 flex items-center justify-between rounded-2xl bg-primary-tint px-5 py-4">
                      <span className="text-sm text-muted-foreground">Total today</span>
                      <span className="font-display text-2xl font-semibold text-primary">
                        KES {resolved.toLocaleString()}
                      </span>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="mt-6 w-full"
                      disabled={resolved <= 0}
                    >
                      <Heart aria-hidden="true" />
                      Donate KES {resolved.toLocaleString()}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
