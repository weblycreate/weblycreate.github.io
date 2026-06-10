import { createFileRoute, Link } from "@tanstack/react-router";
import { Waves, Trophy, Users, Trees, Palette, Dumbbell, Sparkles, GraduationCap } from "lucide-react";
import aquatics from "@/assets/program-aquatics.jpg";
import sports from "@/assets/program-sports.jpg";
import seniors from "@/assets/program-seniors.jpg";
import nature from "@/assets/program-nature.jpg";
import arts from "@/assets/program-arts.jpg";
import ballroom from "@/assets/program-ballroom.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Recreation | Robert Livermore Community Center" },
      { name: "description", content: "Aquatics, youth and adult sports, classes, senior services, environmental education, and special events." },
      { property: "og:title", content: "Programs at the Robert Livermore Community Center" },
      { property: "og:description", content: "300+ classes and programs each season for all ages." },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  { icon: Waves, title: "Aquatics", img: aquatics, body: "Year-round lap swim, group and private swim lessons, water polo, junior lifeguard, and family open swim in our outdoor pool complex.", tags: ["Swim lessons", "Lap swim", "Water polo"] },
  { icon: Trophy, title: "Youth & Adult Sports", img: sports, body: "Leagues, clinics, and camps for basketball, soccer, volleyball, pickleball, tennis, and more.", tags: ["Leagues", "Clinics", "Camps"] },
  { icon: Users, title: "Senior Services", img: seniors, body: "Daily fitness, social clubs, lunches, trips, and case management for adults 55+.", tags: ["Fitness", "Trips", "Social"] },
  { icon: Trees, title: "Nature & Environmental Ed", img: nature, body: "Guided hikes, school programs, summer nature camps and stewardship at Sycamore Grove and Brushy Peak.", tags: ["Camps", "Hikes", "Schools"] },
  { icon: Palette, title: "Arts & Enrichment", img: arts, body: "Pottery, painting, dance, music, cooking, and language classes for kids, teens, and adults.", tags: ["Pottery", "Dance", "Music"] },
  { icon: Sparkles, title: "Special Events", img: ballroom, body: "Concerts in the park, holiday celebrations, fitness festivals, and family movie nights.", tags: ["Concerts", "Holidays", "Family"] },
];

function Programs() {
  return (
    <>
      <section className="container-page pt-16 pb-10">
        <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> Programs</span>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-bold leading-[1.05]">
          Find your next thing.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Over 300 classes and programs each season — from your child's first swim
          lesson to your weekly yoga, from pickleball leagues to summer nature camps.
        </p>
      </section>

      <section className="container-page py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p) => (
          <article key={p.title} className="card-soft overflow-hidden flex flex-col">
            <div className="relative h-56">
              <img src={p.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.04_160)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 text-primary-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 border border-white/30 backdrop-blur">
                  <p.icon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="container-page py-16">
        <div className="card-soft p-10 md:p-14 text-center bg-[image:var(--gradient-leaf)] text-primary-foreground border-transparent">
          <GraduationCap className="mx-auto h-10 w-10" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">Looking for the activity guide?</h2>
          <p className="mt-3 max-w-xl mx-auto text-white/85">
            Our seasonal activity guide lists every class, league, and camp with dates,
            ages, and registration details.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link to="/contact" className="btn-ghost border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 text-sm">
              Request a copy
            </Link>
            <a href="https://www.larpd.org" target="_blank" rel="noreferrer" className="btn-ghost border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 text-sm">
              Browse on LARPD.org
            </a>
          </div>
        </div>
      </section>

      <Dumbbell className="hidden" />
    </>
  );
}
