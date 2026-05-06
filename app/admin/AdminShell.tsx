"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ExternalLink,
  LogOut,
  Lock,
  Users,
  CalendarDays,
} from "lucide-react";

const C = {
  nav: "#1E1B18",
  border: "rgba(250,248,245,0.07)",
  clay: "#C4A882",
  text: "#FAF8F5",
  muted: "rgba(250,248,245,0.45)",
  active: "rgba(196,168,130,0.10)",
};

const NAV = [
  {
    label: "Main",
    items: [
      { icon: LayoutDashboard, label: "Overview", href: "/admin/dashboard" },
      { icon: BookOpen, label: "Playbook", href: "/admin/playbook" },
    ],
  },
  {
    label: "Cohort 1",
    items: [
      { icon: CalendarDays, label: "Members area", href: "/events/bootcamp/inside", external: true },
      { icon: Users, label: "Skool community", href: "https://www.skool.com/future-proof-with-ai-4339/about?ref=1d469fcf6dfe460c8c681c23ea85a7a7", external: true },
    ],
  },
  {
    label: "Public",
    items: [
      { icon: ExternalLink, label: "Bootcamp page", href: "/events/bootcamp", external: true },
      { icon: Lock, label: "Homepage", href: "/", external: true },
    ],
  },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  function signOut() {
    sessionStorage.removeItem("admin_pin_auth");
    router.replace("/admin/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left nav */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          background: C.nav,
          borderRight: `1px solid ${C.border}`,
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        {/* Brand */}
        <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.clay, margin: 0 }}>
            Talent Mucho
          </p>
          <p style={{ fontSize: 12, color: C.muted, margin: "3px 0 0" }}>Admin</p>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 10px", overflowY: "auto" }}>
          {NAV.map((section) => (
            <div key={section.label} style={{ marginBottom: 22 }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.muted, margin: "0 0 6px 8px", opacity: 0.6 }}>
                {section.label}
              </p>
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = !item.external && pathname === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.external ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 9,
                      padding: "8px 10px",
                      borderRadius: 8,
                      marginBottom: 2,
                      background: active ? C.active : "transparent",
                      border: `1px solid ${active ? C.clay + "35" : "transparent"}`,
                      color: active ? C.clay : C.muted,
                      textDecoration: "none",
                      fontSize: 13,
                      fontWeight: active ? 600 : 400,
                      fontFamily: "var(--font-manrope), sans-serif",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                        e.currentTarget.style.color = C.text;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = C.muted;
                      }
                    }}
                  >
                    <Icon size={14} strokeWidth={1.8} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                    {item.external && (
                      <ExternalLink size={10} style={{ opacity: 0.35, flexShrink: 0 }} />
                    )}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Sign out */}
        <div style={{ padding: "12px 10px", borderTop: `1px solid ${C.border}` }}>
          <button
            onClick={signOut}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 10px",
              width: "100%",
              background: "transparent",
              border: "none",
              borderRadius: 8,
              color: C.muted,
              fontSize: 13,
              fontFamily: "var(--font-manrope), sans-serif",
              cursor: "pointer",
              transition: "all 0.15s",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e07070";
              e.currentTarget.style.background = "rgba(180,80,80,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <LogOut size={14} strokeWidth={1.8} />
            Sign out
          </button>
        </div>
      </aside>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0, overflow: "auto" }}>
        {children}
      </div>
    </div>
  );
}
