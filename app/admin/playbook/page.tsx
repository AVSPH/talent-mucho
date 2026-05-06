import { Metadata } from "next";
import AuthGuard from "../dashboard/auth-guard";
import AdminShell from "../AdminShell";
import PlaybookClient from "./PlaybookClient";

export const metadata: Metadata = {
  title: "Instructor Playbook · Cohort 1",
  robots: { index: false, follow: false },
};

export default function PlaybookPage() {
  return (
    <AuthGuard>
      <AdminShell>
        <PlaybookClient />
      </AdminShell>
    </AuthGuard>
  );
}
