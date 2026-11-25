"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { formatEventDate, splitEvents, type ChurchEvent } from "../data/events";
import { EventCard } from "../components/AnnouncementsSection";
import { PageIntro } from "../components/ui";

type Filter = "all" | "upcoming" | "past";

export default function EventsPage() {
  const [now, setNow] = useState<Date | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<ChurchEvent | null>(null);
  useEffect(() => setNow(new Date()), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const { upcoming, past } = now ? splitEvents(now) : { upcoming: [], past: [] };
  const groups = [
    { key: "upcoming" as const, title: "Upcoming", items: upcoming },
    { key: "past" as const, title: "Past events", items: past },
  ].filter((g) => filter === "all" || g.key === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "upcoming", label: `Upcoming (${upcoming.length})` },
    { key: "past", label: `Past (${past.length})` },
  ];

  return (
    <>
      <PageIntro kicker="Events" title="What is on at the parish">
        Conferences, special Sundays and evenings of praise at The Praise Parish and across Lagos
        Province 132. Everyone is welcome.
      </PageIntro>

      <section className="wrap min-h-[600px] pb-24 sm:pb-32">
        <div role="tablist" aria-label="Filter events" className="mb-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={`h-9 rounded-[10px] px-4 text-sm tabular-nums transition-colors duration-150 ${
                filter === f.key
                  ? "bg-navy text-white"
                  : "border border-line-strong text-ink-2 hover:bg-raised hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {now && (
          <div className="space-y-20">
            {groups.map((group) => (
              <div key={group.key}>
                <h2 className="display mb-8 border-b border-line pb-4 text-[30px] text-ink">{group.title}</h2>
                {group.items.length === 0 ? (
                  <p className="text-[17px] text-ink-2">
                    {group.key === "upcoming"
                      ? "No new events are announced yet. Our weekly services carry on as usual."
                      : "No past events to show."}{" "}
                    {group.key === "upcoming" && (
                      <Link href="/services" className="text-link">
                        See service times
                      </Link>
                    )}
                  </p>
                ) : (
                  <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => setSelected(event)}
                        aria-label={`Read more about ${event.title}`}
                        className="block h-full rounded-3xl text-left"
                      >
                        <EventCard event={event} past={group.key === "past"} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-4 sm:items-center"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-title"
            className="rise max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img src={selected.image} alt="" className="aspect-[16/9] w-full object-cover object-top" />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-card text-ink transition-colors hover:bg-raised"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h2 id="event-title" className="display text-[30px] leading-tight text-ink">
                {selected.title}
              </h2>
              <ul className="mt-5 space-y-2 text-[15px] text-ink-2">
                <li className="flex items-center gap-2.5">
                  <Calendar size={16} strokeWidth={1.5} className="text-ink-3" aria-hidden="true" />
                  {formatEventDate(selected.date)}
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock size={16} strokeWidth={1.5} className="text-ink-3" aria-hidden="true" />
                  {selected.time}
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} strokeWidth={1.5} className="text-ink-3" aria-hidden="true" />
                  {selected.location}
                </li>
              </ul>
              <p className="mt-6 text-[17px] leading-7 text-ink">{selected.details}</p>
              {now && selected.date < now.toISOString().slice(0, 10) && (
                <Link href="/gallery" className="text-link mt-6">
                  See photos in the gallery
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
