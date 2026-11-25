import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, HandHeart, Music, Sparkles } from "lucide-react";
import PhotoHero from "../components/PhotoHero";
import Reveal from "../components/Reveal";
import VisitSection from "../components/VisitSection";
import AboutNav from "./AboutNav";
import { services } from "../data/schedule";

export const metadata: Metadata = {
  title: "About us | RCCG The Praise Parish",
  description:
    "Learn about RCCG The Praise Parish in Epe, Lagos: our story, our pastors and our ministries.",
};

const facts = [
  { figure: "1952", label: "The Redeemed Christian Church of God begins in Nigeria" },
  { figure: "1999", label: "The Praise Parish is established in Ora Estate, Epe" },
  { figure: "LP132", label: "Headquarters of RCCG Lagos Province 132" },
  { figure: String(services.length), label: "Services and gatherings every week" },
];

const practices = [
  { icon: Music, title: "We worship", text: "Sundays and midweek, with the choir and music team leading the congregation." },
  { icon: BookOpen, title: "We study Scripture", text: "In Sunday school, Bible study and the believers class." },
  { icon: Sparkles, title: "We pray", text: "At the divine mercy hour on Wednesdays and moving mountains on Thursdays." },
  { icon: HandHeart, title: "We serve our neighbours", text: "Through welfare, evangelism and community service around Epe." },
];

const explore = [
  { title: "Our story", text: "From 1952 to a parish in Ora Estate", href: "/about/story", image: "/epe3.jpg" },
  { title: "Leadership", text: "Meet Pastor and Pastor Mrs. Alabi", href: "/about/leadership", image: "/mpps.jpg" },
  { title: "Ministries", text: "Find your place to serve", href: "/about/ministries", image: "/ccq.jpg" },
];

export default function AboutPage() {
  return (
    <>
      <PhotoHero
        image="/pra.jpg"
        position="center 15%"
        kicker="About the parish"
        title="People in Epe who gather to worship God"
        bottom={<AboutNav />}
        actions={
          <>
            <Link href="/contact" className="btn btn-light">
              Plan a visit <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn-ghost-light">
              Service times
            </Link>
          </>
        }
      >
        We meet to worship, learn from the Bible and encourage one another. Whether you are new to
        church or looking for somewhere to settle, there is a place for you here.
      </PhotoHero>

      {/* Facts */}
      <section className="wrap py-20 sm:py-28">
        <div className="grid gap-px overflow-hidden rounded-[32px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.figure} delay={i * 90} className="group bg-card p-8 transition-colors duration-300 hover:bg-navy">
              <p className="display text-[64px] leading-none tracking-[-0.05em] text-ink tabular-nums transition-colors duration-300 group-hover:text-sun">
                {f.figure}
              </p>
              <p className="mt-4 text-[15px] leading-6 text-ink-2 transition-colors duration-300 group-hover:text-white/75">
                {f.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="wrap pb-24 sm:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal className="grid grid-cols-5 gap-4">
            <div className="zoom col-span-3 aspect-[3/4] rounded-[28px]">
              <img src="/ch.jpg" alt="A member reading her notes during a service" className="h-full w-full object-cover" />
            </div>
            <div className="col-span-2 flex flex-col gap-4 pt-16">
              <div className="zoom aspect-square rounded-[24px]">
                <img src="/ccq.jpg" alt="The children's choir" className="h-full w-full object-cover" />
              </div>
              <div className="zoom aspect-[3/4] rounded-[24px]">
                <img src="/ch2.jpg" alt="A member following the sermon" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow mb-5">What we do</p>
              <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[60px]">
                A church family that worships, learns and serves
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-3">
              {practices.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 80}>
                  <div className="group flex items-start gap-5 rounded-3xl border border-transparent p-4 transition-[background-color,border-color] duration-300 hover:border-line hover:bg-card">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white">
                      <p.icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="display block text-[22px] text-ink">{p.title}</span>
                      <span className="mt-1 block text-[15px] leading-6 text-ink-2">{p.text}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="bg-navy py-24 text-white sm:py-32">
        <div className="wrap">
          <Reveal className="mb-14 max-w-2xl">
            <p className="eyebrow mb-5 text-sun">Get to know us</p>
            <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] sm:text-[60px]">Read more about the parish</h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {explore.map((e, i) => (
              <Reveal key={e.href} delay={i * 100}>
                <Link href={e.href} className="group relative block aspect-[4/5] overflow-hidden rounded-[32px] bg-navy-deep">
                  <div className="zoom absolute inset-0">
                    <img src={e.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.92)_0%,rgba(8,16,24,0.2)_55%,rgba(8,16,24,0)_100%)]" />
                  <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-[transform,background-color] duration-300 group-hover:rotate-45 group-hover:bg-sun">
                    <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="display text-[34px] leading-none tracking-[-0.03em]">{e.title}</h3>
                    <p className="mt-2 text-[15px] text-white/70">{e.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24 sm:pt-32">
        <VisitSection />
      </div>
    </>
  );
}
