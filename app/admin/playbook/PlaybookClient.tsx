"use client";

import { useState } from "react";
import { PLAYBOOK, type SessionNote } from "./playbook-data";

const C = {
  bg: "#2A2520",
  card: "rgba(255,255,255,0.04)",
  cardHover: "rgba(255,255,255,0.07)",
  border: "rgba(250,248,245,0.08)",
  borderStrong: "rgba(196,168,130,0.25)",
  clay: "#C4A882",
  text: "#FAF8F5",
  muted: "rgba(250,248,245,0.50)",
  dim: "rgba(250,248,245,0.30)",
  green: "rgba(90,122,107,0.80)",
  greenBg: "rgba(90,122,107,0.12)",
};

function Badge({ children, color = C.clay }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color, background: `${color}18`, border: `1px solid ${color}30`, borderRadius: 100, padding: "3px 10px" }}>
      {children}
    </span>
  );
}

function Bar({ teach, build }: { teach: number; build: number }) {
  const total = teach + build;
  const tp = Math.round((teach / total) * 100);
  const bp = 100 - tp;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.muted, marginBottom: 6 }}>
        <span>Teach: {teach} min</span>
        <span>Build: {build} min</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, overflow: "hidden", background: "rgba(255,255,255,0.08)", display: "flex" }}>
        <div style={{ width: `${tp}%`, background: C.clay, opacity: 0.7 }} />
        <div style={{ width: `${bp}%`, background: C.green }} />
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.clay, marginBottom: 12 }}>
        {title}
      </p>
      {children}
    </div>
  );
}

function SessionCard({ s, active, onClick }: { s: SessionNote; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        textAlign: "left",
        background: active ? "rgba(196,168,130,0.10)" : C.card,
        border: `1px solid ${active ? C.clay + "50" : C.border}`,
        borderRadius: 12,
        padding: "14px 16px",
        cursor: "pointer",
        transition: "all 0.15s",
        marginBottom: 6,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: active ? C.clay : C.dim, letterSpacing: "0.1em", minWidth: 50 }}>{s.num}</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: active ? C.text : C.muted, margin: 0, lineHeight: 1.3 }}>{s.title}</p>
          <p style={{ fontSize: 11, color: C.dim, margin: "2px 0 0", lineHeight: 1 }}>{s.date}</p>
        </div>
      </div>
    </button>
  );
}

function Detail({ s }: { s: SessionNote }) {
  return (
    <div style={{ color: C.text, fontFamily: "var(--font-manrope), sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Badge>{s.num}</Badge>
          <span style={{ fontSize: 12, color: C.muted }}>{s.date}</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 32, fontWeight: 300, color: C.text, margin: "0 0 16px", lineHeight: 1.1 }}>
          {s.title}
        </h2>
        <Bar teach={s.teachMin} build={s.buildMin} />
      </div>

      {/* Roles */}
      <Section title="Roles this session">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[{ name: "Abie", note: s.roles.abie }, { name: "Mary", note: s.roles.mary }].map(r => (
            <div key={r.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.clay, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>{r.name}</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.5 }}>{r.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Opening */}
      <Section title="Opening (read or paraphrase)">
        <div style={{ background: "rgba(196,168,130,0.06)", border: `1px solid ${C.borderStrong}`, borderRadius: 10, padding: "16px 18px" }}>
          <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.opening}</p>
        </div>
      </Section>

      {/* Talking points */}
      <Section title="Lecture talking points">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.talkingPoints.map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: C.clay, marginTop: 3, fontSize: 8 }}>●</span>
              <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>{pt}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Demo */}
      <Section title="Live demo — step by step">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.demo.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.clay, minWidth: 20, marginTop: 1 }}>{i + 1}</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6 }}>{step}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Common blocks */}
      <Section title="Common blocks + rescue prompts">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.blocks.map((b, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#e07070", margin: "0 0 6px" }}>"{b.problem}"</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.5 }}>→ {b.fix}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Homework brief */}
      <Section title="Homework brief — read aloud at end">
        <div style={{ background: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 10, padding: "16px 18px" }}>
          {s.homeworkBrief.map((line, i) => (
            <p key={i} style={{ fontSize: i === 0 ? 12 : 14, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? C.green : C.text, margin: i === 0 ? "0 0 10px" : "0 0 6px", lineHeight: 1.6 }}>
              {line}
            </p>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default function PlaybookClient() {
  const [active, setActive] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: "var(--font-manrope), sans-serif" }}>
      {/* Top nav */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="/admin/dashboard" style={{ fontSize: 12, color: C.muted, textDecoration: "none" }}>← Dashboard</a>
          <span style={{ color: C.border }}>|</span>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.clay, margin: 0 }}>Instructor Playbook</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Badge>Cohort 1</Badge>
          <Badge color="#5A7A6B">9 Sessions</Badge>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", minHeight: "calc(100vh - 57px)" }}>
        {/* Sidebar */}
        <div style={{ borderRight: `1px solid ${C.border}`, padding: "24px 16px", overflowY: "auto" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.dim, margin: "0 0 12px 4px" }}>Sessions</p>
          {PLAYBOOK.map((s, i) => (
            <SessionCard key={i} s={s} active={active === i} onClick={() => setActive(i)} />
          ))}

          <div style={{ marginTop: 24, padding: "0 4px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.dim, margin: "0 0 10px" }}>Quick links</p>
            {[
              { label: "Members curriculum", href: "/events/bootcamp/inside" },
              { label: "Bootcamp page", href: "/events/bootcamp" },
              { label: "Skool community", href: "https://www.skool.com/future-proof-with-ai-4339/about?ref=1d469fcf6dfe460c8c681c23ea85a7a7" },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{ display: "block", fontSize: 12, color: C.muted, textDecoration: "none", marginBottom: 8, padding: "6px 8px", borderRadius: 6, border: `1px solid transparent` }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = C.border)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
                {l.label} →
              </a>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div style={{ padding: "32px 40px", overflowY: "auto", maxWidth: 800 }}>
          <Detail s={PLAYBOOK[active]} />
        </div>
      </div>
    </div>
  );
}
