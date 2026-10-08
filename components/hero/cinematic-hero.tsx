import { displayName, siteUrlPaths } from "@/config/site";
import { CinematicBackdrop } from "@/components/hero/cinematic-backdrop";
import { HeroIntro } from "@/components/hero/hero-intro";
import { SiteHeader } from "@/components/layout/site-header";

export function CinematicHero() {
  return (
    <main
      className="cinematic-hero"
      aria-label={`${displayName} portfolio landing page`}
    >
      <CinematicBackdrop showVideo />
      <SiteHeader currentPath={siteUrlPaths.home} />
      <HeroIntro />
    </main>
  );
}
