import Link from "next/link";
import { ArrowRight, Users, Calendar, Star } from "lucide-react";

export default function CommunitySection() {
    return (
        <section className="section-padding bg-charcoal-900 relative overflow-hidden">
            {/* Subtle grid backdrop */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(0deg,#FAF8F5 0,#FAF8F5 1px,transparent 1px,transparent 56px),repeating-linear-gradient(90deg,#FAF8F5 0,#FAF8F5 1px,transparent 1px,transparent 56px)",
                }}
            />

            <div className="section-container relative">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 bg-clay-500/15 border border-clay-500/30 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 rounded-full bg-clay-500 animate-pulse shrink-0" />
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-500">
                                230+ members · Live on Skool
                            </span>
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-500 mb-4">
                            The Talent Mucho Community
                        </p>
                        <h2
                            className="text-4xl md:text-5xl lg:text-6xl font-light text-beige-50 mb-6 leading-[1.05]"
                            style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                        >
                            Two doors.{" "}
                            <em className="italic text-clay-500">One community.</em>
                        </h2>
                        <p className="text-beige-200 font-light leading-relaxed text-lg max-w-2xl mx-auto">
                            Learn AI alongside other operators ~ not alone in front of YouTube. Start free
                            with replays and the vault, or join us live every week.
                        </p>
                    </div>

                    {/* Two doors */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        {/* Free */}
                        <div className="bg-espresso-800/60 border border-white/5 rounded-2xl p-7 flex flex-col">
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-11 h-11 rounded-xl bg-beige-100/10 flex items-center justify-center text-beige-200">
                                    <Users className="w-5 h-5" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-beige-300/60">
                                    Door 1
                                </span>
                            </div>
                            <p
                                className="text-3xl font-light text-beige-50 mb-2"
                                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                            >
                                Free <em className="italic text-beige-200/60">tier</em>
                            </p>
                            <p className="text-2xl font-light text-clay-500 mb-4"
                                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                            >
                                €0
                            </p>
                            <ul className="flex flex-col gap-2 mb-6 flex-1">
                                {[
                                    "Free replays from every public event",
                                    "Free vault ~ prompts and frameworks",
                                    "Abie's growing AI Playbooks library",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-beige-200 font-light leading-relaxed">
                                        <span className="text-clay-500 mt-1.5 text-[8px]">●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/community#free"
                                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-clay-500 text-beige-50 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 self-start"
                            >
                                Start free
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* Premium ~ highlighted */}
                        <div className="bg-clay-500/10 border border-clay-500/40 rounded-2xl p-7 flex flex-col relative">
                            <span className="absolute -top-2.5 left-7 bg-clay-500 text-beige-50 text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full">
                                Most pick this
                            </span>
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-11 h-11 rounded-xl bg-clay-500/20 flex items-center justify-center text-clay-500">
                                    <Star className="w-5 h-5 fill-clay-500" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500">
                                    Door 2 · Inner Circle
                                </span>
                            </div>
                            <p
                                className="text-3xl font-light text-beige-50 mb-2"
                                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                            >
                                Premium <em className="italic text-clay-500">membership</em>
                            </p>
                            <p
                                className="text-2xl font-light text-clay-500 mb-4"
                                style={{ fontFamily: "var(--font-cormorant), ui-serif, Georgia, serif" }}
                            >
                                €49<span className="text-base text-beige-200/60 font-light"> /mo</span>
                            </p>
                            <ul className="flex flex-col gap-2 mb-6 flex-1">
                                {[
                                    "Weekly live group calls (starts Jun 2)",
                                    "Premium vault ~ every replay we've made",
                                    "Vibe coding sessions ~ build live",
                                    "30% off every bootcamp, forever",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-beige-50 font-light leading-relaxed">
                                        <span className="text-clay-500 mt-1.5 text-[8px]">●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/community#premium"
                                className="inline-flex items-center justify-center gap-2 bg-clay-500 hover:bg-clay-600 text-beige-50 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200 self-start"
                            >
                                Join premium
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Bottom row: monthly bootcamp note + main CTA */}
                    <div className="bg-espresso-800/40 border border-white/5 rounded-2xl px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-clay-500/20 flex items-center justify-center shrink-0 mt-0.5 text-clay-500">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-semibold text-beige-50 text-sm mb-1">
                                    A new bootcamp every month.
                                </p>
                                <p className="text-xs text-beige-300 font-light leading-relaxed">
                                    Premium members lock 30% off every cohort, forever. Cohort 1 starts Tue Jun 2.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/community"
                            className="inline-flex items-center gap-2 text-sm font-medium text-clay-500 hover:text-beige-50 transition-colors shrink-0"
                        >
                            See how the doors compare
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
