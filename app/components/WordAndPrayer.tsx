"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, X } from "lucide-react";
import { monthlyWord, weeklyPrayers } from "../data/contents";
import type { WeeklyPrayer } from "../types";
import Reveal from "./Reveal";

function splitVerse(verse: string) {
  const [ref, ...rest] = verse.split(" - ");
  return { ref: ref.trim(), text: rest.join(" - ").replace(/^'|'$/g, "").trim() };
}

export default function WordAndPrayer() {
  const [selected, setSelected] = useState<WeeklyPrayer | null>(null);
  const word = splitVerse(monthlyWord.verse);

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

  return (
    <section id="word-and-prayer" className="wrap py-24 sm:py-36">
      <Reveal className="mb-14 max-w-3xl">
        <p className="eyebrow mb-5">{monthlyWord.date}</p>
        <h2 className="display text-[40px] leading-[1.02] text-ink sm:text-[60px] tracking-[-0.04em]">
          This month&apos;s word, and this week&apos;s prayer
        </h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[7fr_5fr]">
        <Reveal>
          <article className="group relative flex min-h-[560px] flex-col justify-end overflow-hidden rounded-[32px] bg-navy-deep text-white">
            <div className="zoom absolute inset-0">
              <img src={monthlyWord.image} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.95)_0%,rgba(8,16,24,0.6)_50%,rgba(8,16,24,0.2)_100%)]" />
            <div className="relative p-7 sm:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-sun px-3 py-1.5 text-[13px] font-medium text-ink">
                <BookOpen size={14} strokeWidth={2} aria-hidden="true" />
                Word for {monthlyWord.date}
              </span>
              <h3 className="display mt-5 text-[36px] leading-[1.05] sm:text-[48px] tracking-[-0.04em]">{monthlyWord.title.trim()}</h3>
              <blockquote className="mt-5 border-l-2 border-sun pl-5">
                <p className="text-[19px] leading-8 text-white/90">{word.text}</p>
                <cite className="mt-1 block text-sm not-italic text-white/60">{word.ref}</cite>
              </blockquote>
              <p className="mt-5 max-w-2xl text-[16px] leading-7 text-white/75">{monthlyWord.message}</p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120} className="card flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-7 pb-4 pt-7">
            <h3 className="display text-[26px] text-ink">Prayer for each week</h3>
            <span className="rounded-full bg-raised px-3 py-1 text-[13px] tabular-nums text-ink-2">
              {weeklyPrayers.length} weeks
            </span>
          </div>
          <ol className="max-h-[480px] flex-1 overflow-y-auto px-3 pb-3">
            {weeklyPrayers.map((prayer) => (
              <li key={prayer.id}>
                <button
                  type="button"
                  onClick={() => setSelected(prayer)}
                  className="group flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors duration-200 hover:bg-raised"
                >
                  <span className="display flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-strong text-[15px] tabular-nums text-ink transition-colors duration-200 group-hover:border-plum group-hover:bg-plum group-hover:text-white">
                    {prayer.week}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-medium text-ink">
                      {prayer.title.replace("Prayer for ", "")}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-ink-3">{prayer.prayer}</span>
                  </span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className="shrink-0 -translate-x-1 text-plum opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </button>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="prayer-title"
            className="rise w-full max-w-lg rounded-[28px] bg-card p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-ink-3">{selected.date}</p>
                <h3 id="prayer-title" className="display mt-1 text-[32px] leading-tight text-ink">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="-mr-2 -mt-1 flex h-10 w-10 items-center justify-center rounded-full text-ink-2 transition-[background-color,transform] duration-200 hover:rotate-90 hover:bg-raised"
              >
                <X size={18} strokeWidth={1.75} />
              </button>
            </div>
            <p className="mt-6 text-[18px] leading-8 text-ink">{selected.prayer}</p>
            <blockquote className="mt-6 rounded-2xl bg-plum-soft p-5">
              <p className="text-[16px] leading-7 text-plum-deep">{splitVerse(selected.verse).text}</p>
              <cite className="mt-1 block text-sm not-italic text-plum">{splitVerse(selected.verse).ref}</cite>
            </blockquote>
            <p className="mt-6 text-sm leading-6 text-ink-3">
              Take five minutes to pray this through, and trust God to answer in his way.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
