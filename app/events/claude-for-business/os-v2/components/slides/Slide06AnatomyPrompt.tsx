"use client";

import type { SlideProps } from "../../types";

const PARTS = [
  {
    label: "Role",
    color: "#7C9E72",
    tagline: "Tell Claude who to be.",
    desc: "Sets the persona, expertise, and tone before you ask anything.",
    examples: ["You are my senior marketing editor.", "Act as a UX copywriter.", "You are an experienced recruiter."],
  },
  {
    label: "Task",
    color: "#C9A84C",
    tagline: "Tell Claude what to do.",
    desc: "One clear action. The more specific, the better the output.",
    examples: ["Rewrite the hook on this LinkedIn post.", "Summarise this meeting into 5 bullets.", "Draft a follow-up email."],
  },
  {
    label: "Format",
    color: "#6A9FAF",
    tagline: "Tell Claude how to respond.",
    desc: "Specify structure so you don't have to ask twice.",
    examples: ["Give me 3 versions, each under 100 words.", "Bullet points only.", "One short paragraph."],
  },
  {
    label: "Constraints",
    color: "#9B7FB6",
    tagline: "Tell Claude what to avoid.",
    desc: "Guardrails that keep the output on brand and on point.",
    examples: ["No buzzwords.", "Sound like a human, not a press release.", "No em dashes."],
  },
] as const;

const EXAMPLE = {
  role: "You are my senior marketing editor.",
  task: "Rewrite the hook on this LinkedIn post to be more punchy.",
  format: "Give me 3 versions, each under 100 words.",
  constraints: "No buzzwords. Sound like a human.",
};

export function AnatomyPromptVisual({
  C,
  mono,
  sans,
  serif,
  scale = 1,
}: SlideProps) {
  const sz = (px: number) => Math.round(px * scale);

  return (
    <div style={{ maxWidth: 1400, margin: "0 auto" }}>
      {/* 4 cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: sz(16),
          marginBottom: sz(28),
        }}
      >
        {PARTS.map((part, i) => (
          <div
            key={part.label}
            style={{
              borderRadius: sz(18),
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              background: C.surface,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* coloured label bar */}
            <div
              style={{
                background: part.color,
                padding: `${sz(12)}px ${sz(20)}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  ...mono,
                  fontSize: sz(13),
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#FAF8F5",
                }}
              >
                {part.label}
              </span>
              <span
                style={{
                  ...mono,
                  fontSize: sz(11),
                  color: "rgba(250,248,245,0.6)",
                  letterSpacing: "0.08em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* body */}
            <div
              style={{
                padding: `${sz(20)}px ${sz(20)}px`,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: sz(12),
              }}
            >
              <div
                style={{
                  ...sans,
                  fontSize: sz(17),
                  fontWeight: 700,
                  color: C.text,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                }}
              >
                {part.tagline}
              </div>
              <div
                style={{
                  ...serif,
                  fontSize: sz(14),
                  color: C.muted,
                  lineHeight: 1.6,
                }}
              >
                {part.desc}
              </div>

              {/* examples */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: sz(6),
                  marginTop: "auto",
                }}
              >
                {part.examples.map((ex) => (
                  <div
                    key={ex}
                    style={{
                      padding: `${sz(8)}px ${sz(10)}px`,
                      borderRadius: sz(8),
                      background: `${part.color}12`,
                      border: `1px solid ${part.color}30`,
                      ...mono,
                      fontSize: sz(12),
                      color: C.text,
                      lineHeight: 1.45,
                    }}
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* example row */}
      <div
        style={{
          borderRadius: sz(18),
          border: `1px solid ${C.border}`,
          background: C.text,
          overflow: "hidden",
        }}
      >
        {/* label bar */}
        <div
          style={{
            padding: `${sz(12)}px ${sz(24)}px`,
            borderBottom: `1px solid rgba(250,248,245,0.1)`,
            display: "flex",
            alignItems: "center",
            gap: sz(12),
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
            Example ~ put it together
          </span>
        </div>

        {/* 4 parts inline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}
        >
          {(
            [
              { key: "role", value: EXAMPLE.role, part: PARTS[0] },
              { key: "task", value: EXAMPLE.task, part: PARTS[1] },
              { key: "format", value: EXAMPLE.format, part: PARTS[2] },
              { key: "constraints", value: EXAMPLE.constraints, part: PARTS[3] },
            ] as const
          ).map((item, i) => (
            <div
              key={item.key}
              style={{
                padding: `${sz(18)}px ${sz(20)}px`,
                borderRight:
                  i < 3 ? `1px solid rgba(250,248,245,0.08)` : "none",
                position: "relative",
              }}
            >
              {/* "+" connector ~ between cards */}
              {i < 3 && (
                <span
                  style={{
                    position: "absolute",
                    right: sz(-10),
                    top: "50%",
                    transform: "translateY(-50%)",
                    ...mono,
                    fontSize: sz(16),
                    color: C.primary,
                    fontWeight: 700,
                    zIndex: 1,
                  }}
                >
                  +
                </span>
              )}

              <div
                style={{
                  ...mono,
                  fontSize: sz(10),
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: item.part.color,
                  marginBottom: sz(8),
                }}
              >
                {item.part.label}
              </div>
              <div
                style={{
                  ...serif,
                  fontSize: sz(15),
                  lineHeight: 1.55,
                  color: "rgba(250,248,245,0.9)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{item.value}&rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
