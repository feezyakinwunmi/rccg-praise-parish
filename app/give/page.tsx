"use client";

import { useState } from "react";
import { Check, Copy, CreditCard, MessageCircle, Mail } from "lucide-react";
import { PageIntro } from "../components/ui";
import Reveal from "../components/Reveal";
import { church } from "../data/church";

const accounts = [
  {
    bank: "First Bank of Nigeria",
    accountName: "RCCG The Praise Parish",
    accountNumber: "2034567890",
    type: "Current account",
    tone: "bg-navy",
  },
  {
    bank: "GTBank",
    accountName: "RCCG The Praise Parish",
    accountNumber: "0123456789",
    type: "Current account",
    tone: "bg-plum",
  },
];

const kinds = [
  { title: "Tithe", text: "A tenth of your income, given back to God.", reference: "TITHE" },
  { title: "Offering", text: "As the Lord prospers you, for the work of the church.", reference: "OFFERING - Building" },
  { title: "Seed", text: "A special gift made in faith, for a promise or a purpose.", reference: "SEED - Your purpose" },
];

function groupDigits(n: string) {
  return n.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
}

export default function GivePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  };

  return (
    <>
      <PageIntro kicker="Tithes and offerings" title="Give to the work of the parish">
        Your giving supports worship, outreach and the care of people in Epe. Thank you for giving
        faithfully.
      </PageIntro>

      <section className="wrap pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="display text-[32px] leading-tight text-ink sm:text-[40px] tracking-[-0.04em]">Bank transfer</h2>
              <p className="mt-3 max-w-lg text-[17px] leading-7 text-ink-2">
                Transfer from your banking app or by USSD, and put what the gift is for in the
                reference.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {accounts.map((a, i) => {
                const isCopied = copied === a.accountNumber;
                return (
                  <Reveal key={a.accountNumber} delay={i * 100}>
                    <div
                      className={`${a.tone} group relative flex aspect-[1.6/1] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white shadow-[0_24px_48px_-24px_rgba(18,38,58,0.55)] transition-transform duration-500 [transition-timing-function:var(--ease-soft)] hover:-translate-y-1 hover:rotate-[-1deg]`}
                    >
                      <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
                      <span className="pointer-events-none absolute -right-4 -top-24 h-48 w-48 rounded-full border border-white/10" />
                      <div className="relative flex items-start justify-between">
                        <div>
                          <p className="text-[15px] font-medium">{a.bank}</p>
                          <p className="text-[13px] text-white/60">{a.type}</p>
                        </div>
                        <img src="/tpplogo.jpg" alt="" className="h-9 w-9 rounded-full bg-white object-contain p-0.5" />
                      </div>
                      <div className="relative">
                        <p className="text-[12px] text-white/60">Account number</p>
                        <div className="mt-1 flex items-center justify-between gap-3">
                          <p className="display text-[28px] tabular-nums tracking-normal">{groupDigits(a.accountNumber)}</p>
                          <button
                            type="button"
                            onClick={() => copy(a.accountNumber)}
                            aria-label={`Copy ${a.bank} account number`}
                            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-white/15 px-3 text-[13px] font-medium transition-colors hover:bg-white hover:text-ink"
                          >
                            {isCopied ? <Check size={14} strokeWidth={2} /> : <Copy size={14} strokeWidth={2} />}
                            {isCopied ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <p className="mt-2 text-[13px] text-white/75">{a.accountName}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="mt-14">
              <h2 className="display text-[28px] text-ink">What to write in the reference</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {kinds.map((k) => (
                  <div key={k.title} className="card card-hover p-6">
                    <h3 className="display text-[22px] text-ink">{k.title}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-ink-2">{k.text}</p>
                    <p className="mt-5 inline-block rounded-lg bg-raised px-2.5 py-1 font-mono text-[12px] text-ink">
                      {k.reference}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5">
            <Reveal className="rounded-3xl bg-navy p-8 text-white">
              <p className="display text-[26px] leading-[1.25]">
                &ldquo;Bring the whole tithe into the storehouse, that there may be food in my house.
                Test me in this, and see if I will not throw open the floodgates of heaven.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/60">Malachi 3:10</p>
            </Reveal>

            <Reveal delay={100} className="card p-7">
              <h2 className="text-[17px] font-medium text-ink">After you transfer</h2>
              <p className="mt-2 text-[15px] leading-6 text-ink-2">
                Send your proof of payment so your gift is recorded correctly.
              </p>
              <div className="mt-5 space-y-2">
                <a
                  href={`mailto:${church.emails.giving}`}
                  className="group flex items-center gap-3 rounded-2xl border border-line px-4 py-3 transition-colors hover:border-plum hover:bg-plum-soft"
                >
                  <Mail size={18} strokeWidth={1.75} className="text-plum" aria-hidden="true" />
                  <span className="text-[15px] text-ink">{church.emails.giving}</span>
                </a>
                <a
                  href={`https://wa.me/${church.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-line px-4 py-3 transition-colors hover:border-plum hover:bg-plum-soft"
                >
                  <MessageCircle size={18} strokeWidth={1.75} className="text-plum" aria-hidden="true" />
                  <span className="text-[15px] tabular-nums text-ink">WhatsApp {church.phones[0]}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={200} className="flex gap-4 rounded-3xl border border-dashed border-line-strong p-7">
              <CreditCard size={22} strokeWidth={1.75} className="mt-0.5 shrink-0 text-ink-3" aria-hidden="true" />
              <div>
                <h2 className="text-[17px] font-medium text-ink">Card payments are on the way</h2>
                <p className="mt-1.5 text-[15px] leading-6 text-ink-2">
                  Online card and mobile money giving is not ready yet. Until then, please use bank
                  transfer.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
