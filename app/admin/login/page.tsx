"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ADMINS: Record<string, string> = {
  "hello@abiemaxey.com": "tm2028",
  "hello@talentmucho.com": "tm2028",
};

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const expected = ADMINS[email.toLowerCase().trim()];
    if (expected && expected === password) {
      sessionStorage.setItem("admin_auth", email.toLowerCase().trim());
      router.replace("/admin/dashboard");
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-manrope), sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg,rgba(196,168,130,0.06) 0,rgba(196,168,130,0.06) 1px,transparent 1px,transparent 56px),repeating-linear-gradient(90deg,rgba(196,168,130,0.06) 0,rgba(196,168,130,0.06) 1px,transparent 1px,transparent 56px)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", width: "100%", maxWidth: 380, padding: "0 24px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            background: C.card,
            backdropFilter: "blur(12px)",
            border: `1px solid ${C.borderStrong}`,
            borderRadius: 20,
            padding: "52px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 8 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.clay, margin: "0 0 10px" }}>
              Talent Mucho
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, fontWeight: 300, color: C.text, margin: "0 0 6px", lineHeight: 1 }}>
              Admin
            </h1>
            <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>
              Sign in to access the instructor area
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              placeholder="hello@talentmucho.com"
              autoComplete="email"
              required
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "11px 14px",
                color: C.text,
                fontSize: 14,
                fontFamily: "var(--font-manrope), sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = C.clay + "80")}
              onBlur={(e) => (e.currentTarget.style.borderColor = C.border)}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.muted }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(""); }}
              placeholder="••••••••"
              autoComplete="current-password"
              required
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                padding: "11px 14px",
                color: C.text,
                fontSize: 14,
                fontFamily: "var(--font-manrope), sans-serif",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = C.clay + "80")}
              onBlur={(e) => (e.currentTarget.style.borderColor = C.border)}
            />
          </div>

          {error && (
            <p style={{ fontSize: 12, color: "#e07070", margin: 0, textAlign: "center" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 4,
              padding: "13px 20px",
              background: C.clay,
              border: "none",
              borderRadius: 10,
              color: "#2A2520",
              fontSize: 14,
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "opacity 0.15s",
            }}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 12, color: C.muted, marginTop: 24, opacity: 0.6 }}>
          Authorized instructors only
        </p>
      </div>
    </div>
  );
}
