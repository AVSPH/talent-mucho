"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "ok" | "denied">("loading");
  const router = useRouter();

  useEffect(() => {
    const pin = sessionStorage.getItem("admin_pin_auth");
    if (pin === "ok") {
      setStatus("ok");
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

  if (status === "denied") return null;

  return <>{children}</>;
}
