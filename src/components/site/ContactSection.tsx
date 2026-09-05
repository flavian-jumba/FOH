import { useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

const details = [
  { label: "Email", value: "info@foh-foundation.org" },
  { label: "Website", value: "foh-foundation.org" },
  { label: "Location", value: "Busia County, Kenya" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="mt-6 font-display text-4xl leading-[1.08] font-semibold text-charcoal lg:text-[3.2rem]">
            Join us in
            <br />
            <span className="font-light italic" style={{ color: "var(--burgundy)" }}>
              changing lives
            </span>
          </h2>
          <p
            className="mt-7 max-w-md text-base leading-relaxed"
            style={{ color: "var(--muted-foreground)" }}
          >
            Whether you are a donor, partner, mentor or supporter, we would love to hear how you
            would like to help create opportunity for girls, young women and youth.
          </p>

          <ul className="mt-12">
            {details.map((d) => (
              <li key={d.label} className="hairline py-5">
                <span
                  className="block text-[0.62rem] font-semibold tracking-[0.28em] uppercase"
                  style={{ color: "var(--gold)" }}
                >
                  {d.label}
                </span>
                <span className="mt-2 block font-display text-lg text-charcoal">{d.value}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="p-8 lg:p-12"
            style={{ backgroundColor: "var(--warm-white)", boxShadow: "var(--shadow-soft)" }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span
                  className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                  style={{ borderColor: "var(--border)" }}
                />
              </label>
              <label className="block">
                <span
                  className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Organisation / company
                </span>
                <input
                  type="text"
                  name="org"
                  required={false}
                  className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                  style={{ borderColor: "var(--border)" }}
                />
              </label>
            </div>

            <label className="block">
              <span
                className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>

            <label className="block">
              <span
                className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                required={false}
                className="mt-3 w-full border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>

            <label className="mt-6 block">
              <span
                className="block text-[0.62rem] font-semibold tracking-[0.24em] uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                How would you like to get involved?
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full resize-none border-b bg-transparent pb-2 text-base text-charcoal outline-none transition-colors focus:border-b-2"
                style={{ borderColor: "var(--border)" }}
              />
            </label>

            <button type="submit" className="btn-base btn-primary mt-10">
              {sent ? "Message received — thank you" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
