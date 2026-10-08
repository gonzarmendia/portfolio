import type { Metadata } from "next";
import { CurriculumViewer } from "@/components/about/about-page";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "Curriculum and professional background for Gonzalo Arzamendia.",
};

export default function CurriculumPage() {
  return (
    <div className="about-shell">
      <SiteHeader currentPath="/about" />
      <CurriculumViewer />
    </div>
  );
}
