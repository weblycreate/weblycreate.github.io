import { createFileRoute, Link } from "@tanstack/react-router";
import exterior from "@/assets/facility-exterior.jpg";
import aquatics from "@/assets/program-aquatics.jpg";
import ballroom from "@/assets/program-ballroom.jpg";
import sports from "@/assets/program-sports.jpg";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Facilities | Robert Livermore Community Center" },
      { name: "description", content: "Tour the rooms, pools, gym, and grounds of the Robert Livermore Community Center in Livermore, CA." },
      { property: "og:title", content: "Facilities at the Robert Livermore Community Center" },
      { property: "og:description", content: "Cresta Blanca Ballroom, aquatics complex, gym, classrooms, and outdoor spaces." },
    ],
  }),
  component: Facilities,
});

const SPACES = [
  { name: "Cresta Blanca Ballroom", capacity: "Up to 400 guests", body: "Our signature event space, perfect for weddings, galas, and large celebrations.", img: ballroom },
  { name: "Aquatics Complex", capacity: "Outdoor 25-yard pool + wading pool", body: "Lap lanes, instructional space, and a children's wading area with shade structures.", img: aquatics },
  { name: "Gymnasium", capacity: "Two full basketball courts", body: "Hardwood courts for basketball, volleyball, pickleball, and indoor sports leagues.", img: sports },
  { name: "Community Building", capacity: "Multiple rooms", body: "Palo Verde, Sycamore, and Larkspur rooms support classes, meetings, and parties.", img: exterior },
];

const ROOMS = [
  ["Community Building (4444 East Avenue)", ["Palo Verde Room", "Sycamore Room", "Cresta Blanca Ballroom", "Larkspur Room"]],
  ["Aquatics & Outdoor", ["Outdoor Pool", "Wading Pool", "Pool Deck", "Plaza Lawn"]],
  ["Recreation & Fitness", ["Gymnasium", "Multipurpose Studio", "Dance Studio", "Game Room"]],
] as const;

function Facilities() {
  return (
    <>
      <section className="container-page pt-16 pb-12">
        <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Facilities</span>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-bold leading-[1.05]">
          17 acres. One destination.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Indoor and outdoor spaces designed for community life — from quiet meeting
          rooms to one of the largest banquet halls in the East Bay.
        </p>
      </section>

      <section className="container-page grid gap-6 md:grid-cols-2">
        {SPACES.map((s) => (
          <article key={s.name} className="card-soft overflow-hidden">
            <img src={s.img} alt={s.name} loading="lazy" className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">{s.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary-glow font-display">{s.capacity}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page py-20">
        <h2 className="text-3xl md:text-4xl font-bold">All rooms & spaces</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ROOMS.map(([heading, items]) => (
            <div key={heading} className="card-soft p-6">
              <h3 className="font-display text-lg font-bold">{heading}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />{i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/rentals" className="btn-primary text-sm">Reserve a space</Link>
          <Link to="/contact" className="btn-ghost text-sm">Ask about availability</Link>
        </div>
      </section>
    </>
  );
}
