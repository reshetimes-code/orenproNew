import type { Metadata } from "next";
import AppRedirect from "./AppRedirect";

export const metadata: Metadata = {
  title: "STANNEL BUSINESS CLUB - הורדת האפליקציה",
  description: "הורדת אפליקציית STANNEL BUSINESS CLUB ל-iPhone.",
  alternates: { canonical: "/stannel-app" },
  robots: { index: false, follow: true },
};

export default function StannelAppPage() {
  return <AppRedirect />;
}
