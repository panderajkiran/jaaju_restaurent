import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import logoUrl from "@/assets/restaurant-logo.png";
import { Menu, X, Home, UtensilsCrossed, BookOpen, Images, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/menu", label: "Menu", icon: UtensilsCrossed },
  { to: "/about", label: "Our Story", icon: BookOpen },
  { to: "/gallery", label: "Gallery", icon: Images },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-charcoal/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page h-24 flex items-center justify-between">
        <div className="flex items-center gap-12 min-w-0">
          <Link
            to="/"
            className="shrink-0 group"
            aria-label="Jaaju Kitchen & Bar — home"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                e.preventDefault();
                navigate({ to: "/" });
              }
            }}
          >
            <img
              src={logoUrl}
              alt="Jaaju Kitchen & Bar"
              className="h-[90px] w-auto object-contain"
              loading="eager"
            />
          </Link>
          <div className="hidden md:flex items-center">
            <ul className="group/nav relative flex items-center gap-1 px-2 py-1.5 transition-all duration-300">
              {NAV.map((item) => {
                const Icon = item.icon;
                const isHash = item.to.startsWith("/#");
                const commonClass =
                  "relative flex items-center justify-center size-10 rounded-full text-charcoal/60 transition-all duration-300 hover:text-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-saffron/60";
                const inner = (
                  <>
                    {/* Pop-out saffron bubble (appears on hover / active) */}
                    <span
                      className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 flex size-11 items-center justify-center rounded-full bg-saffron text-white shadow-[0_10px_22px_-6px_rgba(217,119,6,0.55)] opacity-0 scale-50 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:scale-100 group-focus-visible/item:opacity-100 group-focus-visible/item:scale-100 group-[.is-active]/item:opacity-100 group-[.is-active]/item:scale-100"
                      aria-hidden="true"
                    >
                      <Icon className="size-[18px]" strokeWidth={2.25} />
                    </span>
                    {/* Resting icon (hidden when popped out) */}
                    <Icon
                      className="size-[18px] transition-all duration-300 group-hover/item:opacity-0 group-hover/item:-translate-y-1 group-focus-visible/item:opacity-0 group-[.is-active]/item:opacity-0"
                      strokeWidth={2}
                    />
                    {/* Label tooltip */}
                    <span className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-full bg-charcoal px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-ivory opacity-0 translate-y-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-y-0 group-[.is-active]/item:opacity-100 group-[.is-active]/item:translate-y-0">
                      {item.label}
                    </span>
                  </>
                );
                return (
                  <li key={item.to} className="group/item relative">
                    {isHash ? (
                      <a
                        href={item.to.slice(1)}
                        aria-label={item.label}
                        className={commonClass}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        aria-label={item.label}
                        activeOptions={{ exact: item.to === "/" }}
                        activeProps={{ className: `${commonClass} is-active` }}
                        className={commonClass}
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/reserve"
            className="hidden sm:inline-flex bg-saffron text-white text-xs uppercase tracking-[0.2em] font-medium py-2.5 px-5 items-center gap-2 hover:bg-saffron/90 transition-all"
          >
            <span className="size-1.5 bg-white/70 rounded-full" />
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-charcoal/5 bg-ivory">
          <div className="container-page py-6 flex flex-col gap-5">
            {NAV.map((item) =>
              item.to.startsWith("/#") ? (
                <a
                  key={item.to}
                  href={item.to.slice(1)}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] font-medium"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="hairline my-2" />
            <Link
              to="/reserve"
              onClick={() => setOpen(false)}
              className="bg-saffron text-white text-xs uppercase tracking-[0.2em] font-medium py-3 px-5 text-center"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}