"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { PageIntro } from "../components/ui";
import Reveal from "../components/Reveal";
import { church } from "../data/church";

const subjects = [
  "General enquiry",
  "Prayer request",
  "Membership",
  "Volunteering",
  "Giving",
  "Testimony",
  "Complaint or suggestion",
];

const emptyForm = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    try {
      // Opens the visitor's email app. Connect a form backend to send directly.
      const to = form.subject === "Prayer request" ? church.emails.prayer : church.emails.general;
      const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: "success", message: "Your email app should open with your message. Press send to finish." });
      setForm(emptyForm);
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again, or call us." });
    }
  };

  const startPrayerRequest = () => {
    setForm((f) => ({ ...f, subject: "Prayer request" }));
    document.getElementById("message-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cards = [
    {
      icon: MapPin,
      title: "Visit",
      lines: [church.name, ...church.address],
      href: church.mapsUrl,
      action: "Get directions",
      external: true,
    },
    {
      icon: Phone,
      title: "Call",
      lines: church.phones,
      href: `tel:${church.phones[0].replace(/\s/g, "")}`,
      action: "Call the office",
    },
    {
      icon: Mail,
      title: "Email",
      lines: Object.values(church.emails),
      href: `mailto:${church.emails.general}`,
      action: "Send an email",
    },
    {
      icon: Clock,
      title: "Office hours",
      lines: church.officeHours.map((h) => `${h.days}: ${h.hours}`),
      href: "/services",
      action: "Service times",
    },
  ];

  return (
    <>
      <PageIntro kicker="Contact" title="Get in touch">
        Questions, prayer requests or planning your first visit. Call, write or come by the office
        and someone will help.
      </PageIntro>

      <section className="wrap">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <a
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="card card-hover group flex h-full flex-col p-6"
              >
                <span className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white">
                    <c.icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.75}
                    className="text-ink-3 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-plum"
                    aria-hidden="true"
                  />
                </span>
                <h2 className="display mt-6 text-[22px] text-ink">{c.title}</h2>
                <ul className="mt-2 flex-1 space-y-1 text-[15px] leading-6 text-ink-2">
                  {c.lines.map((l) => (
                    <li key={l} className="break-words tabular-nums">
                      {l}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 text-sm font-medium text-plum">{c.action}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap py-6">
        <Reveal className="overflow-hidden rounded-[32px] border border-line bg-raised">
          <div className="h-[380px] w-full sm:h-[440px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.123456789012!2d3.983333!3d6.583333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMDAuMCJOIDTCsDU5JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing RCCG The Praise Parish, Ora Estate, Epe"
            />
          </div>
          <div className="flex flex-col gap-3 bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[15px] text-ink-2">{church.address.join(", ")}</p>
            <a href={church.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              <Navigation size={15} strokeWidth={2} aria-hidden="true" />
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </section>

      <section className="wrap grid gap-6 py-16 sm:pb-32 lg:grid-cols-[2fr_1fr]">
        <Reveal className="card scroll-mt-24 p-6 sm:p-10" >
          <div id="message-form" className="scroll-mt-28" />
          <h2 className="display text-[32px] text-ink">Send a message</h2>
          <p className="mt-2 text-[15px] text-ink-2">We reply as soon as we can.</p>

          <form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="field-label">Your name <span className="text-plum">*</span></span>
              <input className="field" name="name" required value={form.name} onChange={update} autoComplete="name" />
            </label>
            <label className="block">
              <span className="field-label">Email <span className="text-plum">*</span></span>
              <input className="field" type="email" name="email" required value={form.email} onChange={update} autoComplete="email" />
            </label>
            <label className="block">
              <span className="field-label">Phone</span>
              <input className="field" type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" />
            </label>
            <label className="block">
              <span className="field-label">Subject <span className="text-plum">*</span></span>
              <select className="field" name="subject" required value={form.subject} onChange={update}>
                <option value="">Choose a subject</option>
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="field-label">Message <span className="text-plum">*</span></span>
              <textarea className="field" name="message" rows={6} required value={form.message} onChange={update} />
            </label>

            {status && (
              <div
                role="status"
                className={`flex items-start gap-2.5 rounded-xl px-4 py-3 text-[15px] md:col-span-2 ${
                  status.type === "success" ? "bg-[#e7f4ec] text-[#16794a]" : "bg-[#fdecea] text-[#b42318]"
                }`}
              >
                {status.type === "success" ? <CheckCircle2 size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" />}
                {status.message}
              </div>
            )}

            <div className="md:col-span-2">
              <button type="submit" className="btn btn-accent w-full sm:w-auto">
                Send message <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={100} className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="display text-[28px]">Need prayer?</h2>
            <p className="mt-2 text-[15px] leading-6 text-white/70">
              Send a prayer request and the prayer team will stand with you.
            </p>
            <button type="button" onClick={startPrayerRequest} className="btn btn-light mt-6">
              Send a prayer request <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </Reveal>

          <Reveal delay={160}>
            <a
              href={`https://wa.me/${church.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex items-center gap-4 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f4ec] text-[#16794a]">
                <MessageCircle size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-[17px] font-medium text-ink">Chat on WhatsApp</span>
                <span className="block text-sm tabular-nums text-ink-3">{church.phones[0]}</span>
              </span>
              <ArrowUpRight size={18} strokeWidth={1.75} className="text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={220} className="card p-3">
            {[
              { name: "Service times", href: "/services" },
              { name: "Become a member", href: "/join" },
              { name: "Upcoming events", href: "/events" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] text-ink transition-colors hover:bg-raised"
              >
                {l.name}
                <ArrowRight size={16} strokeWidth={1.75} className="text-ink-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-plum" aria-hidden="true" />
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
