"use client";

import Link from "next/link";
import { useNow } from "./useNow";
import { ArrowRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { eventDay, splitEvents, type ChurchEvent } from "../data/events";
import Reveal from "./Reveal";

export function EventCard({ event, past }: { event: ChurchEvent; past?: boolean }) {
  const { day, month } = eventDay(event.date);
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="zoom relative aspect-[4/3] bg-raised">
        <img src={event.image} alt="" className="h-full w-full object-cover object-top" />
        <div className="absolute left-4 top-4 flex flex-col items-center rounded-2xl bg-card px-3.5 py-2 text-center shadow-sm">
          <span className="text-[12px] font-medium uppercase text-plum">{month}</span>
          <span className="display text-[26px] leading-none tabular-nums text-ink">{day}</span>
        </div>
        {past && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[12px] text-white backdrop-blur-sm">
            Took place
          </span>
        )}
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="display text-[22px] leading-tight text-ink transition-colors group-hover:text-plum">
          {event.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-ink-2">{event.summary}</p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5 text-[13px] text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} strokeWidth={1.75} aria-hidden="true" />
            {event.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} strokeWidth={1.75} aria-hidden="true" />
            Epe
          </span>
        </div>
      </div>
    </article>
  );
}

export default function AnnouncementsSection() {
  const now = useNow();

  // Split on the client only: the page is prerendered, so the server's date can be stale.
  const { upcoming, past } = now ? splitEvents(now) : { upcoming: [], past: [] };
  const showing = upcoming.length > 0 ? upcoming : past;
  const heading = !now
    ? "Events at the parish"
    : upcoming.length > 0
      ? "Coming up at the parish"
      : "Recently at the parish";

  return (
    <section id="events" className="bg-raised/60 py-24 sm:py-36">
      <div className="wrap">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Events</p>
            <h2 className="display text-[40px] leading-[1.02] text-ink sm:text-[60px] tracking-[-0.04em]">{heading}</h2>
            {now && upcoming.length === 0 && (
              <p className="mt-5 text-[17px] leading-7 text-ink-2">
                Nothing new is on the calendar yet. Here is what we gathered for most recently.
              </p>
            )}
          </div>
          <Link href="/events" className="btn btn-secondary shrink-0">
            All events <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid min-h-[420px] gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showing.slice(0, 3).map((event, i) => (
            <Reveal key={event.id} delay={i * 100}>
              <Link href="/events" className="block h-full rounded-3xl">
                <EventCard event={event} past={upcoming.length === 0} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
