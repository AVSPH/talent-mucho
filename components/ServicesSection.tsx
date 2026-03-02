import { UserCheck, LayoutTemplate, PenTool, Share2, Search, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesSection() {
    const vaRoles = [
        "Executive & Admin VAs",
        "Social Media Managers",
        "Customer Support",
        "CRM & Automation Assistants",
        "Marketing & Sales Support",
        "Operations & Back-Office VAs",
    ];

    const vaDifferences = [
        "Skills-matched hiring — not guesswork",
        "Full onboarding & integration support",
        "Ongoing performance monitoring",
        "Scalability as your business grows",
    ];

    const digitalServices = [
        {
            title: "Website Design & Development",
            subtitle: "Conversion-focused sites that look great and work hard.",
            bullets: ["Business & personal brand websites", "Landing pages", "Optimized for speed, SEO & mobile"],
            icon: LayoutTemplate,
        },
        {
            title: "Personal Branding",
            subtitle: "Turn founders into recognized industry authorities.",
            bullets: ["Brand positioning", "Visual identity", "Content strategy & online presence"],
            icon: PenTool,
        },
        {
            title: "Social Media Management",
            subtitle: "We don't chase trends — we build lasting brands.",
            bullets: ["Content planning & posting", "Captions & creatives", "Engagement & growth strategy"],
            icon: Share2,
        },
        {
            title: "SEO & Content Visibility",
            subtitle: "Because being invisible online is expensive.",
            bullets: ["On-page & technical SEO", "Content optimization", "Local & service-based visibility"],
            icon: Search,
        },
    ];

    return (
        <section id="services" className="section-padding bg-beige-100">
            <div className="section-container">
                {/* Header */}
                <div className="text-center mb-20">
                    <p className="text-clay-500 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                        What We Offer
                    </p>
                    <h2
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
                        className="mb-5 text-5xl md:text-6xl"
                    >
                        Scale Your Operations
                        <br />
                        <em className="text-clay-500" style={{ fontStyle: "italic" }}>Without the Overhead</em>
                    </h2>
                    <p className="text-espresso-800 text-lg max-w-2xl mx-auto leading-relaxed">
                        We provide everything you need to scale — from skilled virtual professionals to comprehensive digital strategies that drive real results.
                    </p>
                </div>

                {/* === Service 1: Virtual Assistants === */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-clay-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <UserCheck className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                                Virtual Assistants <em className="text-clay-500 text-2xl font-light" style={{ fontStyle: "italic" }}>— done right</em>
                            </h3>
                            <p className="text-espresso-800 mt-1">
                                Not just task-doers. We place trained, vetted VAs who understand business goals — not just to-do lists.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Roles */}
                        <div className="bg-white rounded-3xl p-8 border border-beige-200 shadow-sm">
                            <h4 className="text-base font-semibold text-charcoal-900 mb-5 uppercase tracking-widest text-xs">
                                Roles we offer
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {vaRoles.map((role, i) => (
                                    <span
                                        key={i}
                                        className="bg-beige-50 text-espresso-800 px-4 py-2 rounded-full border border-beige-200 text-sm font-medium hover:bg-beige-100 hover:border-clay-300 transition-colors cursor-default"
                                    >
                                        {role}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Differences */}
                        <div className="bg-charcoal-900 rounded-3xl p-8 text-beige-50 relative overflow-hidden shadow-lg">
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-clay-500/15 rounded-full blur-3xl pointer-events-none" />
                            <h4 className="text-base font-semibold text-beige-50/60 mb-5 uppercase tracking-widest text-xs">
                                What&apos;s different
                            </h4>
                            <ul className="space-y-4 relative z-10">
                                {vaDifferences.map((diff, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-clay-500 flex-shrink-0" />
                                        <span className="text-base text-beige-100">{diff}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="flex items-center gap-6 mb-24">
                    <div className="flex-1 h-px bg-beige-300" />
                    <span className="text-taupe-400 text-xs uppercase tracking-widest">Digital Services</span>
                    <div className="flex-1 h-px bg-beige-300" />
                </div>

                {/* === Service 2: Digital Services Bento === */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-charcoal-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                            <LayoutTemplate className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-3xl md:text-4xl" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}>
                                Digital Services <em className="text-taupe-400 text-2xl font-light" style={{ fontStyle: "italic" }}>— built for growth</em>
                            </h3>
                            <p className="text-espresso-800 mt-1">
                                Need results, not freelancers? We combine talent + strategy for maximum impact.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {digitalServices.map((svc, i) => {
                            const Icon = svc.icon;
                            return (
                                <div
                                    key={i}
                                    className="group bg-white rounded-3xl p-8 border border-beige-200 shadow-sm hover:shadow-md hover:border-clay-300 transition-all duration-500 flex flex-col"
                                >
                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-12 h-12 bg-beige-50 rounded-2xl border border-beige-200 flex items-center justify-center group-hover:bg-clay-500 group-hover:border-clay-500 transition-all duration-500 flex-shrink-0">
                                            <Icon className="w-6 h-6 text-clay-500 group-hover:text-white transition-colors duration-500" />
                                        </div>
                                        <h4 className="text-xl font-semibold text-charcoal-900">{svc.title}</h4>
                                    </div>
                                    <p className="text-taupe-400 italic mb-5 text-sm">&ldquo;{svc.subtitle}&rdquo;</p>
                                    <ul className="space-y-2.5 mt-auto">
                                        {svc.bullets.map((b, bi) => (
                                            <li key={bi} className="flex items-center gap-3 text-espresso-800 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://calendly.com/talentmucho/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-clay-500 text-beige-50 font-medium rounded-lg shadow-md hover:bg-clay-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Get a Custom Solution
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
