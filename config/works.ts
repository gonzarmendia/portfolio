import type { WorksItem } from "@/components/works/works-grid";

export const worksItems: WorksItem[] = [
  {
    id: "open-country",
    title: "Open Country",
    subtitle: "Documentary Short",
    description:
      "A visual journey exploring untamed landscapes and the stories of those who call them home. Shot across three continents with an emphasis on natural light and cinematic storytelling.",
    thumbnail: "/images/works-open-country.png",
    href: "/works/open-country",
  },
  {
    id: "still-form",
    title: "Still Form",
    subtitle: "Commercial | Animation",
    description:
      "A 30-second product showcase combining motion design with live-action cinematography. Created for an architectural materials brand to highlight texture and craftsmanship.",
    thumbnail: "/images/works-still-form.png",
    href: "/works/still-form",
  },
  {
    id: "low-tide",
    title: "Low Tide",
    subtitle: "Music Video",
    description:
      "A moody, contemplative piece shot entirely in single-takes with minimal editing. Explores themes of solitude and reflection through water, light, and movement.",
    thumbnail: "/images/works-low-tide.png",
    href: "/works/low-tide",
  },
];

export interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  client?: string;
  year?: string;
  timeline?: string;
  description: string;
  fullDescription?: string;
  role?: string;
  results?: string;
  tools?: string[];
  videoUrl?: string;
  images?: string[];
  links?: Array<{
    label: string;
    href: string;
    target?: "_blank" | "_self";
  }>;
}

export const projectsDetails: Record<string, ProjectDetails> = {
  "open-country": {
    id: "open-country",
    title: "Open Country",
    subtitle: "Documentary Short",
    client: "Self-directed",
    year: "2024",
    timeline: "4 months",
    description:
      "A visual journey exploring untamed landscapes and the stories of those who call them home.",
    fullDescription:
      "Filmed across three continents, Open Country is a documentary short that captures the raw beauty of natural environments and the people who live within them. The project emphasized natural light, minimal color grading, and long, contemplative shots to let the landscape speak for itself. This work was exhibited at international film festivals and received recognition for its cinematography and sound design.",
    role: "Director, Cinematographer, Editor",
    results:
      "3 festival selections, 1 award for Cinematography, 50K+ views",
    tools: ["Sony FX30", "DaVinci Resolve", "Adobe Premiere Pro"],
    links: [
      { label: "Watch on Vimeo", href: "#", target: "_blank" },
      { label: "Festival Page", href: "#", target: "_blank" },
    ],
  },
  "still-form": {
    id: "still-form",
    title: "Still Form",
    subtitle: "Commercial | Animation",
    client: "Architectural Materials Brand",
    year: "2024",
    timeline: "6 weeks",
    description:
      "A 30-second product showcase combining motion design with live-action cinematography.",
    fullDescription:
      "Still Form was created to showcase a premium architectural material brand's commitment to craftsmanship. The spot combines detailed close-ups of textures and materials with broader environmental shots, emphasizing the intersection of form and function. Motion graphics subtly highlight key features while maintaining the sophisticated aesthetic of the brand.",
    role: "Director, Motion Designer, Editor",
    results: "Used across social media and website, 200K+ impressions",
    tools: ["Adobe After Effects", "Cinema 4D", "DaVinci Resolve"],
    links: [
      { label: "View Case Study", href: "#", target: "_blank" },
    ],
  },
  "low-tide": {
    id: "low-tide",
    title: "Low Tide",
    subtitle: "Music Video",
    client: "Independent Artist",
    year: "2023",
    timeline: "2 months",
    description:
      "A moody, contemplative piece shot entirely in single-takes with minimal editing.",
    fullDescription:
      "Low Tide explores themes of solitude and reflection through water, light, and movement. Shot in a single location over multiple sessions, the video uses the natural changes of tide and light to create narrative progression without traditional cuts. The approach challenges conventional music video storytelling and prioritizes mood and atmosphere over narrative clarity.",
    role: "Director, Cinematographer, Editor",
    results: "400K+ Spotify streams, featured on music blogs",
    tools: ["Canon R5", "Adobe Premiere Pro", "DaVinci Resolve"],
    links: [
      { label: "Watch on YouTube", href: "#", target: "_blank" },
      { label: "Listen on Spotify", href: "#", target: "_blank" },
    ],
  },
};
