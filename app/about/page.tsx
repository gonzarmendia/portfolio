import type { Metadata } from "next";
import { placeholderPages } from "@/config/site";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const page = placeholderPages.about;

  return (
    <PortfolioPlaceholderPage
      currentPath={page.path}
      title={page.title}
      message={page.message}
    />
  );
}
