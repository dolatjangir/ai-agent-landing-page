"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

/* ─── Types ───────────────────────────────────────────────────────────────── */
interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

/* ─── FAQ Data ────────────────────────────────────────────────────────────── */
const FAQS: FaqItem[] = [
  {
    category: "Getting Started",
    question: "What exactly is an AI agent, and how is it different from a chatbot?",
    answer:
      "A chatbot responds to questions when you ask them. An AI agent acts on your behalf — autonomously, 24/7 — without you needing to prompt it. EstateAI agents monitor your portfolio, detect issues, make decisions, and take action in real time. For example, the Maintenance Predictor agent continuously analyses sensor data and flags equipment risks days before failure — no conversation required.",
  },
  {
    category: "Getting Started",
    question: "How long does it take to deploy an AI agent on my portfolio?",
    answer:
      "Most clients are fully live within 48 hours. Day 1 is onboarding — you connect your properties, upload lease data, and set preferences. Day 2 your agents go live and begin learning. By the end of the first week, the agents have processed your portfolio history and their accuracy is already significantly higher than default. There is no engineering work required on your side.",
  },
  {
    category: "Agents",
    question: "Do all 10 agents run simultaneously, or do I have to choose?",
    answer:
      "On the Scale plan, all 10 agents run simultaneously and share a unified knowledge base about your portfolio. On Starter and Professional, your active agents still share data with each other — so the Tenant Screener and the Payment Tracker, for example, inform each other's risk model. You never have to manually coordinate between agents.",
  },
  {
    category: "Agents",
    question: "Can the AI agents make decisions without my approval?",
    answer:
      "You decide the autonomy level for each agent. 'Inform' mode means the agent surfaces insights and recommendations but takes no action — you approve everything. 'Assist' mode lets it draft responses and flag tasks for your one-click approval. 'Autonomous' mode allows full action within limits you define (e.g., reply to tenant messages under a certain urgency level). Most clients start on Assist and expand autonomy once they trust the output.",
  },
  {
    category: "Agents",
    question: "How accurate is the AI? What happens when it makes a mistake?",
    answer:
      "Our agents report 98.5% decision accuracy across verified client results. When an agent is uncertain, it escalates to you rather than guessing — you'll see a confidence score alongside every recommendation. If an agent does make an error, our audit log captures every action with full reasoning so you can review and correct it. We also use your corrections to retrain your private model at no extra charge.",
  },
  {
    category: "Data & Security",
    question: "Is my property and tenant data safe? Who can see it?",
    answer:
      "Your data is encrypted at rest (AES-256) and in transit (TLS 1.3), hosted on ISO 27001-certified infrastructure, and never shared with other clients or used to train shared models. EstateAI is SOC 2 Type II certified. Only you and the team members you explicitly authorise have access. We are fully compliant with India's DPDP Act 2023 and can provide a Data Processing Agreement on request.",
  },
  {
    category: "Data & Security",
    question: "Do you support Indian property laws and lease formats?",
    answer:
      "Yes. The Lease Analyzer agent is trained on Indian residential and commercial lease formats including leave-and-licence agreements, rent agreements under the Model Tenancy Act, and state-specific formats for Maharashtra, Delhi, Karnataka, and 18 other states. It flags clauses that conflict with local rent control legislation and generates GST-compliant rent receipts automatically.",
  },
  {
    category: "Pricing",
    question: "Are there any hidden charges or per-task fees?",
    answer:
      "None. Your monthly or annual plan covers unlimited agent actions across all your properties up to your portfolio limit. There are no per-screening fees, no per-document charges, and no API overage surprises on Starter and Professional plans (Scale and Enterprise include unlimited API). The price you see is the price you pay — billed in ₹ with a GST invoice included.",
  },
  {
    category: "Pricing",
    question: "Can I try EstateAI before committing to a paid plan?",
    answer:
      "Yes — every plan comes with a 14-day full-access free trial. No credit card is required to start. You get access to all the agents included in your chosen tier, real data processing, and full support. At the end of the trial you choose whether to continue — there is no automatic charge.",
  },
  {
    category: "Integration",
    question: "Does EstateAI integrate with the tools I already use?",
    answer:
      "EstateAI connects out of the box with NoBroker, MagicBricks, 99acres, Housing.com, Tally, Zoho Books, WhatsApp Business, and Google Workspace. Our REST API (available on Professional and above) lets you connect any internal tool. Enterprise clients get custom integrations built as part of onboarding at no additional cost.",
  },
  {
    category: "Support",
    question: "What kind of support is available if I get stuck?",
    answer:
      "Starter clients get email support with a 24-hour response SLA. Professional clients get priority support with under 4-hour response and access to our live chat. Scale clients get a dedicated Customer Success Manager and a direct escalation line. All clients get access to our documentation hub, onboarding video library, and community forum — available in English and Hindi.",
  },
];

/* ─── FaqSection Component ────────────────────────────────────────────────── */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-24">

      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-primary-200)" }}
      />
      <div
        className="pointer-events-none absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--color-primary-300)" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{ background: "var(--color-primary-600)" }}
          >
            <HelpCircle className="w-8 h-8 text-white" />
          </div>

          {/* Live agent badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.12em] uppercase mb-4 ml-2"
            style={{
              background: "var(--color-primary-50)",
              border: "1px solid var(--color-primary-200)",
              color: "var(--color-primary-600)",
            }}
          >
            <span className="relative inline-flex w-2 h-2">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-60"
                style={{ background: "var(--color-primary-600)" }}
              />
              <span
                className="relative rounded-full w-2 h-2"
                style={{ background: "var(--color-primary-600)" }}
              />
            </span>
            AI Agents · Live Support
          </div>

          <h2
            className="text-4xl font-bold mb-4 block"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Everything you need to know about deploying AI agents on your
            property portfolio.
          </p>
        </div>

        {/* ── FAQ Items ── */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--bg-primary)",
                  border: isOpen
                    ? "1px solid var(--color-primary-300)"
                    : "1px solid var(--border-light)",
                  boxShadow: isOpen
                    ? "0 4px 24px rgba(0,102,204,0.10)"
                    : "0 1px 6px rgba(0,60,120,0.05)",
                }}
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 md:p-6 lg:p-8 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">

                      {/* Number bubble */}
                      <span
                        className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 rounded-full text-sm font-bold transition-all duration-300 flex-shrink-0"
                        style={{
                          backgroundColor: isOpen
                            ? "var(--color-primary-600)"
                            : "var(--color-primary-100)",
                          color: isOpen
                            ? "#ffffff"
                            : "var(--color-primary-600)",
                        }}
                      >
                        {index + 1}
                      </span>

                      {/* Category tag */}
                      <span
                        className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: isOpen
                            ? "var(--color-primary-100)"
                            : "var(--color-primary-50)",
                          color: "var(--color-primary-600)",
                        }}
                      >
                        {faq.category}
                      </span>
                    </div>

                    <h3
                      className="text-sm md:text-base lg:text-lg font-bold transition-colors duration-300 mt-2 pl-11"
                      style={{
                        color: isOpen
                          ? "var(--color-primary-600)"
                          : "var(--text-primary)",
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 mt-1"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-primary-100)"
                        : "var(--bg-tertiary, #f0f6ff)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <ChevronDown
                      className="w-5 h-5"
                      style={{
                        color: isOpen
                          ? "var(--color-primary-600)"
                          : "var(--text-secondary)",
                      }}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "480px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div
                      className="pl-6 pt-2 border-l-4 ml-11"
                      style={{ borderColor: "var(--color-primary-200)" }}
                    >
                      <p
                        className="leading-relaxed text-base md:text-lg"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA strip ── */}
        <div
          className="mt-12 text-center rounded-2xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-600), var(--color-primary-500))",
            boxShadow: "0 8px 40px rgba(0,102,204,0.25)",
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative">
            {/* Pinging badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
              <span className="relative inline-flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-70" />
                <span className="relative rounded-full bg-white w-2 h-2" />
              </span>
              Our team responds in under 4 hours
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Still have questions?
            </h3>

            <p className="text-white/80 mb-6 text-lg">
              Our property AI specialists are here to walk you through
              anything — live demo, custom quote, or just a quick chat.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                className="bg-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                style={{ color: "var(--color-primary-600)" }}
              >
                Contact Us
              </button>
              <button
                type="button"
                className="bg-white/10 border border-white/25 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-sm"
              >
                Book a Free Demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}