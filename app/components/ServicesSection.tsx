import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { sundayServices } from "../data/schedule";
import Reveal from "./Reveal";

const pictured = sundayServices.filter((s) => s.image);

export default function ServicesSection() {
  return (
    <section id="services" className="bg-navy py-24 text-white sm:py-36">
      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24">
          <Reveal>
            <p className="eyebrow mb-5 text-sun">Sundays at the parish</p>
            <h2 className="display text-[40px] leading-[1.02] sm:text-[60px] tracking-[-0.04em]">
              Come early, Sunday school starts at eight
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[17px] leading-8 text-white/75">
              Sunday school is where foundations are laid and questions get answered. It runs from
              8:00 to 9:00, alongside the early risers service, before the second service begins.
            </p>
            <Link href="/services" className="btn btn-light mt-8">
              Full weekly schedule <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pictured.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <Link
                href="/services"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl bg-navy-deep"
              >
                <div className="zoom absolute inset-0">
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.9)_0%,rgba(8,16,24,0.15)_55%,rgba(8,16,24,0)_100%)]" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[13px] font-medium tabular-nums text-ink">
                  <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  {s.start}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="display text-[24px] leading-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{s.note ?? s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sun opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Details <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-24 max-w-4xl text-center">
          <blockquote>
            <p className="display text-[28px] leading-[1.25] text-white sm:text-[40px] tracking-[-0.025em]">
              &ldquo;A Sunday service without Sunday school is like treasure thrown into the ocean. You
              leave with enthusiasm but miss the depth of God&apos;s Word.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
