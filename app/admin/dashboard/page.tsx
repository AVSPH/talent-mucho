import { Metadata } from "next";
import CommunityDashboard from "./community-dashboard";
import communityData from "@/data/community-combined.json";
import AuthGuard from "./auth-guard";
import AdminShell from "../AdminShell";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: "noindex, nofollow",
};

export default function AdminDashboardPage() {
  return (
    <AuthGuard>
      <AdminShell>
        <CommunityDashboard data={communityData} />
      </AdminShell>
    </AuthGuard>
  );
}
