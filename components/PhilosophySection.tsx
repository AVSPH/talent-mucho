export default function PhilosophySection() {
    const pillars = [
        {
            number: "I",
            title: "People First",
            description:
                "Every hire represents a person with real dreams, skills, and potential. We take time to understand both sides — deeply, not superficially.",
        },
        {
            number: "II",
            title: "Intentional Matching",
            description:
                "We don't just fill roles — we find true alignment between your culture, your values, and the professionals who will thrive with you long-term.",
        },
        {
            number: "III",
            title: "Long-Term Relationships",
            description:
                "Great teams aren't built overnight. We invest in relationships that grow stronger with time, because your success is our success.",
        },
    ];

    return (
        <section className="section-padding bg-beige-50">
            <div className="section-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                            Our Philosophy
                        </p>
                        <h2
                            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                            className="mb-5 text-4xl md:text-5xl"
                        >
                            Hiring should feel{" "}
                            <em className="text-clay-500" style={{ fontStyle: "italic" }}>human</em>
                        </h2>
                        <p className="text-espresso-800 text-lg max-w-2xl mx-auto leading-relaxed">
                            At Talent Mucho, every connection we make is intentional, every relationship nurtured with genuine care. Not transactional. Never rushed.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pillars.map((pillar, i) => (
                            <div key={i} className="relative group">
                                {/* Large faded numeral */}
                                <span
                                    className="absolute -top-4 -left-2 text-6xl font-light text-clay-500/10 select-none pointer-events-none"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {pillar.number}
                                </span>

                                <div className="relative bg-white rounded-2xl p-8 border border-beige-200 shadow-sm hover:shadow-md hover:border-clay-300 transition-all duration-500">
                                    <div className="w-8 h-px bg-clay-500 mb-6" />
                                    <h3
                                        className="text-2xl text-charcoal-900 mb-3"
                                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                                    >
                                        {pillar.title}
                                    </h3>
                                    <p className="text-taupe-400 leading-relaxed text-sm">{pillar.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
