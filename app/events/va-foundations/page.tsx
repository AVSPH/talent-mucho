import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar, Clock, Video, Star, Users, Sparkles, MessageCircle,
  ArrowRight, Check, Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VA Foundations Workshop · Become a VA",
  description:
    "A 2-day, 8-hour live workshop on becoming a Virtual Assistant ~ from positioning and pricing to building your portfolio and dashboard with Claude. €79. July 17–18.",
  alternates: { canonical: "/events/va-foundations" },
  openGraph: {
    title: "VA Foundations Workshop | Talent Mucho",
    description:
      "Learn how to become a hireable VA and build your business assets live with Claude. 2 days, 8 hours, €79. July 17–18.",
    url: "/events/va-foundations",
    type: "website",
    images: [
      {
        url: "/assets/website-samples/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Talent Mucho VA Foundations Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VA Foundations Workshop | Talent Mucho",
    description: "2 days · 8 hours · €79 · Become a hireable VA and build your assets with Claude.",
    images: ["/assets/website-samples/hero_image.png"],
  },
};

const REGISTER_EMAIL =
  "mailto:hello@talentmucho.com?subject=VA%20Foundations%20Workshop%20~%20Register&body=Hi%20Talent%20Mucho%2C%0A%0AI%27d%20like%20to%20register%20for%20the%20VA%20Foundations%20Workshop%20(July%2017%E2%80%9318).%0A%0AName%3A%0AEmail%3A%0A";

const sessions = [
  {
    num: "01",
    color: "#7D6B5A",
    date: "Fri, Jul 17",
    title: "The Foundation",
    italic: "4 Hours",
    theme: "Who a VA is and how to position yourself to get hired",
    hours: [
      {
        h: "Hour 1",
        title: "What It Really Means to Be a VA",
        items: [
          "What a VA actually does vs. what most people think",
          "Who hires VAs and what they're really looking for",
        ],
      },
      {
        h: "Hour 2",
        title: "Your Offer: Niche, Services, and Rates",
        items: [
          "How to choose a niche and build a service menu",
          "Exercise: Draft your starter service offer and rates",
        ],
      },
      {
        h: "Hour 3",
        title: "Your VA Profile and Online Presence",
        items: [
          "LinkedIn, Upwork, and Talent Mucho: how to show up on each",
          "Writing a profile that sounds human, not like a job application",
        ],
      },
      {
        h: "Hour 4",
        title: "Pitching and Getting Your First Client",
        items: [
          "The cold outreach method that actually works",
          "Homework: Send 3 outreach messages before Day 2",
        ],
      },
    ],
  },
  {
    num: "02",
    color: "#5A7A6B",
    date: "Sat, Jul 18",
    title: "Claude Day",
    italic: "4 Hours",
    theme: "Build your VA business assets with AI, live",
    hours: [
      {
        h: "Hour 1",
        title: "Working Smarter with Claude",
        items: [
          "Why AI makes VAs more valuable, not replaceable",
          "Live demo: Claude doing real VA work in real time",
        ],
      },
      {
        h: "Hour 2 (90 min)",
        title: "Build Your Portfolio Landing Page with Claude",
        items: [
          "Hands-on: Claude writes your bio and builds your portfolio landing page",
          "How to publish it free before the session ends",
        ],
      },
      {
        h: "Hour 3",
        title: "Build Your VA Dashboard with Claude",
        items: [
          "Hands-on: Claude generates your starter dashboard template",
          "Take-home: customize and host it after the session",
        ],
      },
      {
        h: "Hour 4 (30 min)",
        title: "Certification + Next Steps",
        items: [
          "Talent Mucho VA network: how it works, what's expected",
          "Certification requirements + final Q&A",
        ],
      },
    ],
  },
];

const walkAways = [
  "A clear niche, service menu, and rates you can pitch with confidence",
  "A profile written to get noticed on LinkedIn, Upwork, and Talent Mucho",
  "A live portfolio landing page built and published with Claude",
  "A working VA business dashboard to track clients, tasks, and invoices",
  "Talent Mucho VA certification, on completion",
];

const audiencePills = [
  "Brand new to VA work",
  "Tried freelancing, didn't land clients",
  "Career break, returning to work",
  "Want a flexible remote income",
  "Comfortable with admin, not with AI",
  "Done watching free YouTube tutorials",
];

const vipPerks = [
  {
    icon: <Users className="w-4 h-4" />,
    title: "Small live group",
    desc: "Capped group size so you get real feedback on your offer, profile, and pitch.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Built live, not pre-recorded",
    desc: "Your portfolio landing page is published live in the session. Your dashboard starts as a working template you customize after.",
  },
  {
    icon: <Star className="w-4 h-4" />,
    title: "Talent Mucho certification",
    desc: "Complete the workshop and get certified to join the Talent Mucho VA network.",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    title: "Direct access to hosts",
    desc: "Ask questions live and get your pitch, profile, or rates reviewed on the spot.",
  },
];

export default function VAFoundationsPage() {
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
              <div className="inline-flex items-center gap-2 bg-white border border-clay-500/30 rounded-full px-4 py-2 mb-7">
                <Star className="w-3.5 h-3.5 text-clay-500 fill-clay-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-500">
                  Live workshop · July 17–18
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-taupe-400 mb-4">
                Talent Mucho · VA Foundations Workshop
              </p>

              <h1
                className="font-light tracking-tight text-charcoal-900 mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                  fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                  lineHeight: 1.05,
                }}
              >
                Become a VA
                <br />
                <em className="italic text-clay-500">clients actually hire.</em>
              </h1>

              <p className="text-lg md:text-xl text-espresso-800 font-light leading-relaxed mb-9 max-w-xl">
                Two live sessions. Eight hours. Day 1 you learn how to position, price, and pitch
                yourself as a VA. Day 2 you build your portfolio landing page and dashboard live ~
                with Claude.
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
                  { icon: <Calendar className="w-3.5 h-3.5" />, label: "Fri, Jul 17 & Sat, Jul 18" },
                  { icon: <Clock className="w-3.5 h-3.5" />, label: "4 hrs/day · 8 hrs total" },
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
                  VA Foundations Workshop
                </p>
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className="font-light text-beige-50 leading-none"
                    style={{
                      fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                    }}
                  >
                    €79
                  </span>
                </div>
                <p className="text-sm text-beige-200/80 font-light italic mb-5">
                  One-time payment · both days included.
                </p>

                <div className="bg-clay-500/10 border border-clay-500/30 rounded-xl px-4 py-3 mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-clay-500 mb-1">
                    Certification included
                  </p>
                  <p className="text-xs text-beige-200/70 font-light leading-relaxed">
                    Finish both sessions and get certified into the Talent Mucho VA network.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  {[
                    { val: "2", label: "live days" },
                    { val: "8 hrs", label: "live time" },
                    { val: "€9.88", label: "per hour" },
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
                  href={REGISTER_EMAIL}
                  data-cta="va-foundations-hero"
                  className="w-full inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-7 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 mb-3"
                >
                  Reserve my seat ~ €79
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="#curriculum"
                  className="w-full inline-flex items-center justify-center text-sm font-light text-beige-300/80 hover:text-beige-50 transition-colors"
                >
                  See the full agenda ↓
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. PROMISE STRIP
      ══════════════════════════════════════ */}
      <div className="bg-beige-100 border-y border-beige-200 py-6">
        <div className="section-container">
          <p className="text-center text-sm md:text-base text-espresso-800 font-light leading-relaxed">
            <span className="font-semibold">Your niche, offer & rates</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="font-semibold">Your VA profile</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="font-semibold">Your portfolio & dashboard</span>
            <span className="text-taupe-400 mx-3">·</span>
            <span className="italic text-clay-500">Built live, in 2 days</span>
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
            For people who are <em className="italic text-clay-500">done guessing</em> how to start.
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
              Spend 2 days getting it right. Land one client and you've earned it back many times over.
            </p>
            <p className="text-beige-200/70 text-sm font-light leading-relaxed">
              Most first-time VAs lose months pricing themselves wrong, applying with a generic
              profile, and never hearing back. This workshop fixes all three ~ before you send
              another application.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. AGENDA ~ light
      ══════════════════════════════════════ */}
      <section id="curriculum" className="section-padding bg-beige-50 border-y border-beige-200">
        <div className="section-container">
          <div className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
              The Agenda
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Two days. Eight hours. Real assets by the end.
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed">
              A focused overview, not a deep dive ~ four hours a day is enough to touch every topic
              that matters and leave with real assets, not theory.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sessions.map((s) => (
              <div
                key={s.num}
                className="bg-white border border-beige-200 rounded-2xl overflow-hidden"
              >
                <div className="px-6 md:px-8 py-6" style={{ background: s.color }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-beige-50/70 mb-2">
                    Session {s.num} · {s.date}
                  </p>
                  <p
                    className="text-3xl font-light text-beige-50 leading-tight mb-2"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    {s.title} <em className="italic">{s.italic}</em>
                  </p>
                  <p className="text-sm text-beige-50/85 font-light">{s.theme}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6 md:p-8">
                  {s.hours.map((h) => (
                    <div key={h.h} className="bg-beige-50 border border-beige-200 rounded-xl p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500 mb-2">
                        {h.h}
                      </p>
                      <p className="text-base font-medium text-charcoal-900 mb-3 leading-snug">
                        {h.title}
                      </p>
                      <ul className="flex flex-col gap-1.5">
                        {h.items.map((item) => (
                          <li key={item} className="text-sm text-espresso-800 font-light leading-relaxed flex gap-2">
                            <span className="text-taupe-400 shrink-0">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="#register"
              className="inline-flex items-center gap-2 text-clay-500 hover:text-clay-600 font-medium text-sm transition-colors"
              data-cta="va-foundations-curriculum"
            >
              I&apos;m in ~ jump to register
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. BONUSES ~ dark
      ══════════════════════════════════════ */}
      <section id="vip" className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                What Makes This Different
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-beige-50 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                You leave with assets, <em className="italic text-clay-500">not just notes.</em>
              </h2>
              <p className="text-beige-200 font-light leading-relaxed mb-6">
                Most VA courses teach theory. This one ends with a published landing page, a working
                dashboard, and a certification you can put on your profile ~ all done before you log off.
              </p>
              <div className="bg-espresso-800/60 border-l-4 border-clay-500 rounded-r-xl px-5 py-4">
                <p className="text-sm text-beige-200/80 font-light leading-relaxed">
                  <span className="font-semibold text-beige-50">Homework between sessions:</span>{" "}
                  send 3 outreach messages before Day 2, so you walk in with real pitches in motion.
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
          6. PRICING & REGISTER ~ light
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
                Two days. €79. Everything included.
              </h2>
              <p className="text-espresso-800 font-light leading-relaxed">
                Email us to lock in your seat ~ we'll confirm your spot and send the Zoom details.
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
                    €79
                  </span>
                </div>
                <p className="text-sm text-taupe-400 font-light italic">
                  One-time payment · July 17–18
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "8 live hours across 2 days",
                  "Day 1: niche, offer, rates, profile, pitching",
                  "Day 2: portfolio landing page built live + starter dashboard with Claude",
                  "Templates: pitch messages, service menu, prompt briefs",
                  "Talent Mucho VA network certification",
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
                href={REGISTER_EMAIL}
                data-cta="va-foundations-pricing"
                className="w-full inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Reserve my seat ~ €79
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-taupe-400 font-light mt-4">
                Email us at hello@talentmucho.com ~ we'll send payment & Zoom details directly.
              </p>
            </div>

            <div className="mt-8 bg-beige-100 border border-beige-200 rounded-xl px-5 py-4 flex items-start gap-3">
              <Zap className="w-5 h-5 text-clay-500 shrink-0 mt-0.5" />
              <p className="text-xs text-taupe-400 font-light leading-relaxed">
                <span className="font-semibold text-espresso-800">Seats are limited:</span>{" "}
                this is a live, hands-on workshop, not a webinar. We keep the group small so
                everyone gets real feedback on their offer and pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. FAQ ~ dark
      ══════════════════════════════════════ */}
      <section className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3 text-center">
              Before you go
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-beige-50 mb-12 text-center leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Questions we always get.
            </h2>

            <div className="flex flex-col gap-5">
              {[
                {
                  q: "I have zero experience. Can I still become a VA?",
                  a: "Yes ~ that's exactly who Day 1 is built for. We start from what skills you already have (admin, customer service, social media, whatever it is) and turn that into a niche and a service menu you can pitch with confidence.",
                },
                {
                  q: "Do I need to know how to use Claude already?",
                  a: "No. Day 2 starts from zero. We show you the exact prompt format to use, then build your bio, landing page, and dashboard live, step by step, with the host in the chat the whole time.",
                },
                {
                  q: "What if I can't attend live?",
                  a: "Live attendance is where the value is ~ live feedback on your offer, your pitch, and your build. If you truly can't make a session, message us before the workshop and we'll see what we can arrange.",
                },
                {
                  q: "What do I actually walk away with?",
                  a: "A defined niche and service menu, a rewritten VA profile, a published one-page portfolio site, a starter dashboard template to track clients and invoices, and Talent Mucho VA certification on completion.",
                },
                {
                  q: "What happens after the workshop?",
                  a: "You join the Talent Mucho VA network once certified ~ a community where clients come looking for VAs like you. You also leave with 3 outreach messages already sent and a discovery-call script ready to use.",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-espresso-800/60 border border-white/5 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none hover:bg-white/[0.03] transition-colors">
                    <span className="font-medium text-beige-50 text-base leading-snug">{q}</span>
                    <span className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center shrink-0 text-clay-500 group-open:rotate-45 transition-transform duration-200">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-white/5 pt-4">
                      <p className="text-beige-300 font-light leading-relaxed text-sm">{a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>

            <p className="text-center mt-10 text-beige-300/50 text-sm font-light">
              Still have a question?{" "}
              <a
                href="mailto:hello@talentmucho.com"
                className="text-clay-500 hover:text-clay-400 transition-colors"
              >
                Email us at hello@talentmucho.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. FINAL CTA ~ light
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
              Two days to a VA business
              <br />
              <em className="italic text-clay-500">that&apos;s actually ready to pitch.</em>
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed mb-10 text-lg">
              July 17–18. €79. Live. Bring your laptop and leave with the assets to get hired.
            </p>

            <a
              href={REGISTER_EMAIL}
              data-cta="va-foundations-final"
              className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Reserve my seat ~ €79
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="mt-6 text-sm text-taupe-400 font-light italic">
              Session 1 starts Friday, July 17, 2026.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
