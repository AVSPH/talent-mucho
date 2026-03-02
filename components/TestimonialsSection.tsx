"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "Talent Mucho transformed how we build our team. Their candidates aren't just skilled — they truly understand our culture and values. Game-changing.",
            author: "Sarah Chen",
            role: "CEO",
            company: "Nexus Innovations",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
        },
        {
            quote: "The level of care and attention they put into understanding our needs was remarkable. We found our perfect senior developer in just two weeks.",
            author: "Michael Torres",
            role: "CTO",
            company: "Streamline Tech",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        },
        {
            quote: "Working with Talent Mucho feels like having an extension of our own HR team. They've placed 12 team members with us — each one exceptional.",
            author: "Emily Watson",
            role: "Head of Operations",
            company: "GrowthPath Co.",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        },
    ];

    return (
        <section id="testimonials" className="section-padding bg-beige-100">
            <div className="section-container">
                <div className="text-center mb-16">
                    <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                        What Clients Say
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                        className="mb-5 text-4xl md:text-5xl"
                    >
                        Trusted by growing teams
                    </h2>
                    <p className="text-espresso-800 text-lg max-w-xl mx-auto leading-relaxed">
                        Hear from the companies we&apos;ve had the privilege to partner with on their journey to building exceptional teams.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="group bg-white rounded-3xl border border-beige-200 p-8 shadow-sm hover:shadow-md hover:border-clay-300 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div className="mb-6">
                                <div className="w-10 h-10 bg-clay-500/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-clay-500 transition-colors duration-500">
                                    <Quote className="w-4 h-4 text-clay-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <p
                                    className="text-charcoal-900 leading-relaxed text-lg"
                                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
                                >
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>

                            <div className="pt-5 border-t border-beige-200 flex items-center gap-3">
                                <Image
                                    src={t.avatar}
                                    alt={t.author}
                                    width={44}
                                    height={44}
                                    className="w-11 h-11 rounded-full object-cover border-2 border-beige-200"
                                />
                                <div>
                                    <p className="font-semibold text-charcoal-900 text-sm">{t.author}</p>
                                    <p className="text-xs text-taupe-400">
                                        {t.role}, {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
