import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { SiThreads } from "react-icons/si";

export default function Footer() {
    const socialLinks = [
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            href: "https://wa.me/34657752940",
            hoverColor: "hover:bg-[#25D366]",
        },
        {
            name: "Facebook",
            icon: FaFacebookF,
            href: "https://facebook.com/talentmucho",
            hoverColor: "hover:bg-[#1877F2]",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            href: "https://instagram.com/talentmucho",
            hoverColor: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
        },
        {
            name: "TikTok",
            icon: FaTiktok,
            href: "https://tiktok.com/@talentmucho",
            hoverColor: "hover:bg-[#000000]",
        },
        {
            name: "Threads",
            icon: SiThreads,
            href: "https://threads.net/@talentmucho",
            hoverColor: "hover:bg-[#000000]",
        },
    ];

    return (
        <footer className="bg-charcoal-900 border-t border-beige-50/10 py-12">
            <div className="section-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <Image
                            src="/tm-logo.png"
                            alt="Talent Mucho"
                            width={120}
                            height={40}
                            className="h-10 w-auto object-contain brightness-0 invert"
                        />
                    </a>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-beige-50/10 text-beige-50 transition-all duration-300 ${social.hoverColor} hover:text-white hover:scale-110`}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Location & Contact */}
                    <div className="flex flex-col items-center md:items-end gap-2 text-sm text-beige-200/60">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>Torrevieja, Spain 03185</span>
                        </div>
                        <a
                            href="https://wa.me/34657752940"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-beige-50 transition-colors"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            <span>+34 657 752 940</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-beige-50/10 text-center">
                    <p className="text-sm text-beige-200/40">
                        © {new Date().getFullYear()} Talent Mucho. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
