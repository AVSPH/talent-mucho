import { Zap, Brain, TrendingUp, Clock, Layers, ArrowRight } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Built-in efficiency",
      description: "Automate repetitive workflows and streamline operations with trained VAs who know business systems.",
      size: "large",
    },
    {
      icon: Brain,
      title: "Smarter decision-making",
      description: "Strategic guidance, not just task execution.",
      size: "small",
    },
    {
      icon: TrendingUp,
      title: "Revenue growth",
      description: "Targeted execution powered by real strategy and data.",
      size: "small",
    },
    {
      icon: Clock,
      title: "Your time back",
      description: "Let our team handle the work so you can focus on what only you can do.",
      size: "large",
    },
    {
      icon: Layers,
      title: "Scales with you",
      description: "Packages adapt as your business evolves — no lock-in, no friction.",
      size: "small",
    },
  ];

  return (
    <section className="section-padding bg-beige-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            The Difference
          </p>
          <h2
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
            className="mb-5 text-4xl md:text-5xl"
          >
            Why founders choose{" "}
            <em className="text-clay-500" style={{ fontStyle: "italic" }}>Talent Mucho</em>
          </h2>
          <p className="text-espresso-800 text-lg max-w-xl mx-auto leading-relaxed">
            Human expertise, strategic systems, and a team that actually cares about your outcomes.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(160px,auto)]">
          {/* Large card 1 */}
          <div className="md:col-span-2 bg-white rounded-3xl border border-beige-200 p-8 shadow-sm hover:shadow-md hover:border-clay-300 group transition-all duration-500 flex flex-col justify-between">
            <div className="w-12 h-12 bg-clay-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-charcoal-900 mb-3">Built-in efficiency</h3>
              <p className="text-espresso-800 leading-relaxed">
                Automate repetitive workflows and streamline operations with trained VAs who know business systems inside-out — saving you hours every single day.
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="bg-charcoal-900 rounded-3xl border border-beige-200/10 p-8 shadow-sm hover:shadow-md group transition-all duration-500 flex flex-col justify-between">
            <div className="w-12 h-12 bg-clay-500/20 border border-clay-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-clay-500/30 transition-colors">
              <Brain className="w-6 h-6 text-clay-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-2">Smarter decisions</h3>
              <p className="text-beige-200/60 text-sm leading-relaxed">Strategic guidance, not just task execution — a team that thinks with you.</p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="bg-white rounded-3xl border border-beige-200 p-8 shadow-sm hover:shadow-md hover:border-clay-300 group transition-all duration-500 flex flex-col justify-between">
            <div className="w-12 h-12 bg-beige-100 rounded-2xl border border-beige-200 flex items-center justify-center mb-6 group-hover:bg-clay-500 group-hover:border-clay-500 transition-all duration-500">
              <TrendingUp className="w-6 h-6 text-clay-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Revenue growth</h3>
              <p className="text-espresso-800 text-sm leading-relaxed">Targeted execution powered by real strategy and data-informed decisions.</p>
            </div>
          </div>

          {/* Large card 2 */}
          <div className="md:col-span-2 bg-clay-500 text-beige-50 rounded-3xl p-8 shadow-sm hover:shadow-md group transition-all duration-500 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3">Your time back</h3>
              <p className="text-beige-100/80 leading-relaxed">
                Let our team handle the heavy lifting so you can focus on what only you can do — leading, growing, and building the business you envisioned.
              </p>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="bg-white rounded-3xl border border-beige-200 p-8 shadow-sm hover:shadow-md hover:border-clay-300 group transition-all duration-500 flex flex-col justify-between">
            <div className="w-12 h-12 bg-beige-100 rounded-2xl border border-beige-200 flex items-center justify-center mb-6 group-hover:bg-clay-500 group-hover:border-clay-500 transition-all duration-500">
              <Layers className="w-6 h-6 text-clay-500 group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-2">Scales with you</h3>
              <p className="text-espresso-800 text-sm leading-relaxed">Packages adapt as your business evolves — no lock-in, no friction, pure flexibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
