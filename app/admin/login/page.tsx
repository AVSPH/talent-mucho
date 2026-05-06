"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function signInWithGoogle() {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/admin/auth/callback`,
      },
    });
    if (error) {
      setError(error.message);
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
        <div
          style={{
            background: C.card,
            backdropFilter: "blur(12px)",
            border: `1px solid ${C.borderStrong}`,
            borderRadius: 20,
            padding: "52px 40px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
          }}
        >
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: C.clay,
              margin: "0 0 10px",
            }}
          >
            Talent Mucho
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 36,
              fontWeight: 300,
              color: C.text,
              margin: "0 0 6px",
              lineHeight: 1,
            }}
          >
            Admin
          </h1>
          <p style={{ fontSize: 13, color: C.muted, margin: "0 0 40px" }}>
            Sign in to access the instructor area
          </p>

          <button
            onClick={signInWithGoogle}
            disabled={loading}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "13px 20px",
              background: "rgba(255,255,255,0.08)",
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              color: C.text,
              fontSize: 14,
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "all 0.15s",
              opacity: loading ? 0.7 : 1,
              marginBottom: error ? 16 : 0,
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                e.currentTarget.style.borderColor = C.clay + "55";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = C.border;
              }
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
                fill="#EA4335"
              />
            </svg>
            {loading ? "Redirecting to Google..." : "Continue with Google"}
          </button>

          {error && (
            <p style={{ fontSize: 12, color: "#e07070", margin: 0 }}>{error}</p>
          )}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            color: C.muted,
            marginTop: 24,
            opacity: 0.6,
          }}
        >
          Authorized instructors only
        </p>
      </div>
    </div>
  );
}
