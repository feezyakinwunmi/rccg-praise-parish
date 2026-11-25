"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { sundayServices } from "../data/schedule";

const SLIDE_MS = 7000;

const photos = [
  {
    image: "/tppc.jpg",
    alt: "The choir in green and red, holding shekeres during a Christmas service",
    caption: "The choir at our Christmas service",
    position: "center 40%",
  },
  {
    image: "/epe5.jpg",
    alt: "A crowd with hands raised in worship at night",
    caption: "Epe Praise Experience, April 2026",
    position: "center 30%",
  },
  {
    image: "/epe6.jpg",
    alt: "The parish family gathered outdoors",
    caption: "The parish family on the church grounds",
    position: "center",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % photos.length), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [index, paused]);

  return (
    <section
      className="relative -mt-[72px] flex min-h-[680px] flex-col overflow-hidden bg-navy-deep text-white lg:h-[100svh] lg:max-h-[960px]"
      aria-roledescription="carousel"
      aria-label="Photos from the parish"
    >
      {/* Photos */}
      {photos.map((p, i) => (
        <div
          key={p.image}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            key={i === index ? `${p.image}-on` : p.image}
            src={p.image}
            alt={p.alt}
            style={{ objectPosition: p.position }}
            className={`h-full w-full object-cover ${i === index ? "drift" : ""}`}
          />
        </div>
      ))}
      {/* Legibility shade, one neutral, darker at the bottom and left */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.92)_0%,rgba(8,16,24,0.55)_45%,rgba(8,16,24,0.25)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,16,24,0.55)_0%,rgba(8,16,24,0)_60%)]" />

      <div className="wrap relative flex flex-1 flex-col justify-end pb-10 pt-36 sm:pb-12">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div>
            <p className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[13px] text-white/90 backdrop-blur-sm">
              <MapPin size={14} strokeWidth={1.75} aria-hidden="true" />
              Ora Estate, Epe · Lagos Province 132 headquarters
            </p>
            <h1 className="display rise-2 max-w-[14ch] text-[48px] leading-[0.98] sm:text-[72px] lg:text-[92px] tracking-[-0.04em]">
              The Family church where you belong
            </h1>
            <p className="display rise-2 mt-4 text-[24px] text-sun sm:text-[30px] lg:text-[36px] tracking-[-0.02em]">
              The Favoured Family
            </p>
            <p className="rise-3 mt-6 max-w-xl text-lg leading-8 text-white/80">
              Come and worship with us at RCCG The Praise Parish. Sunday school starts at 8:00, and
              there is a seat for you whether it is your first visit or your hundredth.
            </p>
            <div className="rise-4 mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-light">
                Plan your visit <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                Service times
              </Link>
            </div>
          </div>

          <aside
            aria-labelledby="sunday-heading"
            className="rise-4 hidden rounded-3xl bg-card p-7 text-ink shadow-[0_32px_64px_-24px_rgba(0,0,0,0.6)] lg:block"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 id="sunday-heading" className="display text-[24px]">
                This Sunday
              </h2>
              <span className="rounded-full bg-plum-soft px-3 py-1 text-[12px] font-medium text-plum">
                Order of service
              </span>
            </div>
            <ul className="space-y-4">
              {sundayServices.map((s) => (
                <li key={s.id} className="flex items-baseline text-[15px]">
                  <span>{s.title}</span>
                  <span aria-hidden="true" className="leader" />
                  <span className="whitespace-nowrap font-medium tabular-nums">{s.start}</span>
                </li>
              ))}
            </ul>
            <Link href="/services" className="text-link mt-6">
              Weekday services <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </aside>
        </div>

        {/* Slide controls */}
        <div
          className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <p className="text-sm text-white/70">
            <span className="tabular-nums text-white">0{index + 1}</span>
            <span className="mx-2 text-white/40">/</span>
            {photos[index].caption}
          </p>
          <div className="flex gap-2">
            {photos.map((p, i) => (
              <button
                key={p.image}
                type="button"
                aria-label={`Show photo ${i + 1}: ${p.caption}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className="group relative h-8 w-16 sm:w-20"
              >
                <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/25 transition-colors group-hover:bg-white/45">
                  {i < index && <span className="absolute inset-0 bg-white" />}
                  {i === index && (
                    <span
                      key={`${index}-${paused}`}
                      className="progress absolute inset-0 bg-white"
                      style={{ animationDuration: `${SLIDE_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
