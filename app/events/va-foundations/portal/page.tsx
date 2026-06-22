import type { Metadata } from "next";
import PortalClient from "./PortalClient";

export const metadata: Metadata = {
  title: "Participant Portal | VA Foundations Workshop",
  description: "Lesson-by-lesson access for VA Foundations Workshop participants.",
  robots: { index: false, follow: false },
};

export default function VAFoundationsPortalPage() {
  return <PortalClient />;
}
