import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar, Star, Users, Sparkles, MessageCircle, Video,
  ArrowRight, Check, Zap, BookOpen, Hammer, Heart, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Talent Mucho Community",
  description:
    "Two doors into the Talent Mucho community. Free Skool tier with replays + vault. Premium membership at €49/mo with weekly calls (starts June 2), vibe coding sessions, and 30% off every bootcamp.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "The Talent Mucho Community",
    description:
      "Free replays + vault, or premium membership at €49/mo with weekly calls, vibe coding, and 30% off every bootcamp.",
    url: "/community",
    type: "website",
    images: [
      {
        url: "/assets/website-samples/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Talent Mucho Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Talent Mucho Community",
    description: "Free or €49/mo · weekly calls, vibe coding, 30% off every bootcamp.",
    images: ["/assets/website-samples/hero_image.png"],
  },
};

const FREE_URL = "https://www.skool.com/future-proof-with-ai-4339";
const PREMIUM_MONTHLY_URL = "https://buy.stripe.com/cNifZb3qm7cTdOFf8h73G05";
const PREMIUM_ANNUAL_URL = "https://buy.stripe.com/14A6oBgd8gNtfWN7FP73G06";
const BOOTCAMP_URL = "/events/bootcamp";

const freePerks = [
  {
    icon: <Video className="w-4 h-4" />,
    title: "Free event replays",
    desc: "Every public workshop, training, and live event we run lands here. Watch on your time.",
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    title: "Free vault",
    desc: "Prompts, frameworks, playbook excerpts. Cleaned up after each event, free to copy.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "230+ members",
    desc: "Founders, coaches, agencies, freelancers ~ all learning AI alongside you.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Abie's AI Playbooks",
    desc: "Free and growing every week. New playbook drops show up in the feed first.",
  },
];

const premiumPerks = [
  {
    icon: <Calendar className="w-4 h-4" />,
    title: "Weekly group calls",
    desc: "Live every week starting Tuesday, June 2. Build alongside the room ~ bring your project, get unstuck.",
    highlight: true,
  },
  {
    icon: <Video className="w-4 h-4" />,
    title: "Premium vault",
    desc: "Every replay, every workshop, every prompt we've ever built. Searchable, organised, yours.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Vibe coding sessions",
    desc: "Live build sessions where we make real things together with Claude Code. Bring an idea, leave with a prototype.",
  },
  {
    icon: <Star className="w-4 h-4" />,
    title: "30% off every bootcamp",
    desc: "Locked as long as you stay. Skip Cohort 1? Catch Cohort 2 at 30% off. Every month, every cohort.",
    highlight: true,
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    title: "Direct access",
    desc: "Inner-circle DM channel with Abie & Meri. Ask anything, get a real reply.",
  },
];

const compareRows = [
  { feature: "Free replays of public events", free: true, premium: true },
  { feature: "Public AI playbooks", free: true, premium: true },
  { feature: "Community feed access", free: true, premium: true },
  { feature: "Weekly live group calls (starts Jun 2)", free: false, premium: true },
  { feature: "Full premium vault", free: false, premium: true },
  { feature: "Vibe coding sessions", free: false, premium: true },
  { feature: "30% off every bootcamp", free: false, premium: true },
  { feature: "Direct DM with Abie & Meri", false: false, free: false, premium: true },
];

const monthlyBootcampGoals = [
  {
    num: "01",
    title: "AI running inside your business",
    desc: "Every cohort ends with a working AI stack ~ Projects, an AI employee, a custom dashboard, and a daily routine. You leave with artifacts, not notes.",
  },
  {
    num: "02",
    title: "A new cohort, every month",
    desc: "We run one bootcamp per month, year-round. Miss June? Catch July. Premium members lock 30% off every single one.",
  },
  {
    num: "03",
    title: "Small group, real mentorship",
    desc: "Each cohort is capped. We chose mentorship over scale. You get airtime in every session, not lurker-status in a 500-person Zoom.",
  },
];

const faqs = [
  {
    q: "Can I start free and upgrade later?",
    a: "Yes. Most members do. Start free, see if the community fits, then upgrade when you're ready. The €49/mo rate locks in tonight ~ if you wait until it goes to €97, you pay €97.",
  },
  {
    q: "When do the weekly group calls start?",
    a: "Tuesday, June 2, 2026. Every Tuesday after that, live on Zoom. Calls are recorded and added to the premium vault if you can't make it.",
  },
  {
    q: "Is the bootcamp included with premium?",
    a: "No ~ the bootcamp is a separate one-time programme (€247 for Cohort 1). But premium members get 30% off every bootcamp we ever run, locked as long as you stay.",
  },
  {
    q: "Cancel anytime?",
    a: "Yes. Monthly is month-to-month. Annual is paid up-front but if it's not for you, message us directly within 30 days and we'll refund.",
  },
  {
    q: "What's the difference between free vault and premium vault?",
    a: "Free vault gets the public-event resources cleaned up after the fact. Premium vault has everything ~ private workshops, vibe coding builds, weekly call recordings, and our internal prompt library.",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO ~ light
      ══════════════════════════════════════ */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-24 bg-beige-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">

            <div className="flex flex-col items-center gap-3 mb-8">
              <Image
                src="/assets/website-samples/hero_image.png"
                alt="Abie Maxey and Meri Gee"
                width={120}
                height={144}
                className="w-24 object-contain drop-shadow-md"
              />
              <p className="text-espresso-800/60 text-sm font-light italic">
                hosted by Abie &amp; Meri
              </p>
            </div>

            <div className="inline-flex items-center gap-2 bg-white border border-clay-500/30 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-clay-500 animate-pulse shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-500">
                230+ members · Live on Skool
              </span>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-taupe-400 mb-4">
              Talent Mucho · Community
            </p>

            <h1
              className="font-light tracking-tight text-charcoal-900 mb-6 leading-[1.05]"
              style={{
                fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif",
                fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
              }}
            >
              Two doors.
              <br />
              <em className="italic text-clay-500">One community.</em>
            </h1>

            <p className="text-lg md:text-xl text-espresso-800 font-light leading-relaxed max-w-2xl mx-auto mb-9">
              Learn AI alongside other operators, not alone in front of YouTube. Start free,
              upgrade when you&apos;re ready ~ or skip the wait and join us live every week.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { label: "Free tier · €0" },
                { label: "Premium · €49/mo" },
                { label: "Weekly calls start Jun 2" },
              ].map(({ label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-white border border-beige-200 rounded-full px-4 py-2 text-sm text-espresso-800 font-light"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#premium"
                className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Premium ~ €49/mo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={FREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-9 py-4 text-base font-medium text-clay-500 border border-beige-300 rounded-full hover:border-clay-500 hover:bg-clay-500/5 transition-all duration-200"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. WHY A COMMUNITY ~ dark
      ══════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-4">
              Why a community
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-beige-50 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Watching tutorials alone is <em className="italic text-clay-500">not</em> the same as building with operators in the room.
            </h2>
            <p className="text-beige-200 font-light leading-relaxed text-lg">
              We started this because every AI course we tried felt like watching someone else
              succeed. Here, you build alongside people who are exactly where you are ~ and the
              call from last week is in the vault when this week&apos;s lesson hits.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. THE TWO TIERS — comparison
      ══════════════════════════════════════ */}
      <section className="section-padding bg-beige-50">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
              The two tiers
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Free or Premium. Both real.
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed">
              Free is genuinely useful ~ not a teaser. Premium is for people who want the full
              ride: weekly calls, the premium vault, and 30% off every bootcamp we run.
            </p>
          </div>

          <div className="bg-white border border-beige-200 rounded-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 md:gap-6 px-5 md:px-7 py-4 bg-beige-100 border-b border-beige-200">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe-400">Feature</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-taupe-400 text-center">Free</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-clay-500 text-center">Premium</p>
            </div>
            {compareRows.map((r, i) => (
              <div
                key={r.feature}
                className={`grid grid-cols-[2fr_1fr_1fr] gap-2 md:gap-6 items-center px-5 md:px-7 py-4 ${i < compareRows.length - 1 ? "border-b border-beige-200" : ""}`}
              >
                <p className="text-sm text-charcoal-900 font-light">{r.feature}</p>
                <div className="flex justify-center">
                  {r.free ? (
                    <Check className="w-4 h-4 text-clay-500" strokeWidth={2.5} />
                  ) : (
                    <span className="w-4 h-px bg-beige-300" />
                  )}
                </div>
                <div className="flex justify-center">
                  <Check className="w-4 h-4 text-clay-500" strokeWidth={2.5} />
                </div>
              </div>
            ))}
            {/* price row */}
            <div className="grid grid-cols-[2fr_1fr_1fr] gap-2 md:gap-6 items-center px-5 md:px-7 py-5 bg-beige-50 border-t border-beige-200">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal-900">Price</p>
              <p className="text-center text-sm font-bold text-charcoal-900">€0</p>
              <p className="text-center text-sm font-bold text-clay-500">€49/mo</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. FREE TIER ~ light
      ══════════════════════════════════════ */}
      <section id="free" className="section-padding bg-beige-100 border-y border-beige-200">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Door 1 · Free
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-charcoal-900 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                Start here.
              </h2>
              <p className="text-espresso-800 font-light leading-relaxed mb-7">
                The free tier is real. We share replays from every public event, our growing
                playbook library, and a free vault of prompts cleaned up after each workshop.
              </p>
              <p className="text-sm text-taupe-400 font-light italic mb-8">
                If you&apos;re curious but not ready to commit ~ this is enough.
              </p>
              <a
                href={FREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="community-free"
                className="inline-flex items-center gap-2 bg-charcoal-900 hover:bg-espresso-800 text-beige-50 font-medium text-base px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Join free on Skool
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {freePerks.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-beige-200 rounded-xl p-5 flex gap-4 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-clay-500/10 flex items-center justify-center shrink-0 mt-0.5 text-clay-500">
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal-900 mb-1">{p.title}</p>
                    <p className="text-xs text-taupe-400 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. PREMIUM TIER ~ dark, the centerpiece
      ══════════════════════════════════════ */}
      <section id="premium" className="section-padding bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Door 2 · Premium
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-beige-50 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                The Inner Circle.
              </h2>
              <p className="text-beige-200 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                €49 a month. Locks in tonight ~ rate is going to €97. Cancel anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {premiumPerks.map((p) => (
                <div
                  key={p.title}
                  className={`rounded-xl p-5 flex gap-4 items-start transition-all duration-200 ${
                    p.highlight
                      ? "bg-clay-500/10 border border-clay-500/40"
                      : "bg-espresso-800 border border-white/5 hover:bg-espresso-700/60 hover:border-clay-500/30"
                  }`}
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

            {/* Pricing card */}
            <div className="bg-espresso-800/60 border border-white/10 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-500 mb-5 text-center">
                Choose your billing
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Monthly */}
                <a
                  href={PREMIUM_MONTHLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="community-premium-monthly"
                  className="group bg-charcoal-900 border-2 border-white/10 hover:border-clay-500/50 rounded-xl p-5 transition-all duration-200"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-beige-300/60 mb-2">
                    Monthly
                  </p>
                  <p
                    className="text-3xl font-light text-beige-50 mb-1"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    €49<span className="text-sm text-beige-300/60 font-light"> /mo</span>
                  </p>
                  <p className="text-xs text-beige-300/70 font-light mb-4">
                    Cancel anytime
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-clay-500 group-hover:gap-2 transition-all">
                    Choose monthly <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Annual ~ highlighted */}
                <a
                  href={PREMIUM_ANNUAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="community-premium-annual"
                  className="group bg-clay-500/15 border-2 border-clay-500 rounded-xl p-5 relative transition-all duration-200 hover:bg-clay-500/20"
                >
                  <span className="absolute -top-2.5 right-4 bg-clay-500 text-beige-50 text-[9px] font-bold uppercase tracking-[0.16em] px-2 py-1 rounded-full">
                    Save 32%
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500 mb-2">
                    Annual
                  </p>
                  <p
                    className="text-3xl font-light text-beige-50 mb-1"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    €399<span className="text-sm text-beige-300/60 font-light"> /yr</span>
                  </p>
                  <p className="text-xs text-beige-300/70 font-light mb-4">
                    Effective €33/mo
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-clay-500 group-hover:gap-2 transition-all">
                    Choose annual <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              </div>

              <div className="bg-clay-500/10 border-l-4 border-clay-500 rounded-r-lg px-4 py-3">
                <p className="text-xs text-beige-200/80 font-light leading-relaxed">
                  <span className="font-semibold text-clay-500">✦ Founding rate:</span>{" "}
                  Price is going to €97/mo soon. Lock in €49 by joining tonight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MONTHLY BOOTCAMPS GOAL ~ light
      ══════════════════════════════════════ */}
      <section className="section-padding bg-beige-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3">
                The Bootcamp goal
              </p>
              <h2
                className="text-4xl md:text-5xl font-light text-charcoal-900 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                A new bootcamp <em className="italic text-clay-500">every month.</em>
              </h2>
              <p className="text-espresso-800 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                The community is the home. The bootcamp is the deep work. Every month, a new
                cohort runs through 4 weeks of live building ~ premium members lock 30% off forever.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {monthlyBootcampGoals.map((g) => (
                <div key={g.num} className="bg-white border border-beige-200 rounded-2xl p-6">
                  <p
                    className="text-4xl font-light text-beige-300 leading-none mb-4"
                    style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                  >
                    {g.num}
                  </p>
                  <p className="text-base font-semibold text-charcoal-900 mb-2">{g.title}</p>
                  <p className="text-sm text-taupe-400 font-light leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-charcoal-900 rounded-2xl p-8 md:p-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay-500 mb-3">
                Cohort 1 · June 2026
              </p>
              <h3
                className="text-3xl md:text-4xl font-light text-beige-50 mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
              >
                AI Business Bootcamp ~ <em className="italic text-clay-500">founding price €247.</em>
              </h3>
              <p className="text-beige-200 font-light leading-relaxed mb-7 max-w-xl mx-auto">
                9 live sessions. Tuesdays &amp; Thursdays. Four real deliverables. Premium
                members: this is your first 30%-off cohort.
              </p>
              <Link
                href={BOOTCAMP_URL}
                className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-8 py-3.5 rounded-full transition-all duration-200"
              >
                See Cohort 1 details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. PRICE LADDER ~ dark
      ══════════════════════════════════════ */}
      <section className="py-16 bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-4">
              How it ladders
            </p>
            <h2
              className="text-3xl md:text-4xl font-light text-beige-50 mb-10 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Three doors. <em className="italic text-clay-500">Pick yours.</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-espresso-800/60 border border-white/5 rounded-xl p-6 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-beige-300/60 mb-2">Door 1</p>
                <p className="text-2xl font-light text-beige-50 mb-2"
                  style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                >
                  Free
                </p>
                <p className="text-sm text-beige-200 font-light leading-relaxed mb-4">
                  Replays + free vault. Start here, see if it fits.
                </p>
                <a
                  href={FREE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-500 hover:gap-2 transition-all"
                >
                  Join free <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-clay-500/10 border-2 border-clay-500/40 rounded-xl p-6 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500 mb-2">Door 2 · Most pick this</p>
                <p className="text-2xl font-light text-beige-50 mb-2"
                  style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                >
                  Premium · €49/mo
                </p>
                <p className="text-sm text-beige-200 font-light leading-relaxed mb-4">
                  Weekly calls + vault + 30% off every bootcamp.
                </p>
                <a
                  href={PREMIUM_MONTHLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-500 hover:gap-2 transition-all"
                >
                  Join premium <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-espresso-800/60 border border-white/5 rounded-xl p-6 text-left">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-beige-300/60 mb-2">Door 3</p>
                <p className="text-2xl font-light text-beige-50 mb-2"
                  style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                >
                  Bootcamp · €247
                </p>
                <p className="text-sm text-beige-200 font-light leading-relaxed mb-4">
                  Full 4-week intensive. Cohort 1 starts Jun 2.
                </p>
                <Link
                  href={BOOTCAMP_URL}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-clay-500 hover:gap-2 transition-all"
                >
                  See bootcamp <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. REFUND PROMISE ~ light
      ══════════════════════════════════════ */}
      <section className="py-16 bg-beige-100 border-y border-beige-200">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <Shield className="w-8 h-8 text-clay-500 mx-auto mb-5" />
            <h2
              className="text-3xl md:text-4xl font-light text-charcoal-900 mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              The honest refund.
            </h2>
            <p className="text-espresso-800 font-light leading-relaxed text-lg">
              If premium isn&apos;t what you expected, message us directly. No form, no &ldquo;sorry to see you go&rdquo; survey. We refund within 30 days, no awkwardness. We&apos;d rather you stay because you want to.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ ~ light
      ══════════════════════════════════════ */}
      <section className="section-padding bg-beige-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-3 text-center">
              FAQ
            </p>
            <h2
              className="text-4xl md:text-5xl font-light text-charcoal-900 mb-12 text-center leading-tight"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              Quick answers.
            </h2>

            <div className="flex flex-col gap-4">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-beige-200 rounded-2xl p-6"
                >
                  <p className="text-base font-semibold text-charcoal-900 mb-2">{f.q}</p>
                  <p className="text-sm text-taupe-400 font-light leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. FINAL CTA ~ dark
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-charcoal-900">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-7 h-7 text-clay-500 mx-auto mb-5" />
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-light text-beige-50 mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
            >
              The room is open.
              <br />
              <em className="italic text-clay-500">Pull up a chair.</em>
            </h2>
            <p className="text-beige-200 font-light leading-relaxed mb-10 text-lg">
              Whatever door you walk through tonight ~ we&apos;ll see you in the chat.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={PREMIUM_MONTHLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="community-final-premium"
                className="inline-flex items-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-base px-9 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Join Premium ~ €49/mo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={FREE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="community-final-free"
                className="inline-flex items-center justify-center px-9 py-4 text-base font-medium text-beige-50 border border-white/20 rounded-full hover:border-clay-500 hover:bg-clay-500/10 transition-all duration-200"
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
