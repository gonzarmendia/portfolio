import { siteConfig, type PortfolioPath } from "@/config/site";
import { CinematicBackdrop } from "@/components/hero/cinematic-backdrop";
import { SiteHeader } from "@/components/layout/site-header";

type PortfolioPlaceholderPageProps = {
  currentPath: PortfolioPath;
  title: string;
  message: string;
};

export function PortfolioPlaceholderPage({
  currentPath,
  title,
  message,
}: PortfolioPlaceholderPageProps) {
  const contactEmail = siteConfig.contact.email;
  const displayedMessage =
    currentPath === "/contact" && contactEmail
      ? "For inquiries, get in touch at the address below."
      : message;

  return (
    <main className="portfolio-placeholder" aria-label={`${title} page`}>
      <CinematicBackdrop />
      <SiteHeader currentPath={currentPath} />
      <section
        className="portfolio-placeholder__content"
        aria-labelledby="placeholder-title"
      >
        <p className="portfolio-placeholder__eyebrow">PORTFOLIO</p>
        <h1 id="placeholder-title" className="portfolio-placeholder__title">
          {title}
        </h1>
        <p className="portfolio-placeholder__message">{displayedMessage}</p>
        {currentPath === "/contact" && contactEmail ? (
          <a
            className="portfolio-placeholder__email"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
        ) : null}
      </section>
    </main>
  );
}
