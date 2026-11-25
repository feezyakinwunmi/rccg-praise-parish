import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, MapPin, MessageCircle, Sunrise } from "lucide-react";
import { sundayServices, weekdayServices } from "../data/schedule";
import PhotoHero from "../components/PhotoHero";
import NextService from "../components/NextService";
import Reveal from "../components/Reveal";
import VisitSection from "../components/VisitSection";

export const metadata: Metadata = {
  title: "Service times | RCCG The Praise Parish",
  description:
    "Sunday and weekday service times at RCCG The Praise Parish, Ora Estate, Epe: Sunday school, second service, youth service, Bible study and prayer.",
};

const jump = [
  { label: "Sunday", href: "#sunday" },
  { label: "Tuesday", href: "#weekdays" },
  { label: "Wednesday", href: "#weekdays" },
  { label: "Thursday", href: "#weekdays" },
  { label: "First visit", href: "#first-visit" },
];

const weekdayTone = [
  { card: "bg-navy text-white", muted: "text-white/65", chip: "bg-white/10 text-white", day: "text-sun" },
  { card: "bg-plum text-white", muted: "text-white/70", chip: "bg-white/15 text-white", day: "text-white" },
  { card: "bg-card text-ink border border-line", muted: "text-ink-2", chip: "bg-raised text-ink", day: "text-plum" },
];

const steps = [
  {
    icon: Sunrise,
    title: "Pick a service",
    text: "The early risers service starts at 7:30 and the second service at 9:00. Sunday school runs from 8:00 to 9:00.",
  },
  {
    icon: BookOpen,
    title: "Stay for the believers class",
    text: "Straight after the second service, the baptismal and believers class meets for new believers and anyone preparing for baptism.",
  },
  {
    icon: MessageCircle,
    title: "Join the WhatsApp group",
    text: "Get parish news and updates through the week, so you know what is coming up.",
    href: "/join",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PhotoHero
        image="/ch4.jpg"
        position="center 62%"
        kicker="Service times"
        title="When we meet"
        aside={<NextService />}
        bottom={
          <nav aria-label="Jump to" className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            {jump.map((j) => (
              <a
                key={j.label}
                href={j.href}
                className="whitespace-nowrap rounded-full border border-white/25 px-5 py-2.5 text-sm text-white/80 transition-colors duration-200 hover:border-white hover:bg-white hover:text-ink"
              >
                {j.label}
              </a>
            ))}
          </nav>
        }
      >
        Worship, prayer and teaching on Sundays and three times during the week. Everyone is welcome
        at every service.
      </PhotoHero>

      {/* Sunday timeline */}
      <section id="sunday" className="wrap scroll-mt-24 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[4fr_7fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow mb-5">Every Sunday</p>
              <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[64px]">
                Sunday, from 7:30 am
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-ink-2">
                Five gatherings across the morning and early afternoon. Come early for Sunday school:
                it is where foundations are laid and questions get answered.
              </p>
            </Reveal>
            <Reveal delay={120} className="mt-10 rounded-3xl bg-navy p-7 text-white">
              <p className="display text-[22px] leading-[1.35]">
                &ldquo;A Sunday service without Sunday school is like treasure thrown into the ocean.&rdquo;
              </p>
            </Reveal>
          </div>

          <ol className="relative">
            <span aria-hidden="true" className="absolute bottom-6 left-[19px] top-6 w-px bg-line-strong sm:left-[23px]" />
            {sundayServices.map((s, i) => (
              <Reveal as="li" key={s.id} delay={i * 70} className="group relative pb-6 pl-14 last:pb-0 sm:pl-16">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 flex h-10 w-10 items-center justify-center rounded-full border-2 border-line-strong bg-paper transition-colors duration-300 group-hover:border-plum group-hover:bg-plum sm:h-12 sm:w-12"
                >
                  <span className="h-2 w-2 rounded-full bg-ink-3 transition-colors duration-300 group-hover:bg-white" />
                </span>
                <article className="card card-hover flex flex-col overflow-hidden sm:flex-row">
                  {s.image && (
                    <div className="zoom aspect-[16/9] sm:aspect-auto sm:w-56 sm:shrink-0">
                      <img src={s.image} alt="" className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="display text-[28px] leading-none tabular-nums tracking-[-0.02em] text-ink">
                        {s.start}
                      </span>
                      <span className="rounded-full bg-raised px-3 py-1 text-[12px] tabular-nums text-ink-2">{s.range}</span>
                    </div>
                    <h3 className="display mt-3 text-[22px] text-ink transition-colors group-hover:text-plum">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-6 text-ink-2">{s.description}</p>
                    <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-ink-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
                        {s.location}
                      </span>
                      {s.note && <span className="text-plum">{s.note}</span>}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Weekdays */}
      <section id="weekdays" className="scroll-mt-24 bg-raised/60 py-24 sm:py-32">
        <div className="wrap">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5">During the week</p>
            <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[64px]">
              Midweek teaching and prayer
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {weekdayServices.map((s, i) => {
              const tone = weekdayTone[i % weekdayTone.length];
              return (
                <Reveal key={s.id} delay={i * 100}>
                  <article
                    className={`${tone.card} group flex h-full min-h-[380px] flex-col rounded-[32px] p-8 transition-[transform,box-shadow] duration-500 [transition-timing-function:var(--ease-soft)] hover:-translate-y-2 hover:shadow-[0_32px_64px_-28px_rgba(18,38,58,0.55)]`}
                  >
                    <p className={`display text-[56px] leading-none tracking-[-0.04em] ${tone.day}`}>
                      {s.day.slice(0, 3)}
                    </p>
                    <p className={`mt-2 text-sm ${tone.muted}`}>Every {s.day}</p>
                    <div className="mt-auto pt-12">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium tabular-nums ${tone.chip}`}>
                        <Clock size={13} strokeWidth={2} aria-hidden="true" />
                        {s.range}
                      </span>
                      <h3 className="display mt-4 text-[28px] leading-tight">{s.title}</h3>
                      <p className={`mt-2 text-[15px] leading-6 ${tone.muted}`}>{s.description}</p>
                      <p className={`mt-4 inline-flex items-center gap-1.5 text-[13px] ${tone.muted}`}>
                        <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
                        {s.location}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* First visit */}
      <section id="first-visit" className="wrap scroll-mt-24 py-24 sm:py-32">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Your first Sunday</p>
            <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[64px]">
              New here? Start like this
            </h2>
          </div>
          <Link href="/contact" className="btn btn-secondary shrink-0">
            Ask us anything <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => {
            const body = (
              <>
                <span className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white">
                    <step.icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="display text-[48px] leading-none tracking-[-0.04em] text-raised transition-colors duration-300 group-hover:text-plum-soft">
                    0{i + 1}
                  </span>
                </span>
                <h3 className="display mt-10 text-[24px] text-ink">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{step.text}</p>
              </>
            );
            return (
              <Reveal key={step.title} delay={i * 100}>
                {step.href ? (
                  <Link href={step.href} className="card card-hover group block h-full p-7">
                    {body}
                  </Link>
                ) : (
                  <div className="card card-hover group h-full p-7">{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <VisitSection />
    </>
  );
}
