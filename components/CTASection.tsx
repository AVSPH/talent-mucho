import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function CTASection() {
    const socialLinks = [
        { name: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/34657752940" },
        { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com/talentmucho" },
        { name: "Instagram", icon: FaInstagram, href: "https://instagram.com/talentmucho" },
        { name: "TikTok", icon: FaTiktok, href: "https://tiktok.com/@talentmucho" },
        { name: "Threads", icon: SiThreads, href: "https://threads.net/@talentmucho" },
    ];

    return (
        <section id="contact" className="relative bg-charcoal-900 overflow-hidden">
            {/* Diagonal grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(45deg, transparent 49%, #FAF8F5 49%, #FAF8F5 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #FAF8F5 49%, #FAF8F5 51%, transparent 51%)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Glow accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-clay-500/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-espresso-700/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Content */}
            <div className="section-container relative z-10 py-28 text-center">
                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-4 mb-10">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-taupe-400/30" />
                    <span className="text-taupe-400 text-xs tracking-[0.25em] uppercase font-semibold">
                        Ready to scale?
                    </span>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-taupe-400/30" />
                </div>

                {/* Headline */}
                <h2
                    className="text-beige-50 mb-6 leading-[1.05]"
                    style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                        fontSize: "clamp(2.8rem, 6vw, 5rem)",
                    }}
                >
                    Scale Without the{" "}
                    <em className="text-clay-500" style={{ fontStyle: "italic" }}>Stress.</em>
                </h2>

                <p className="text-beige-200/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                    Let&apos;s build your team, your systems, and your online presence — properly.
                    No fluff, no wasted time.
                </p>

                {/* Primary CTA */}
                <div className="mb-14">
                    <a
                        href="https://calendly.com/talentmucho/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-5 bg-beige-50 text-charcoal-900 font-semibold text-base rounded-xl shadow-xl hover:bg-beige-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ease-out"
                    >
                        Book a Free Strategy Call
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <p className="text-beige-200/40 text-xs mt-4">No commitment required · 30-minute session</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-5 mb-8">
                    {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                            <div key={social.name} className="flex items-center gap-5">
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-beige-200/40 hover:text-beige-50 transition-colors duration-300"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                                {i < socialLinks.length - 1 && (
                                    <div className="h-4 w-px bg-beige-200/10" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Email */}
                <a
                    href="mailto:hello@talentmucho.com"
                    className="text-beige-200/40 hover:text-beige-50 transition-colors duration-300 text-sm"
                >
                    hello@talentmucho.com
                </a>

                {/* Footer row */}
                <div className="mt-16 pt-8 border-t border-beige-200/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
                        {/* Locations */}
                        <div className="text-left order-2 md:order-1">
                            <p className="text-[10px] uppercase tracking-widest text-taupe-400/60 mb-2">Locations</p>
                            <p className="text-sm text-beige-200/50">Granada, Spain</p>
                            <p className="text-sm text-beige-200/50">Cagayan de Oro City, Philippines</p>
                        </div>

                        {/* Logo */}
                        <div className="flex justify-center order-1 md:order-2">
                            <Image
                                src="/tm-logo.png"
                                alt="Talent Mucho"
                                width={130}
                                height={46}
                                className="h-9 w-auto object-contain brightness-0 invert opacity-70"
                            />
                        </div>

                        {/* Copyright */}
                        <div className="text-right order-3">
                            <p className="text-sm text-beige-200/30">
                                © {new Date().getFullYear()} Talent Mucho.
                                <br />
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
