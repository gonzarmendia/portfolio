export type ProjectCategory = "FILM" | "MARKETING";

export type ProjectCredit = {
  label: string;
  value: string;
};

export type ProjectStill = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: number;
  role: string;
  client?: string;
  duration?: string;
  description: string;
  thumbnail: string;
  thumbnailAlt: string;
  previewVideo?: string;
  fullVideo?: string;
  credits?: readonly ProjectCredit[];
  stills?: readonly ProjectStill[];
  isDemo: boolean;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    slug: "open-country",
    title: "OPEN COUNTRY",
    category: "FILM",
    year: 2026,
    role: "DIRECTOR / EDITOR",
    description:
      "A slow drive through a wide-open landscape, following the quiet pull of the road as day gives way to evening.",
    thumbnail: "/images/works-open-country.png",
    thumbnailAlt: "A vintage car paused beside a remote desert road at dusk.",
    isDemo: true,
  },
  {
    slug: "still-form",
    title: "STILL FORM",
    category: "MARKETING",
    year: 2026,
    role: "DIRECTOR / EDITOR",
    description:
      "A measured study of light, material and everyday ritual, composed as a restrained visual story.",
    thumbnail: "/images/works-still-form.png",
    thumbnailAlt: "A clear glass vessel lit against a dark stone surface.",
    isDemo: true,
  },
  {
    slug: "low-tide",
    title: "LOW TIDE",
    category: "FILM",
    year: 2026,
    role: "DIRECTOR / EDITOR",
    description:
      "At the water's edge, a solitary figure moves through a spare meditation on scale, weather and distance.",
    thumbnail: "/images/works-low-tide.png",
    thumbnailAlt: "A lone figure stands on a rocky shoreline beneath a pale overcast sky.",
    isDemo: true,
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getProjectIndex(slug: string) {
  return portfolioProjects.findIndex((project) => project.slug === slug);
}

export function formatSceneNumber(index: number) {
  return `SC. ${String(index + 1).padStart(2, "0")}`;
}

export function formatProjectCount(count: number) {
  return String(count).padStart(2, "0");
}

export function getSceneLabel(index: number) {
  return `${formatSceneNumber(index)} / ${formatProjectCount(portfolioProjects.length)}`;
}

export function getSceneRange() {
  return `${formatProjectCount(1)} — ${formatProjectCount(portfolioProjects.length)}`;
}

export function projectHref(slug: string) {
  return `/works/${slug}`;
}

export function getProjectNavigation(slug: string) {
  const index = getProjectIndex(slug);

  return {
    previous: index > 0 ? portfolioProjects[index - 1] : undefined,
    next:
      index >= 0 && index < portfolioProjects.length - 1
        ? portfolioProjects[index + 1]
        : undefined,
  };
}
