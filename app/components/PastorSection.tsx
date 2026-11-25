import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PastorSection() {
  return (
    <section id="pastor" className="wrap py-24 sm:py-36">
      <div className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <Reveal className="relative">
          <div className="zoom aspect-[4/5] rounded-[32px]">
            <img
              src="/ps.jpg"
              alt="Pastor Sina Alabi smiling, in a white shirt and green tie"
              className="h-full w-full object-cover object-[60%_center]"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-card px-5 py-4 shadow-[0_24px_48px_-20px_rgba(18,38,58,0.35)] sm:-right-6">
            <p className="display text-[34px] leading-none text-plum">P.S</p>
            <p className="mt-1 text-[13px] text-ink-3">What the parish calls him</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-5">Our senior pastor</p>
            <h2 className="display text-[40px] leading-[1.02] text-ink sm:text-[60px] tracking-[-0.04em]">Pastor Sina Alabi</h2>
          </Reveal>
          <Reveal delay={100} className="mt-7 space-y-4 text-[17px] leading-8 text-ink-2">
            <p>
              P.S has more than 15 years in ministry. He has a heart for people who do not yet know
              Christ, and he wants to see their lives changed by the Word of God.
            </p>
            <p>
              The parish knows him for his teaching and his love for people, and many come to him for
              fatherly advice. The church has grown under his leadership, in Ora Estate and in the
              neighbourhoods around it. He serves alongside Pastor Mrs. Peace Alabi, who leads pastoral
              care and the women&apos;s ministry.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/about/leadership" className="btn btn-primary">
              Meet our pastors <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
            <Link href="/about/story" className="text-link">
              Our story <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
