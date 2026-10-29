import type { WorksItem } from "@/components/works/works-grid";

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export interface FilmmakingProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  year: string;
  role: string;
  client?: string;
  director?: string;
  description: string;
  thumbnail: string;
  /** Add your compressed MP4 file in /public/videos/ and specify the path here (e.g., "/videos/open-country.mp4") */
  videoSrc?: string;
  /** Or paste a Vimeo / YouTube link here */
  videoUrl?: string;
  href: string;
}

export interface MarketingProject {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  deliverables: string[];
  metrics?: string;
  description: string;
  thumbnail: string;
  href: string;
}

export interface MarketingSubSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  projects: MarketingProject[];
}

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
  thumbnail?: string;
  heroImage?: string;
  videoUrl?: string;
  images?: string[];
  links?: Array<{
    label: string;
    href: string;
    target?: "_blank" | "_self";
  }>;
}

// =============================================================================
// 🎬 FILMMAKING PROJECTS (VIDEOS)
// Edit or upload your video items here
// =============================================================================

export const filmmakingProjects: FilmmakingProject[] = [
  {
  id: "open-country",
  title: "The Muse",
  subtitle: "Short Film — Directed by Samuel Walker",
  category: "Short Film",
  duration: "18:01",
  year: "2026",
  role: "Cinematographer",
  director: "Samuel Walker",
  description:
    "A visual narrative exploring the story of two lost siblings. Separated by chance, reunited by a divine guidance. The film follows a woman and a priest, who reuinte after the passing of their mother. The woman seeks answers from the priest, but the priest has very little answers to give.",
  thumbnail: "/images/works-open-country.png",
  videoSrc: "",
  videoUrl: "https://youtu.be/g7RqR60Sirk",
  href: "/works/open-country",
},
  {
    id: "low-tide",
    title: "Your Only Chance",
    subtitle: "Short Film — Directed by Gonzalo Arzamendia",
    category: "Short Film",
    duration: "03:45",
    year: "2025",
    role: "Director, Editor & Writer",
    director: "Gonzalo Arzamendia",
    client: "Independent Artist",
    description:
      "A moody, contemplative piece set inside the protagonist's mind. This short film explores the concepts of family and memories when one is faced with death.",
    thumbnail: "/images/works-low-tide.png",
    videoSrc: "", // e.g. "/videos/low-tide.mp4"
    videoUrl: "https://youtu.be/oGnP4y7zSEU",
    href: "/works/low-tide",
  },
  {
    id: "echoes-of-dawn",
    title: "Echoes of Dawn",
    subtitle: "Narrative Short Film",
    category: "Narrative Short",
    duration: "11:20",
    year: "2025",
    role: "Director & Cinematographer",
    client: "Independent Production",
    description:
      "An atmospheric 35mm visual story exploring memories, distance, and dawn light along rugged coastal shores. Rich analog texture and quiet cinematic pacing.",
    thumbnail: "/images/works-echoes.jpg",
    videoSrc: "", // e.g. "/videos/echoes-of-dawn.mp4"
    videoUrl: "https://vimeo.com",
    href: "/works/echoes-of-dawn",
  },
  {
    id: "still-form",
    title: "Still Form",
    subtitle: "Commercial Brand Film",
    category: "Commercial Film",
    duration: "01:00",
    year: "2024",
    role: "Director & Editor",
    client: "Architectural Materials Brand",
    description:
      "A 60-second product showcase combining live-action cinematography with tactile sound design to highlight textural craftsmanship and minimalist design.",
    thumbnail: "/images/works-still-form.png",
    videoSrc: "", // e.g. "/videos/still-form.mp4"
    videoUrl: "https://vimeo.com",
    href: "/works/still-form",
  },
];

// =============================================================================
// 📈 MARKETING SECTIONS
// Organized into distinct subsections for your marketing work
// =============================================================================

export const marketingSections: MarketingSubSection[] = [
  {
    id: "brand-campaigns",
    title: "Brand Campaigns & Commercials",
    subtitle: "01 / COMMERCIAL DIRECTION",
    description:
      "Multi-channel commercial campaigns, brand positioning films, and hero launch assets designed for emotional resonance and memorability.",
    projects: [
      {
        id: "arch-materials-campaign",
        title: "Architectural Form Launch",
        subtitle: "Global Product Campaign",
        client: "Architectural Materials Brand",
        year: "2024",
        deliverables: ["Commercial Film", "Brand Positioning", "Digital Lookbook"],
        metrics: "200K+ Impressions / 3.4x Engagement Lift",
        description:
          "Comprehensive product launch campaign celebrating architectural texture and minimalist form across digital channels, PR, and web experience.",
        thumbnail: "/images/works-campaign.jpg",
        href: "/works/arch-materials-campaign",
      },
      {
        id: "lumina-lifestyle",
        title: "Aesthetic Living Campaign",
        subtitle: "Seasonal Brand Relaunch",
        client: "Lumina Studio",
        year: "2025",
        deliverables: ["Omnichannel Campaign", "Art Direction", "Video Ads"],
        metrics: "+140% Conversion Lift / 450K Reach",
        description:
          "Visual storytelling campaign repositioning interior objects through curated video vignettes and lifestyle still photography.",
        thumbnail: "/images/works-still-form.png",
        href: "/works/lumina-lifestyle",
      },
    ],
  },
  {
    id: "social-strategy",
    title: "Social Media & Digital Strategy",
    subtitle: "02 / DIGITAL & GROWTH",
    description:
      "High-retention short-form video series, organic growth frameworks, and platform-native storytelling optimized for algorithmic impact.",
    projects: [
      {
        id: "behind-the-lens-series",
        title: "Behind the Lens Episodic Series",
        subtitle: "Viral Content Strategy",
        client: "Independent Creator Network",
        year: "2024—2025",
        deliverables: ["Instagram Reels", "TikTok Framework", "Audio Design"],
        metrics: "4.8M Organic Views / +85K Follower Growth",
        description:
          "A multi-part video series translating cinematic production techniques into high-engagement vertical formats with exceptional viewer retention.",
        thumbnail: "/images/works-digital.jpg",
        href: "/works/behind-the-lens-series",
      },
      {
        id: "open-road-social",
        title: "Open Road Travel Campaign",
        subtitle: "Short-Form Reel Series",
        client: "Wanderlust Collective",
        year: "2024",
        deliverables: ["Short-Form Video", "Soundtrack Licensing", "Influencer Collabs"],
        metrics: "1.2M Engagements / 18% Share Rate",
        description:
          "Atmospheric travel micro-stories pairing sweeping cinematic visuals with immersive sound design for heightened community engagement.",
        thumbnail: "/images/works-open-country.png",
        href: "/works/open-road-social",
      },
    ],
  },
  {
    id: "creative-direction",
    title: "Creative Direction & Visual Identity",
    subtitle: "03 / BRAND ARCHITECTURE",
    description:
      "Brand aesthetic guidelines, moodboard direction, product styling, and cohesive visual universe design across all customer touchpoints.",
    projects: [
      {
        id: "atelier-solitude",
        title: "Atelier Solitude Lookbook",
        subtitle: "Brand Identity & Visual Universe",
        client: "Solitude Fashion",
        year: "2024",
        deliverables: ["Visual Identity", "Lookbook Direction", "Asset Library"],
        metrics: "Featured in Editorial Publications",
        description:
          "Curated aesthetic system uniting minimalist silhouettes with oceanic tones, moody lighting, and bespoke typography.",
        thumbnail: "/images/works-low-tide.png",
        href: "/works/atelier-solitude",
      },
      {
        id: "horizon-playbook",
        title: "Horizon Visual Framework",
        subtitle: "Creative Asset Playbook",
        client: "Horizon Creative",
        year: "2025",
        deliverables: ["Brand Playbook", "Content Template Kit", "Ad Creative"],
        metrics: "12+ Partner Brands Integrated",
        description:
          "Standardized visual guidelines and modular content templates enabling creative and marketing teams to produce consistent high-caliber campaigns.",
        thumbnail: "/images/works-echoes.jpg",
        href: "/works/horizon-playbook",
      },
    ],
  },
];

// =============================================================================
// BACKWARDS-COMPATIBILITY: WorksGrid Items
// =============================================================================

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
    title: "Your Only Chance",
    subtitle: "Short Film — Directed by Gonzalo Arzamendia",
    description:
      "A moody, contemplative piece set inside the protagonist's mind. This short film explores the concepts of family and memories when one is faced with death.",
    thumbnail: "/images/works-low-tide.png",
    href: "/works/low-tide",
  },
];

// =============================================================================
// DETAILED PROJECT RECORDS (/works/[slug])
// =============================================================================

export const projectsDetails: Record<string, ProjectDetails> = {
  "open-country": {
    id: "open-country",
    title: "Open Country",
    subtitle: "Documentary Short",
    client: "Self-directed",
    year: "2024",
    timeline: "4 months",
    thumbnail: "/images/works-open-country.png",
    heroImage: "/images/works-open-country.png",
    description:
      "A visual journey exploring untamed landscapes and the stories of those who call them home.",
    fullDescription:
      "Filmed across three continents, Open Country is a documentary short that captures the raw beauty of natural environments and the people who live within them. The project emphasized natural light, minimal color grading, and long, contemplative shots to let the landscape speak for itself. This work was exhibited at international film festivals and received recognition for its cinematography and sound design.",
    role: "Director, Cinematographer, Editor",
    results: "3 festival selections, 1 award for Cinematography, 50K+ views",
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
    thumbnail: "/images/works-still-form.png",
    heroImage: "/images/works-still-form.png",
    description:
      "A 30-second product showcase combining motion design with live-action cinematography.",
    fullDescription:
      "Still Form was created to showcase a premium architectural material brand's commitment to craftsmanship. The spot combines detailed close-ups of textures and materials with broader environmental shots, emphasizing the intersection of form and function. Motion graphics subtly highlight key features while maintaining the sophisticated aesthetic of the brand.",
    role: "Director, Motion Designer, Editor",
    results: "Used across social media and website, 200K+ impressions",
    tools: ["Adobe After Effects", "Cinema 4D", "DaVinci Resolve"],
    links: [{ label: "View Case Study", href: "#", target: "_blank" }],
  },
  "low-tide": {
    id: "low-tide",
    title: "Your Only Chance",
    subtitle: "Short Film",
    client: "Independent Artist",
    year: "2025",
    timeline: "2 months",
    thumbnail: "/images/works-low-tide.png",
    heroImage: "/images/works-low-tide.png",
    description:
      "A moody, contemplative piece set inside the protagonist's mind. This short film explores the concepts of family and memories when one is faced with death.",
    fullDescription:
      "A moody, contemplative piece set inside the protagonist's mind. This short film explores the concepts of family and memories when one is faced with death.",
    role: "Director, Editor & Writer",
    results: "400K+ Spotify streams, featured on music blogs",
    tools: ["Canon R5", "Adobe Premiere Pro", "DaVinci Resolve"],
    links: [
      { label: "Watch on YouTube", href: "https://youtu.be/oGnP4y7zSEU", target: "_blank" },
    ],
  },
  "echoes-of-dawn": {
    id: "echoes-of-dawn",
    title: "Echoes of Dawn",
    subtitle: "Narrative Short Film",
    client: "Independent Production",
    year: "2025",
    timeline: "3 months",
    thumbnail: "/images/works-echoes.jpg",
    heroImage: "/images/works-echoes.jpg",
    description:
      "An atmospheric 35mm visual story exploring memories, distance, and dawn light along rugged coastal shores.",
    fullDescription:
      "Echoes of Dawn is an intimate film capturing the solitude of dawn along wind-swept cliffs. Using vintage 35mm cinema glass and an organic, unhurried editing cadence, the film immerses viewers in natural ambiences, textures of the ocean breeze, and unspoken connection.",
    role: "Writer, Director, Cinematographer",
    results: "Official Selection 2025 Film Showcase",
    tools: ["ARRI Alexa Mini", "Cooke Speed Panchro Lenses", "DaVinci Resolve Studio"],
    links: [{ label: "Watch Trailer", href: "#", target: "_blank" }],
  },
  "arch-materials-campaign": {
    id: "arch-materials-campaign",
    title: "Architectural Form Launch",
    subtitle: "Global Product Campaign",
    client: "Architectural Materials Brand",
    year: "2024",
    timeline: "8 weeks",
    thumbnail: "/images/works-campaign.jpg",
    heroImage: "/images/works-campaign.jpg",
    description:
      "Comprehensive product launch campaign celebrating architectural texture and minimalist form.",
    fullDescription:
      "A complete commercial launch campaign bridging architectural design and cinematic advertising. From high-fashion editorial stills to hero video assets, the project elevated the brand's aesthetic standing in modern luxury architecture.",
    role: "Creative Director, Video Director",
    results: "200K+ Impressions, 3.4x Engagement Lift",
    tools: ["DaVinci Resolve", "Figma", "Premiere Pro"],
    links: [{ label: "View Campaign", href: "#", target: "_blank" }],
  },
  "lumina-lifestyle": {
    id: "lumina-lifestyle",
    title: "Aesthetic Living Campaign",
    subtitle: "Seasonal Brand Relaunch",
    client: "Lumina Studio",
    year: "2025",
    timeline: "5 weeks",
    thumbnail: "/images/works-still-form.png",
    heroImage: "/images/works-still-form.png",
    description:
      "Visual storytelling campaign repositioning interior objects through curated video vignettes.",
    fullDescription:
      "Designed as a series of bite-sized cinematic vignettes exploring modern living spaces. The campaign drove exceptional conversion lift by illustrating products within elevated lifestyle contexts.",
    role: "Brand Strategist & Art Director",
    results: "+140% Conversion Lift, 450K Reach",
    tools: ["Adobe Creative Cloud", "Blender", "Meta Ads Manager"],
    links: [{ label: "Case Study Overview", href: "#", target: "_blank" }],
  },
  "behind-the-lens-series": {
    id: "behind-the-lens-series",
    title: "Behind the Lens Episodic Series",
    subtitle: "Viral Content Strategy",
    client: "Independent Creator Network",
    year: "2024—2025",
    timeline: "Ongoing",
    thumbnail: "/images/works-digital.jpg",
    heroImage: "/images/works-digital.jpg",
    description:
      "A multi-part video series translating cinematic production techniques into high-engagement vertical formats.",
    fullDescription:
      "Developed a custom social media video format focusing on storytelling rhythm, sound design cues, and dynamic visual hooks. Built an organic follower base with millions of viral impressions without paid amplification.",
    role: "Creator, Strategist & Editor",
    results: "4.8M Organic Views, +85K Follower Growth",
    tools: ["Final Cut Pro", "CapCut Pro", "Instagram Reels Insights"],
    links: [{ label: "View on Instagram", href: "https://www.instagram.com/gonzarmendia", target: "_blank" }],
  },
  "open-road-social": {
    id: "open-road-social",
    title: "Open Road Travel Campaign",
    subtitle: "Short-Form Reel Series",
    client: "Wanderlust Collective",
    year: "2024",
    timeline: "4 weeks",
    thumbnail: "/images/works-open-country.png",
    heroImage: "/images/works-open-country.png",
    description:
      "Atmospheric travel micro-stories pairing sweeping cinematic visuals with immersive sound design.",
    fullDescription:
      "Leveraged footage from remote road journeys into micro-documentaries crafted specifically for modern social feeds, driving record engagement and audience retention.",
    role: "Director & Social Content Creator",
    results: "1.2M Engagements, 18% Share Rate",
    tools: ["Premiere Pro", "DaVinci Resolve", "Logic Pro"],
    links: [{ label: "Watch Series", href: "#", target: "_blank" }],
  },
  "atelier-solitude": {
    id: "atelier-solitude",
    title: "Atelier Solitude Lookbook",
    subtitle: "Brand Identity & Visual Universe",
    client: "Solitude Fashion",
    year: "2024",
    timeline: "6 weeks",
    thumbnail: "/images/works-low-tide.png",
    heroImage: "/images/works-low-tide.png",
    description:
      "Curated aesthetic system uniting minimalist silhouettes with oceanic tones and moody lighting.",
    fullDescription:
      "A comprehensive art direction assignment delivering print lookbooks, e-commerce direction, and digital brand collateral centered on quiet, organic aesthetics.",
    role: "Art Director & Photographer",
    results: "Featured in Vogue Scandinavia & Design Milk",
    tools: ["Adobe InDesign", "Photoshop", "Capture One"],
    links: [{ label: "View Lookbook", href: "#", target: "_blank" }],
  },
  "horizon-playbook": {
    id: "horizon-playbook",
    title: "Horizon Visual Framework",
    subtitle: "Creative Asset Playbook",
    client: "Horizon Creative",
    year: "2025",
    timeline: "8 weeks",
    thumbnail: "/images/works-echoes.jpg",
    heroImage: "/images/works-echoes.jpg",
    description:
      "Standardized visual guidelines and modular content templates for high-velocity marketing teams.",
    fullDescription:
      "Created a robust visual marketing system that standardizes video templates, photography standards, and copywriting guidelines across an ecosystem of 12 partner brands.",
    role: "Creative Director",
    results: "12+ Partner Brands Successfully Integrated",
    tools: ["Figma", "Notion", "Adobe After Effects"],
    links: [{ label: "Playbook Preview", href: "#", target: "_blank" }],
  },
};
