"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const aboutPages = [
  { title: "About us", href: "/about" },
  { title: "Our story", href: "/about/story" },
  { title: "Leadership", href: "/about/leadership" },
  { title: "Ministries", href: "/about/ministries" },
];

/** Section tabs, shown along the bottom of each About page's photo header. */
export default function AboutNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="About section" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
      {aboutPages.map((page) => {
        const active = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-[background-color,color,border-color] duration-200 ${
              active
                ? "bg-white text-ink"
                : "border border-white/25 text-white/80 hover:border-white hover:bg-white/10 hover:text-white"
            }`}
          >
            {page.title}
          </Link>
        );
      })}
    </nav>
  );
}
