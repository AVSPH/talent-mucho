"use client";

import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const ALLOWED_EMAILS = ["hello@abiemaxey.com", "hello@talentmucho.com"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "ok" | "denied">("loading");
  const [deniedEmail, setDeniedEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data }) => {
      if (!data.session) {
        router.replace("/admin/login");
        return;
      }
      const email = data.session.user.email ?? "";
      if (ALLOWED_EMAILS.includes(email)) {
        setStatus("ok");
      } else {
        setDeniedEmail(email);
        setStatus("denied");
        await supabase.auth.signOut();
      }
    });
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
        <p style={{ margin: 0, fontSize: 12 }}>{deniedEmail} is not an authorized admin</p>
        <a href="/admin/login" style={{ marginTop: 8, fontSize: 12, color: "#C4A882", textDecoration: "underline" }}>Back to login</a>
      </div>
    );
  }

  return <>{children}</>;
}
