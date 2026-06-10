import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Robert Livermore Community Center" },
      { name: "description", content: "Get in touch with the Robert Livermore Community Center at 4444 East Ave, Livermore, CA. Phone, email, hours, and directions." },
      { property: "og:title", content: "Contact the Robert Livermore Community Center" },
      { property: "og:description", content: "Phone, email, hours, and directions for the Robert Livermore Community Center." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="container-page pt-16 pb-12">
        <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Contact</span>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-bold leading-[1.05]">
          We'd love to hear from you.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Questions about a program, a rental, or visiting the center? Reach out and a
          team member will get back to you within one business day.
        </p>
      </section>

      <section className="container-page pb-24 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: MapPin, label: "Address", value: "4444 East Ave, Livermore, CA 94550", href: "https://www.google.com/maps/place/4444+East+Ave,+Livermore,+CA+94550" },
            { icon: Phone, label: "Phone", value: "925-373-5700", href: "tel:9253735700" },
            { icon: Mail, label: "Email", value: "info@larpd.org", href: "mailto:info@larpd.org" },
            { icon: Clock, label: "Hours", value: "Mon–Thu 8:30a–6p · Fri 8:30a–5p" },
          ].map((c) => (
            <a key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              className="card-soft flex items-start gap-4 p-5 hover:shadow-[var(--shadow-lift)] transition">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-leaf)] text-primary-foreground shrink-0">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-display">{c.label}</div>
                <div className="mt-0.5 font-display font-bold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card-soft lg:col-span-3 p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" />
          <div>
            <label className="block text-sm font-display font-semibold">Message</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <button type="submit" className="btn-primary text-sm">
            <Send className="h-4 w-4" /> Send message
          </button>
          {sent && (
            <p className="text-sm text-primary">Thanks! We'll be in touch within one business day.</p>
          )}
        </form>
      </section>

      <section className="container-page pb-24">
        <div className="card-soft overflow-hidden">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=4444+East+Ave,+Livermore,+CA+94550&output=embed"
            loading="lazy"
            className="h-[420px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-display font-semibold">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary-glow focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
