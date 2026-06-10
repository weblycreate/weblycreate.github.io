import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.16_0.04_160)] text-[oklch(0.95_0.02_140)]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-leaf)] font-display font-bold">R</span>
            <div className="font-display text-lg font-bold">Robert Livermore Community Center</div>
          </div>
          <p className="mt-4 max-w-md text-sm text-[oklch(0.85_0.02_140)]">
            Operated by Livermore Area Recreation and Park District. Making memories,
            changing lives since 2005.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps/place/4444+East+Ave,+Livermore,+CA+94550"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-sm py-2 px-4"
            >
              <MapPin className="h-4 w-4" /> Get directions
            </a>
            <a href="tel:9253735700" className="btn-ghost text-sm py-2 px-4">
              <Phone className="h-4 w-4" /> 925-373-5700
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-[oklch(0.82_0.12_145)]">Visit</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 4444 East Ave, Livermore, CA 94550</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> Mon–Thu 8:30a–6p · Fri 8:30a–5p</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@larpd.org</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-[oklch(0.82_0.12_145)]">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/programs" className="hover:underline">Programs</Link></li>
            <li><Link to="/facilities" className="hover:underline">Facilities</Link></li>
            <li><Link to="/rentals" className="hover:underline">Rentals</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[oklch(0.75_0.02_140)]">
        © {new Date().getFullYear()} Livermore Area Recreation and Park District · An Independent Special District
      </div>
    </footer>
  );
}
