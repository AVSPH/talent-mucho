import { ArrowRight } from "lucide-react";

const pillars = [
    {
        number: "01",
        title: "Educate",
        description:
            "You don't need to become a tech person. You just need to know how AI can work for your business. We run workshops, hands-on training, and team adoption programs that make it actually click.",
    },
    {
        number: "02",
        title: "Build",
        description:
            "We build the websites, automations, and digital systems your business runs on. No more duct-taping tools together at midnight. Just clean, functional systems that work while you sleep.",
    },
    {
        number: "03",
        title: "Operate",
        badge: "AI Specialist / Engineers",
        description:
            "Not your average VA. Our AI-trained specialists handle the admin, operations, and execution that used to eat your whole week ~ so you can show up for your business as the CEO, not the assistant.",
    },
];

export default function EducateBuildOperate() {
    return (
        <section className="section-padding bg-beige-50 relative overflow-hidden">
            {/* Subtle warm accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-clay-500/[0.06] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-beige-300/40 rounded-full blur-[140px] pointer-events-none" />

            <div className="section-container relative z-10">
                {/* Eyebrow */}
                <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-16 text-center">
                    Our Vision
                </p>

                {/* Manifesto heading */}
                <div className="text-center mb-6">
                    <h2
                        className="text-charcoal-900 leading-[1.0]"
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontWeight: 300,
                            fontSize: "clamp(3.5rem, 8vw, 7rem)",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Educate.{" "}
                        <em className="text-clay-500" style={{ fontStyle: "italic" }}>Build.</em>
                        {" "}Operate.
                    </h2>
                </div>

                <p className="text-espresso-800/70 text-center text-lg mb-20 max-w-xl mx-auto leading-relaxed">
                    The journey we run with every business ~ from learning to building to scaling.
                </p>

                {/* Three pillars — editorial columns with journey progression */}
                <div className="relative">
                    {/* Top divider */}
                    <div className="border-t border-beige-200 mb-0" />

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] divide-y lg:divide-y-0 divide-beige-200">
                        {/* Pillar 01 ~ Educate */}
                        <PillarColumn pillar={pillars[0]} />

                        {/* Connector */}
                        <div className="hidden lg:flex items-center justify-center px-6">
                            <div className="flex flex-col items-center gap-2">
                                <ArrowRight className="w-5 h-5 text-clay-500/40" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500/40">step</span>
                            </div>
                        </div>

                        {/* Pillar 02 ~ Build */}
                        <PillarColumn pillar={pillars[1]} />

                        {/* Connector */}
                        <div className="hidden lg:flex items-center justify-center px-6">
                            <div className="flex flex-col items-center gap-2">
                                <ArrowRight className="w-5 h-5 text-clay-500/40" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay-500/40">step</span>
                            </div>
                        </div>

                        {/* Pillar 03 ~ Operate */}
                        <PillarColumn pillar={pillars[2]} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function PillarColumn({
    pillar,
}: {
    pillar: { number: string; title: string; badge?: string; description: string };
}) {
    return (
        <div className="pt-12 pb-4 lg:pb-0 lg:px-2 lg:first:pl-0 lg:last:pr-0">
            <div className="flex items-baseline gap-3 mb-5">
                <span className="text-clay-500 text-3xl font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    {pillar.number}
                </span>
                <span className="block text-clay-500/60 text-[10px] font-bold uppercase tracking-[0.3em]">
                    Stage
                </span>
            </div>

            <h3
                className="text-charcoal-900 mb-6"
                style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 300,
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    lineHeight: 0.95,
                }}
            >
                {pillar.title}
            </h3>

            {pillar.badge && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-clay-500 text-beige-50 mb-5">
                    {pillar.badge}
                </span>
            )}

            <p className="text-espresso-800/80 text-base leading-relaxed">
                {pillar.description}
            </p>
        </div>
    );
}
