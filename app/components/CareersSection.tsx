import Link from "next/link";
import { ArrowRight, ArrowUpRight, Briefcase, Code, HeartPulse, Megaphone, Palette, Sprout } from "lucide-react";
import Reveal from "./Reveal";

const programmes = [
  { title: "Technology", description: "Coding, web development, AI and other digital skills.", icon: Code },
  { title: "Business and entrepreneurship", description: "Running a business, marketing, finance and leadership.", icon: Briefcase },
  { title: "Agriculture and agribusiness", description: "Modern farming methods, agribusiness and food security.", icon: Sprout },
  { title: "Healthcare and wellness", description: "Health training, healthcare management and wellness.", icon: HeartPulse },
  { title: "Digital marketing", description: "Social media, SEO, content and digital strategy.", icon: Megaphone },
  { title: "Creative arts and design", description: "Graphic design, video editing and photography.", icon: Palette },
];

export default function CareersSection() {
  return (
    <section id="careers" className="wrap py-24 sm:py-36">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
        <Reveal>
          <p className="eyebrow mb-5">Skills and careers</p>
          <h2 className="display text-[40px] leading-[1.02] text-ink sm:text-[60px] tracking-[-0.04em]">
            Training for work, through the church
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-[17px] leading-8 text-ink-2">
            The parish offers training in fields where skills are in demand. Each programme has its
            own WhatsApp group, so you can join one and ask about it there.
          </p>
          <Link href="/join#careers" className="btn btn-primary mt-8">
            Find a group <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90}>
            <Link
              href="/join#careers"
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_48px_-24px_rgba(18,38,58,0.4)]"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-500 [transition-timing-function:var(--ease-soft)] group-hover:scale-y-100" />
              <span className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-white/10 group-hover:text-sun">
                  <p.icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[13px] tabular-nums text-ink-3 transition-colors duration-300 group-hover:text-white/50">
                  0{i + 1}
                </span>
              </span>
              <h3 className="display relative mt-10 text-[24px] leading-tight text-ink transition-colors duration-300 group-hover:text-white">
                {p.title}
              </h3>
              <p className="relative mt-2 text-[15px] leading-6 text-ink-2 transition-colors duration-300 group-hover:text-white/70">
                {p.description}
              </p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-plum transition-colors duration-300 group-hover:text-sun">
                Join the WhatsApp group
                <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
