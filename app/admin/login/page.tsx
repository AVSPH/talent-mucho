"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const ADMIN_PIN = "9191";

const C = {
  bg: "#2A2520",
  card: "rgba(255,255,255,0.04)",
  border: "rgba(250,248,245,0.10)",
  borderStrong: "rgba(196,168,130,0.35)",
  clay: "#C4A882",
  text: "#FAF8F5",
  muted: "rgba(250,248,245,0.50)",
};

export default function AdminLoginPage() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [shake, setShake] = useState(false);
  const [error, setError] = useState("");
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const router = useRouter();

  function handleDigit(i: number, val: string) {
    if (!/^\d?$/.test(val)) return;
    const next = [...pin];
    next[i] = val;
    setPin(next);
    setError("");

    if (val && i < 3) refs[i + 1].current?.focus();

    if (val && i === 3) {
      const entered = [...next.slice(0, 3), val].join("");
      if (entered === ADMIN_PIN) {
        sessionStorage.setItem("admin_pin_auth", "ok");
        router.replace("/admin/dashboard");
      } else {
        setShake(true);
        setError("Wrong PIN");
        setTimeout(() => {
          setPin(["", "", "", ""]);
          setShake(false);
          refs[0].current?.focus();
        }, 600);
      }
    }
  }

  function handleKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !pin[i] && i > 0) {
      refs[i - 1].current?.focus();
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-manrope), sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(0deg,rgba(196,168,130,0.06) 0,rgba(196,168,130,0.06) 1px,transparent 1px,transparent 56px),repeating-linear-gradient(90deg,rgba(196,168,130,0.06) 0,rgba(196,168,130,0.06) 1px,transparent 1px,transparent 56px)`, pointerEvents: "none" }} />

      <div style={{ position: "relative", width: "100%", maxWidth: 360, padding: "0 24px" }}>
        <div style={{ background: C.card, backdropFilter: "blur(12px)", border: `1px solid ${C.borderStrong}`, borderRadius: 20, padding: "52px 40px", textAlign: "center" }}>

          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.clay, marginBottom: 12 }}>
            Talent Mucho
          </p>
          <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, fontWeight: 300, color: C.text, margin: "0 0 6px", lineHeight: 1 }}>
            Admin
          </h1>
          <p style={{ fontSize: 13, color: C.muted, margin: "0 0 40px" }}>
            Instructors only
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginBottom: 24,
              animation: shake ? "shake 0.4s ease" : "none",
            }}
          >
            {pin.map((d, i) => (
              <input
                key={i}
                ref={refs[i]}
                type="password"
                inputMode="numeric"
                maxLength={1}
                value={d}
                autoFocus={i === 0}
                onChange={(e) => handleDigit(i, e.target.value)}
                onKeyDown={(e) => handleKey(i, e)}
                style={{
                  width: 56,
                  height: 64,
                  textAlign: "center",
                  fontSize: 24,
                  fontFamily: "var(--font-cormorant), serif",
                  fontWeight: 400,
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${d ? C.clay : C.border}`,
                  borderRadius: 12,
                  color: C.text,
                  outline: "none",
                  transition: "border-color 0.2s",
                  caretColor: "transparent",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = C.clay)}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = pin[i] ? C.clay : C.border)
                }
              />
            ))}
          </div>

          {error ? (
            <p style={{ fontSize: 13, color: "#e07070", margin: 0 }}>{error}</p>
          ) : (
            <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>Enter 4-digit PIN</p>
          )}
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: C.muted, marginTop: 24 }}>
          Authorized instructors only
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
