import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import PhotoHero from "../../components/PhotoHero";
import Reveal from "../../components/Reveal";
import AboutNav from "../AboutNav";
import PastorDirectory from "./PastorDirectory";

export const metadata: Metadata = {
  title: "Leadership | RCCG The Praise Parish",
  description:
    "Meet the pastors of RCCG The Praise Parish and the parishes of Lagos Province 132.",
};

export default function LeadershipPage() {
  return (
    <>
      <PhotoHero
        image="/mpps.jpg"
        position="center 30%"
        kicker="Leadership"
        title="Our pastors"
        bottom={<AboutNav />}
      >
        Pastor Sina Alabi and Pastor Mrs. Peace Alabi lead The Praise Parish, with pastors serving
        parishes across Lagos Province 132.
      </PhotoHero>

      <PastorDirectory />

      <section className="wrap pb-24 sm:pb-32">
        <Reveal className="flex flex-col gap-6 rounded-[32px] bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="display text-[32px] leading-tight tracking-[-0.03em] sm:text-[40px]">Want to speak with a pastor?</h2>
            <p className="mt-2 text-[17px] text-white/70">For prayer, counselling or a question about faith.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-light">
              <Mail size={16} strokeWidth={2} aria-hidden="true" />
              Contact the parish
            </Link>
            <Link href="/about/ministries" className="btn btn-ghost-light">
              Our ministries <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
