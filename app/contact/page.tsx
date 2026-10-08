import type { Metadata } from "next";
import { placeholderPages } from "@/config/site";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const page = placeholderPages.contact;

  return (
    <PortfolioPlaceholderPage
      currentPath={page.path}
      title={page.title}
      message={page.message}
    />
  );
}
