"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

const aboutItems = [
  { name: "About us", href: "/about", note: "Who we are" },
  { name: "Our story", href: "/about/story", note: "Since 1952, and here since 1999" },
  { name: "Leadership", href: "/about/leadership", note: "Our pastors" },
  { name: "Ministries", href: "/about/ministries", note: "Ways to serve" },
];

const navItems = [
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Join", href: "/join" },
  { name: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the menus when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setAboutOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Pages with a full photo header: the bar sits over the photo until you scroll.
  const photoPages = ["/", "/services", "/about", "/about/story", "/about/leadership", "/about/ministries"];
  const overPhoto = photoPages.includes(pathname) && !scrolled && !mobileOpen;

  const linkClass = (href: string) => {
    const active = isActive(pathname, href);
    const base =
      "relative py-1 text-[15px] transition-colors duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300";
    const state = active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100";
    const color = overPhoto
      ? active
        ? "text-white"
        : "text-white/80 hover:text-white"
      : active
        ? "text-ink"
        : "text-ink-2 hover:text-ink";
    return `${base} ${state} ${color}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        overPhoto
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-paper/90 shadow-[0_8px_24px_-20px_rgba(18,38,58,0.35)] backdrop-blur-md"
      }`}
    >
      <nav aria-label="Main navigation" className="wrap flex h-[72px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/tpplogo.jpg"
            alt=""
            className="h-10 w-10 rounded-full bg-white object-contain p-0.5 transition-transform duration-300 group-hover:rotate-[-8deg]"
          />
          <span className="leading-tight">
            <span className={`display block text-[18px] transition-colors ${overPhoto ? "text-white" : "text-ink"}`}>
              The Praise Parish
            </span>
            <span className={`block text-[12px] transition-colors ${overPhoto ? "text-white/70" : "text-ink-3"}`}>
              RCCG · Epe, Lagos
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <div className="group relative">
            <Link href="/about" className={`inline-flex items-center gap-1 ${linkClass("/about")}`}>
              About
              <ChevronDown
                size={15}
                strokeWidth={1.75}
                className="transition-transform duration-300 group-hover:rotate-180"
                aria-hidden="true"
              />
            </Link>
            <div className="invisible absolute -left-4 top-full pt-4 opacity-0 transition-[opacity,transform,visibility] duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="w-72 translate-y-2 rounded-2xl border border-line bg-card p-2 shadow-[0_24px_48px_-20px_rgba(18,38,58,0.3)] transition-transform duration-300 group-hover:translate-y-0">
                {aboutItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group/item flex items-center justify-between rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-raised"
                  >
                    <span>
                      <span className="block text-[15px] font-medium text-ink">{item.name}</span>
                      <span className="block text-[13px] text-ink-3">{item.note}</span>
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.75}
                      className="text-ink-3 opacity-0 transition-[opacity,transform] duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.name}
            </Link>
          ))}
          <Link href="/give" className={`btn btn-sm ${overPhoto ? "btn-light" : "btn-accent"}`}>
            Give online
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={`-mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            overPhoto ? "text-white hover:bg-white/15" : "text-ink hover:bg-raised"
          }`}
        >
          {mobileOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-paper lg:hidden">
          <div className="wrap flex flex-col py-4">
            <Link href="/" className="display rise py-3 text-[26px] text-ink">
              Home
            </Link>
            <button
              type="button"
              aria-expanded={aboutOpen}
              onClick={() => setAboutOpen((open) => !open)}
              className="display rise flex items-center justify-between py-3 text-left text-[26px] text-ink"
            >
              About
              <ChevronDown
                size={22}
                strokeWidth={1.75}
                className={`text-ink-3 transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {aboutOpen && (
              <div className="mb-2 ml-1 border-l-2 border-plum pl-4">
                {aboutItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block py-2 text-[17px] text-ink-2">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${(i + 2) * 40}ms` }}
                className="display rise py-3 text-[26px] text-ink"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/give" className="btn btn-accent mb-4 mt-6">
              Give online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
