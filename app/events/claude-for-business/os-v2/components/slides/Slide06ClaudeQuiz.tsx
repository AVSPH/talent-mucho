"use client";

import { useState } from "react";
import type { SlideProps } from "../../types";

const ROUNDS = [
  {
    term: "An artifact.",
    clues: [
      "I'm a real, finished thing Claude builds.",
      "I'm not just words in a chat. I'm something you can save, share, and edit.",
      "I might be a web page, a document, a chart, or a small tool.",
    ],
    context: "A finished piece of work ~ ready to use, share, and reuse.",
  },
  {
    term: "Sonnet.",
    clues: [
      "I'm Claude's middle size. Smart and balanced.",
      "I'm the default for most everyday work ~ drafting, planning, replying.",
      "I'm named after a 14-line poem with a strict rhythm.",
    ],
    context: "The everyday workhorse. The right pick for most jobs.",
  },
  {
    term: "CoWork.",
    clues: [
      "I live inside your real apps.",
      "I read your email, your files, and your calendar.",
      "I don't just talk about work. I actually do it.",
    ],
    context: "Claude inside your real tools ~ taking action, not just answering.",
  },
  {
    term: "A Plugin.",
    clues: [
      "I'm an add-on you install to give Claude new abilities.",
      "I bring extra tools, skills, or commands that Claude doesn't have out of the box.",
      "Think of me like an app you install on a phone ~ but for Claude.",
    ],
    context: "An add-on package that extends what Claude can do. Install once, use everywhere.",
  },
  {
    term: "Haiku.",
    clues: [
      "I'm Claude's smallest size. The fastest, and cheapest to run.",
      "I'm best for quick, simple tasks where speed matters.",
      "I'm named after a very short kind of Japanese poem.",
    ],
    context: "The speedster. Pick me when speed matters more than depth.",
  },
  {
    term: "Claude.",
    clues: [
      "I live inside your computer.",
      "Type me a question and I'll read it, think about it, and write back.",
      "I'm part library, part tutor, part writing buddy.",
    ],
    context: "An AI assistant made by Anthropic.",
  },
  {
    term: "A skill.",
    clues: [
      "I'm a saved set of instructions Claude follows.",
      "Whenever the right kind of task shows up, I trigger automatically.",
      "I'm a habit, not a moment. Used many times across many chats.",
    ],
    context: "A saved habit Claude reuses every time it fits the situation.",
  },
  {
    term: "A prompt.",
    clues: [
      "I'm a single message you type to Claude.",
      "You write me fresh each time. I live in this chat only.",
      "Once Claude answers, I'm done. I'm a one-time thing.",
    ],
    context: "One message, in the moment. The everyday way you talk to Claude.",
  },
  {
    term: "Claude Code.",
    clues: [
      "I live in a coder's terminal or code editor.",
      "I read, write, and edit real software.",
      "I can run programs, fix bugs, and build whole apps. I'm made for builders.",
    ],
    context: "Claude built for developers. The version that lives where coders work.",
  },
  {
    term: "A Project.",
    clues: [
      "I'm a folder for related Claude conversations.",
      "Drop your files, notes, and instructions into me once, and every chat inside me will know about them.",
      "I help Claude remember what you're working on across many sessions.",
    ],
    context: "A workspace that holds your files and instructions, so every chat starts with the same context.",
  },
  {
    term: "Opus.",
    clues: [
      "I'm Claude's biggest size. The smartest, slowest, and priciest.",
      "I'm best for hard thinking ~ research, big writing, careful reasoning.",
      "I'm named after a grand musical or artistic work.",
    ],
    context: "The heavyweight thinker. Reach for me when the task is heavy.",
  },
  {
    term: "A Connector.",
    clues: [
      "I'm a bridge between Claude and your other apps.",
      "Hook me up once, and Claude can read your Google Drive, Gmail, calendar, or other services.",
      "I'm how Claude reaches outside its own walls and into your real tools.",
    ],
    context: "A link that lets Claude reach into your other apps. Set up once, use forever.",
  },
] as const;

export function ClaudeQuiz({
  C,
  mono,
  sans,
  serif,
  scale = 1,
}: SlideProps) {
  const sz = (px: number) => Math.round(px * scale);
  const [round, setRound] = useState(0);
  const [revealed, setRevealed] = useState(0); // 0 = no clues, 1/2/3 = clues shown, 4 = answer shown
  const [showAll, setShowAll] = useState(false);

  const current = ROUNDS[round];
  const total = ROUNDS.length;

  const goNext = () => {
    if (round < total - 1) {
      setRound(round + 1);
      setRevealed(0);
    }
  };
  const goPrev = () => {
    if (round > 0) {
      setRound(round - 1);
      setRevealed(3);
    }
  };
  const revealAnswer = () => setRevealed(4);
  const nextClue = () => {
    if (revealed < 3) setRevealed(revealed + 1);
  };

  const onDark = "#FAF8F5";

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      {/* header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: sz(28),
        }}
      >
        <div
          style={{
            ...mono,
            fontSize: sz(11),
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: C.primary,
            display: "flex",
            alignItems: "center",
            gap: sz(10),
          }}
        >
          <span style={{ display: "inline-block", width: sz(22), height: 1, background: C.primary }} />
          Round {String(round + 1).padStart(2, "0")} of {total}
        </div>

        {/* dot progress */}
        <div style={{ display: "flex", gap: sz(5), alignItems: "center" }}>
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setRound(i); setRevealed(0); }}
              style={{
                width: i === round ? sz(20) : sz(7),
                height: sz(7),
                borderRadius: sz(4),
                background: i < round ? C.primary : i === round ? C.primary : `${C.muted}40`,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            ...mono,
            fontSize: sz(10),
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: showAll ? C.primary : C.muted,
            background: "transparent",
            border: `1px solid ${showAll ? C.primary : C.border}`,
            borderRadius: sz(100),
            padding: `${sz(6)}px ${sz(14)}px`,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          {showAll ? "Hide answer key" : "Show answer key"}
        </button>
      </div>

      {!showAll ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: revealed === 4 ? "1fr 1fr" : "1fr",
            gap: sz(20),
            alignItems: "start",
          }}
        >
          {/* clues card */}
          <div
            style={{
              background: C.surface,
              borderRadius: sz(20),
              border: `1px solid ${C.border}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: `${sz(20)}px ${sz(26)}px`,
                borderBottom: `1px solid ${C.border}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  ...mono,
                  fontSize: sz(11),
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: C.primary,
                }}
              >
                Guess the name
              </span>
              <span
                style={{
                  ...mono,
                  fontSize: sz(10),
                  color: C.muted,
                  letterSpacing: "0.1em",
                }}
              >
                {Math.min(revealed, 3)}/3 clues
              </span>
            </div>

            <div style={{ padding: `${sz(24)}px ${sz(26)}px`, display: "flex", flexDirection: "column", gap: sz(14) }}>
              {current.clues.map((clue, i) => (
                <div
                  key={i}
                  style={{
                    padding: `${sz(14)}px ${sz(18)}px`,
                    borderLeft: `3px solid ${C.primary}`,
                    background: i < revealed ? `${C.primary}08` : "transparent",
                    borderRadius: `0 ${sz(10)}px ${sz(10)}px 0`,
                    opacity: i < revealed ? 1 : 0.18,
                    transition: "all 0.4s ease",
                    filter: i < revealed ? "none" : "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      ...mono,
                      fontSize: sz(9),
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: C.primary,
                      marginBottom: sz(6),
                    }}
                  >
                    Clue {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    style={{
                      ...serif,
                      fontSize: sz(18),
                      fontStyle: "italic",
                      lineHeight: 1.45,
                      color: C.text,
                    }}
                  >
                    &ldquo;{clue}&rdquo;
                  </div>
                </div>
              ))}
            </div>

            {/* action buttons */}
            <div
              style={{
                padding: `${sz(16)}px ${sz(26)}px ${sz(22)}px`,
                display: "flex",
                gap: sz(10),
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: sz(10) }}>
                {revealed < 3 && (
                  <button
                    onClick={nextClue}
                    style={{
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: `${sz(10)}px ${sz(20)}px`,
                      borderRadius: sz(100),
                      border: `1px solid ${C.primary}`,
                      background: "transparent",
                      color: C.primary,
                      cursor: "pointer",
                    }}
                  >
                    Next clue →
                  </button>
                )}
                {revealed === 3 && revealed < 4 && (
                  <button
                    onClick={revealAnswer}
                    style={{
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: `${sz(10)}px ${sz(20)}px`,
                      borderRadius: sz(100),
                      border: "none",
                      background: C.primary,
                      color: C.text === "#2A2520" ? "#FAF8F5" : C.bg,
                      cursor: "pointer",
                      boxShadow: `0 6px 16px -4px ${C.primary}60`,
                    }}
                  >
                    Reveal answer ✦
                  </button>
                )}
                {revealed >= 1 && revealed < 3 && (
                  <button
                    onClick={() => setRevealed(3)}
                    style={{
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: `${sz(10)}px ${sz(20)}px`,
                      borderRadius: sz(100),
                      border: `1px solid ${C.border}`,
                      background: "transparent",
                      color: C.muted,
                      cursor: "pointer",
                    }}
                  >
                    Show all clues
                  </button>
                )}
                {revealed === 0 && (
                  <button
                    onClick={() => setRevealed(1)}
                    style={{
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: `${sz(10)}px ${sz(20)}px`,
                      borderRadius: sz(100),
                      border: "none",
                      background: C.primary,
                      color: C.text === "#2A2520" ? "#FAF8F5" : C.bg,
                      cursor: "pointer",
                      boxShadow: `0 6px 16px -4px ${C.primary}60`,
                    }}
                  >
                    First clue →
                  </button>
                )}
              </div>

              <div style={{ display: "flex", gap: sz(8) }}>
                <button
                  onClick={goPrev}
                  disabled={round === 0}
                  style={{
                    width: sz(34),
                    height: sz(34),
                    borderRadius: "50%",
                    border: `1px solid ${C.border}`,
                    background: "transparent",
                    color: round === 0 ? C.muted : C.text,
                    cursor: round === 0 ? "not-allowed" : "pointer",
                    opacity: round === 0 ? 0.35 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: sz(14),
                  }}
                >
                  ←
                </button>
                <button
                  onClick={goNext}
                  disabled={round === total - 1}
                  style={{
                    width: sz(34),
                    height: sz(34),
                    borderRadius: "50%",
                    border: `1px solid ${C.border}`,
                    background: "transparent",
                    color: round === total - 1 ? C.muted : C.text,
                    cursor: round === total - 1 ? "not-allowed" : "pointer",
                    opacity: round === total - 1 ? 0.35 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: sz(14),
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* answer card */}
          {revealed === 4 && (
            <div
              style={{
                background: C.text,
                borderRadius: sz(20),
                overflow: "hidden",
                border: `1px solid ${C.border}`,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: `${sz(20)}px ${sz(26)}px`,
                  borderBottom: `1px solid rgba(250,248,245,0.1)`,
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
                <span
                  style={{
                    ...mono,
                    fontSize: sz(11),
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: C.primary,
                  }}
                >
                  Answer {String(round + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                style={{
                  padding: `${sz(32)}px ${sz(26)}px ${sz(36)}px`,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    ...serif,
                    fontSize: sz(16),
                    color: "rgba(250,248,245,0.55)",
                    marginBottom: sz(8),
                    fontStyle: "italic",
                  }}
                >
                  I&apos;m
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(52),
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: C.primary,
                    lineHeight: 1.0,
                    letterSpacing: "-0.02em",
                    marginBottom: sz(22),
                  }}
                >
                  {current.term}
                </div>
                <div
                  style={{
                    ...serif,
                    fontSize: sz(17),
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    color: "rgba(250,248,245,0.8)",
                  }}
                >
                  {current.context}
                </div>
              </div>

              {round < total - 1 && (
                <div style={{ padding: `${sz(16)}px ${sz(26)}px ${sz(22)}px` }}>
                  <button
                    onClick={goNext}
                    style={{
                      width: "100%",
                      ...mono,
                      fontSize: sz(11),
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: `${sz(12)}px`,
                      borderRadius: sz(100),
                      border: `1px solid rgba(250,248,245,0.2)`,
                      background: "transparent",
                      color: onDark,
                      cursor: "pointer",
                    }}
                  >
                    Next round →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        /* answer key table */
        <div
          style={{
            background: C.surface,
            borderRadius: sz(18),
            border: `1px solid ${C.border}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: C.text,
              padding: `${sz(14)}px ${sz(22)}px`,
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: sz(16),
            }}
          >
            {["Name", "What it is"].map((h) => (
              <div
                key={h}
                style={{
                  ...mono,
                  fontSize: sz(10),
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(250,248,245,0.6)",
                }}
              >
                {h}
              </div>
            ))}
          </div>
          {ROUNDS.map((r, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: sz(16),
                padding: `${sz(12)}px ${sz(22)}px`,
                borderBottom: i < ROUNDS.length - 1 ? `1px solid ${C.border}` : "none",
                background: i % 2 === 0 ? "transparent" : `${C.primary}05`,
              }}
            >
              <div
                style={{
                  ...serif,
                  fontSize: sz(16),
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: C.primary,
                }}
              >
                {r.term}
              </div>
              <div
                style={{
                  ...sans,
                  fontSize: sz(13),
                  color: C.text,
                  lineHeight: 1.5,
                }}
              >
                {r.context}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
