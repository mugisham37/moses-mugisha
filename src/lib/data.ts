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
    image: '/images/profile-home.jpg',
  },
  {
    title: '2. Web Design',
    description:
      'Designing intuitive, elegant websites that balance aesthetics and usability. Whether it\'s a portfolio, landing page, or full site, I craft digital experiences that connect.',
    image: '/images/profile-about.jpg',
  },
  {
    title: '3. Photography',
    description:
      'Capturing authentic, atmospheric visuals that enhance your brand and tell a story — including lifestyle, editorial, product, and brand photography.',
    image: '/images/profile-home.jpg',
  },
  {
    title: '4. Graphic Design',
    description:
      'Designing visuals for both digital and print, including social media assets, lookbooks, packaging, posters, and other creative collateral.',
    image: '/images/profile-about.jpg',
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
