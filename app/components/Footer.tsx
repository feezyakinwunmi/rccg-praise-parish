import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { church } from "../data/church";
import { sundayServices } from "../data/schedule";

const links = [
  { name: "About us", href: "/about" },
  { name: "Service times", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Join the parish", href: "/join" },
  { name: "Give", href: "/give" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="wrap border-b border-white/10 py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display max-w-3xl text-[44px] leading-[0.98] sm:text-[72px] tracking-[-0.04em]">
            See you on Sunday
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-light">
              Plan your visit
            </Link>
            <Link href="/give" className="btn btn-ghost-light">
              Give online
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/tpplogo.jpg" alt="" className="h-11 w-11 rounded-full bg-white object-contain p-0.5" />
            <div className="leading-tight">
              <p className="display text-[19px]">The Praise Parish</p>
              <p className="text-[13px] text-white/55">{church.province}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-[15px] leading-6 text-white/65">
            A parish of the Redeemed Christian Church of God, meeting in Ora Estate, Epe since 1999.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm text-white/45">Sundays</h3>
          <ul className="space-y-3 text-[15px]">
            {sundayServices.slice(0, 3).map((s) => (
              <li key={s.id} className="flex items-baseline">
                <span className="text-white/85">{s.title.replace(" service", "")}</span>
                <span aria-hidden="true" className="leader" />
                <span className="tabular-nums text-sun">{s.start}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm text-white/45">Visit</h3>
          <address className="space-y-1 text-[15px] not-italic leading-6 text-white/85">
            {church.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <ul className="mt-4 space-y-1 text-[15px] text-white/85">
            <li>
              <a href={`tel:${church.phones[0].replace(/\s/g, "")}`} className="tabular-nums transition-colors hover:text-sun">
                {church.phones[0]}
              </a>
            </li>
            <li>
              <a href={`mailto:${church.emails.general}`} className="transition-colors hover:text-sun">
                {church.emails.general}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm text-white/45">Pages</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] lg:grid-cols-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group inline-flex items-center gap-1 text-white/85 transition-colors hover:text-white">
                  {l.name}
                  <ArrowUpRight size={13} strokeWidth={2} className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-6 text-[13px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {church.name}</p>
          <ul className="flex gap-5">
            {socials.map((s) => (
              <li key={s.name}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p>Site by Phantomire Technologies</p>
        </div>
      </div>
    </footer>
  );
}
