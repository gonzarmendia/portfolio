import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutRoute() {
  return (
    <div className="about-shell">
      <SiteHeader currentPath="/about" />
      <AboutPage />
    </div>
  );
}
