import { CheckCircle2, ShieldCheck, Zap, Globe, Users2 } from "lucide-react";

export default function WhyUsSection() {
  const points = [
    {
      title: "One agency instead of a revolving door of contractors",
      icon: Users2,
      description: "Stop managing multiple freelancers with no accountability. We provide a cohesive, managed team under one roof.",
    },
    {
      title: "Strategy + execution under one roof",
      icon: Zap,
      description: "We don't just follow tasks — we help you plan the roadmap, then we build it.",
    },
    {
      title: "Flexible, scalable solutions",
      icon: ShieldCheck,
      description: "Whether starting small or scaling fast, our systems and talent adapt to your growth trajectory.",
    },
    {
      title: "Global talent, real accountability",
      icon: Globe,
      description: "Elite professionals from across the globe, managed with strict quality and performance standards.",
    },
    {
      title: "Long-term partnership mindset",
      icon: CheckCircle2,
      description: "We're not a vendor — we win when you win, focused on sustainable long-term success.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-beige-100">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Philosophy card */}
          <div className="sticky top-24">
            <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-5">
              The Talent Mucho Edge
            </p>
            <h2
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300, fontSize: "clamp(2.4rem, 4vw, 3.5rem)" }}
              className="mb-10 leading-[1.1]"
            >
              Why{" "}
              <em className="text-clay-500" style={{ fontStyle: "italic" }}>Talent Mucho</em>
            </h2>

            <div className="bg-charcoal-900 rounded-3xl p-10 text-beige-50 relative overflow-hidden shadow-xl">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-clay-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-espresso-700/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1.5 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10">
                  Core Philosophy
                </span>
                <h3
                  className="text-3xl md:text-4xl font-light mb-5 leading-snug"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  You don&apos;t need{" "}
                  <em className="italic">more</em> people.
                </h3>
                <p className="text-beige-200/70 text-xl mb-5 leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>
                  You need the right <span className="text-clay-400 font-medium">system</span> + the right <span className="text-clay-400 font-medium">talent</span>.
                </p>
                <div className="h-px w-full bg-white/10 my-6" />
                <p className="text-beige-100/70 text-sm leading-relaxed">
                  We bridge the gap between human expertise and strategic systems to create growth that compounds.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Points */}
          <div className="space-y-6 pt-2">
            {points.map((point, i) => (
              <div
                key={i}
                className="flex gap-5 group bg-white rounded-2xl p-6 border border-beige-200 shadow-sm hover:shadow-md hover:border-clay-300 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-beige-50 border border-beige-200 rounded-2xl flex items-center justify-center group-hover:bg-clay-500 group-hover:border-clay-500 transition-all duration-500">
                  <point.icon className="w-5 h-5 text-clay-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-base mb-1.5 group-hover:text-clay-500 transition-colors">
                    {point.title}
                  </h4>
                  <p className="text-taupe-400 text-sm leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
