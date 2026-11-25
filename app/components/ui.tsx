import type { ReactNode } from "react";

/** One line of the order of service: label, dotted leader, time. */
export function TimeRow({
  label,
  time,
  note,
  className = "",
}: {
  label: ReactNode;
  time: string;
  note?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline text-[15px]">
        <span className="text-ink">{label}</span>
        <span aria-hidden="true" className="leader" />
        <span className="whitespace-nowrap font-medium tabular-nums text-ink">{time}</span>
      </div>
      {note && <p className="mt-0.5 text-[13px] text-ink-3">{note}</p>}
    </div>
  );
}

/** Title block at the top of an inner page. */
export function PageIntro({
  kicker,
  title,
  children,
  aside,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="wrap pb-14 pt-14 sm:pb-20 sm:pt-24">
      <div className={aside ? "grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end" : ""}>
        <div className="max-w-3xl">
          {kicker && <p className="eyebrow rise mb-6">{kicker}</p>}
          <h1 className="display rise-2 text-[48px] leading-[0.98] text-ink sm:text-[80px] tracking-[-0.04em]">{title}</h1>
          {children && (
            <div className="rise-3 mt-7 max-w-xl text-lg leading-8 text-ink-2">{children}</div>
          )}
        </div>
        {aside && <div className="rise-4">{aside}</div>}
      </div>
    </header>
  );
}

/** Heading for a section within a page. */
export function SectionHeading({
  kicker,
  title,
  children,
  action,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {kicker && <p className="eyebrow mb-5">{kicker}</p>}
        <h2 className="display text-[36px] leading-[1.04] text-ink sm:text-[52px] tracking-[-0.04em]">{title}</h2>
        {children && <div className="mt-5 text-[17px] leading-7 text-ink-2">{children}</div>}
      </div>
      {action}
    </div>
  );
}
