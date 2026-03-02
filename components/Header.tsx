"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#services", label: "Services" },
        { href: "/#process", label: "Process" },
        { href: "/#why-us", label: "Why Us" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                ? "bg-beige-50/95 backdrop-blur-md shadow-sm py-2"
                : "bg-transparent py-3"
                }`}
        >
            <div className="section-container flex items-center justify-between">
                {/* Left Side: Logo + Navigation */}
                <div className="flex items-center gap-10">
                    {/* Logo */}
                    <a href="/" className="group flex items-center">
                        <Image
                            src="/tm-logo.png"
                            alt="Talent Mucho"
                            width={100}
                            height={30}
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-espresso-800 hover:text-clay-500 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Desktop CTA */}
                <a
                    href="https://calendly.com/talentmucho/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex btn-primary text-sm py-3 px-6"
                >
                    Book a Call
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden p-2 text-espresso-800 hover:text-clay-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
                style={{ top: "72px" }}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed left-0 right-0 bg-beige-50 shadow-lg transition-all duration-300 ease-out md:hidden ${isMobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                style={{ top: "72px" }}
            >
                <nav className="section-container py-6 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-base text-espresso-800 hover:text-clay-500 hover:bg-beige-100 py-3 px-4 rounded-lg transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-4 mt-2 border-t border-beige-200">
                        <a
                            href="https://calendly.com/talentmucho/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="btn-primary w-full text-center"
                        >
                            Book a Call
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
