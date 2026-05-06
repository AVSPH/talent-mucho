"use client";

import { useState } from "react";
import { PLAYBOOK, FREE_SESSION, type SessionNote, type SalesSession } from "./playbook-data";

const C = {
  bg: "#2A2520",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(250,248,245,0.08)",
  borderStrong: "rgba(196,168,130,0.25)",
  clay: "#C4A882",
  text: "#FAF8F5",
  muted: "rgba(250,248,245,0.50)",
  dim: "rgba(250,248,245,0.30)",
  green: "rgba(90,122,107,0.80)",
  greenBg: "rgba(90,122,107,0.12)",
  red: "rgba(180,80,80,0.80)",
  redBg: "rgba(180,80,80,0.10)",
  amber: "rgba(196,168,130,0.80)",
};

const AGENDA_COLORS: Record<string, string> = {
  build: C.green,
  sell: C.clay,
  buffer: C.muted,
  open: "rgba(130,160,196,0.80)",
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
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.muted, marginBottom: 6 }}>
        <span>Teach: {teach} min</span>
        <span>Build: {build} min</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, overflow: "hidden", background: "rgba(255,255,255,0.08)", display: "flex" }}>
        <div style={{ width: `${tp}%`, background: C.clay, opacity: 0.7 }} />
        <div style={{ width: `${100 - tp}%`, background: C.green }} />
      </div>
    </div>
  );
}

function Sec({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.clay, marginBottom: 12 }}>
        {title}
      </p>
      {children}
    </div>
  );
}

// ── Bootcamp session detail ──────────────────────────────────────────
function SessionDetail({ s }: { s: SessionNote }) {
  return (
    <div style={{ color: C.text, fontFamily: "var(--font-manrope), sans-serif" }}>
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

      <Sec title="Roles this session">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[{ name: "Abie", note: s.roles.abie }, { name: "Mary", note: s.roles.mary }].map(r => (
            <div key={r.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.clay, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>{r.name}</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.5 }}>{r.note}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec title="Opening (read or paraphrase)">
        <div style={{ background: "rgba(196,168,130,0.06)", border: `1px solid ${C.borderStrong}`, borderRadius: 10, padding: "16px 18px" }}>
          <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{s.opening}</p>
        </div>
      </Sec>

      <Sec title="Lecture talking points">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.talkingPoints.map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: C.clay, marginTop: 3, fontSize: 8 }}>●</span>
              <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>{pt}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec title="Live demo — step by step">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.demo.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.clay, minWidth: 20, marginTop: 1 }}>{i + 1}</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6 }}>{step}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec title="Common blocks + rescue prompts">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.blocks.map((b, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#e07070", margin: "0 0 6px" }}>"{b.problem}"</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.5 }}>→ {b.fix}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec title="Homework brief — read aloud at end">
        <div style={{ background: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 10, padding: "16px 18px" }}>
          {s.homeworkBrief.map((line, i) => (
            <p key={i} style={{ fontSize: i === 0 ? 12 : 14, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? C.green : C.text, margin: i === 0 ? "0 0 10px" : "0 0 6px", lineHeight: 1.6 }}>
              {line}
            </p>
          ))}
        </div>
      </Sec>
    </div>
  );
}

// ── Free session (sales event) detail ───────────────────────────────
function SalesDetail({ s }: { s: SalesSession }) {
  return (
    <div style={{ color: C.text, fontFamily: "var(--font-manrope), sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <Badge color="#e07070">Sales Event</Badge>
          <span style={{ fontSize: 12, color: C.muted }}>{s.date} · {s.totalMin} min</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 30, fontWeight: 300, color: C.text, margin: "0 0 8px", lineHeight: 1.1 }}>
          {s.title}
        </h2>
        <p style={{ fontSize: 14, color: C.clay, margin: 0, fontStyle: "italic" }}>{s.tagline}</p>
      </div>

      {/* Agenda */}
      <Sec title="Session agenda">
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {s.agenda.map((block, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.dim, minWidth: 36 }}>{block.time}</span>
              <div style={{ width: 3, height: 28, borderRadius: 2, background: AGENDA_COLORS[block.type], flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: C.text, margin: "0 0 2px" }}>{block.label}</p>
              </div>
              <span style={{ fontSize: 11, color: C.muted, whiteSpace: "nowrap" }}>{block.duration}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
          {Object.entries({ build: "Build", sell: "Sell", open: "Open Q&A", buffer: "Logistics" }).map(([k, v]) => (
            <div key={k} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: AGENDA_COLORS[k] }} />
              <span style={{ fontSize: 11, color: C.dim }}>{v}</span>
            </div>
          ))}
        </div>
      </Sec>

      {/* Roles */}
      <Sec title="Roles">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[{ name: "Abie", note: s.roles.abie }, { name: "Mary", note: s.roles.mary }].map(r => (
            <div key={r.name} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "12px 14px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.clay, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 6px" }}>{r.name}</p>
              <p style={{ fontSize: 13, color: C.muted, margin: 0, lineHeight: 1.5 }}>{r.note}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Pre-session prep */}
      <Sec title="Before the session — prep checklist">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.preBuild.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ color: C.clay, marginTop: 2, fontSize: 14 }}>□</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Build steps */}
      <Sec title="Live build — step by step (0:05–0:45)">
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {s.buildSteps.map((step, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: C.clay, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px" }}>
                Step {i + 1} — {step.step.split("(")[0].trim()}
              </p>
              <p style={{ fontSize: 13, color: C.text, margin: "0 0 8px", lineHeight: 1.7, fontStyle: "italic", background: "rgba(196,168,130,0.06)", borderRadius: 8, padding: "10px 12px" }}>
                {step.script}
              </p>
              {step.tip && (
                <p style={{ fontSize: 12, color: C.amber, margin: 0, lineHeight: 1.5 }}>
                  ★ {step.tip}
                </p>
              )}
            </div>
          ))}
        </div>
      </Sec>

      {/* Transition to pitch */}
      <Sec title="Transition script — from build to bootcamp sell (1:00)">
        <div style={{ background: "rgba(196,168,130,0.08)", border: `1px solid ${C.borderStrong}`, borderRadius: 10, padding: "18px 20px" }}>
          <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>{s.transitionScript}</p>
        </div>
      </Sec>

      {/* Pitch points */}
      <Sec title="Pitch talking points (say all of these)">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.pitchPoints.map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: C.card, border: `1px solid ${C.border}`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ color: C.clay, marginTop: 3, fontSize: 8 }}>●</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{pt}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Objections */}
      <Sec title="Objection handling (Q&A 1:20–1:40)">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {s.objections.map((o, i) => (
            <div key={i} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#e07070", margin: "0 0 8px" }}>"{o.objection}"</p>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{o.response}</p>
            </div>
          ))}
        </div>
      </Sec>

      {/* Closing script */}
      <Sec title="Closing script — read this word for word (1:40)">
        <div style={{ background: C.redBg, border: `1px solid ${C.red}`, borderRadius: 10, padding: "18px 20px" }}>
          <p style={{ fontSize: 14, color: C.text, margin: 0, lineHeight: 1.8, fontStyle: "italic" }}>{s.closingScript}</p>
        </div>
      </Sec>

      {/* Urgency mechanics */}
      <Sec title="Urgency mechanics — do all of these">
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.urgencyMechanics.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: C.redBg, border: `1px solid ${C.red}20`, borderRadius: 8, padding: "10px 14px" }}>
              <span style={{ color: C.red, marginTop: 3, fontSize: 8 }}>●</span>
              <p style={{ fontSize: 13, color: C.text, margin: 0, lineHeight: 1.6 }}>{m}</p>
            </div>
          ))}
        </div>
      </Sec>
    </div>
  );
}

// ── Session card (sidebar) ───────────────────────────────────────────
function SessionCard({ label, sub, active, onClick }: { label: string; sub: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ width: "100%", textAlign: "left", background: active ? "rgba(196,168,130,0.10)" : C.card, border: `1px solid ${active ? C.clay + "50" : C.border}`, borderRadius: 12, padding: "14px 16px", cursor: "pointer", transition: "all 0.15s", marginBottom: 6 }}>
      <p style={{ fontSize: 13, fontWeight: 600, color: active ? C.text : C.muted, margin: "0 0 3px", lineHeight: 1.3 }}>{label}</p>
      <p style={{ fontSize: 11, color: C.dim, margin: 0 }}>{sub}</p>
    </button>
  );
}

// ── Main ─────────────────────────────────────────────────────────────
export default function PlaybookClient() {
  const [tab, setTab] = useState<"bootcamp" | "sales">("sales");
  const [active, setActive] = useState(0);

  const tabStyle = (t: string) => ({
    padding: "8px 18px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    background: tab === t ? "rgba(196,168,130,0.12)" : "transparent",
    border: `1px solid ${tab === t ? C.clay + "50" : C.border}`,
    borderRadius: 100,
    color: tab === t ? C.clay : C.muted,
    cursor: "pointer",
    transition: "all 0.15s",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: C.bg, fontFamily: "var(--font-manrope), sans-serif" }}>
      {/* Playbook sidebar */}
      <div style={{ width: 260, flexShrink: 0, borderRight: `1px solid ${C.border}`, display: "flex", flexDirection: "column" }}>
        {/* Tab toggle */}
        <div style={{ padding: "16px 14px 12px", borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.clay, margin: "0 0 10px" }}>
            Instructor Playbook
          </p>
          <div style={{ display: "flex", gap: 6 }}>
            {(["sales", "bootcamp"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  flex: 1,
                  padding: "6px 0",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: tab === t ? "rgba(196,168,130,0.12)" : "transparent",
                  border: `1px solid ${tab === t ? C.clay + "50" : C.border}`,
                  borderRadius: 6,
                  color: tab === t ? C.clay : C.muted,
                  cursor: "pointer",
                  transition: "all 0.15s",
                  fontFamily: "var(--font-manrope), sans-serif",
                }}
              >
                {t === "sales" ? "Sales" : "Sessions"}
              </button>
            ))}
          </div>
        </div>

        {/* Session list */}
        <div style={{ flex: 1, padding: "14px 10px", overflowY: "auto" }}>
          {tab === "sales" ? (
            <>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.dim, margin: "0 0 8px 4px" }}>Live Events</p>
              <SessionCard label={FREE_SESSION.title} sub={FREE_SESSION.date} active={true} onClick={() => {}} />
            </>
          ) : (
            <>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.dim, margin: "0 0 8px 4px" }}>Sessions</p>
              {PLAYBOOK.map((s, i) => (
                <SessionCard key={i} label={`${s.num} · ${s.title}`} sub={s.date} active={active === i} onClick={() => setActive(i)} />
              ))}
            </>
          )}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0, padding: "32px 40px", overflowY: "auto" }}>
        <div style={{ maxWidth: 800 }}>
          {tab === "sales" ? <SalesDetail s={FREE_SESSION} /> : <SessionDetail s={PLAYBOOK[active]} />}
        </div>
      </div>
    </div>
  );
}
