export const siteConfig = {
  personal: {
    firstName: "Gonzalo",
    lastName: "Arzamendia",
    subtitle: "FILM | MARKETING",
  },
  description:
    "A cinematic portfolio for an independent filmmaker and creative professional.",
  // Set this to the canonical production URL to enable absolute social image URLs.
  siteUrl: "",
  navigation: [
    { label: "WORKS", href: "/works" },
    { label: "CONTACT", href: "/contact" },
    { label: "ABOUT ME", href: "/about" },
  ],
  showreel: {
    // Add your compressed MP4 to public/videos, then set this to its public path.
    videoSrc: null as string | null,
    // Generated placeholder only; replace with a still from your own showreel.
    posterSrc: "/images/showreel-poster.png",
  },
  contact: {
    email: "gonzalonicolas98@hotmail.com",
    socialLinks: [
      { label: "Instagram", href: "https://www.instagram.com/gonzarmendia" },
    ] as ReadonlyArray<{ label: string; href: string }>,
  },
  curriculumUrl:
    "https://drive.google.com/file/d/1fUxVlw7cFmAvoGs2q6veWWq5LBynWidE/view?usp=sharing",
  placeholders: {
    works: "Selected work will appear here. Add your project details when ready.",
    contact:
      "Add your preferred contact details in config/site.ts when you are ready.",
    about: "Add a short biography in config/site.ts when you are ready.",
  },
} as const;

export const displayName = `${siteConfig.personal.firstName} ${siteConfig.personal.lastName}`;

export const portfolioTitle = `${displayName} — ${siteConfig.personal.subtitle}`;

export const siteUrlPaths = {
  home: "/",
  works: "/works",
  contact: "/contact",
  about: "/about",
  curriculum:
    "https://drive.google.com/file/d/1fUxVlw7cFmAvoGs2q6veWWq5LBynWidE/view?usp=sharing",
} as const;

export type PortfolioPath =
  (typeof siteUrlPaths)[keyof typeof siteUrlPaths];

export type PlaceholderPageKey = "works" | "contact" | "about";

export const placeholderPages: Record<
  PlaceholderPageKey,
  { title: string; message: string; path: PortfolioPath }
> = {
  works: {
    title: "WORKS",
    message: siteConfig.placeholders.works,
    path: siteUrlPaths.works,
  },
  contact: {
    title: "CONTACT",
    message: siteConfig.placeholders.contact,
    path: siteUrlPaths.contact,
  },
  about: {
    title: "ABOUT ME",
    message: siteConfig.placeholders.about,
    path: siteUrlPaths.about,
  },
};

