"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  useCase: string;
  selectedDate: string;
  selectedTime: string;
  phone: string;
  message: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "1:00 PM",
  "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM",
];

const ROLES = [
  "Founder / CEO", "CTO / VP Engineering", "Product Manager",
  "Engineering Manager", "Developer", "Sales & Marketing", "Operations", "Other",
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "201–500", "500+"];

const USE_CASES = [
  "Customer Support Automation",
  "Internal Knowledge Base",
  "Sales & Lead Qualification",
  "Data Analysis & Reporting",
  "Workflow Orchestration",
  "Other",
];

const OUTCOMES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "30-Min Live Session",
    desc: "A focused walkthrough with a solutions engineer — no slides, just your real questions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Custom Use-Case Demo",
    desc: "We tailor every demo to your industry, team size, and workflow — not a generic script.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "ROI Breakdown",
    desc: "Leave with a clear picture of time saved, cost reduced, and projected performance gains.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Meet the Team",
    desc: "Connect with the people behind the product — ask questions you won't find in docs.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Mehta",
    role: "Head of Operations · FiEstate",
    avatar: "PM",
    color: "#3B82F6",
    quote: "The demo was unlike anything I'd seen — completely tailored to our workflows. We went from pilot to full deployment in 3 weeks.",
  },
  {
    name: "James Okafor",
    role: "CTO · Relayr Health",
    avatar: "JO",
    color: "#1D4ED8",
    quote: "Within 20 minutes I knew this was the platform we needed. The team understood our technical constraints immediately.",
  },
  {
    name: "Sofia Andersson",
    role: "VP Product · Lattice AI",
    avatar: "SA",
    color: "#60A5FA",
    quote: "No sales pitch, just honest answers. That built more trust than any marketing material ever could.",
  },
];

const FAQS = [
  {
    q: "Who should attend the demo?",
    a: "Ideally bring the decision-maker plus one technical stakeholder. We calibrate depth to your audience, so there's no need to prepare in advance.",
  },
  {
    q: "Do I need to sign up or install anything?",
    a: "Nothing to install. The demo runs entirely in your browser. You'll receive a secure link 15 minutes before the session.",
  },
  {
    q: "What happens after the demo?",
    a: "You'll receive a personalised follow-up within 24 hours including a tailored proposal, pricing options, and a free 14-day trial if you're ready to move forward.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Absolutely. Use the link in your confirmation email any time up to 2 hours before the session to reschedule or cancel at no penalty.",
  },
];

// ─── Helper: generate next 14 weekdays ────────────────────────────────────────

function getAvailableDates() {
  const dates: { label: string; value: string; day: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (dates.length < 14) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      dates.push({
        label: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        day: d.toLocaleDateString("en-US", { weekday: "short" }),
        value: d.toISOString().split("T")[0],
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return dates;
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: Step }) {
  const steps = [
    { n: 1, label: "Your Details" },
    { n: 2, label: "Pick a Slot" },
    { n: 3, label: "Confirm" },
  ];
  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                step > s.n
                  ? "bg-blue-600 text-white"
                  : step === s.n
                  ? "bg-blue-600 text-white ring-4 ring-blue-100"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {step > s.n ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                s.n
              )}
            </div>
            <span className={`text-xs font-medium whitespace-nowrap ${step === s.n ? "text-blue-600" : "text-slate-400"}`}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-px w-16 sm:w-24 mx-2 mb-5 transition-all duration-500 ${step > s.n ? "bg-blue-600" : "bg-slate-200"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function Input({
  label, name, type = "text", value, onChange, placeholder, required,
}: {
  label: string; name: string; type?: string; value: string;
  onChange: (v: string) => void; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
}

function Select({
  label, name, value, onChange, options, placeholder, required,
}: {
  label: string; name: string; value: string; onChange: (v: string) => void;
  options: string[]; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-slate-700">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <select
        id={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
      >
        <option value="" disabled>{placeholder ?? "Select…"}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

// ─── Step 1: Personal Info ─────────────────────────────────────────────────────

function StepOne({
  data, update, onNext,
}: {
  data: FormData; update: (k: keyof FormData, v: string) => void; onNext: () => void;
}) {
  const valid = data.firstName && data.lastName && data.email && data.company && data.role && data.teamSize;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Tell us about yourself</h2>
      <p className="text-slate-500 text-sm mb-8">We use this to tailor the session to your team's needs.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input label="First name" name="firstName" value={data.firstName} onChange={(v) => update("firstName", v)} placeholder="Aarav" required />
        <Input label="Last name" name="lastName" value={data.lastName} onChange={(v) => update("lastName", v)} placeholder="Shah" required />
        <Input label="Work email" name="email" type="email" value={data.email} onChange={(v) => update("email", v)} placeholder="aarav@company.com" required />
        <Input label="Phone (optional)" name="phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} placeholder="+91 98000 00000" />
        <Input label="Company name" name="company" value={data.company} onChange={(v) => update("company", v)} placeholder="Acme Corp" required />
        <Select label="Your role" name="role" value={data.role} onChange={(v) => update("role", v)} options={ROLES} placeholder="Select your role" required />
        <Select label="Team size" name="teamSize" value={data.teamSize} onChange={(v) => update("teamSize", v)} options={TEAM_SIZES} placeholder="Select team size" required />
        <Select label="Primary use case" name="useCase" value={data.useCase} onChange={(v) => update("useCase", v)} options={USE_CASES} placeholder="What will you use it for?" />
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">Anything specific you want to see?</label>
          <textarea
            id="message"
            rows={3}
            value={data.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="e.g. We want to automate Tier-1 support tickets across 3 languages…"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!valid}
        className="mt-8 w-full py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
      >
        Continue to Scheduling
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

// ─── Step 2: Pick Date & Time ─────────────────────────────────────────────────

function StepTwo({
  data, update, onNext, onBack,
}: {
  data: FormData; update: (k: keyof FormData, v: string) => void; onNext: () => void; onBack: () => void;
}) {
  const dates = getAvailableDates();
  const valid = data.selectedDate && data.selectedTime;

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Choose a time slot</h2>
      <p className="text-slate-500 text-sm mb-8">All times shown in IST (UTC +5:30). Session duration: 30 minutes.</p>

      {/* Date picker */}
      <p className="text-sm font-semibold text-slate-700 mb-3">Select a date</p>
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-8">
        {dates.map((d) => (
          <button
            key={d.value}
            onClick={() => { update("selectedDate", d.value); update("selectedTime", ""); }}
            className={`flex flex-col items-center py-3 px-1 rounded-xl border text-xs font-medium transition-all duration-200 ${
              data.selectedDate === d.value
                ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
            }`}
          >
            <span className="text-[10px] uppercase tracking-wide opacity-70">{d.day}</span>
            <span className="text-base font-bold mt-0.5">{d.label.split(" ")[1]}</span>
            <span className="text-[10px] opacity-70">{d.label.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Time picker */}
      {data.selectedDate && (
        <>
          <p className="text-sm font-semibold text-slate-700 mb-3">Select a time</p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-8">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                onClick={() => update("selectedTime", t)}
                className={`py-2.5 px-2 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                  data.selectedTime === t
                    ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 active:scale-[0.99] transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!valid}
          className="flex-[2] py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        >
          Review Booking
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Confirm ──────────────────────────────────────────────────────────

function StepThree({
  data, onBack, onSubmit, submitted,
}: {
  data: FormData; onBack: () => void; onSubmit: () => void; submitted: boolean;
}) {
  const dateLabel = data.selectedDate
    ? new Date(data.selectedDate + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
    : "";

  if (submitted) {
    return (
      <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center text-center py-8">
        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-6 ring-8 ring-blue-100">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">You&apos;re confirmed!</h2>
        <p className="text-slate-500 text-base mb-6 max-w-sm">
          A calendar invite is on its way to <span className="text-blue-600 font-medium">{data.email}</span>. We can&apos;t wait to meet you.
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-left w-full max-w-sm mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-3">Session details</p>
          <div className="flex flex-col gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {dateLabel}
            </div>
            <div className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {data.selectedTime} IST · 30 minutes
            </div>
            <div className="flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {data.email}
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400">Didn&apos;t receive the email? Check spam or <button className="text-blue-500 underline">contact support</button>.</p>
      </div>
    );
  }

  const rows = [
    { label: "Name", value: `${data.firstName} ${data.lastName}` },
    { label: "Email", value: data.email },
    { label: "Company", value: data.company },
    { label: "Role", value: data.role },
    { label: "Team Size", value: data.teamSize },
    { label: "Use Case", value: data.useCase || "—" },
    { label: "Date", value: dateLabel },
    { label: "Time", value: `${data.selectedTime} IST` },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">Review & confirm</h2>
      <p className="text-slate-500 text-sm mb-8">Double-check everything before we lock in your slot.</p>

      <div className="rounded-2xl border border-slate-100 overflow-hidden divide-y divide-slate-100 mb-8">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50/50 transition-colors">
            <span className="text-sm text-slate-400 font-medium w-28 shrink-0">{r.label}</span>
            <span className="text-sm text-slate-800 font-semibold text-right">{r.value}</span>
          </div>
        ))}
      </div>

      {data.message && (
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8">
          <p className="text-xs font-semibold text-slate-400 mb-1.5 uppercase tracking-widest">Your note</p>
          <p className="text-sm text-slate-700">{data.message}</p>
        </div>
      )}

      <p className="text-xs text-slate-400 text-center mb-6">
        By confirming, you agree to our{" "}
        <a href="#" className="text-blue-500 underline">Terms of Service</a> and{" "}
        <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
      </p>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-base hover:bg-slate-50 active:scale-[0.99] transition-all duration-200"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          className="flex-[2] py-4 rounded-xl bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
        >
          Confirm My Demo
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function BookDemoPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "", lastName: "", email: "", company: "", role: "",
    teamSize: "", useCase: "", selectedDate: "", selectedTime: "", phone: "", message: "",
  });

  const update = (k: keyof FormData, v: string) =>
    setFormData((prev) => ({ ...prev, [k]: v }));

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-geist-sans,system-ui)]">
    

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-200/40 blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Live Demos Available Today</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            See Estate AI<br />
            <span className="text-blue-600">in your workflow.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            30 minutes with a solutions engineer. No pitch decks, no generic walkthroughs — just answers to your specific questions.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {[
              { icon: "🔒", text: "SOC 2 Type II" },
              { icon: "⚡", text: "Setup in < 48 hrs" },
              { icon: "🌍", text: "Trusted by 800+ teams" },
              { icon: "★", text: "4.9 / 5 on G2" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 xl:gap-20">

          {/* Left: context */}
          <div className="flex flex-col gap-14">

            {/* What you'll get */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">What to expect</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {OUTCOMES.map((o) => (
                  <div key={o.title} className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {o.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1.5 text-base">{o.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">From people who&apos;ve been here</p>
              <div className="flex flex-col gap-4">
                {TESTIMONIALS.map((t) => (
                  <div key={t.name} className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all duration-300">
                    <p className="text-sm text-slate-700 leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: t.color }}>
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-400">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Common questions</p>
              <div className="flex flex-col divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                {FAQS.map((f, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="text-sm font-semibold text-slate-800">{f.q}</span>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: booking form */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/60 p-8 sm:p-10">
              <StepIndicator step={step} />

              {step === 1 && <StepOne data={formData} update={update} onNext={() => setStep(2)} />}
              {step === 2 && <StepTwo data={formData} update={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
              {step === 3 && (
                <StepThree
                  data={formData}
                  onBack={() => setStep(2)}
                  onSubmit={() => setSubmitted(true)}
                  submitted={submitted}
                />
              )}
            </div>

            {/* Guarantee note */}
            {!submitted && (
              <p className="text-center text-xs text-slate-400 mt-5 leading-relaxed">
                No commitment required · Cancel up to 2 hrs before ·{" "}
                <span className="text-slate-500 font-medium">100% free</span>
              </p>
            )}
          </div>
        </div>
      </section>

  
    </div>
  );
}