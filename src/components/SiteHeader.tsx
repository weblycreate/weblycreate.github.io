import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/facilities", label: "Facilities" },
  { to: "/rentals", label: "Rentals" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-leaf)] text-primary-foreground font-display font-bold shadow-[var(--shadow-lift)]">
            R
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-bold text-foreground">Robert Livermore</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Community Center</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-secondary/60" }}
              className="rounded-full px-4 py-2 text-sm font-medium font-display transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/rentals" className="btn-primary text-sm py-2.5 px-5">Reserve a space</Link>
        </div>
        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-foreground" }}
                className="py-3 font-display text-base"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/rentals" onClick={() => setOpen(false)} className="btn-primary mt-3 self-start text-sm">
              Reserve a space
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
