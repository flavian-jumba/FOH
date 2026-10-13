import { useEffect, useState, type FormEvent } from "react";
import { CreditCard, Heart, Lock, Mail, Smartphone, type LucideIcon } from "lucide-react";

import {
  fetchDonationSettings,
  startPaystackDonation,
  type DonationCurrency,
  type DonationSettings,
} from "@/lib/payments";
import { cn } from "@/lib/utils";
import { ORG } from "./site-data";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type CurrencyOption = {
  /** Shown on the currency switch. */
  name: string;
  /** Goes in front of an amount: "$50", "KES 1,000". */
  prefix: string;
  presets: number[];
  defaultAmount: number;
  /** What donors can choose inside the Paystack checkout window for this currency. */
  waysToPay: { icon: LucideIcon; label: string; detail: string }[];
  summary: string;
  hint: string;
};

const CURRENCIES: Record<DonationCurrency, CurrencyOption> = {
  USD: {
    name: "US dollars",
    prefix: "$",
    presets: [25, 50, 100, 250],
    defaultAmount: 50,
    waysToPay: [{ icon: CreditCard, label: "Card", detail: "Visa · Mastercard" }],
    summary: "One secure card checkout, charged in US dollars.",
    hint: "You will pay by card, in US dollars, in the Paystack window.",
  },
  KES: {
    name: "Kenyan shillings",
    prefix: "KES ",
    presets: [500, 1000, 2500, 5000],
    defaultAmount: 1000,
    waysToPay: [
      { icon: Smartphone, label: "M-Pesa", detail: "STK prompt or Till" },
      { icon: Smartphone, label: "Airtel Money", detail: "Mobile money" },
      { icon: CreditCard, label: "Card", detail: "Visa · Mastercard" },
    ],
    summary: "One secure checkout. Pick how you pay in the next step.",
    hint: "You will choose M-Pesa, Airtel Money or card in the Paystack window.",
  },
};

// Donors in Kenya think in shillings and mostly pay by M-Pesa; everyone else is shown the first
// currency on offer.
function isVisitingFromKenya() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone === "Africa/Nairobi";
  } catch {
    return false;
  }
}

const labelClass =
  "block text-[0.62rem] font-semibold tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase";

export function DonationForm() {
  // Shillings until the server says otherwise, so the form is usable the moment it renders.
  const [settings, setSettings] = useState<DonationSettings>({
    currencies: ["KES"],
    usdRate: null,
  });
  const [currency, setCurrency] = useState<DonationCurrency>("KES");
  const [preset, setPreset] = useState<number | null>(CURRENCIES.KES.defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const option = CURRENCIES[currency];
  const amount = preset ?? Number(customAmount);
  const hasAmount = Number.isInteger(amount) && amount >= 1;
  const formattedAmount = hasAmount
    ? `${option.prefix}${amount.toLocaleString("en-US")}`
    : `${option.prefix}—`;

  // Until Paystack charges this account in dollars, a dollar gift is shown in dollars and
  // charged as the same value in shillings.
  const { currencies, usdRate } = settings;
  const canConvert = usdRate !== null && !currencies.includes("USD");
  const offered: DonationCurrency[] = canConvert ? ["USD", ...currencies] : currencies;
  const converted = canConvert && currency === "USD";
  const chargedKes = converted && hasAmount ? Math.round(amount * usdRate) : null;
  const chargedLabel = chargedKes ? `KES ${chargedKes.toLocaleString("en-US")}` : null;
  const summary = converted
    ? "Shown in US dollars. Your card is charged the same value in Kenyan shillings."
    : option.summary;
  const hint = !converted
    ? option.hint
    : chargedLabel
      ? `Your card is charged ${chargedLabel}, about ${formattedAmount}. Your bank converts it, so your statement may differ slightly.`
      : "Your card is charged the same value in Kenyan shillings.";

  function chooseCurrency(next: DonationCurrency) {
    setCurrency(next);
    // 1,000 means something very different in dollars, so never carry an amount across.
    setPreset(CURRENCIES[next].defaultAmount);
    setCustomAmount("");
    setMessage("");
    setStatus((current) => (current === "error" ? "idle" : current));
  }

  useEffect(() => {
    let cancelled = false;
    fetchDonationSettings().then((loaded) => {
      if (cancelled) return;
      setSettings(loaded);
      const showsDollars = loaded.currencies.includes("USD") || loaded.usdRate !== null;
      // Otherwise the server lists its preferred currency first.
      const preferred = showsDollars && !isVisitingFromKenya() ? "USD" : loaded.currencies[0];
      if (preferred && preferred !== "KES") {
        setCurrency(preferred);
        setPreset(CURRENCIES[preferred].defaultAmount);
        setCustomAmount("");
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!hasAmount) {
      setStatus("error");
      setMessage(`Choose an amount, or enter a whole number of at least ${option.prefix}1.`);
      return;
    }
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setStatus("error");
      setMessage("Enter a valid email address so we can send your receipt.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const result = await startPaystackDonation(
        chargedKes
          ? { amount: chargedKes, email: trimmedEmail, currency: "KES", shownUsd: amount }
          : { amount, email: trimmedEmail, currency },
      );
      if (result === "cancelled") {
        setStatus("idle");
        setMessage("Checkout was closed before payment. You have not been charged.");
        return;
      }
      setStatus("success");
      setMessage(
        result === "success"
          ? `Your gift of ${chargedLabel ? `${formattedAmount} (charged as ${chargedLabel})` : formattedAmount} was received. A receipt is on its way to ${trimmedEmail}.`
          : `Your payment is still being confirmed. We will email a receipt to ${trimmedEmail} once it completes.`,
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  function reset() {
    setStatus("idle");
    setMessage("");
    setPreset(option.defaultAmount);
    setCustomAmount("");
  }

  return (
    <section className="mt-10 grid overflow-hidden border border-[color:var(--border)] bg-white shadow-[var(--shadow-soft)] lg:grid-cols-[2fr_3fr]">
      <aside className="relative flex flex-col overflow-hidden bg-burgundy p-7 text-cream sm:p-9">
        <div
          className="pointer-events-none absolute -right-20 -bottom-24 h-64 w-64 rounded-full bg-gold/20 blur-3xl"
          aria-hidden="true"
        />
        <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
          Your gift
        </p>
        <p
          className="mt-3 font-display text-4xl font-semibold tabular-nums sm:text-5xl"
          aria-live="polite"
        >
          {formattedAmount}
        </p>
        {chargedLabel ? (
          <p className="mt-2 text-sm font-semibold tabular-nums text-gold">
            Charged as {chargedLabel}
          </p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-cream/70">{summary}</p>

        <ul className="relative mt-8 space-y-3">
          {option.waysToPay.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 bg-white/5">
                <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block text-xs text-cream/60">{detail}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="relative mt-auto pt-10 text-xs leading-relaxed text-cream/60">
          <p className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Secured by Paystack. Card details never touch this site.
          </p>
          <p className="mt-3">
            Giving from abroad or by bank transfer?{" "}
            <a href={`mailto:${ORG.email}`} className="text-cream underline underline-offset-2">
              Email us
            </a>
            .
          </p>
        </div>
      </aside>

      {status === "success" ? (
        <div className="flex flex-col items-center justify-center p-8 text-center sm:p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:color-mix(in_oklab,var(--burgundy)_10%,white)]">
            <Heart className="h-6 w-6 fill-burgundy text-burgundy" aria-hidden="true" />
          </span>
          <h3 className="mt-6 font-display text-3xl font-semibold text-charcoal">Thank you</h3>
          <p
            className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--muted-foreground)]"
            role="status"
          >
            {message}
          </p>
          <button type="button" className="btn-base btn-primary mt-8" onClick={reset}>
            Give again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-7 sm:p-9" noValidate>
          {offered.length > 1 ? (
            <fieldset className="mb-8">
              <legend className={labelClass}>Give in</legend>
              <div className="mt-4 grid grid-cols-2 border border-[color:var(--border)]">
                {offered.map((code) => {
                  const active = currency === code;
                  return (
                    <button
                      key={code}
                      type="button"
                      onClick={() => chooseCurrency(code)}
                      aria-pressed={active}
                      className={cn(
                        "px-4 py-3 text-sm font-semibold transition-colors duration-200",
                        active
                          ? "bg-burgundy text-cream"
                          : "bg-white text-charcoal hover:text-burgundy",
                      )}
                    >
                      {CURRENCIES[code].name}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ) : null}

          <fieldset>
            <legend className={labelClass}>Choose an amount, or enter your own</legend>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {option.presets.map((value) => {
                const active = preset === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setPreset(value);
                      setCustomAmount("");
                    }}
                    aria-pressed={active}
                    className={cn(
                      "border px-4 py-4 text-left transition-all duration-200",
                      active
                        ? "border-burgundy bg-burgundy text-cream shadow-[var(--shadow-soft)]"
                        : "border-[color:var(--border)] bg-white text-charcoal hover:border-burgundy",
                    )}
                  >
                    <span
                      className={cn(
                        "block text-[0.6rem] font-semibold tracking-[0.2em] uppercase",
                        active ? "text-gold" : "text-[color:var(--muted-foreground)]",
                      )}
                    >
                      {currency}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-semibold tabular-nums">
                      {value.toLocaleString("en-US")}
                    </span>
                  </button>
                );
              })}
            </div>

            <label
              className={cn(
                "mt-3 flex items-center gap-3 border px-4 py-4 transition-colors focus-within:border-burgundy",
                preset === null ? "border-burgundy" : "border-[color:var(--border)]",
              )}
            >
              <span className="text-sm font-semibold text-[color:var(--muted-foreground)]">
                {currency}
              </span>
              <input
                type="number"
                min="1"
                step="1"
                inputMode="numeric"
                placeholder="Any other amount"
                aria-label={`Any other amount in ${option.name}`}
                value={customAmount}
                onFocus={() => setPreset(null)}
                onChange={(event) => {
                  setPreset(null);
                  setCustomAmount(event.target.value);
                }}
                className="w-full bg-transparent text-base text-charcoal outline-none placeholder:text-[color:var(--muted-foreground)]/70"
              />
            </label>
          </fieldset>

          <label className="mt-8 block">
            <span className={labelClass}>Email for your receipt</span>
            <span className="mt-3 flex items-center gap-3 border-b border-[color:var(--border)] pb-2 transition-colors focus-within:border-burgundy">
              <Mail
                className="h-4 w-4 shrink-0 text-[color:var(--muted-foreground)]"
                aria-hidden="true"
              />
              <input
                required
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-transparent text-base text-charcoal outline-none placeholder:text-[color:var(--muted-foreground)]/60"
              />
            </span>
          </label>

          {message ? (
            <p
              className="mt-6 text-sm leading-relaxed"
              role={status === "error" ? "alert" : "status"}
              style={{ color: status === "error" ? "#9F1239" : "var(--burgundy)" }}
            >
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            className="btn-base btn-primary mt-8 w-full justify-center"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Opening secure checkout…" : `Donate ${formattedAmount}`}
          </button>
          <p className="mt-4 text-center text-xs text-[color:var(--muted-foreground)]">{hint}</p>
        </form>
      )}
    </section>
  );
}
