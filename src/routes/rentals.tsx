import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Calendar, Users, Sparkles } from "lucide-react";
import ballroom from "@/assets/program-ballroom.jpg";

export const Route = createFileRoute("/rentals")({
  head: () => ({
    meta: [
      { title: "Event Rentals | Robert Livermore Community Center" },
      { name: "description", content: "Reserve the Cresta Blanca Ballroom and other beautiful spaces for your wedding, gala, or celebration in Livermore, CA." },
      { property: "og:title", content: "Event Rentals at the Robert Livermore Community Center" },
      { property: "og:description", content: "Cresta Blanca Ballroom and other spaces, available for weddings, galas, and parties." },
    ],
  }),
  component: Rentals,
});

const INCLUDED = [
  "Tables and chairs for your guest count",
  "On-site facility staff during your event",
  "Free on-site parking",
  "Optional dance floor and stage",
  "Setup & cleanup support",
  "ADA accessible throughout",
];

function Rentals() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={ballroom} alt="Cresta Blanca Ballroom dressed for a wedding" width={1600} height={900}
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
        <div className="container-page py-24 md:py-32 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Event Rentals
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl md:text-6xl font-bold leading-[1.05]">
            Host an unforgettable event in the Cresta Blanca Ballroom.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            One of the East Bay's largest community ballrooms — newly renovated, with
            warm lighting, hardwood floors, and a private foyer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Request a quote</Link>
            <a href="tel:9253735700" className="btn-ghost text-primary-foreground border-white/30 bg-white/10 hover:bg-white/20">
              Call 925-373-5700
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">What's included</h2>
          <ul className="mt-6 space-y-3">
            {INCLUDED.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-leaf text-leaf-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Users, label: "Capacity", value: "Up to 400 seated" },
            { icon: Calendar, label: "Availability", value: "Year-round, 7 days/week" },
            { icon: Sparkles, label: "Style", value: "Wedding · Gala · Conference" },
            { icon: Check, label: "Resident rates", value: "Discounts for LARPD residents" },
          ].map((c) => (
            <div key={c.label} className="card-soft p-6">
              <c.icon className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground font-display">{c.label}</div>
              <div className="mt-1 font-display text-lg font-bold">{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="card-soft p-10 md:p-14 bg-[image:var(--gradient-leaf)] text-primary-foreground border-transparent text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to plan your event?</h2>
          <p className="mt-3 max-w-xl mx-auto text-white/85">
            Our facility coordinators will walk you through availability, pricing, and
            setup options.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="btn-ghost border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 text-sm">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
