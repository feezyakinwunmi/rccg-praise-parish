import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import PhotoHero from "../../components/PhotoHero";
import Reveal from "../../components/Reveal";
import AboutNav from "../AboutNav";

export const metadata: Metadata = {
  title: "Ministries | RCCG The Praise Parish",
  description: "Ways to worship, grow and serve through the ministries of RCCG The Praise Parish.",
};

const ministries = [
  {
    name: "Worship and music",
    description: "Join the choir and music team in leading the congregation in worship.",
    image: "/tppc.jpg",
    span: "lg:col-span-2",
  },
  {
    name: "Children and families",
    description: "Help children learn about the Bible and grow up in a caring community.",
    image: "/ccq.jpg",
    span: "",
  },
  {
    name: "Youth",
    description: "Meet other young people through fellowship, discipleship and service.",
    image: "/youth.jpg",
    span: "",
  },
  {
    name: "Prayer and Bible study",
    description: "Grow through prayer meetings and regular study of God's Word.",
    image: "/ch.jpg",
    span: "",
  },
  {
    name: "Community service",
    description: "Give your time and gifts to care for people in Epe.",
    image: "/epe6.jpg",
    span: "",
  },
];

export default function MinistriesPage() {
  return (
    <>
      <PhotoHero
        image="/ccq.jpg"
        position="center 30%"
        kicker="Get involved"
        title="Find your place to serve"
        bottom={<AboutNav />}
        actions={
          <Link href="/join" className="btn btn-light">
            Join a ministry <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        }
      >
        There are many ways to take part in the life of the church. Tell us what interests you and we
        will help you take the next step.
      </PhotoHero>

      <section className="wrap py-24 sm:py-32">
        <Reveal className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Our ministries</p>
            <h2 className="display text-[44px] leading-[1] tracking-[-0.04em] text-ink sm:text-[60px]">Five ways to get involved</h2>
          </div>
          <Link href="/join" className="btn btn-secondary shrink-0">
            See all departments <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 100} className={m.span}>
              <Link
                href="/join"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[32px] bg-navy-deep text-white sm:aspect-[4/3] lg:aspect-auto lg:h-[440px]"
              >
                <div className="zoom absolute inset-0">
                  <img src={m.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,16,24,0.92)_0%,rgba(8,16,24,0.25)_55%,rgba(8,16,24,0.05)_100%)]" />
                <span className="absolute left-6 top-6 text-[13px] tabular-nums text-white/70">0{i + 1}</span>
                <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-[transform,background-color,color] duration-300 group-hover:rotate-45 group-hover:bg-sun group-hover:text-ink">
                  <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="display text-[30px] leading-none tracking-[-0.03em] sm:text-[34px]">{m.name}</h3>
                  <p className="mt-3 max-w-md translate-y-1 text-[15px] leading-6 text-white/75 transition-transform duration-300 group-hover:translate-y-0">
                    {m.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-24 sm:pb-32">
        <Reveal className="relative overflow-hidden rounded-[36px] bg-plum p-8 text-white sm:p-14">
          <div className="max-w-2xl">
            <h2 className="display text-[40px] leading-[1] tracking-[-0.04em] sm:text-[56px]">Not sure where you fit?</h2>
            <p className="mt-5 text-[17px] leading-8 text-white/80">
              Fill in the workers form and tell us what you are good at. We will help you find a
              department that suits you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="btn btn-light">
                Fill in the workers form <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-ghost-light">
                Ask a question
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
