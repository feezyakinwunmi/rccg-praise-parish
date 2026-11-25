"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Camera,
  CheckCircle2,
  Code,
  Hand,
  Heart,
  HandHeart,
  Leaf,
  MessageCircle,
  Mic,
  Music,
  Palette,
  Shield,
  Truck,
  User,
  Users,
} from "lucide-react";
import { PageIntro } from "../components/ui";
import Reveal from "../components/Reveal";
import { church } from "../data/church";

const departments = [
  { name: "Choir and music", icon: Music, lead: "Brother Michael", phone: "+234 801 234 5678", description: "Lead worship through music and song." },
  { name: "Technical team", icon: Camera, lead: "Brother James", phone: "+234 802 345 6789", description: "Sound, lighting and media production." },
  { name: "Ushering", icon: Hand, lead: "Deacon Peter", phone: "+234 803 456 7890", description: "Welcome and look after people during services." },
  { name: "Children's ministry", icon: Heart, lead: "Sister Grace", phone: "+234 804 567 8901", description: "Teach and care for the next generation." },
  { name: "Prayer warriors", icon: Shield, lead: "Pastor Mrs. Adebimpe", phone: "+234 805 678 9012", description: "Pray for the church and the community." },
  { name: "Evangelism", icon: Users, lead: "Evangelist John", phone: "+234 806 789 0123", description: "Share the gospel around Epe." },
  { name: "Welfare", icon: HandHeart, lead: "Deaconess Mercy", phone: "+234 807 890 1234", description: "Care for members who are in need." },
  { name: "Protocol", icon: Briefcase, lead: "Brother Timothy", phone: "+234 808 901 2345", description: "Plan church events and handle logistics." },
];

const careers = [
  { title: "Web development and tech", description: "Full-stack web development, UI design and modern frameworks.", icon: Code, topic: "Tech Career" },
  { title: "Business and entrepreneurship", description: "Start and grow a business: marketing, sales and leadership.", icon: Briefcase, topic: "Business Career" },
  { title: "Agriculture and agribusiness", description: "Modern farming, poultry, fish farming and agro-processing.", icon: Leaf, topic: "Agriculture" },
  { title: "Creative arts and media", description: "Graphic design, video editing, photography and content.", icon: Palette, topic: "Creative Arts" },
  { title: "Music and production", description: "Music production, sound engineering and instrument training.", icon: Mic, topic: "Music Career" },
  { title: "Logistics and transport", description: "Supply chain, delivery services and the transport business.", icon: Truck, topic: "Logistics" },
];

const emptyForm = {
  fullName: "", email: "", phone: "", address: "", occupation: "", dob: "", gender: "", maritalStatus: "",
  salvationExperience: "", department: "", skills: "", availability: "", whyJoin: "",
};

type FormKind = "membership" | "workers";

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="field-label">
        {label}
        {required && <span className="text-plum"> *</span>}
      </span>
      {children}
    </label>
  );
}

export default function JoinPage() {
  const [kind, setKind] = useState<FormKind>("membership");
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const update = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      // Opens the visitor's email app. Connect a form backend to send directly.
      const subject = kind === "membership" ? "New membership application" : "New worker application";
      const body = Object.entries(form)
        .filter(([, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      window.location.href = `mailto:${church.emails.general}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: "success", message: "Your email app should open with the application filled in. Press send to finish." });
      setForm(emptyForm);
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again, or email us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  const messageLead = (d: (typeof departments)[number]) =>
    `https://wa.me/${d.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${d.lead}, I would like to join the ${d.name} department.`)}`;

  const options: { key: FormKind | "connect"; title: string; text: string; icon: typeof User }[] = [
    { key: "membership", title: "Become a member", text: "Register as a member of the parish.", icon: User },
    { key: "workers", title: "Serve as a worker", text: "Volunteer in one of our departments.", icon: Briefcase },
    { key: "connect", title: "Join the WhatsApp group", text: "Get parish news and reminders.", icon: MessageCircle },
  ];

  return (
    <>
      <PageIntro kicker="Join the parish" title="There is a place for you here">
        Whether you are new to faith or ready to serve, start here. Pick what suits you and we will
        be in touch.
      </PageIntro>

      <section className="wrap pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {options.map((o, i) => {
            const active = o.key === kind;
            const inner = (
              <>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    active ? "bg-white/15 text-sun" : "bg-plum-soft text-plum group-hover:bg-plum group-hover:text-white"
                  }`}
                >
                  <o.icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className={`display mt-8 block text-[24px] ${active ? "text-white" : "text-ink"}`}>{o.title}</span>
                <span className={`mt-1 block text-[15px] ${active ? "text-white/70" : "text-ink-2"}`}>{o.text}</span>
                {o.key === "connect" && (
                  <ArrowUpRight size={18} strokeWidth={1.75} className="absolute right-6 top-6 text-ink-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                )}
              </>
            );
            const cls = `group relative block h-full rounded-3xl border p-7 text-left transition-[background-color,border-color,transform,box-shadow] duration-300 ${
              active
                ? "border-navy bg-navy shadow-[0_24px_48px_-24px_rgba(18,38,58,0.6)]"
                : "border-line bg-card hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(18,38,58,0.28)]"
            }`;
            return (
              <Reveal key={o.key} delay={i * 90}>
                {o.key === "connect" ? (
                  <a href="https://chat.whatsapp.com/your-group-link" target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <button type="button" aria-pressed={active} onClick={() => setKind(o.key as FormKind)} className={cls}>
                    {inner}
                  </button>
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="card mt-6 p-6 sm:p-10">
          <div className="mb-8 flex flex-col gap-2 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[32px] text-ink">
              {kind === "membership" ? "Membership application" : "Workers application"}
            </h2>
            <p className="text-sm text-ink-3">Fields marked * are required</p>
          </div>

          <form onSubmit={submit} className="grid gap-5 md:grid-cols-2">
            <Field label="Full name" required>
              <input className="field" name="fullName" required value={form.fullName} onChange={update} autoComplete="name" />
            </Field>
            <Field label="Email" required>
              <input className="field" type="email" name="email" required value={form.email} onChange={update} autoComplete="email" />
            </Field>
            <Field label="Phone number" required>
              <input className="field" type="tel" name="phone" required value={form.phone} onChange={update} autoComplete="tel" />
            </Field>

            {kind === "membership" ? (
              <>
                <Field label="Date of birth">
                  <input className="field" type="date" name="dob" value={form.dob} onChange={update} />
                </Field>
                <Field label="Address" required className="md:col-span-2">
                  <input className="field" name="address" required value={form.address} onChange={update} autoComplete="street-address" />
                </Field>
                <Field label="Occupation">
                  <input className="field" name="occupation" value={form.occupation} onChange={update} />
                </Field>
                <div className="grid grid-cols-2 gap-5">
                  <Field label="Gender">
                    <select className="field" name="gender" value={form.gender} onChange={update}>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </Field>
                  <Field label="Marital status">
                    <select className="field" name="maritalStatus" value={form.maritalStatus} onChange={update}>
                      <option value="">Select</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </Field>
                </div>
                <Field label="How you came to faith" className="md:col-span-2">
                  <textarea className="field" name="salvationExperience" rows={4} value={form.salvationExperience} onChange={update} placeholder="Share your testimony, if you would like to" />
                </Field>
              </>
            ) : (
              <>
                <Field label="Department" required>
                  <select className="field" name="department" required value={form.department} onChange={update}>
                    <option value="">Choose a department</option>
                    {departments.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Skills and experience" className="md:col-span-2">
                  <textarea className="field" name="skills" rows={3} value={form.skills} onChange={update} />
                </Field>
                <Field label="When you can serve" className="md:col-span-2">
                  <input className="field" name="availability" value={form.availability} onChange={update} placeholder="For example, Sundays and Wednesdays" />
                </Field>
                <Field label="Why you want to serve" className="md:col-span-2">
                  <textarea className="field" name="whyJoin" rows={3} value={form.whyJoin} onChange={update} />
                </Field>
              </>
            )}

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
              <button type="submit" disabled={submitting} className="btn btn-accent w-full disabled:opacity-60 sm:w-auto">
                {submitting ? "Preparing…" : "Send application"}
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </form>
        </Reveal>
      </section>

      <section className="bg-raised/60 py-20 sm:py-28">
        <div className="wrap">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Departments</p>
            <h2 className="display text-[36px] leading-[1.04] text-ink sm:text-[52px] tracking-[-0.04em]">Find your place to serve</h2>
            <p className="mt-5 text-[17px] leading-7 text-ink-2">Message a department lead on WhatsApp to ask how to get involved.</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 70}>
                <div className="card card-hover group flex h-full flex-col p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white">
                    <d.icon size={19} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="display mt-6 text-[21px] text-ink">{d.name}</h3>
                  <p className="mt-1.5 flex-1 text-[15px] leading-6 text-ink-2">{d.description}</p>
                  <a href={messageLead(d)} target="_blank" rel="noopener noreferrer" className="text-link mt-5 text-sm">
                    Message {d.lead} <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="wrap scroll-mt-24 py-20 sm:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="eyebrow mb-5">Skills and careers</p>
          <h2 className="display text-[36px] leading-[1.04] text-ink sm:text-[52px] tracking-[-0.04em]">Training groups</h2>
          <p className="mt-5 text-[17px] leading-7 text-ink-2">Join a WhatsApp group to learn more about each programme.</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80}>
              <a
                href={`https://wa.me/${church.whatsapp}?text=${encodeURIComponent(`I'm interested in ${c.topic}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full items-start gap-5 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-sun">
                  <c.icon size={19} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="flex-1">
                  <span className="display block text-[20px] text-ink transition-colors group-hover:text-plum">{c.title}</span>
                  <span className="mt-1.5 block text-[15px] leading-6 text-ink-2">{c.description}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-plum">
                    <MessageCircle size={14} strokeWidth={2} aria-hidden="true" />
                    Join the group
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
