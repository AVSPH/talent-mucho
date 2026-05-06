import { Metadata } from "next";
import AuthGuard from "../dashboard/auth-guard";
import PlaybookClient from "./PlaybookClient";

export const metadata: Metadata = {
  title: "Instructor Playbook · Cohort 1",
  robots: { index: false, follow: false },
};

export default function PlaybookPage() {
  return (
    <AuthGuard>
      <PlaybookClient />
    </AuthGuard>
  );
}
