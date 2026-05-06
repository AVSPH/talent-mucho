import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar, Clock, Video, Star, Users, Sparkles, MessageCircle,
  ArrowRight, Check, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Business Bootcamp · Cohort 1",
  description:
    "One month. 9 live sessions. Four deliverables. €247 founding price (€397 next cohort) ~ VIP bundle included free. June 2026, Tuesdays & Thursdays, live on Zoom.",
  alternates: { canonical: "/events/bootcamp" },
  openGraph: {
    title: "AI Business Bootcamp · Cohort 1",
    description:
      "One month. Three tools. A business that runs differently. €247 founding price, VIP bundle free. Starts June 2, 2026.",
    url: "/events/bootcamp",
    type: "website",
    images: [
      {
        url: "/assets/website-samples/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Talent Mucho AI Business Bootcamp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Bootcamp · Cohort 1",
    description: "9 live sessions · 27 hrs · €247 founding price · VIP free.",
    images: ["/assets/website-samples/hero_image.png"],
  },
};

const STRIPE_URL = "https://buy.stripe.com/00wbIV3qm1SzcKBd0973G07";

const weeks = [
  {
    num: "01",
    color: "#C4A882",
    title: "Knowing",
    italic: "Claude",
    deliverable:
      "3 configured Claude.ai Projects loaded with your docs, business context, and brand voice.",
  },
  {
    num: "02",
    color: "#7D6B5A",
    title: "Delegating to",
    italic: "Claude",
    deliverable:
      "1 named AI employee in Cowork, briefed and tested against real scenarios from your business.",
  },
  {
    num: "03",
    color: "#5A7A6B",
    title: "Building with",
    italic: "Claude",
    deliverable:
      "1 custom business dashboard built with Claude Code. No coding experience needed.",
  },
  {
    num: "04",
    color: "#6B5A7A",
    title: "Living with",
    italic: "Claude",
    deliverable:
      "A written daily Claude routine: 3 specific moments in your workday where Claude is open and ready.",
  },
];

const schedule = [
  { tag: "Kickoff", date: "Tue, Jun 2", topic: "Welcome, orientation, Claude.ai setup", color: "#C4A882" },
  { tag: "W1 · S1", date: "Thu, Jun 5", topic: "The interface, Projects, your first conversation", color: "#C4A882" },
  { tag: "W1 · S2", date: "Tue, Jun 10", topic: "Custom instructions, file uploads", color: "#C4A882" },
  { tag: "W2 · S3", date: "Thu, Jun 12", topic: "AI employees ~ what Cowork makes real", color: "#7D6B5A" },
  { tag: "W2 · S4", date: "Tue, Jun 17", topic: "Build and test your first AI employee live", color: "#7D6B5A" },
  { tag: "W3 · S5", date: "Thu, Jun 19", topic: "Claude Code ~ your first build", color: "#5A7A6B" },
  { tag: "W3 · S6", date: "Tue, Jun 24", topic: "Build your business dashboard", color: "#5A7A6B" },
  { tag: "W4 · S7", date: "Thu, Jun 26", topic: "Your full Claude stack working together", color: "#6B5A7A" },
  { tag: "W4 · S8", date: "Tue, Jul 1", topic: "Showcases, Q&A, and graduation", color: "#6B5A7A" },
];

const roiRows = [
  { task: "Emails and DM replies", before: "3 hrs/wk", after: "45 min/wk", saved: "Save 2h 15m" },
  { task: "Weekly content creation", before: "4 hrs/wk", after: "1 hr/wk", saved: "Save 3h" },
  { task: "Client proposals & quotes", before: "2 hrs/wk", after: "25 min/wk", saved: "Save 1h 35m" },
  { task: "Customer FAQ and replies", before: "1.5 hrs/wk", after: "20 min/wk", saved: "Save 1h 10m" },
  { task: "Research and planning", before: "2 hrs/wk", after: "30 min/wk", saved: "Save 1h 30m" },
];

const vipPerks = [
  {
    icon: <Users className="w-4 h-4" />,
    title: "Small groups",
    desc: "Live sessions capped so everyone gets airtime and real feedback.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Custom prompt buildout",
    desc: "Prompts written specifically for your business and your niche.",
  },
  {
    icon: <Calendar className="w-4 h-4" />,
    title: "30-day community access",
    desc: "Free 30-day access to the Talent Mucho premium community while the bootcamp runs.",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    title: "Priority DM support",
    desc: "Direct access to Abie & Meri throughout the entire bootcamp.",
  },
];

const audiencePills = [
  "Already used Claude once",
  "Tried ChatGPT and stalled",
  "Founders & solopreneurs",
  "Coaches & consultants",
  "Service businesses",
  "Hire VAs and want them faster",
  "At capacity, can't hire more",
  "Done waiting for the right time",
];

const walkAways = [
  "3 configured Claude Projects loaded with your business",
  "1 AI employee in Cowork doing real work in your workflows",
  "1 custom dashboard built with Claude Code ~ no coding",
  "A daily AI routine that runs whether you show up or not",
];

export default function BootcampPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO ~ light, 2-col with price card
      ══════════════════════════════════════ */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-beige-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-start">

            {/* Left ~ headline */}
            <div className="lg:pt-4">
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/assets/website-samples/hero_image.png"
                  alt="Abie Maxey and Meri Gee"
                  width={64}
                  height={76}
                  className="w-14 object-contain drop-shadow-md"
                />
                <p className="text-espresso-800/60 text-sm font-light italic">
                  by Abie Maxey &amp; Meri Gee
                </p>
              </div>

              <div className="inline-flex items-center gap-2 bg-white border border-clay-500/30 rounded-full px-4 py-2 mb-7">
                <Star className="w-3.5 h-3.5 text-clay-500 fill-clay-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-500">
                  Cohort 1 · Founding price · June 2026
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-taupe-400 mb-4">
                Talent Mucho · AI Business Bootcamp
              </p>

              <h1
                className="font-light tracking-tight text-charcoal-900 mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                  fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                  lineHeight: 1.05,
                }}
              >
                One month. Three tools.
                <br />
                <em className="italic text-clay-500">A business that runs differently.</em>
              </h1>

              <p className="text-lg md:text-xl text-espresso-800 font-light leading-relaxed mb-9 max-w-xl">
                9 live sessions. 4 weeks. Four real deliverables you walk away with ~
                not just notes and inspiration. By Week 4, AI is running inside your business.
              </p>

              <ul className="flex flex-col gap-3 mb-9 max-w-xl">
                {walkAways.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-clay-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-espresso-800 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Calendar className="w-3.5 h-3.5" />, label: "Starts Tue, Jun 2, 2026" },
                  { icon: <Clock className="w-3.5 h-3.5" />, label: "Tue & Thu · 4–7 PM CEST" },
                  { icon: <Video className="w-3.5 h-3.5" />, label: "Live on Zoom" },
                ].map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 bg-white border border-beige-200 rounded-full px-4 py-2 text-sm text-espresso-800 font-light"
                  >
                    <span className="text-taupe-400">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right ~ price card */}
            <div className="bg-charcoal-900 border border-espresso-700 rounded-2xl p-7 md:p-8 shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg,rgba(255,255,255,0.04) 0,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 48px),repeating-linear-gradient(90deg,rgba(255,255,255,0.04) 0,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 48px)",
                }}
              />
              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-clay-500 mb-3">
                  Cohort 1 · Founding price
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="font-light text-beige-50 leading-none"
                    style={{
                      fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    }}
                  >
                    €247
                  </span>
                  <span className="text-base text-beige-300/60 line-through font-light">
                    €397
                  </span>
                </div>
                <p className="text-sm text-beige-200/80 font-light italic mb-5">
                  Cohort 2 opens at €397.
                </p>

                <div className="bg-clay-500/10 border border-clay-500/30 rounded-xl px-4 py-3 mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-clay-500 mb-1">
                    VIP bundle included free
                  </p>
                  <p className="text-xs text-beige-200/70 font-light leading-relaxed">
                    €397 value: custom prompts, 30-day community, priority DM access.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  {[
                    { val: "9", label: "sessions" },
                    { val: "27 hrs", label: "live time" },
                    { val: "€9.15", label: "per hour" },
                  ].map((s) => (
                    <div key={s.label} className="bg-espresso-800/60 rounded-lg py-3">
                      <p className="text-base font-bold text-clay-500 leading-none">{s.val}</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-beige-300/60 mt-1">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href={STRIPE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="bootcamp-hero"
                  className="w-full inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-3"
                >
                  Join Cohort 1 ~ €247
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="#curriculum"
                  className="w-full inline-flex items-center justify-center text-sm font-light text-beige-300/80 hover:text-beige-50 transition-colors"
                >
                  See the full curriculum ↓
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. PROMISE STRIP ~ slim
      ══════════════════════════════════════ */}
      <div className="bg-beige-100 border-y border-beige-200 py-6">
        <div className="section-container">
          <p className="text-center text-sm md:text-base text-espresso-800 font-light leading-relaxed">
            <span className="font-semibold">9 live sessions</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="font-semibold">27 hrs of instruction</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="font-semibold">4 deliverables you keep</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="italic text-clay-500">VIP bundle included free</span>
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. WHO THIS IS FOR ~ dark
      ══════════════════════════════════════ */}
      <section className="py-16 bg-charcoal-900">
        <div className="section-container text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-6">
            Who this is built for
          </p>
          <h2
            className="text-3xl md:text-4xl font-light text-beige-50 mb-10 leading-tight max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
          >
            For people who are <em className="italic text-clay-500">done waiting</em> to figure this out.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {audiencePills.map((pill) => (
              <span
                key={pill}
                className="border border-beige-100/15 rounded-full px-5 py-2.5 text-sm text-beige-200 font-light hover:border-clay-500 hover:text-beige-50 transition-colors duration-200 cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-espresso-800/60 border border-clay-500/20 rounded-2xl px-8 py-7 text-left">
            <p className="text-beige-300/60 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              The honest math
            </p>
            <p
              className="text-beige-50 text-lg md:text-xl font-light leading-relaxed mb-3"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Spend 6 hours a week for a month. Get 9.5 hours back ~ every week, forever.
            </p>
            <p className="text-beige-200/70 text-sm font-light leading-relaxed">
              That's the trade. One month of focused work. A business that runs differently after.
              You break even in less than a week.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. THE 4 WEEKS ~ light
      ══════════════════════════════════════ */}
      <section id="curriculum" className="section-padding bg-beige-50 border-y border-beige-200">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
              The Curriculum
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Four weeks. Four deliverables you walk away with.
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed">
              Not a course you watch. A programme where you build. Each week ends with something
              real running inside your business ~ not just a feeling that you learned something.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {weeks.map((w) => (
              <div
                key={w.num}
                className="bg-white border border-beige-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col"
              >
                <div className="px-6 py-5" style={{ background: w.color }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-beige-50/70 mb-2">
                    Week {w.num}
                  </p>
                  <p
                    className="text-2xl font-light text-beige-50 leading-tight"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    {w.title}{" "}
                    <em className="italic">{w.italic}</em>
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500 mb-2">
                    You walk away with
                  </p>
                  <p className="text-sm text-charcoal-900 font-light leading-relaxed">
                    {w.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#register"
              className="inline-flex items-center gap-2 text-clay-500 hover:text-clay-600 font-medium text-sm transition-colors"
              data-cta="bootcamp-curriculum"
            >
              I'm in ~ jump to register
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. SCHEDULE ~ dark
      ══════════════════════════════════════ */}
      <section id="schedule" className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
              June 2026 Schedule
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-beige-50 mb-4"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Nine sessions. <em className="italic text-clay-500">Mark them all.</em>
            </h2>
            <p className="text-beige-200 font-light leading-relaxed">
              Tuesdays &amp; Thursdays · 10 AM EDT (4–7 PM CEST) · 3 hrs each. Sessions are recorded,
              but real transformation happens live.
            </p>
          </div>

          <div className="bg-espresso-800/40 border border-white/5 rounded-2xl overflow-hidden">
            {schedule.map((s, i) => (
              <div
                key={s.tag}
                className={`grid grid-cols-[auto_1fr] md:grid-cols-[120px_140px_1fr_auto] gap-3 md:gap-6 items-center px-5 md:px-7 py-4 ${
                  i < schedule.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full inline-block w-fit"
                  style={{
                    background: `${s.color}25`,
                    color: s.color,
                    border: `1px solid ${s.color}40`,
                  }}
                >
                  {s.tag}
                </span>
                <span className="text-sm font-medium text-beige-50 md:order-none order-3 col-span-2 md:col-span-1">
                  {s.date}
                </span>
                <span className="text-sm text-beige-300 font-light md:order-none order-4 col-span-2 md:col-span-1">
                  {s.topic}
                </span>
                <span className="hidden md:inline text-[10px] text-beige-300/50 font-mono whitespace-nowrap">
                  10 AM EDT
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. ROI TABLE ~ light
      ══════════════════════════════════════ */}
      <section className="section-padding bg-beige-100 border-y border-beige-200">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
              The Return
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Where the <em className="italic text-clay-500">hours come back</em>.
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed">
              Tracked across our own businesses and our clients' ~ this is what changes when
              Claude is set up properly inside your week.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white border border-beige-200 rounded-2xl overflow-hidden">
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-6 py-3 border-b border-beige-200 bg-beige-50">
              {["Task", "Before Claude", "With Claude", "Saved"].map((h) => (
                <p
                  key={h}
                  className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe-400"
                >
                  {h}
                </p>
              ))}
            </div>
            {roiRows.map((r, i) => (
              <div
                key={r.task}
                className={`grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-2 md:gap-4 px-6 py-4 ${
                  i < roiRows.length - 1 ? "border-b border-beige-200" : ""
                }`}
              >
                <p className="text-sm font-medium text-charcoal-900">{r.task}</p>
                <p className="text-sm text-taupe-400 font-light md:font-mono">
                  <span className="md:hidden text-[10px] uppercase tracking-wider mr-2">Before:</span>
                  {r.before}
                </p>
                <p className="text-sm text-charcoal-900 font-light md:font-mono">
                  <span className="md:hidden text-[10px] uppercase tracking-wider mr-2">After:</span>
                  {r.after}
                </p>
                <p className="text-sm font-semibold italic text-clay-500">{r.saved}</p>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-2 md:gap-4 px-6 py-5 bg-charcoal-900 items-center">
              <p className="text-sm font-semibold text-beige-50">Total saved per week</p>
              <p className="hidden md:block" />
              <p className="hidden md:block" />
              <p className="text-2xl font-bold italic text-clay-500">~9.5 hrs</p>
            </div>
          </div>

          <p className="text-center mt-8 text-sm text-taupe-400 font-light">
            ~9.5 hrs/week saved · <span className="text-charcoal-900 font-semibold">€1,140/month</span> returned · €247 paid <em>once</em>.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. VIP BUNDLE ~ dark
      ══════════════════════════════════════ */}
      <section id="vip" className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Cohort 1 Bonus
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-beige-50 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                VIP bundle <em className="italic text-clay-500">included free.</em>
              </h2>
              <p className="text-beige-200 font-light leading-relaxed mb-6">
                €397 of bonus value for Cohort 1, included with your bootcamp seat. We're building
                this programme with you, not just for you ~ that earns you the upgrade.
              </p>
              <div className="bg-espresso-800/60 border-l-4 border-clay-500 rounded-r-xl px-5 py-4">
                <p className="text-sm text-beige-200/80 font-light leading-relaxed">
                  <span className="font-semibold text-beige-50">Cohort 2 opens at €397</span> ~ no VIP included.
                  This bundle disappears when Cohort 1 closes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {vipPerks.map((p) => (
                <div
                  key={p.title}
                  className="bg-espresso-800 border border-white/5 rounded-xl p-5 flex gap-4 items-start hover:bg-espresso-700/60 hover:border-clay-500/30 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-clay-500/20 flex items-center justify-center shrink-0 mt-0.5 text-clay-500">
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-beige-50 mb-1">{p.title}</p>
                    <p className="text-xs text-beige-300 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. PRICING & URGENCY ~ light
      ══════════════════════════════════════ */}
      <section id="register" className="section-padding bg-beige-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Reserve Your Seat
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                Cohort 1 founding price.
              </h2>
              <p className="text-espresso-800 font-light leading-relaxed">
                One seat. One month. Everything you need to make AI run inside your business.
              </p>
            </div>

            <div className="bg-white border border-beige-200 rounded-2xl p-8 md:p-10 shadow-elegant">
              <div className="text-center mb-7">
                <div className="flex items-baseline justify-center gap-3 mb-2">
                  <span
                    className="font-light text-charcoal-900 leading-none"
                    style={{
                      fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                      fontSize: "clamp(3.5rem, 7vw, 5rem)",
                    }}
                  >
                    €247
                  </span>
                  <span className="text-lg text-taupe-400 line-through font-light">€397</span>
                </div>
                <p className="text-sm text-taupe-400 font-light italic">
                  One-time payment · Cohort 2 opens at €397
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "9 live sessions ~ 27 hrs of instruction",
                  "4 deliverables you walk away with",
                  "VIP bundle included free (€397 value)",
                  "Custom prompts written for your business",
                  "30-day premium community access",
                  "Priority DM support throughout",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-clay-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-charcoal-900 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="bootcamp-pricing"
                className="w-full inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Cohort 1 ~ €247
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-taupe-400 font-light mt-4">
                Secure checkout via Stripe. Email receipt sent immediately.
              </p>
            </div>

            <div className="mt-8 bg-beige-100 border border-beige-200 rounded-xl px-5 py-4 flex items-start gap-3">
              <Zap className="w-5 h-5 text-clay-500 shrink-0 mt-0.5" />
              <p className="text-xs text-taupe-400 font-light leading-relaxed">
                <span className="font-semibold text-espresso-800">Founding cohort note:</span>{" "}
                We're building Cohort 1 with you. Smaller group, more access, lower price ~ in exchange
                for showing up early. Cohort 2 opens at €397 with no VIP bundle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. HOSTS ~ dark
      ══════════════════════════════════════ */}
      <section className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Your Instructors
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-beige-50 mb-8 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                Operators, <em className="italic text-clay-500">not coaches.</em>
              </h2>
              <Image
                src="/assets/website-samples/hero_image.png"
                alt="Abie Maxey and Meri Gee"
                width={240}
                height={288}
                className="w-48 object-contain drop-shadow-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-espresso-800/60 border border-white/5 rounded-2xl p-7">
                <p
                  className="text-2xl font-light text-beige-50 mb-1"
                  style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                >
                  Abie Maxey &amp; Meri Gee
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-clay-500 mb-5">
                  Tech · Business · AI
                </p>
                <p className="text-beige-200 font-light leading-relaxed text-sm mb-4">
                  Between us we bring tech, business strategy, and hands-on AI experience ~ and we
                  combined all of it into a programme we wish we had when we were starting out.
                </p>
                <p className="text-beige-200 font-light leading-relaxed text-sm">
                  Abie is a software engineer who returned to building through Claude Code. Meri ran
                  an agency from scratch ~ then rebuilt it leaner with AI. Everything we teach in
                  this bootcamp, we run ourselves every day.
                </p>
              </div>

              <div className="bg-espresso-800/60 border border-clay-500/20 rounded-2xl p-7">
                <p className="text-beige-200/60 text-xs font-bold uppercase tracking-[0.18em] mb-3">
                  Our promise
                </p>
                <p
                  className="text-beige-50 text-lg md:text-xl font-light leading-relaxed mb-3"
                  style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                >
                  Tech + Business + AI = Superpowers.
                </p>
                <p className="text-beige-200/70 text-sm font-light leading-relaxed">
                  Show up to every session. Do the work between sessions. If you finish Cohort 1
                  without a working AI stack inside your business ~ message us. We'll work with you
                  until you have it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. FINAL CTA ~ light
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-4">
              Last thing
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-charcoal-900 mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              One month. Three tools.
              <br />
              <em className="italic text-clay-500">A business that runs differently.</em>
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed mb-10 text-lg">
              You've been saying you'll figure out AI for months. This is the version of you that does.
            </p>

            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="bootcamp-final"
              className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Join Cohort 1 ~ €247
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="mt-6 text-sm text-taupe-400 font-light italic">
              Cohort 1 starts Tuesday, June 2, 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
