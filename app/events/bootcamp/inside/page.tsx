import type { Metadata } from "next";
import InsideClient from "./InsideClient";

export const metadata: Metadata = {
  title: "Inside Cohort 1",
  description: "Members-only curriculum for AI Business Bootcamp Cohort 1.",
  robots: { index: false, follow: false },
  alternates: { canonical: undefined },
};

export default function BootcampInsidePage() {
  return <InsideClient />;
}
