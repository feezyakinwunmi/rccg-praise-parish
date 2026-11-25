"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { services, type Service } from "../data/schedule";

const dayIndex: Record<string, number> = { Sunday: 0, Tuesday: 2, Wednesday: 3, Thursday: 4 };

function toMinutes(t: string) {
  const m = t.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (!m) return null;
  let h = Number(m[1]) % 12;
  if (m[3].toLowerCase() === "pm") h += 12;
  return h * 60 + Number(m[2]);
}

/** "5:00 to 6:00 pm" -> [start, end] in minutes */
function span(s: Service): [number, number] | null {
  const start = toMinutes(s.start);
  const endPart = s.range.split(" to ")[1];
  if (start === null || !endPart) return null;
  let end = toMinutes(endPart);
  if (end === null) return null;
  if (end < start) end += 12 * 60;
  return [start, end];
}

function lagosNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }));
}

function findNext(now: Date) {
  const nowMin = now.getHours() * 60 + now.getMinutes();
  for (let offset = 0; offset < 14; offset++) {
    const day = new Date(now);
    day.setDate(now.getDate() + offset);
    const candidates = services
      .filter((s) => dayIndex[s.day] === day.getDay())
      .filter((s) => s.id !== "youth" || [2, 3, 4].includes(Math.ceil(day.getDate() / 7)))
      .map((s) => ({ s, t: span(s) }))
      .filter((x): x is { s: Service; t: [number, number] } => x.t !== null)
      .sort((a, b) => a.t[0] - b.t[0]);
    for (const { s, t } of candidates) {
      if (offset === 0 && nowMin >= t[1]) continue;
      const live = offset === 0 && nowMin >= t[0];
      const minsAway = offset * 24 * 60 + t[0] - nowMin;
      return { service: s, live, minsAway };
    }
  }
  return null;
}

function describe(mins: number) {
  if (mins < 60) return `Starts in ${mins} min`;
  const h = Math.floor(mins / 60);
  if (h < 24) return `Starts in ${h} hour${h === 1 ? "" : "s"}`;
  const d = Math.round(h / 24);
  return d === 1 ? "Starts tomorrow" : `Starts in ${d} days`;
}

export default function NextService() {
  const [next, setNext] = useState<ReturnType<typeof findNext> | undefined>(undefined);

  useEffect(() => {
    const tick = () => setNext(findNext(lagosNow()));
    tick();
    const t = window.setInterval(tick, 60_000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <div className="rounded-3xl bg-card p-7 text-ink shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-ink-3">Next service</p>
        {next && (
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-medium ${
              next.live ? "bg-[#e7f4ec] text-[#16794a]" : "bg-plum-soft text-plum"
            }`}
          >
            {next.live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16794a]" />}
            {next.live ? "Happening now" : describe(next.minsAway)}
          </span>
        )}
      </div>
      <div className="mt-4 min-h-[108px]">
        {next && (
          <>
            <h2 className="display text-[30px] leading-tight">{next.service.title}</h2>
            <p className="mt-2 text-[17px] tabular-nums text-ink-2">
              {next.service.day}, {next.service.range}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-3">
              <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
              {next.service.location}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
