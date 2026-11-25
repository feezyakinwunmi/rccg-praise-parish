import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoHero from "../../components/PhotoHero";
import Reveal from "../../components/Reveal";
import AboutNav from "../AboutNav";

export const metadata: Metadata = {
  title: "Our story | RCCG The Praise Parish",
  description:
    "The history of the Redeemed Christian Church of God and of RCCG The Praise Parish in Epe.",
};

const timeline = [
  {
    year: "1952",
    title: "The RCCG begins",
    text: "The Redeemed Christian Church of God is founded in Nigeria under Reverend Josiah Olufemi Akindayomi.",
  },
  {
    year: "1981",
    title: "A new General Overseer",
    text: "Pastor E.A. Adeboye becomes General Overseer, and RCCG parishes spread across Nigeria and the world.",
  },
  {
    year: "1999",
    title: "The Praise Parish opens",
    text: "The parish is established in June to serve the community of Ora Estate, Epe, Lagos.",
  },
  {
    year: "Today",
    title: "Province headquarters",
    text: "The Praise Parish is the headquarters of RCCG Lagos Province 132.",
  },
];

const founders = [
  {
    name: "Reverend Josiah Olufemi Akindayomi",
    role: "Founder of the RCCG",
    image: "/pja.jpg",
  },
  {
    name: "Pastor E.A. Adeboye",
    role: "General Overseer of the RCCG",
    image: "/pea.jpg",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PhotoHero
        image="/epe3.jpg"
        position="center 35%"
        kicker="Our story"
        title="From 1952 to Ora Estate"
        bottom={<AboutNav />}
      >
        The Redeemed Christian Church of God began in Nigeria in 1952. Today RCCG congregations around
        the world share a commitment to worship, prayer and the teaching of God&apos;s Word.
      </PhotoHero>

      {/* Timeline */}
      <section className="wrap py-24 sm:py-32">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-5">How we got here</p>
          <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[60px]">Four moments since 1952</h2>
        </Reveal>

        <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[52px] hidden h-px bg-line-strong lg:block" />
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 110} className="group relative">
              <p className="display text-[56px] leading-none tracking-[-0.05em] text-ink tabular-nums transition-colors duration-300 group-hover:text-plum">
                {t.year}
              </p>
              <span
                aria-hidden="true"
                className="relative z-10 mt-5 hidden h-4 w-4 rounded-full border-2 border-plum bg-paper transition-colors duration-300 group-hover:bg-plum lg:block"
              />
              <div className="card card-hover mt-6 p-6">
                <h3 className="display text-[22px] text-ink">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-ink-2">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Founders */}
      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-5 text-sun">The wider church</p>
            <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] sm:text-[60px]">Part of a worldwide family</h2>
            <p className="mt-6 max-w-md text-[17px] leading-8 text-white/75">
              The Praise Parish belongs to the Redeemed Christian Church of God, which began with one
              man&apos;s ministry in 1952 and now has congregations around the world.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} className={i === 1 ? "mt-12" : ""}>
                <figure className="group">
                  <div className="zoom aspect-[3/4] rounded-[28px] bg-navy-deep">
                    <img src={f.image} alt={f.name} className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="mt-4">
                    <p className="display text-[19px] leading-tight">{f.name}</p>
                    <p className="mt-1 text-sm text-white/60">{f.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The parish */}
      <section className="wrap py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="zoom aspect-[4/3] rounded-[32px]">
            <img src="/tppc.jpg" alt="The choir at The Praise Parish" className="h-full w-full object-cover" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow mb-5">Since June 1999</p>
              <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[60px]">The Praise Parish</h2>
            </Reveal>
            <Reveal delay={100} className="mt-6 space-y-4 text-[17px] leading-8 text-ink-2">
              <p>
                RCCG The Praise Parish was established in June 1999 and serves the community of Ora
                Estate, Epe, Lagos. We gather as a church family to worship, study Scripture, pray and
                serve our neighbours.
              </p>
              <p>
                We want to help people grow in faith and to share the gospel in Epe and beyond. People
                and families at every stage of faith are welcome.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-9 flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-primary">
                See service times <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/about/leadership" className="btn btn-secondary">
                Meet our pastors
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
