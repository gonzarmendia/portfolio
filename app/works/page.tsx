import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";

import { WorksSectionNav } from "@/components/works/works-section-nav";
import { FilmmakingSection } from "@/components/works/filmmaking-section";
import { MarketingSection } from "@/components/works/marketing-section";
import { filmmakingProjects, marketingSections } from "@/config/works";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected projects and collaborations in filmmaking and marketing.",
};

export default function WorksPage() {
  return (
    <div className="works-shell">
      <SiteHeader currentPath="/works" />
      <main className="works-page">
        {/* ── Hero ── */}
        <section className="works-page__hero" aria-labelledby="works-title">
          <div>
            <p className="works-page__eyebrow">SELECTED WORKS / 2022—2026</p>
            <h1 id="works-title" className="works-page__title">
              Images
              <span>that move.</span>
            </h1>
          </div>
          <div className="works-page__hero-copy">
            <span className="works-page__index">03 — 03</span>
            <p>Films shaped by emotions, directions and movements told through the visual language.</p>
            <span className="works-page__arrow" aria-hidden="true">↓</span>
          </div>
        </section>

        {/* ── Category Nav (Filmmaking / Marketing) ── */}
        <div className="works-page__nav-wrap">
          <WorksSectionNav />
        </div>




        {/* ── Filmmaking Section ── */}
        <FilmmakingSection projects={filmmakingProjects} />

        {/* ── Marketing Section ── */}
        <MarketingSection sections={marketingSections} />
      </main>
    </div>
  );
}
