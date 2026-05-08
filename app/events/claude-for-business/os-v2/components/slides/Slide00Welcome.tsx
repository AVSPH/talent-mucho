"use client";

import { useState, useEffect, useCallback } from "react";
import type { SlideProps, Palette } from "../../types";
import type { Segment } from "../../config";
import communityData from "@/data/community-combined.json";

const WELCOME_CITIES = [
  "👋 Maria from Madrid",
  "✨ Sarah from London",
  "🌴 Jobell from Cebu",
  "☕ Marcus from Berlin",
  "🌊 Lisa from Lisbon",
  "🍁 Anna from Toronto",
  "🦘 Tom from Sydney",
  "🌅 Priya from Mumbai",
  "⚡ Diego from Buenos Aires",
  "🌸 Yuki from Tokyo",
  "🌵 Carlos from Mexico City",
  "🍷 Sophie from Paris",
];

const EVENT_START_LOCAL = "2026-05-08T16:00:00+02:00";
// Update this as the session progresses (0-indexed: 5 = segments 00-05 done, next is 06)
const DONE_THROUGH = 5;

// ── WelcomeInteractive ────────────────────────────────────────────────────────

export function WelcomeInteractive({
  C,
  mono,
  sans,
  serif,
  scale = 1,
  segments,
  timerSecs,
  currentSegIdx = 0,
}: SlideProps & {
  segments: Segment[];
  timerSecs: number;
  currentSegIdx?: number;
}) {
  const [now, setNow] = useState(Date.now());
  const [cityIdx, setCityIdx] = useState(0);
  const [revealedPromises, setRevealedPromises] = useState(0);
  const onDark = "#FAF8F5";
  const sz = (px: number) => Math.round(px * scale);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setCityIdx((i) => (i + 1) % WELCOME_CITIES.length),
      2500,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setRevealedPromises(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setRevealedPromises(i);
      if (i < 3) setTimeout(tick, 800);
    };
    const initial = setTimeout(tick, 600);
    return () => clearTimeout(initial);
  }, []);

  const eventStartMs = new Date(EVENT_START_LOCAL).getTime();
  const msToEvent = eventStartMs - now;
  const isLive = msToEvent <= 0;

  const days = Math.max(0, Math.floor(msToEvent / 86400000));
  const hours = Math.max(0, Math.floor((msToEvent % 86400000) / 3600000));
  const minutes = Math.max(0, Math.floor((msToEvent % 3600000) / 60000));
  const seconds = Math.max(0, Math.floor((msToEvent % 60000) / 1000));

  const fmtLiveTime = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div style={{ maxWidth: 1500, margin: "24px auto 0" }}>
      {/* Countdown / Live clock */}
      <div
        style={{
          background: C.text,
          color: onDark,
          borderRadius: 24,
          padding: "40px 36px",
          marginBottom: 36,
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 28px 56px -16px ${C.text}40`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-20%",
            width: "60%",
            height: "180%",
            background: `radial-gradient(ellipse, ${C.primary}30 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                ...mono,
                fontSize: sz(12),
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {isLive ? (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "#ff5e5e",
                      animation: "pulse 1.4s ease-in-out infinite",
                      boxShadow: "0 0 16px #ff5e5e",
                    }}
                  />
                  Live now
                </>
              ) : (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      width: 22,
                      height: 1,
                      background: C.primary,
                    }}
                  />
                  We go live in
                </>
              )}
            </div>
            {isLive ? (
              <>
                <div
                  style={{
                    ...sans,
                    fontSize: sz(72),
                    fontWeight: 800,
                    color: onDark,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {fmtLiveTime(timerSecs)}
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(18),
                    color: "rgba(250,248,245,0.65)",
                  }}
                >
                  Workshop time remaining
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: sz(14),
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { val: days, label: "days" },
                    { val: hours, label: "hours" },
                    { val: minutes, label: "min" },
                    { val: seconds, label: "sec" },
                  ].map((u, i) => (
                    <div
                      key={u.label}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: sz(72),
                      }}
                    >
                      <div
                        style={{
                          ...sans,
                          fontSize: sz(72),
                          fontWeight: 800,
                          color: i === 3 ? C.primary : onDark,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {String(u.val).padStart(2, "0")}
                      </div>
                      <div
                        style={{
                          ...mono,
                          fontSize: sz(11),
                          fontWeight: 700,
                          color: "rgba(250,248,245,0.5)",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          marginTop: 6,
                        }}
                      >
                        {u.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(18),
                    color: "rgba(250,248,245,0.65)",
                    marginTop: 16,
                  }}
                >
                  May 8th · 4 PM CEST · grab a drink, get comfy
                </div>
              </>
            )}
          </div>

          {/* Live cities feed */}
          <div
            style={{
              minWidth: 280,
              padding: "18px 22px",
              borderRadius: 14,
              background: "rgba(250,248,245,0.06)",
              border: `1px solid rgba(250,248,245,0.12)`,
              position: "relative",
            }}
          >
            <div
              style={{
                ...mono,
                fontSize: sz(10),
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.primary,
                marginBottom: 10,
              }}
            >
              Drop your city in chat
            </div>
            <div
              style={{
                ...serif,
                fontSize: sz(13),
                color: "rgba(250,248,245,0.6)",
                marginBottom: 12,
              }}
            >
              We&apos;re from everywhere tonight ~
            </div>
            <div
              style={{
                minHeight: sz(28),
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                key={cityIdx}
                style={{
                  ...sans,
                  fontSize: sz(18),
                  fontWeight: 600,
                  color: onDark,
                  letterSpacing: "-0.01em",
                  animation: "fadeInUp 0.4s ease",
                }}
              >
                {WELCOME_CITIES[cityIdx]}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join the workbook ~ after countdown */}
      <div
        style={{
          marginTop: 20,
          padding: "22px 28px",
          borderRadius: 18,
          background: C.surface,
          border: `1px solid ${C.border}`,
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            flexShrink: 0,
            width: sz(120),
            height: sz(120),
            borderRadius: 12,
            background: "#FFFFFF",
            padding: 6,
            border: `1px solid ${C.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent("https://menti.talentmucho.com/join/KER8G6")}`}
            alt="QR code to workbook"
            width={sz(108)}
            height={sz(108)}
            style={{ display: "block", imageRendering: "pixelated" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              ...mono,
              fontSize: sz(13),
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: C.primary,
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ display: "inline-block", width: 18, height: 1, background: C.primary }} />
            Join the workbook
          </div>
          <div style={{ ...serif, fontSize: sz(16), color: C.muted, marginBottom: 14, lineHeight: 1.5 }}>
            Scan to answer live ~ your responses appear on screen
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div>
              <div style={{ ...mono, fontSize: sz(10), color: C.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Enter code at</div>
              <div style={{ ...mono, fontSize: sz(12), color: C.text, letterSpacing: "0.04em", padding: "5px 10px", borderRadius: 7, background: `${C.primary}10`, border: `1px solid ${C.border}`, display: "inline-block" }}>
                menti.talentmucho.com/join
              </div>
            </div>
            <div>
              <div style={{ ...mono, fontSize: sz(10), color: C.muted, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Code</div>
              <div style={{ ...mono, fontSize: sz(28), fontWeight: 800, color: C.text, letterSpacing: "0.12em" }}>KER8G6</div>
            </div>
          </div>
        </div>
      </div>

      {/* Two-column: Pain points + Agenda */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
        {/* Pain point word cloud */}
        {(() => {
          const STOP = new Set([
            "i","my","the","a","an","and","or","to","of","in","for","with","is","are","it","that","this","but","on","at","as","be","was","not","have","do","how","more","get","can","so","we","our","their","they","you","your","us","by","from","just","very","all","what","when","which","about","some","there","too","no","dont","im","its","ive","been","want","need","time","make","use","know","like","would","could","should","also","still","will","has","had","up","out","one","if","than","then","into","only","really","much","many","way","any","who","even","me","him","she","her","them",
          ]);
          const freq: Record<string, number> = {};
          communityData.members.forEach((m: { painPoint: string }) => {
            if (!m.painPoint || m.painPoint.length < 5) return;
            m.painPoint.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/).forEach((w: string) => {
              if (w.length > 3 && !STOP.has(w)) freq[w] = (freq[w] || 0) + 1;
            });
          });
          const words = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 40);
          const max = words[0]?.[1] ?? 1;
          const min = words[words.length - 1]?.[1] ?? 1;
          const fsize = (n: number) => sz(Math.round(11 + ((n - min) / Math.max(max - min, 1)) * 18));
          return (
            <div
              style={{
                padding: "28px 30px",
                borderRadius: 18,
                background: C.surface,
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                style={{
                  ...mono,
                  fontSize: sz(13),
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: C.primary,
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span style={{ display: "inline-block", width: 22, height: 1, background: C.primary }} />
                What you told us
              </div>
              <div style={{ ...serif, fontSize: sz(16), color: C.muted, marginBottom: 20, lineHeight: 1.5 }}>
                Your pain points ~ from your onboarding answers.
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 14px", alignItems: "center", lineHeight: 1.4 }}>
                {words.map(([word, count]) => (
                  <span
                    key={word}
                    style={{
                      ...sans,
                      fontSize: fsize(count),
                      fontWeight: count >= max * 0.6 ? 700 : count >= max * 0.35 ? 600 : 400,
                      color: count >= max * 0.6 ? C.text : count >= max * 0.35 ? C.primary : C.muted,
                      opacity: 0.55 + (count / max) * 0.45,
                      cursor: "default",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Agenda */}
        <div
          style={{
            padding: "28px 30px",
            borderRadius: 18,
            background: C.surface,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: sz(13),
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: C.primary,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 22,
                height: 1,
                background: C.primary,
              }}
            />
            Tonight&apos;s agenda
          </div>
          <div
            style={{
              ...serif,
              fontSize: sz(18),
              color: C.muted,
              marginBottom: 22,
              lineHeight: 1.5,
            }}
          >
            Two hours. Nine beats. No filler.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {segments.map((s, i) => {
              const isDone = i <= DONE_THROUGH;
              const isCurrent = i === DONE_THROUGH + 1;
              return (
                <div
                  key={s.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 12,
                    alignItems: "center",
                    padding: "10px 12px",
                    borderRadius: 10,
                    background: isCurrent ? `${C.primary}15` : "transparent",
                    border: `1px solid ${isCurrent ? `${C.primary}40` : "transparent"}`,
                    opacity: isDone ? 0.4 : 1,
                  }}
                >
                  <div
                    style={{
                      width: sz(28),
                      height: sz(28),
                      flexShrink: 0,
                      borderRadius: "50%",
                      background: isCurrent ? C.primary : isDone ? `${C.muted}30` : `${C.muted}15`,
                      color: isCurrent
                        ? C.text === "#2A2520" ? onDark : C.bg
                        : C.muted,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 800,
                    }}
                  >
                    {isDone ? "✓" : s.num}
                  </div>
                  <div
                    style={{
                      ...sans,
                      fontSize: sz(15),
                      fontWeight: 600,
                      color: isDone ? C.muted : C.text,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                    {s.titleItalic && !isDone && (
                      <>
                        {" "}
                        <em style={{ ...serif, fontWeight: 400, color: C.primary }}>
                          {s.titleItalic}
                        </em>
                      </>
                    )}
                  </div>
                  <div
                    style={{
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 600,
                      color: C.muted,
                      letterSpacing: "0.06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {!isDone && s.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.15); } }
      `}</style>
    </div>
  );
}

// ── LocationCloud ─────────────────────────────────────────────────────────────

export function LocationCloud({ C, mono, sans, serif, scale = 1 }: SlideProps) {
  const sz = (px: number) => Math.round(px * scale);
  const [locations, setLocations] = useState<Record<string, number>>({});
  const [fresh, setFresh] = useState<Set<string>>(new Set());

  const mergeLocation = useCallback(
    (text: string, existing: Record<string, number>) => {
      const loc = text
        .trim()
        .replace(/[^\p{L}\p{N}\s,.-]/gu, "")
        .replace(/\s+/g, " ");
      if (!loc || loc.length < 2) return { updated: existing, added: "" };
      const key = loc.charAt(0).toUpperCase() + loc.slice(1);
      const updated = { ...existing, [key]: (existing[key] || 0) + 1 };
      return { updated, added: existing[key] ? "" : key };
    },
    [],
  );

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { supabase } = await import("@/lib/supabase-browser");
      const { data: rows } = await supabase
        .from("workbook_responses")
        .select("response_text")
        .eq("segment_num", "00");
      if (!cancelled && rows) {
        let freq: Record<string, number> = {};
        for (const r of rows) {
          const { updated } = mergeLocation(r.response_text, freq);
          freq = updated;
        }
        setLocations(freq);
      }
      const ch = supabase
        .channel("loc-cloud-00")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "workbook_responses",
            filter: "segment_num=eq.00",
          },
          (payload: { new: { response_text: string } }) => {
            if (cancelled) return;
            setLocations((prev) => {
              const { updated, added } = mergeLocation(
                payload.new.response_text,
                prev,
              );
              if (added) {
                setFresh(new Set([added]));
                setTimeout(() => setFresh(new Set()), 2000);
              }
              return updated;
            });
          },
        )
        .subscribe();
      return () => {
        cancelled = true;
        supabase.removeChannel(ch);
      };
    };
    let cleanup: (() => void) | undefined;
    init().then((fn) => {
      cleanup = fn;
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [mergeLocation]);

  const sorted = Object.entries(locations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 60);
  const maxFreq = sorted[0]?.[1] || 1;
  const brandColors = [C.primary, C.text, C.muted, C.primaryHover ?? C.primary];

  if (sorted.length === 0) return null;

  return (
    <div
      style={{
        maxWidth: 1500,
        margin: "26px auto 0",
        padding: "28px 30px",
        borderRadius: 18,
        background: C.surface,
        border: `1px solid ${C.border}`,
      }}
    >
      <div
        style={{
          ...mono,
          fontSize: sz(13),
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: C.primary,
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: 22,
            height: 1,
            background: C.primary,
          }}
        />
        Where you&apos;re joining from
      </div>
      <div
        style={{
          ...serif,
          fontSize: sz(15),
          color: C.muted,
          marginBottom: 18,
          lineHeight: 1.5,
        }}
      >
        {sorted.reduce((s, [, n]) => s + n, 0)} response
        {sorted.reduce((s, [, n]) => s + n, 0) !== 1 ? "s" : ""} from{" "}
        {sorted.length} location{sorted.length !== 1 ? "s" : ""} ~ updating live
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 16px",
          alignItems: "baseline",
          minHeight: sz(60),
        }}
      >
        {sorted.map(([loc, freq], i) => {
          const ratio = freq / maxFreq;
          const size = sz(15 + Math.round(ratio * 30));
          const isNew = fresh.has(loc);
          return (
            <span
              key={loc}
              style={{
                ...sans,
                fontSize: size,
                fontWeight: ratio > 0.6 ? 700 : ratio > 0.3 ? 600 : 400,
                color: brandColors[i % brandColors.length],
                opacity: 0.45 + ratio * 0.55,
                transition: "all 0.5s ease",
                animation: isNew ? "locFadeIn 0.6s ease" : undefined,
                lineHeight: 1.4,
              }}
            >
              {loc}
            </span>
          );
        })}
      </div>
      <style>{`@keyframes locFadeIn { from { opacity: 0; transform: scale(0.7); } to { opacity: 1; transform: scale(1); } }`}</style>
    </div>
  );
}

// ── CommunityPulse ────────────────────────────────────────────────────────────

export function CommunityPulse({
  C,
  mono,
  sans,
  serif,
  scale = 1,
}: SlideProps) {
  const stats = communityData.stats;
  const members = communityData.members;
  const onDark = "#FAF8F5";
  const sz = (px: number) => Math.round(px * scale);

  const [revealed, setRevealed] = useState(0);
  const [animCount, setAnimCount] = useState(0);
  const [activePain, setActivePain] = useState<number | null>(null);

  useEffect(() => {
    setRevealed(0);
    let i = 0;
    const tick = () => {
      i += 1;
      setRevealed(i);
      if (i < 5) setTimeout(tick, 600);
    };
    setTimeout(tick, 400);
  }, []);

  useEffect(() => {
    const target = stats.total;
    const duration = 1800;
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [stats.total]);

  const painEntries = Object.entries(
    stats.byPainCategory as Record<string, number>,
  )
    .filter(([k]) => k !== "No Answer" && k !== "Unspecified" && k.toLowerCase() !== "other")
    .sort((a, b) => b[1] - a[1]);
  const painTotal = painEntries.reduce((sum, [, v]) => sum + v, 0);
  const painMax = painEntries[0]?.[1] || 1;

  const aiEntries = Object.entries(stats.byAILevel as Record<string, number>)
    .filter(([k]) => k !== "Unknown")
    .sort((a, b) => b[1] - a[1]);
  const aiTotal = aiEntries.reduce((sum, [, v]) => sum + v, 0);

  const painColors = [
    C.primary,
    C.text,
    C.muted,
    `${C.primary}cc`,
    `${C.text}bb`,
    `${C.muted}cc`,
    `${C.primary}99`,
    `${C.text}88`,
    `${C.muted}88`,
    `${C.primary}66`,
  ];

  return (
    <div style={{ maxWidth: 1500, margin: "36px auto 0" }}>
      {/* Hero stat */}
      <div
        style={{
          background: C.text,
          color: onDark,
          borderRadius: sz(24),
          padding: `${sz(40)}px ${sz(36)}px`,
          marginBottom: sz(28),
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 28px 56px -16px ${C.text}40`,
          opacity: revealed >= 1 ? 1 : 0,
          transform: revealed >= 1 ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 48px)",
          }}
        />
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: sz(28) }}>
          {/* Left: count + label + CTA */}
          <div style={{ flex: 1 }}>
            <div style={{ ...mono, fontSize: sz(11), fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" as const, color: C.primary, marginBottom: sz(12) }}>
              Your community ~ right now
            </div>
            <div style={{ ...serif, fontSize: sz(88), fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1, color: onDark }}>
              536+
            </div>
            <div style={{ ...mono, fontSize: sz(13), letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "rgba(250,248,245,0.5)", marginTop: sz(10) }}>
              members on Skool
            </div>
            <div style={{ ...serif, fontSize: sz(18), color: "rgba(250,248,245,0.65)", marginTop: sz(18), lineHeight: 1.5, maxWidth: sz(340) }}>
              Scan to join ~ it&apos;s free. Ask questions, share wins, get early access to everything we build.
            </div>
          </div>
          {/* Right: QR code */}
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: sz(12) }}>
            <div style={{ background: "#FFFFFF", borderRadius: sz(14), padding: sz(10), border: "2px solid rgba(255,255,255,0.15)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent("https://www.skool.com/future-proof-with-ai-4339/about?ref=1d469fcf6dfe460c8c681c23ea85a7a7")}&margin=0&color=2A2520&bgcolor=FFFFFF`}
                alt="Join the Skool community"
                width={sz(160)}
                height={sz(160)}
                style={{ display: "block", imageRendering: "pixelated" }}
              />
            </div>
            <div style={{ ...mono, fontSize: sz(10), color: "rgba(250,248,245,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" as const, textAlign: "center" }}>
              skool.com/future-proof-with-ai-4339
            </div>
          </div>
        </div>
      </div>

      {/* Pain points + AI experience ~ two column */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: sz(20),
          marginBottom: sz(28),
          opacity: revealed >= 2 ? 1 : 0,
          transform: revealed >= 2 ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            background: C.surface,
            borderRadius: sz(20),
            padding: `${sz(28)}px ${sz(30)}px`,
            border: `1px solid ${C.border}`,
          }}
        >
        <div
          style={{
            ...mono,
            fontSize: sz(11),
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: C.primary,
            marginBottom: sz(6),
            display: "flex",
            alignItems: "center",
            gap: sz(10),
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: sz(22),
              height: 1,
              background: C.primary,
            }}
          />
          What keeps them up at night
        </div>
        <div
          style={{
            ...serif,
            fontSize: sz(18),
            color: C.muted,
            marginBottom: sz(22),
          }}
        >
          Self-reported pain points from Skool onboarding
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: sz(10) }}>
          {painEntries.map(([key, count], i) => {
            const pct = (count / painMax) * 100;
            const isActive = activePain === i;
            return (
              <div
                key={key}
                onClick={() => setActivePain(isActive ? null : i)}
                style={{ cursor: "pointer", transition: "all 0.2s" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: sz(4),
                  }}
                >
                  <span
                    style={{
                      ...sans,
                      fontSize: sz(15),
                      fontWeight: 600,
                      color: isActive ? C.primary : C.text,
                    }}
                  >
                    {key}
                  </span>
                  <span
                    style={{
                      ...mono,
                      fontSize: sz(12),
                      color: C.muted,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {((count / painTotal) * 100).toFixed(0)}%
                  </span>
                </div>
                <div
                  style={{
                    height: sz(8),
                    borderRadius: sz(4),
                    background: `${C.surface2}`,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: sz(4),
                      background: painColors[i] || C.primary,
                      width: revealed >= 2 ? `${pct}%` : "0%",
                      transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                    }}
                  />
                </div>
                {isActive && (
                  <div
                    style={{
                      ...serif,
                      fontSize: sz(13),
                      color: C.muted,
                      marginTop: sz(6),
                      paddingLeft: sz(4),
                    }}
                  >
                    {count} members need help with {key.toLowerCase()} ~ prime
                    mentoring opportunity
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </div>
        <div
          style={{
            background: C.surface,
            borderRadius: sz(20),
            padding: `${sz(28)}px ${sz(30)}px`,
            border: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              ...mono,
              fontSize: sz(11),
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: C.primary,
              marginBottom: sz(6),
              display: "flex",
              alignItems: "center",
              gap: sz(10),
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: sz(22),
                height: 1,
                background: C.primary,
              }}
            />
            AI experience levels
          </div>
          <div
            style={{
              ...serif,
              fontSize: sz(16),
              color: C.muted,
              marginBottom: sz(20),
            }}
          >
            Where they are on their AI journey
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: sz(12) }}
          >
            {aiEntries.map(([level, count], i) => {
              const pct = aiTotal > 0 ? (count / aiTotal) * 100 : 0;
              return (
                <div
                  key={level}
                  style={{ display: "flex", alignItems: "center", gap: sz(12) }}
                >
                  <div
                    style={{
                      width: sz(100),
                      ...sans,
                      fontSize: sz(13),
                      fontWeight: 500,
                      color: C.text,
                      flexShrink: 0,
                    }}
                  >
                    {level}
                  </div>
                  <div
                    style={{
                      flex: 1,
                      height: sz(6),
                      borderRadius: sz(3),
                      background: C.surface2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        borderRadius: sz(3),
                        background: C.primary,
                        width: revealed >= 3 ? `${pct}%` : "0%",
                        transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.12}s`,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      ...mono,
                      fontSize: sz(12),
                      color: C.muted,
                      width: sz(40),
                      textAlign: "right" as const,
                    }}
                  >
                    {count}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

        {false && <div
          style={{
            background: C.text,
            color: onDark,
            borderRadius: sz(20),
            padding: `${sz(28)}px ${sz(30)}px`,
            position: "relative",
            overflow: "hidden",
            boxShadow: `0 16px 32px -10px ${C.text}30`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 48px)",
            }}
          />
          <div style={{ position: "relative" }}>
            <div
              style={{
                ...mono,
                fontSize: sz(11),
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase" as const,
                color: C.primary,
                marginBottom: sz(18),
                display: "flex",
                alignItems: "center",
                gap: sz(10),
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: sz(22),
                  height: 1,
                  background: C.primary,
                }}
              />
              The opportunity
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: sz(20) }}
            >
              <div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(42),
                    fontWeight: 300,
                    color: C.primary,
                    lineHeight: 1,
                  }}
                >
                  {(
                    (stats.ghlOnly / (stats.ghlOnly + stats.both)) *
                    100
                  ).toFixed(0)}
                  %
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(16),
                    color: "rgba(250,248,245,0.7)",
                    marginTop: sz(6),
                  }}
                >
                  of your GHL leads haven&apos;t joined Skool yet
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(42),
                    fontWeight: 300,
                    color: C.primary,
                    lineHeight: 1,
                  }}
                >
                  {painEntries[0]?.[0]}
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(16),
                    color: "rgba(250,248,245,0.7)",
                    marginTop: sz(6),
                  }}
                >
                  is the #1 pain point ~ {painEntries[0]?.[1]} members need help
                  here
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                }}
              />
              <div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(42),
                    fontWeight: 300,
                    color: C.primary,
                    lineHeight: 1,
                  }}
                >
                  {aiEntries[0]?.[0]}
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(16),
                    color: "rgba(250,248,245,0.7)",
                    marginTop: sz(6),
                  }}
                >
                  is the most common AI level ~ {aiEntries[0]?.[1]} members
                </div>
              </div>
            </div>
          </div>
        </div>}

      {/* Mentor track */}
      <div
        style={{
          background: C.surface,
          borderRadius: sz(20),
          padding: `${sz(28)}px ${sz(30)}px`,
          border: `1px solid ${C.border}`,
          marginTop: sz(28),
          opacity: revealed >= 4 ? 1 : 0,
          transform: revealed >= 4 ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: sz(11),
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: C.primary,
            marginBottom: sz(18),
            display: "flex",
            alignItems: "center",
            gap: sz(10),
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: sz(22),
              height: 1,
              background: C.primary,
            }}
          />
          Tonight&apos;s workshop is built for you
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: sz(14),
          }}
        >
          {[
            {
              track: "The Curious Beginner",
              letter: "A",
              pct: "~30%",
              desc: 'No biz yet, never used AI. We\'ll teach "What is Claude?" with zero jargon.',
              color: `${C.primary}20`,
            },
            {
              track: "The Hustler",
              letter: "B",
              pct: "~38%",
              desc: "Side biz, beginner AI. Email templates, content batching, DM scripts.",
              color: `${C.primary}30`,
            },
            {
              track: "The Operator",
              letter: "C",
              pct: "~18%",
              desc: "Uses Claude regularly. SOPs, report gen, data analysis.",
              color: `${C.primary}40`,
            },
            {
              track: "The Builder",
              letter: "D",
              pct: "~9%",
              desc: "Technical users. Claude API, agents, MCP, automations.",
              color: `${C.primary}50`,
            },
          ].map((t) => (
            <div
              key={t.letter}
              style={{
                padding: `${sz(20)}px ${sz(18)}px`,
                borderRadius: sz(14),
                background: t.color,
                border: `1px solid ${C.border}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: sz(8),
                  marginBottom: sz(10),
                }}
              >
                <span
                  style={{
                    width: sz(24),
                    height: sz(24),
                    borderRadius: sz(6),
                    background: C.primary,
                    color: onDark,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ...mono,
                    fontSize: sz(11),
                    fontWeight: 800,
                  }}
                >
                  {t.letter}
                </span>
                <span
                  style={{
                    ...mono,
                    fontSize: sz(10),
                    fontWeight: 700,
                    color: C.muted,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {t.pct}
                </span>
              </div>
              <div
                style={{
                  ...sans,
                  fontSize: sz(15),
                  fontWeight: 700,
                  color: C.text,
                  marginBottom: sz(6),
                  letterSpacing: "-0.01em",
                }}
              >
                {t.track}
              </div>
              <div
                style={{
                  ...serif,
                  fontSize: sz(13),
                  color: C.muted,
                  lineHeight: 1.5,
                }}
              >
                {t.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
