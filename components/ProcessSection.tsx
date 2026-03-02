export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "We learn your goals, current gaps, and growth stage. No templates — just a real conversation about what you need.",
        },
        {
            number: "02",
            title: "Custom Solution",
            description: "We recommend the right combination of talent + services, tailored precisely to your business model.",
        },
        {
            number: "03",
            title: "Build & Launch",
            description: "Your VA, systems, or digital assets go live — fast, without the chaos of managing it yourself.",
        },
        {
            number: "04",
            title: "Optimize & Scale",
            description: "We refine, improve, and expand as your business grows. This is a long-term partnership, not a one-off placement.",
        },
    ];

    return (
        <section id="process" className="section-padding bg-charcoal-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                            How It Works
                        </p>
                        <h2
                            className="text-beige-50 mb-5"
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
                        >
                            Simple. Strategic. Scalable.
                        </h2>
                        <p className="text-beige-200/60 text-lg max-w-xl mx-auto leading-relaxed">
                            Building great teams takes intention. Here&apos;s how we walk that path together.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting vertical line */}
                        <div className="hidden md:block absolute left-[1.75rem] top-12 bottom-12 w-px bg-gradient-to-b from-clay-500/40 via-clay-500/20 to-transparent" />

                        <div className="space-y-10">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-8 group">
                                    {/* Step circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 rounded-full border-2 border-espresso-700 bg-espresso-800/60 flex items-center justify-center group-hover:border-clay-500 group-hover:bg-clay-500/20 transition-all duration-500">
                                            <span
                                                className="text-taupe-400 group-hover:text-clay-400 transition-colors text-lg"
                                                style={{ fontFamily: "var(--font-cormorant)" }}
                                            >
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2 pb-4 border-b border-beige-200/10 flex-1 last:border-0">
                                        <h3
                                            className="text-beige-50 text-2xl mb-2"
                                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className="text-beige-200/60 leading-relaxed text-sm max-w-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://calendly.com/talentmucho/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-clay-500 text-beige-50 font-medium rounded-lg hover:bg-clay-600 hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-clay-500/20"
                        >
                            Start with a Free Call
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
