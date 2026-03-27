import { Project, Service, Tool, Experience, Award, FAQ } from '@/types';

// All content extracted from Framer MCP getNodeXml calls

export const projects: Project[] = [
  {
    slug: 'neon-flux',
    title: 'Neon Flux',
    category: 'Fashion Editorial',
    year: "'22",
    image: '/images/profile-home.jpg',
    description: 'A fashion editorial series exploring the intersection of neon lighting and contemporary style.',
    client: 'Editorial',
    service: 'Photography',
    gallery: [],
  },
  {
    slug: 'lumina-city',
    title: 'Lumina City',
    category: 'Photography',
    year: '2024',
    image: '/images/profile-about.jpg',
    description: 'A nighttime urban photography project exploring the intersection of architecture, light, and technology.',
    client: 'Gallery Exhibition',
    service: 'Photography',
    gallery: [],
  },
  {
    slug: 'visual-identity-01',
    title: 'Visual Identity',
    category: 'Brand Design',
    year: "'23",
    image: '/images/profile-home.jpg',
    description: 'A comprehensive brand identity system created for a luxury lifestyle brand.',
    client: 'Private Client',
    service: 'Visual Identity',
    gallery: [],
  },
  {
    slug: 'web-design-01',
    title: 'Digital Presence',
    category: 'Web Design',
    year: "'23",
    image: '/images/profile-about.jpg',
    description: 'A minimal, editorial web design for a boutique creative studio.',
    client: 'Creative Studio',
    service: 'Web Design',
    gallery: [],
  },
  {
    slug: 'graphic-design-01',
    title: 'Print & Identity',
    category: 'Graphic Design',
    year: "'22",
    image: '/images/profile-home.jpg',
    description: 'Lookbooks, posters, and brand collateral for a fashion house.',
    client: 'Fashion House',
    service: 'Graphic Design',
    gallery: [],
  },
  {
    slug: 'editorial-01',
    title: 'Lifestyle Series',
    category: 'Photography',
    year: "'21",
    image: '/images/profile-about.jpg',
    description: 'Editorial photography capturing quiet, atmospheric lifestyle moments.',
    client: 'Magazine',
    service: 'Photography',
    gallery: [],
  },
];

export const services: Service[] = [
  {
    title: '1. Visual Identity',
    description:
      'Creating thoughtful, cohesive brand identities that reflect your story and values, from logo design and typography to color palettes and brand guidelines.',
  },
  {
    title: '2. Web Design',
    description:
      'Designing intuitive, elegant websites that balance aesthetics and usability. Whether it\'s a portfolio, landing page, or full site, I craft digital experiences that connect.',
  },
  {
    title: '3. Photography',
    description:
      'Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography.',
  },
  {
    title: '4. Graphic Design',
    description:
      'Designing visuals for both digital and print, including social media assets, lookbooks, packaging, posters, and other creative collateral.',
  },
];

export const tools: Tool[] = [
  { name: 'Framer', description: 'No-code web design.' },
  { name: 'Figma', description: 'General Design Tool' },
  { name: 'Photoshop', description: 'Image editing' },
  { name: 'Illustrator', description: 'Graphic design' },
  { name: 'Javascript', description: 'Front end development' },
  { name: 'Spline', description: '3D design' },
];

export const experiences: Experience[] = [
  {
    title: 'Freelance Digital Designer & Photographer',
    company: 'France & International',
    dates: "'13 - present",
    description:
      'Working with brands, agencies, and creatives to craft visual identities, design engaging websites, and capture photography that tells authentic stories. Projects range from brand launches to editorial campaigns.',
  },
  {
    title: 'Senior Digital Designer',
    company: 'Creative Agency, Paris',
    dates: "'16 - 2018",
    description:
      'Led design projects for lifestyle, fashion, and cultural brands. Oversaw concept development, UI/UX design, and visual direction while collaborating closely with copywriters, developers, and photographers.',
  },
  {
    title: 'Graphic Designer & Photographer',
    company: 'Boutique Studio, Lyon',
    dates: "'14 - 2016",
    description:
      'Created branding, print materials, and social media visuals for small to mid-sized businesses. Handled in-house photography for campaigns, products, and brand content.',
  },
  {
    title: 'Junior Designer',
    company: 'Design Studio, Marseille',
    dates: "'13 - 2014",
    description:
      'Assisted in the creation of brand assets, editorial layouts, and basic web designs. Supported senior designers and contributed to photography shoots, gaining hands-on experience in multidisciplinary creative work.',
  },
];

export const awards: Award[] = [
  {
    title: 'Best Digital Design',
    organization: 'European Design Awards',
    year: "'24",
  },
  {
    title: 'Visual Storytelling Excellence',
    organization: 'International Photography Awards',
    year: "'23",
  },
  {
    title: 'Honorable Mention',
    organization: 'Awwwards',
    year: "'22",
  },
  {
    title: 'Gold Award for Brand Identity',
    organization: 'French Design Awards',
    year: "'21",
  },
  {
    title: 'Photography Excellence Award',
    organization: 'Paris Creative Expo',
    year: "'20",
    last: true,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'I work on visual identity, web design, photography, and graphic design projects. I enjoy collaborating with brands, agencies, and independent creatives who value intention and craft.',
  },
  {
    question: 'What does your process look like?',
    answer:
      'Every project starts with a discovery conversation to understand your goals, audience, and vision. From there I move into concept, refinement, and delivery — keeping you involved throughout.',
  },
  {
    question: 'How long does a project typically take?',
    answer:
      "It depends on the scope. A brand identity might take 4\u20136 weeks, while a full web design project can range from 6\u201312 weeks. I'll give you a clear timeline at the start.",
  },
  {
    question: 'Do you work remotely or in person?',
    answer:
      'Primarily remotely, with clients across France and internationally. For local projects in France, in-person sessions can be arranged.',
  },
  {
    question: 'How do I get started?',
    answer:
      "Reach out via the contact form or send me an email at hello@maelle.design. I'd love to hear about your project.",
  },
];

export const homeServiceTags = [
  { label: 'Visual Identity', active: true },
  { label: 'Web design', active: true },
  { label: 'Photography', active: true },
  { label: 'Graphic design', active: false },
];

export const stats = [
  { label: 'Years of experience', value: '12+' },
  { label: 'Satisfied clients', value: '50' },
  { label: 'Projects completed', value: '100+' },
  { label: 'Industry awards', value: '6' },
];

export const logoTickers = [
  '/images/logo-ticker-1.svg',
  '/images/logo-ticker-2.svg',
  '/images/logo-ticker-3.svg',
  '/images/logo-ticker-4.svg',
  '/images/logo-ticker-5.svg',
  '/images/logo-ticker-6.svg',
  '/images/logo-ticker-7.svg',
];
// All content extracted verbatim from the Framer project via MCP

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  client: string;
  service: string;
  galleryImages: string[];
}

export const projects: Project[] = [
  {
    slug: "neon-flux",
    title: "Neon Flux",
    category: "Fashion Editorial",
    year: "'22",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    description: "A nighttime urban photography project exploring the intersection of architecture, light, and technology.",
    client: "Gallery Exhibition",
    service: "Photography",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    ],
  },
  {
    slug: "lumina-city",
    title: "Lumina City",
    category: "Conceptual Series",
    year: "'24",
    image: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&q=80",
    description: "A nighttime urban photography project exploring the intersection of architecture, light, and technology.",
    client: "Gallery Exhibition",
    service: "Photography",
    galleryImages: [
      "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    ],
  },
  {
    slug: "terra-nova",
    title: "Terra Nova",
    category: "Brand Identity",
    year: "'23",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Complete brand identity for a sustainable architecture firm focused on eco-friendly materials.",
    client: "Terra Nova Architecture",
    service: "Visual Identity",
    galleryImages: [],
  },
  {
    slug: "echo-studio",
    title: "Echo Studio",
    category: "Web Design",
    year: "'23",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A minimalist website for an independent music studio blending analog warmth with digital precision.",
    client: "Echo Studio",
    service: "Web Design",
    galleryImages: [],
  },
  {
    slug: "bloom-botanical",
    title: "Bloom Botanical",
    category: "Photography",
    year: "'22",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
    description: "An editorial photography series capturing the quiet beauty of botanical gardens across Southern France.",
    client: "Bloom Magazine",
    service: "Photography",
    galleryImages: [],
  },
  {
    slug: "atelier-mode",
    title: "Atelier Mode",
    category: "Fashion Editorial",
    year: "'21",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    description: "Fashion editorial campaign for a Parisian atelier merging haute couture with street style.",
    client: "Atelier Mode Paris",
    service: "Photography",
    galleryImages: [],
  },
  {
    slug: "nordic-essence",
    title: "Nordic Essence",
    category: "Brand Identity",
    year: "'21",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
    description: "A complete visual identity for a Scandinavian wellness brand rooted in nature and simplicity.",
    client: "Nordic Essence",
    service: "Visual Identity",
    galleryImages: [],
  },
  {
    slug: "cafe-journal",
    title: "Café Journal",
    category: "Graphic Design",
    year: "'20",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
    description: "Print and digital design for a specialty coffee brand including packaging, menus, and social media.",
    client: "Café Journal",
    service: "Graphic Design",
    galleryImages: [],
  },
  {
    slug: "solstice-records",
    title: "Solstice Records",
    category: "Web Design",
    year: "'20",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    description: "Website and digital presence for an independent record label specializing in ambient and electronic music.",
    client: "Solstice Records",
    service: "Web Design",
    galleryImages: [],
  },
  {
    slug: "maison-claire",
    title: "Maison Claire",
    category: "Photography",
    year: "'19",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description: "Interior photography series for a luxury home staging company in Lyon.",
    client: "Maison Claire",
    service: "Photography",
    galleryImages: [],
  },
];

export const services = [
  { title: "Visual Identity", hasLine: true },
  { title: "Web design", hasLine: true },
  { title: "Photography", hasLine: true },
  { title: "Graphic design", hasLine: false },
];

export const serviceDetails = [
  {
    title: "1. Visual Identity",
    description: "Creating thoughtful, cohesive brand identities that reflect your story and values, from logo design and typography to color palettes and brand guidelines.",
  },
  {
    title: "2. Web Design",
    description: "Designing intuitive, elegant websites that balance aesthetics and usability. Whether it's a portfolio, landing page, or full site, I craft digital experiences that connect.",
  },
  {
    title: "3. Photography",
    description: "Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography.",
  },
  {
    title: "4. Graphic Design",
    description: "Designing visuals for both digital and print, including social media assets, lookbooks, packaging, posters, and other creative collateral.",
  },
];

export const tools = [
  { name: "Framer", description: "No-code web design." },
  { name: "Figma", description: "General Design Tool" },
  { name: "Photoshop", description: "Image editing" },
  { name: "Illustrator", description: "Graphic design" },
  { name: "Javascript", description: "Front end development" },
  { name: "Spline", description: "3D design" },
];

export const experience = [
  {
    title: "Freelance Digital Designer & Photographer",
    company: "France & International",
    period: "'13 - present",
    description: "Working with brands, agencies, and creatives to craft visual identities, design engaging websites, and capture photography that tells authentic stories. Projects range from brand launches to editorial campaigns.",
  },
  {
    title: "Senior Digital Designer",
    company: "Creative Agency, Paris",
    period: "'16 - 2018",
    description: "Led design projects for lifestyle, fashion, and cultural brands. Oversaw concept development, UI/UX design, and visual direction while collaborating closely with copywriters, developers, and photographers.",
  },
  {
    title: "Graphic Designer & Photographer",
    company: "Boutique Studio, Lyon",
    period: "'14 - 2016",
    description: "Created branding, print materials, and social media visuals for small to mid-sized businesses. Handled in-house photography for campaigns, products, and brand content.",
  },
  {
    title: "Junior Designer",
    company: "Design Studio, Marseille",
    period: "'13 - 2014",
    description: "Assisted in the creation of brand assets, editorial layouts, and basic web designs. Supported senior designers and contributed to photography shoots, gaining hands-on experience in multidisciplinary creative work.",
  },
];

export const stats = [
  { label: "Years of experience", value: "12+" },
  { label: "Satisfied clients", value: "50" },
  { label: "Projects completed", value: "100+" },
  { label: "Industry awards", value: "6" },
];

export const awards = [
  { title: "Best Digital Design", org: "European Design Awards", year: "'24", hasLine: true },
  { title: "Visual Storytelling Excellence", org: "International Photography Awards", year: "'23", hasLine: true },
  { title: "Honorable Mention", org: "Awwwards", year: "'22", hasLine: true },
  { title: "Gold Award for Brand Identity", org: "French Design Awards", year: "'21", hasLine: true },
  { title: "Photography Excellence Award", org: "Paris Creative Expo", year: "'20", hasLine: false },
];

export const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in visual identity design, web design, photography, and graphic design. Each project is approached with care and attention to detail.",
  },
  {
    question: "What is your typical process?",
    answer: "I begin with a discovery phase to understand your vision, followed by concept development, design execution, and refinement based on your feedback.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Timelines vary depending on scope. A brand identity typically takes 4-6 weeks, while a website project can range from 6-10 weeks.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I work with clients worldwide. Most communication happens via email and video calls, making remote collaboration seamless.",
  },
  {
    question: "What are your rates?",
    answer: "Rates depend on project scope and complexity. I'm happy to provide a custom quote after understanding your specific needs.",
  },
];

export const clientLogos = [
  { url: "https://framerusercontent.com/images/lBk7MKclfzJRlatPc13MvYtptk.svg", width: 25 },
  { url: "https://framerusercontent.com/images/OHfziRjK2HdoOgrAXlPXc55VYQ.svg", width: 71 },
  { url: "https://framerusercontent.com/images/C8vnHs7e8IbLZooep0gNip6eylU.svg", width: 35 },
  { url: "https://framerusercontent.com/images/KNj9BRJvdrtCaYx5m7um7EmT8.svg", width: 58 },
  { url: "https://framerusercontent.com/images/8wpt2H14XHcb4yoW182iK0MGxs.svg", width: 34 },
  { url: "https://framerusercontent.com/images/jqmWIOA4WlrHoWQKgzTtrOgybg.svg", width: 65 },
  { url: "https://framerusercontent.com/images/qNMZaMQpAKdhOYxA9xp6LSCc54.svg", width: 37 },
];

export const images = {
  logo: "https://framerusercontent.com/images/1Ic0yQoRORDscRbsbAdM78xcalM.svg",
  profileHome: "https://framerusercontent.com/images/it1S2UW3QQiW6O2sCtHDtKcPODE.jpg",
  profileAbout: "https://framerusercontent.com/images/q9ZaTcwzkmoB2rVia9m7o2iecM.jpg",
};
