"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, Church, Mail, MapPin, Phone, Search, X } from "lucide-react";
import {
  categoryIntro,
  categoryLabels,
  pastors,
  type Pastor,
  type PastorCategory,
} from "../../data/pastors";
import Reveal from "../../components/Reveal";

type Filter = "all" | PastorCategory;
const order: PastorCategory[] = ["headquarters", "branch", "past"];

function PastorCard({ pastor, onOpen }: { pastor: Pastor; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View profile of ${pastor.name}`}
      className="group card card-hover flex h-full w-full flex-col overflow-hidden text-left"
    >
      <div className="zoom relative aspect-[4/5] bg-raised">
        <img
          src={pastor.image}
          alt=""
          style={{ objectPosition: pastor.imagePosition ?? "center top" }}
          className="h-full w-full object-cover"
        />
        {pastor.category === "past" && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] text-white backdrop-blur-sm">
            Served {pastor.years ?? "previously"}
          </span>
        )}
        <span className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full bg-white text-ink opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[12px] text-plum">{pastor.role}</p>
        <h3 className="display mt-1 text-[18px] leading-tight text-ink">{pastor.name}</h3>
        {pastor.spouse && <p className="mt-0.5 text-[13px] text-ink-2">and {pastor.spouse}</p>}
        <p className="mt-auto flex items-center gap-1.5 pt-3 text-[12px] text-ink-3">
          <Church size={12} strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">{pastor.parish}</span>
        </p>
      </div>
    </button>
  );
}

function PastorModal({ pastor, onClose }: { pastor: Pastor; onClose: () => void }) {
  const gallery = [{ src: pastor.image, caption: pastor.spouse ? "Together" : pastor.name }, ...(pastor.photos ?? [])];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pastor-name"
        onClick={(e) => e.stopPropagation()}
        className="rise relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-[28px] bg-card sm:rounded-[28px] md:grid-cols-[5fr_6fr]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-ink transition-[transform,background-color] duration-200 hover:rotate-90 hover:bg-raised"
        >
          <X size={18} strokeWidth={1.75} />
        </button>

        <div className="bg-raised p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] md:aspect-auto md:h-[420px]">
            {gallery.map((g, i) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.caption}
                style={{ objectPosition: i === 0 ? pastor.imagePosition ?? "center top" : "center top" }}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-2">
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show photo: ${g.caption}`}
                  aria-pressed={i === active}
                  className={`h-16 w-16 overflow-hidden rounded-xl border-2 transition-[border-color,opacity] duration-200 ${
                    i === active ? "border-plum" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={g.src} alt="" className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-7 sm:p-9">
          <span className="rounded-full bg-plum-soft px-3 py-1 text-[12px] font-medium text-plum">
            {categoryLabels[pastor.category]}
          </span>
          <p className="mt-5 text-sm text-ink-3">{pastor.role}</p>
          <h2 id="pastor-name" className="display mt-1 text-[34px] leading-[1.05] tracking-[-0.03em] text-ink">
            {pastor.name}
            {pastor.known && <span className="text-plum"> ({pastor.known})</span>}
          </h2>
          {pastor.spouse && <p className="display mt-1 text-[20px] text-ink-2">and {pastor.spouse}</p>}

          <ul className="mt-6 space-y-2 text-[15px] text-ink-2">
            <li className="flex items-center gap-2.5">
              <Church size={16} strokeWidth={1.75} className="text-ink-3" aria-hidden="true" />
              {pastor.parish}
            </li>
            {pastor.location && (
              <li className="flex items-center gap-2.5">
                <MapPin size={16} strokeWidth={1.75} className="text-ink-3" aria-hidden="true" />
                {pastor.location}
              </li>
            )}
            {pastor.years && (
              <li className="flex items-center gap-2.5">
                <Calendar size={16} strokeWidth={1.75} className="text-ink-3" aria-hidden="true" />
                {pastor.years}
              </li>
            )}
          </ul>

          <div className="mt-6 space-y-3 border-t border-line pt-6 text-[16px] leading-7 text-ink">
            {pastor.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {pastor.focus && pastor.focus.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {pastor.focus.map((f) => (
                <span key={f} className="rounded-full border border-line-strong px-3 py-1.5 text-[13px] text-ink">
                  {f}
                </span>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {pastor.phone ? (
              <a href={`tel:${pastor.phone.replace(/\s/g, "")}`} className="btn btn-sm btn-primary">
                <Phone size={15} strokeWidth={2} aria-hidden="true" />
                Call
              </a>
            ) : (
              <Link href="/contact" className="btn btn-sm btn-primary">
                <Mail size={15} strokeWidth={2} aria-hidden="true" />
                Contact the parish
              </Link>
            )}
            {pastor.email && (
              <a href={`mailto:${pastor.email}`} className="btn btn-sm btn-secondary">
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PastorDirectory() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Pastor | null>(null);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return pastors;
    return pastors.filter((p) =>
      [p.name, p.spouse, p.parish, p.location, p.known].some((v) => v?.toLowerCase().includes(q))
    );
  }, [query]);

  const counts = Object.fromEntries(order.map((c) => [c, pastors.filter((p) => p.category === c).length]));
  const groups = (filter === "all" ? order : [filter]).map((c) => ({
    category: c,
    items: matches.filter((p) => p.category === c),
  }));

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: "All", count: pastors.length },
    ...order.map((c) => ({ key: c as Filter, label: categoryLabels[c], count: counts[c] })),
  ];

  return (
    <section className="wrap py-20 sm:py-28">
      <Reveal className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5">Pastors across the province</p>
          <h2 className="display text-[40px] leading-[1] tracking-[-0.04em] text-ink sm:text-[56px]">
            Meet the pastors
          </h2>
          <p className="mt-5 text-[17px] leading-7 text-ink-2">
            The Praise Parish is the headquarters of Lagos Province 132. Select a pastor to read more
            about them and the parish they lead.
          </p>
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search pastors</span>
          <Search size={17} strokeWidth={1.75} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-3" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or parish"
            className="field rounded-full pl-11"
          />
        </label>
      </Reveal>

      <div role="tablist" aria-label="Filter pastors" className="-mx-1 mb-12 flex gap-2 overflow-x-auto px-1 pb-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={filter === t.key}
            onClick={() => setFilter(t.key)}
            className={`inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full px-5 text-sm transition-colors duration-200 ${
              filter === t.key ? "bg-navy text-white" : "border border-line-strong text-ink-2 hover:border-ink hover:text-ink"
            }`}
          >
            {t.label}
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] tabular-nums ${
                filter === t.key ? "bg-white/15 text-white" : "bg-raised text-ink-3"
              }`}
            >
              {t.count}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {groups.map((g) => (
          <div key={g.category}>
            <div className="mb-6 flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="display text-[26px] text-ink">{categoryLabels[g.category]}</h3>
              <p className="text-sm text-ink-3">{categoryIntro[g.category]}</p>
            </div>
            {g.items.length === 0 ? (
              <p className="rounded-3xl border border-dashed border-line-strong px-6 py-10 text-center text-[15px] text-ink-3">
                {query ? "No pastors match your search." : "Profiles will be added here soon."}
              </p>
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {g.items.map((p, i) => (
                  <Reveal key={p.id} delay={(i % 5) * 60}>
                    <PastorCard pastor={p} onOpen={() => setOpen(p)} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {open && <PastorModal pastor={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
