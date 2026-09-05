import { useState, type FormEvent } from "react";

import { requestStkPush } from "@/lib/payments";

function normalizeKenyanPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.startsWith("0") && digits.length === 10) return `254${digits.slice(1)}`;
  if (digits.startsWith("254") && digits.length === 12) return digits;

  return null;
}

export function DonationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const numericAmount = Number(amount);
    const normalizedPhoneNumber = normalizeKenyanPhoneNumber(phoneNumber);

    if (!Number.isFinite(numericAmount) || numericAmount < 1) {
      setStatus("error");
      setMessage("Enter a donation amount of at least KES 1.");
      return;
    }

    if (!normalizedPhoneNumber) {
      setStatus("error");
      setMessage("Enter a valid Kenyan M-Pesa number, for example 0712 345 678.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await requestStkPush({
        amount: numericAmount,
        phoneNumber: normalizedPhoneNumber,
      });
      setStatus("success");
      setMessage(response.message || "Check your phone to complete the M-Pesa payment.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section className="mt-8 border border-[color:var(--border)] bg-[color:var(--warm-white)] shadow-[var(--shadow-soft)]">
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
            Sow Seeds of Hope
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal">Support FOH</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            Make a secure donation with M-Pesa.
          </p>
        </div>
        <button
          type="button"
          className="btn-base btn-primary shrink-0"
          aria-expanded={isOpen}
          aria-controls="mpesa-donation-form"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close donation form" : "Donate with M-Pesa"}
        </button>
      </div>

      {isOpen ? (
        <form
          id="mpesa-donation-form"
          onSubmit={handleSubmit}
          className="border-t border-[color:var(--border)] p-6 sm:p-8"
        >
          <p className="text-[0.62rem] font-semibold tracking-[0.28em] text-gold uppercase">
            Sow Seeds of Hope
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-charcoal">
            Donate with M-Pesa
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-foreground)]">
            Enter your amount and M-Pesa number. We will send an STK prompt to your phone to approve
            the payment.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="block text-[0.62rem] font-semibold tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
                Amount (KES)
              </span>
              <input
                required
                min="1"
                step="1"
                inputMode="numeric"
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>
            <label className="block">
              <span className="block text-[0.62rem] font-semibold tracking-[0.22em] text-[color:var(--muted-foreground)] uppercase">
                M-Pesa number
              </span>
              <input
                required
                autoComplete="tel"
                inputMode="tel"
                type="tel"
                placeholder="0712 345 678"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors placeholder:text-[color:var(--muted-foreground)]/60 focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>
          </div>

          {message ? (
            <p
              className="mt-5 text-sm leading-relaxed"
              role={status === "error" ? "alert" : "status"}
              style={{ color: status === "error" ? "#9F1239" : "var(--burgundy)" }}
            >
              {message}
            </p>
          ) : null}

          <button
            type="submit"
            className="btn-base btn-primary mt-6"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending prompt…" : "Send M-Pesa prompt"}
          </button>
        </form>
      ) : null}
    </section>
  );
}
