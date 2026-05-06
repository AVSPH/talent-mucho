"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ALLOWED_EMAILS = ["hello@abiemaxey.com", "hello@talentmucho.com"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "ok" | "denied">("loading");
  const [deniedEmail, setDeniedEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const email = sessionStorage.getItem("admin_auth") ?? "";
    if (ALLOWED_EMAILS.includes(email)) {
      setStatus("ok");
    } else if (email) {
      setDeniedEmail(email);
      setStatus("denied");
    } else {
      router.replace("/admin/login");
    }
  }, [router]);

  if (status === "loading") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#2A2520", color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-manrope)", fontSize: 14 }}>
        Loading...
      </div>
    );
  }

  if (status === "denied") {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#2A2520", color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-manrope)", fontSize: 14, flexDirection: "column", gap: 8 }}>
        <p style={{ margin: 0, color: "#e07070" }}>Access denied</p>
        <p style={{ margin: 0, fontSize: 12 }}>{deniedEmail} is not authorized</p>
        <a href="/admin/login" style={{ marginTop: 8, fontSize: 12, color: "#C4A882", textDecoration: "underline" }}>Back to login</a>
      </div>
    );
  }

  return <>{children}</>;
}
