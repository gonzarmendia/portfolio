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

export const projects = [
  {
    slug: "open-country",
    title: "Open Country",
    category: "FILM",
    year: 2026,
    role: "Filmmaking · Editing",
    description:
      "DEMO COPY — A road-film study of distance, stillness, and the moment before a journey begins. Replace this with the actual project description.",
    thumbnail: "/images/works-open-country.png",
    thumbnailAlt:
      "A dark classic car stopped on an empty desert highway beneath a clouded dusk sky.",
    isDemo: true,
  },
  {
    slug: "still-form",
    title: "Still Form",
    category: "MARKETING",
    year: 2026,
    role: "Filmmaking · Editing",
    description:
      "DEMO COPY — A considered product-film concept shaped around light, material, and the quiet details of an everyday object. Replace this with the real brief and project details.",
    thumbnail: "/images/works-still-form.png",
    thumbnailAlt:
      "A single clear glass on a dark stone surface, lit by warm light from the side.",
    isDemo: true,
  },
  {
    slug: "low-tide",
    title: "Low Tide",
    category: "FILM",
    year: 2026,
    role: "Filmmaking · Editing",
    description:
      "DEMO COPY — A coastal film study built from weather, water, and a solitary figure moving through the landscape. Replace this with the actual story and creative approach.",
    thumbnail: "/images/works-low-tide.png",
    thumbnailAlt:
      "A solitary figure standing among dark coastal rocks beside a mist-covered sea.",
    isDemo: true,
  },
] satisfies readonly PortfolioProject[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSceneNumber(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return index === -1 ? undefined : String(index + 1).padStart(2, "0");
}

export function getProjectNavigation(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 ? projects[index + 1] : undefined,
  };
}

export function getProjectsYearLabel() {
  return String(
    projects.reduce((latestYear, project) => Math.max(latestYear, project.year), 0),
  );
}

export function getDemoProjectCount() {
  return projects.filter((project) => project.isDemo).length;
}

export function getProjectCountLabel() {
  return String(projects.length).padStart(2, "0");
}

export function hasDemoProjects() {
  return projects.some((project) => project.isDemo);
}

export function getProjectDemoCopy() {
  return projects.find((project) => project.isDemo)?.isDemo ?? false;
}

export function getProjectNavigationLinks(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
