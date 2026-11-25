import Link from "next/link";
import { ArrowRight, Navigation } from "lucide-react";
import { church } from "../data/church";
import Reveal from "./Reveal";

export default function VisitSection() {
  return (
    <section className="wrap pb-24 sm:pb-36">
      <Reveal>
        <div className="group relative overflow-hidden rounded-[36px] bg-plum text-white">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative z-10 p-8 sm:p-14 lg:p-16">
              <p className="eyebrow mb-5 text-white/80">Your first Sunday</p>
              <h2 className="display text-[40px] leading-[1.02] sm:text-[60px] tracking-[-0.04em]">We would love to meet you</h2>
              <p className="mt-6 max-w-md text-[17px] leading-8 text-white/80">
                Find us at {church.address.join(", ")}. The early risers service starts at 7:30 and the
                second service at 9:00. Come as you are.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={church.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                  <Navigation size={16} strokeWidth={2} aria-hidden="true" />
                  Get directions
                </a>
                <Link href="/contact" className="btn btn-ghost-light">
                  Ask us a question <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="zoom relative min-h-[320px] lg:min-h-full">
              <img src="/epe6.jpg" alt="The parish family gathered outdoors" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
