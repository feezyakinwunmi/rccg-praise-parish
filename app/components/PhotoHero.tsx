import type { ReactNode } from "react";

/** Full-bleed photo header for inner pages. Sits under the transparent navbar. */
export default function PhotoHero({
  image,
  position = "center",
  kicker,
  title,
  children,
  actions,
  aside,
  bottom,
}: {
  image: string;
  position?: string;
  kicker?: string;
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  bottom?: ReactNode;
}) {
  return (
    <section className="relative -mt-[72px] flex min-h-[620px] flex-col overflow-hidden bg-navy-deep text-white lg:min-h-[80svh]">
      <img
        src={image}
        alt=""
        style={{ objectPosition: position }}
        className="drift absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.94)_0%,rgba(8,16,24,0.6)_45%,rgba(8,16,24,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,16,24,0.6)_0%,rgba(8,16,24,0)_65%)]" />

      <div className="wrap relative flex flex-1 flex-col justify-end pb-10 pt-40">
        <div className={aside ? "grid items-end gap-10 lg:grid-cols-[1fr_380px] lg:gap-16" : ""}>
          <div className="max-w-3xl">
            {kicker && <p className="eyebrow rise mb-6 text-sun">{kicker}</p>}
            <h1 className="display rise-2 text-[52px] leading-[0.96] tracking-[-0.04em] sm:text-[84px] lg:text-[96px]">
              {title}
            </h1>
            {children && <div className="rise-3 mt-6 max-w-xl text-lg leading-8 text-white/80">{children}</div>}
            {actions && <div className="rise-4 mt-9 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div className="rise-4">{aside}</div>}
        </div>
        {bottom && <div className="rise-4 mt-12 border-t border-white/15 pt-5">{bottom}</div>}
      </div>
    </section>
  );
}
