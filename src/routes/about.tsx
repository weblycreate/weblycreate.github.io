import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Trees, Users, Award } from "lucide-react";
import exterior from "@/assets/facility-exterior.jpg";
import seniors from "@/assets/program-seniors.jpg";
import nature from "@/assets/program-nature.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Robert Livermore Community Center" },
      { name: "description", content: "Learn about the Livermore Area Recreation and Park District and the 20-year story of the Robert Livermore Community Center." },
      { property: "og:title", content: "About the Robert Livermore Community Center" },
      { property: "og:description", content: "Making memories, changing lives in Livermore, California since 2005." },
    ],
  }),
  component: About,
});

const VALUES = [
  { icon: Heart, title: "Community first", body: "Every program, class, and event is built around the people of Livermore." },
  { icon: Trees, title: "Open space stewards", body: "We protect and program 4,000+ acres of parks, trails, and natural areas." },
  { icon: Users, title: "Inclusive by design", body: "Programs for all ages and abilities — toddlers through active seniors." },
  { icon: Award, title: "Award-winning", body: "Recognized by CPRS and NRPA for innovation in recreation services." },
];

function About() {
  return (
    <>
      <section className="container-page pt-16 pb-12">
        <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> About Us</span>
        <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl font-bold leading-[1.05]">
          Making memories, changing lives.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          The Livermore Area Recreation and Park District (LARPD) is an independent
          special district serving the Livermore Valley. Since 1947, we've operated
          parks, open space, and community programs — and since 2005, the Robert
          Livermore Community Center has been the heart of it all.
        </p>
      </section>

      <section className="container-page">
        <img src={exterior} alt="Community center exterior" width={1600} height={900}
          className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]" />
      </section>

      <section className="container-page py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Our story</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Robert Livermore Community Center opened its doors in 2005 as a
              gathering place for everyone in the Livermore Valley. Twenty years later,
              it's home to our aquatics complex, the Cresta Blanca Ballroom, classrooms,
              fitness studios, and the staff that powers community classes, youth and
              adult sports, environmental education, senior services, and special events.
            </p>
            <p>
              We're proud to be governed by an elected Board of Directors and funded
              primarily by your taxes — every dollar reinvested in the place you live.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/programs" className="btn-primary text-sm">Explore programs</Link>
            <Link to="/contact" className="btn-ghost text-sm">Get in touch</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={seniors} alt="" loading="lazy" className="rounded-2xl object-cover h-72 w-full" />
          <img src={nature} alt="" loading="lazy" className="rounded-2xl object-cover h-72 w-full mt-8" />
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl">What we stand for</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="card-soft p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-leaf)] text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
