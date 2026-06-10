import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Phone, Sparkles, Waves, Users, Dumbbell, Palette, Trees, Trophy } from "lucide-react";
import { GoogleReviews } from "@/components/GoogleReviews";
import heroImg from "@/assets/hero-aerial.jpg";
import aquaticsImg from "@/assets/program-aquatics.jpg";
import ballroomImg from "@/assets/program-ballroom.jpg";
import seniorsImg from "@/assets/program-seniors.jpg";
import natureImg from "@/assets/program-nature.jpg";
import sportsImg from "@/assets/program-sports.jpg";
import artsImg from "@/assets/program-arts.jpg";
import exteriorImg from "@/assets/facility-exterior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Robert Livermore Community Center | LARPD" },
      { name: "description", content: "Aquatics, sports, classes, senior services, summer camps, and a stunning ballroom for events — all under one roof in Livermore, CA." },
      { property: "og:title", content: "Robert Livermore Community Center" },
      { property: "og:description", content: "Aquatics, sports, classes, senior services, and event rentals in Livermore, CA." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of the Robert Livermore Community Center at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
        <div className="container-page pt-20 pb-28 md:pt-28 md:pb-40 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-display uppercase tracking-[0.18em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Celebrating 20 years · 2005–2025
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl md:text-7xl font-bold leading-[1.02]">
            Where Livermore comes together to <span className="text-[oklch(0.85_0.14_145)]">play, learn, and celebrate.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Pools, courts, classrooms, and one of the East Bay's most beautiful
            ballrooms — all on a 17-acre campus at 4444 East Avenue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/programs" className="btn-primary">
              Browse programs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/rentals" className="btn-ghost text-primary-foreground border-white/30 bg-white/10 hover:bg-white/20">
              Reserve a space
            </Link>
          </div>
          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3 text-sm">
            {[
              { icon: MapPin, label: "4444 East Ave, Livermore" },
              { icon: Phone, label: "925-373-5700" },
              { icon: Calendar, label: "M–Th 8:30a–6p · Fri 8:30a–5p" },
            ].map((it, i) => (
              <div key={i} className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <it.icon className="h-4 w-4 shrink-0" />
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO PROGRAMS */}
      <section className="container-page py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Programs & Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">A program for every age, every season.</h2>
            <p className="mt-3 text-muted-foreground">
              From toddler swim lessons to senior fitness, championship sports leagues to
              hands-on nature camps — there's something here for every Livermore family.
            </p>
          </div>
          <Link to="/programs" className="btn-ghost text-sm self-start md:self-auto">
            See all programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          <BentoCard className="md:col-span-4 md:row-span-2" img={aquaticsImg} icon={Waves} title="Aquatics" subtitle="Lap swim, lessons, water polo, and family open swim" />
          <BentoCard className="md:col-span-2" img={ballroomImg} icon={Sparkles} title="Cresta Blanca Ballroom" subtitle="Weddings & galas" />
          <BentoCard className="md:col-span-2" img={seniorsImg} icon={Users} title="Senior Services" subtitle="Classes, trips, fitness" />
          <BentoCard className="md:col-span-2" img={sportsImg} icon={Trophy} title="Youth Sports" subtitle="Leagues & camps" />
          <BentoCard className="md:col-span-2" img={natureImg} icon={Trees} title="Nature Education" subtitle="Sycamore Grove explorations" />
          <BentoCard className="md:col-span-2" img={artsImg} icon={Palette} title="Arts & Enrichment" subtitle="Pottery, painting, music" />
          <BentoCard className="md:col-span-2" img={exteriorImg} icon={Dumbbell} title="Fitness & Wellness" subtitle="Yoga, dance, strength" />
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-secondary/60 py-20">
        <div className="container-page grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <img
              src={exteriorImg}
              alt="Robert Livermore Community Center entrance at dusk"
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
          <div className="lg:col-span-5">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> About the Center</span>
            <h2 className="mt-3 text-4xl font-bold">17 acres of community, since 2005.</h2>
            <p className="mt-4 text-muted-foreground">
              The Robert Livermore Community Center is operated by the Livermore Area
              Recreation and Park District — an independent special district. Inside, you'll
              find the departments that power our community classes, youth and adult
              sports, aquatics, environmental education, senior services, and special events.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { k: "20+", v: "Years serving Livermore" },
                { k: "300+", v: "Classes each season" },
                { k: "4.5★", v: "On Google Maps" },
              ].map((s) => (
                <div key={s.k} className="card-soft px-3 py-5">
                  <div className="text-3xl font-display font-bold text-primary">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary text-sm">Our story <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/facilities" className="btn-ghost text-sm">Explore facilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS — refreshed every 15s */}
      <GoogleReviews />

      {/* MAP / VISIT */}
      <section className="container-page pb-24">
        <div className="card-soft grid overflow-hidden lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Visit Us</span>
            <h2 className="mt-3 text-4xl font-bold">Come on in.</h2>
            <p className="mt-3 text-muted-foreground max-w-md">
              We're right on East Avenue with plenty of free parking, and just minutes
              from downtown Livermore.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div><dt className="font-display font-semibold">Address</dt><dd className="text-muted-foreground">4444 East Ave, Livermore, CA 94550</dd></div>
              </div>
              <div className="flex gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" />
                <div><dt className="font-display font-semibold">Phone</dt><dd className="text-muted-foreground">925-373-5700</dd></div>
              </div>
              <div className="flex gap-3"><Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div><dt className="font-display font-semibold">Hours</dt><dd className="text-muted-foreground">Mon–Thu 8:30a–6p · Fri 8:30a–5p</dd></div>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/place/4444+East+Ave,+Livermore,+CA+94550" target="_blank" rel="noreferrer" className="btn-primary text-sm">Get directions</a>
              <Link to="/contact" className="btn-ghost text-sm">Contact us</Link>
            </div>
          </div>
          <div className="min-h-[360px] lg:min-h-full">
            <iframe
              title="Map of Robert Livermore Community Center"
              src="https://www.google.com/maps?q=4444+East+Ave,+Livermore,+CA+94550&output=embed"
              loading="lazy"
              className="h-full w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function BentoCard({
  className = "",
  img,
  icon: Icon,
  title,
  subtitle,
}: {
  className?: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <article className={`group relative overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] ${className}`}>
      <img
        src={img}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.04_160)]/90 via-[oklch(0.16_0.04_160)]/30 to-transparent" />
      <div className="relative h-full flex flex-col justify-end p-5 text-primary-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30">
            <Icon className="h-4 w-4" />
          </span>
          <h3 className="font-display text-xl font-bold leading-tight">{title}</h3>
        </div>
        <p className="mt-1.5 text-sm text-white/85 max-w-xs">{subtitle}</p>
      </div>
    </article>
  );
}
