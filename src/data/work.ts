export interface WorkProject {
  slug: string;
  title: string;
  briefDescription: string;
  previewImage: string;
  buttonText: string;
  previewLink: string;
  overview: string;
  year: string;
  client: string;
  service: string;
  categories: string[];
  title1: string;
  paragraph1: string;
  title2: string;
  paragraph2: string;
  gallery: string[];
}

export const categories = [
  { id: "all", title: "All" },
  { id: "photography", title: "Photography" },
  { id: "web-design", title: "Web design" },
  { id: "visual-identity", title: "Visual Identity" },
  { id: "graphic-design", title: "Graphic Design" },
];

export const projects: WorkProject[] = [
  {
    slug: "neon-flux",
    title: "Neon Flux",
    briefDescription: "Fashion Editorial",
    previewImage: "/images/profile-home.jpg",
    buttonText: "View Project",
    previewLink: "#",
    overview:
      "A bold fashion editorial exploring neon aesthetics and urban nightlife through striking portraiture and avant-garde styling.",
    year: "'22",
    client: "Neon Magazine",
    service: "Photography",
    categories: ["photography"],
    title1: "Concept",
    paragraph1:
      "The Neon Flux project was born from a desire to capture the energy of city nightlife through a fashion lens. Working with a team of stylists and models, we created a series of images that blend high fashion with raw urban environments.",
    title2: "Execution",
    paragraph2:
      "Shot over two nights in Paris, the series uses long exposure techniques and practical neon lighting to create otherworldly imagery. Each frame tells a story of movement, colour, and the electric pulse of the city after dark.",
    gallery: ["/images/profile-home.jpg", "/images/profile-about.jpg"],
  },
  {
    slug: "lumina-city",
    title: "Lumina City",
    briefDescription: "Conceptual Series",
    previewImage: "/images/profile-about.jpg",
    buttonText: "View Project",
    previewLink: "#",
    overview:
      "A nighttime urban photography project exploring the intersection of architecture, light, and technology.",
    year: "2024",
    client: "Gallery Exhibition",
    service: "Photography",
    categories: ["photography"],
    title1: "Vision",
    paragraph1:
      "Lumina City is a meditation on the way artificial light transforms urban space after dark. The series documents forgotten corners of modern cities — underpasses, empty plazas, rooftops — bathed in the glow of sodium lamps and LED strips.",
    title2: "Process",
    paragraph2:
      "Each image was captured using a large-format camera on a tripod, with exposures ranging from 30 seconds to several minutes. The extended exposure time reveals gradients of light imperceptible to the naked eye.",
    gallery: ["/images/profile-about.jpg", "/images/profile-home.jpg"],
  },
  {
    slug: "bloom-identity",
    title: "Bloom Identity",
    briefDescription: "Brand Identity",
    previewImage: "/images/profile-home.jpg",
    buttonText: "View Project",
    previewLink: "#",
    overview:
      "A complete brand identity system for a sustainable beauty brand rooted in botanical philosophy.",
    year: "'23",
    client: "Bloom Botanicals",
    service: "Visual Identity",
    categories: ["visual-identity"],
    title1: "Brand Strategy",
    paragraph1:
      "Bloom came to us with a clear vision: a beauty brand that felt luxurious yet grounded in nature. The identity draws from botanical illustration traditions while maintaining a contemporary, minimal aesthetic.",
    title2: "Identity System",
    paragraph2:
      "The final system includes a custom wordmark, a secondary illustration library, a refined colour palette, and extensive guidelines covering packaging, digital, and retail applications.",
    gallery: ["/images/profile-home.jpg"],
  },
  {
    slug: "echo-web",
    title: "Echo Studio",
    briefDescription: "Web Design",
    previewImage: "/images/profile-about.jpg",
    buttonText: "View Project",
    previewLink: "#",
    overview:
      "Website design for an independent music production studio in Lyon, France.",
    year: "'23",
    client: "Echo Studio",
    service: "Web Design",
    categories: ["web-design"],
    title1: "Design Direction",
    paragraph1:
      "Echo Studio needed a digital presence that communicated their sound: precise, warm, and deeply human. The site architecture centres on the work itself, letting audio samples and project photography lead the experience.",
    title2: "Technical Notes",
    paragraph2:
      "Built in Framer with custom interactions, the site features a bespoke audio player, smooth page transitions, and a CMS-driven project archive that the team can update independently.",
    gallery: ["/images/profile-about.jpg"],
  },
];

export function getProjectBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(categoryId: string): WorkProject[] {
  if (categoryId === "all") return projects;
  return projects.filter((p) => p.categories.includes(categoryId));
}
