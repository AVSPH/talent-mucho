export default function ClientsSection() {
    const clients = [
        "Founders & CEOs",
        "Coaches & Consultants",
        "Agencies",
        "E-commerce Brands",
        "Service-Based Businesses",
        "Startups Ready to Scale",
    ];

    return (
        <section className="py-14 bg-beige-100 border-y border-beige-200 overflow-hidden">
            <div className="section-container">
                <p className="text-center text-taupe-400 text-xs font-semibold uppercase tracking-[0.25em] mb-8">
                    Trusted by builders worldwide
                </p>

                {/* Scrolling tag cloud */}
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    {clients.map((client, i) => (
                        <span
                            key={i}
                            className="px-5 py-2.5 bg-white border border-beige-300 rounded-full text-espresso-800 text-sm font-medium hover:border-clay-500 hover:text-clay-500 hover:shadow-sm transition-all duration-300 cursor-default"
                        >
                            {client}
                        </span>
                    ))}
                </div>

                <p className="mt-10 text-center text-taupe-400 text-base italic max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem" }}>
                    &ldquo;If you&apos;re juggling everything yourself, we're here for you.
                </p>
            </div>
        </section>
    );
}
