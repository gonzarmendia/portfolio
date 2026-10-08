import type { Metadata } from "next";
import { placeholderPages } from "@/config/site";
import { PortfolioPlaceholderPage } from "@/components/portfolio-placeholder-page";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  const page = placeholderPages.works;

  return (
    <PortfolioPlaceholderPage
      currentPath={page.path}
      title={page.title}
      message={page.message}
    />
  );
}
