// ============================================================================
// TYPES
// ============================================================================

export interface WorkImage {
  src: string
  srcSet?: string
  alt: string
  width?: number
  height?: number
  sizes?: string
}

export interface WorkAbout {
  client: string
  contribution: string
  year: string
}

export interface WorkDetail {
  id: string
  title: string
  description: string
  category: 'products' | 'uiux' | '3d'
  thumbnailImage: string
  heroImage: WorkImage
  secondaryImage: WorkImage
  about: WorkAbout
  fullDescription: string
  processImage: WorkImage
  problemTitle: string
  problemDescription: string[]
  solutionTitle: string
  solutionDescription: string[]
  closingImage: WorkImage
  externalLink?: string
}

// ============================================================================
// HELPER FUNCTIONS - Eliminate Repetitive Image Configuration
// ============================================================================
// These functions handle the repetitive srcSet and sizes configuration.
// You only need to provide the image URL and alt text.

/**
 * Generates responsive srcSet for Framer images with standard breakpoints
 * @param src - Base image URL
 * @returns Formatted srcSet string with 512w, 1024w, 2048w, 4096w, and original
 */
const generateSrcSet = (src: string): string => {
  return `${src}?scale-down-to=512 512w,${src}?scale-down-to=1024 1024w,${src}?scale-down-to=2048 2048w,${src}?scale-down-to=4096 4096w,${src} 4500w`
}

/**
 * Creates a complete WorkImage object with standard responsive configuration
 * @param src - Image URL
 * @param alt - Alt text for accessibility
 * @param width - Optional width (defaults to 2400 for hero/closing images)
 * @param height - Optional height (defaults to 1600 for hero/closing images)
 * @returns Complete WorkImage object
 */
const createWorkImage = (
  src: string,
  alt: string,
  width?: number,
  height?: number
): WorkImage => ({
  src,
  srcSet: generateSrcSet(src),
  alt,
  ...(width && { width }),
  ...(height && { height }),
  sizes: 'calc(100vw - 24px)'
})

/**
 * Shorthand for creating hero/closing images (2400x1600)
 * Use for: heroImage, closingImage
 */
const createHeroImage = (src: string, alt: string): WorkImage =>
  createWorkImage(src, alt, 2400, 1600)

/**
 * Shorthand for creating secondary/process images (no dimensions specified)
 * Use for: secondaryImage, processImage
 */
const createSecondaryImage = (src: string, alt: string): WorkImage =>
  createWorkImage(src, alt)

// ============================================================================
// QUICK REFERENCE - How to Add New Projects
// ============================================================================
/*
  TEMPLATE FOR NEW PROJECT:

  'project-slug': {
    id: 'project-slug',
    title: 'Project Title',
    description: 'Short description for listing page.',
    category: 'products' | 'uiux' | '3d',
    thumbnailImage: 'https://...',
    heroImage: createHeroImage('https://...', 'Alt text'),
    secondaryImage: createSecondaryImage('https://...', 'Alt text'),
    about: {
      client: 'Client Name',
      contribution: 'Your Role',
      year: '2024'
    },
    fullDescription: 'Detailed project description...',
    processImage: createSecondaryImage('https://...', 'Alt text'),
    problemTitle: 'The Challenge',
    problemDescription: [
      'First paragraph...',
      'Second paragraph...'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'First paragraph...',
      'Second paragraph...'
    ],
    closingImage: createHeroImage('https://...', 'Alt text')
  },

  NOTES:
  - Use createHeroImage() for heroImage and closingImage (includes 2400x1600 dimensions)
  - Use createSecondaryImage() for secondaryImage and processImage (no dimensions)
  - All srcSet and sizes are handled automatically
  - Keep all field names exactly as shown (components depend on them)
*/

// ============================================================================
// SINGLE SOURCE OF TRUTH - Work Details Data
// ============================================================================
// This is the only place where project data is defined.
// All other data structures are derived from this.
// Use helper functions above to eliminate repetitive image configuration.

export const workDetailsData: Record<string, WorkDetail> = {
  'corevia-financial-platform': {
    id: 'corevia-financial-platform',
    title: 'Corevia Financial Management Platform',
    description: 'Modern financial consulting website with comprehensive service pages and responsive design.',
    category: 'products',
    thumbnailImage: 'https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/687ff334971f215c6e7c3f51_LogoCorevia.svg',
    heroImage: createHeroImage(
      '/Coreva/work/Hero_image.png',
      'Corevia Financial Platform Hero'
    ),
    secondaryImage: createSecondaryImage(
      '/Coreva/work/Secondary.png',
      'Corevia Multi-Page Interface'
    ),
    about: {
      client: 'Corevia Consulting',
      contribution: 'Frontend Development, UI Implementation, Responsive Design',
      year: '2024'
    },
    fullDescription: 'A comprehensive financial management platform built for Corevia Consulting, featuring multiple service pages including Home, About, Features, Pricing, Blog, and Contact. The platform showcases financial analytics tools, investment management services, and digital transformation solutions. Built with modern web technologies to deliver a seamless user experience across all devices with intuitive navigation and engaging visual design.',
    processImage: createSecondaryImage(
      '/Coreva/work/processing.png',
      'Corevia Development Process'
    ),
    problemTitle: 'The Challenge',
    problemDescription: [
      'Corevia Consulting needed a professional digital presence to showcase their financial management and consulting services to potential clients. The challenge was to create a scalable, multi-page website that could effectively communicate complex financial concepts while maintaining an approachable and modern aesthetic. The platform needed to serve diverse audiences including small businesses, growing teams, and enterprise clients.',
      'The website required clear presentation of service offerings across budgeting tools, investment management, digital transformation consulting, and market expansion strategies. Additionally, the platform needed to include comprehensive pricing tiers, client testimonials, blog functionality for thought leadership content, and contact forms for lead generation—all while maintaining consistent branding and optimal performance across desktop, tablet, and mobile devices.'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'Built with Next.js 16 and TypeScript, leveraging the App Router architecture for optimal performance and SEO capabilities. Implemented a component-based architecture with dedicated page sections for hero, about, benefits, features, core capabilities, pricing, testimonials, blog preview, and call-to-action modules. Created seven distinct pages (Home, About, Features, Pricing, Blog, Blog Detail, Contact) with consistent navigation and footer components.',
      'Designed a modular component system with reusable elements across landing, feature, pricing, blog, and contact sections. Implemented responsive layouts using Tailwind CSS for consistent styling and mobile-first design principles. Created three-tier pricing structure (Starter, Growth, Scale plans) with detailed feature comparisons, animated scroll effects for enhanced user engagement, and optimized image carousels showcasing platform capabilities. Deployed on Netlify for reliable hosting with continuous deployment integration.'
    ],
    closingImage: createHeroImage(
      '/Coreva/work/footerimage.png',
      'Corevia Platform Final Product'
    ),
    externalLink: 'https://corevias.netlify.app/'
  },

  'landscapo-architecture-platform': {
    id: 'landscapo-architecture-platform',
    title: 'Landscapo Architecture & Design Platform',
    description: 'Professional architecture portfolio website showcasing innovative design solutions with comprehensive project galleries and service offerings.',
    category: 'products',
    thumbnailImage: '/Landscape/landscapo-logo.svg',
    heroImage: createHeroImage(
      '/Landscape/work/Hero.png',
      'Landscapo Architecture Platform Hero'
    ),
    secondaryImage: createSecondaryImage(
      '/Landscape/work/Secondary.png',
      'Landscapo Project Showcase Interface'
    ),
    about: {
      client: 'Landscapo Architecture Studio',
      contribution: 'Full-Stack Development, UI/UX Implementation, Animation Integration',
      year: '2024'
    },
    fullDescription: 'A comprehensive architecture and design portfolio platform built for Landscapo Studio, featuring dynamic project galleries across multiple categories including Urban, Interior, Corporate, and Residential designs. The platform showcases over 50 completed projects with detailed case studies, expert team profiles, and service offerings. Built with modern web technologies including Next.js and Framer Motion to deliver smooth animations and seamless user experience across all devices, highlighting the studio\'s expertise in innovative architectural solutions and sustainable design practices.',
    processImage: createSecondaryImage(
      '/Landscape/work/Processing.png',
      'Landscapo Development Process'
    ),
    problemTitle: 'The Challenge',
    problemDescription: [
      'Landscapo Architecture Studio needed a sophisticated digital platform to showcase their extensive portfolio of architectural projects and establish their brand presence in the competitive architecture and design market. The challenge was to create a visually stunning, multi-page website that could effectively present complex architectural concepts, project galleries, and design philosophies while maintaining fast load times and smooth interactions. The platform needed to serve diverse audiences including potential clients, industry partners, and design enthusiasts.',
      'The website required seamless presentation of project portfolios across multiple categories (Urban, Interior, Corporate, Residential) with high-quality imagery, detailed project specifications, and interactive galleries. Additionally, the platform needed to communicate the studio\'s impressive metrics—50+ completed projects, 100+ expert team members, and $3.5M in project value—while incorporating engaging animations, FAQ sections for client inquiries, and clear service descriptions. All of this needed to work flawlessly across desktop, tablet, and mobile devices with intuitive navigation and fast performance.'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'Built with Next.js 14 and TypeScript, leveraging the App Router architecture for optimal performance and SEO capabilities. Implemented Framer Motion for sophisticated scroll-triggered animations and smooth page transitions that enhance the visual storytelling of architectural projects. Created a component-based architecture with dedicated sections for hero presentations, metrics showcase, project galleries, experience highlights, FAQ modules, and call-to-action components. Developed dynamic routing for individual project pages with detailed property information, overview sections, and image galleries.',
      'Designed a modular component system with reusable elements across landing, project, service, about, and contact sections. Implemented responsive layouts using Tailwind CSS for consistent styling and mobile-first design principles. Created an intuitive project categorization system (Urbano, Interior, Corporate) with filtering capabilities and smooth transitions between views. Integrated interactive FAQ accordion components, animated metric counters, and optimized image carousels showcasing architectural designs. Deployed on Netlify for reliable hosting with continuous deployment integration and optimal asset delivery.'
    ],
    closingImage: createHeroImage(
      '/Landscape/work/Footer.png',
      'Landscapo Platform Final Product'
    ),
    externalLink: 'https://landscapo.netlify.app/'
  },

  'stayli-vacation-rental-platform': {
    id: 'stayli-vacation-rental-platform',
    title: 'Stayli Vacation Rental Platform',
    description: 'Modern vacation rental marketplace connecting travelers with extraordinary stays worldwide, featuring property listings and seamless booking experience.',
    category: 'products',
    thumbnailImage: 'https://cdn.prod.website-files.com/6811ad3e11282304843a1ca2/6811ad3e11282304843a1e18_stayli-black-logo.svg',
    heroImage: createHeroImage(
      '/Realestate/work/Hero.png',
      'Stayli Platform Hero'
    ),
    secondaryImage: createSecondaryImage(
      '/Realestate/work/secondary.png',
      'Stayli Property Listings Interface'
    ),
    about: {
      client: 'Stayli',
      contribution: 'Full-Stack Development, UI/UX Implementation, Dynamic Routing',
      year: '2024'
    },
    fullDescription: 'A comprehensive vacation rental platform built for Stayli, featuring multiple pages including Home, About, Listings, Property Details, and Contact. The platform showcases curated vacation rentals ranging from urban lofts to beachfront villas, mountain cabins, and luxury suites. Built with Next.js App Router architecture to deliver dynamic property browsing, detailed listing pages with image galleries, amenity showcases, and integrated booking forms. The platform serves diverse travelers seeking budget-friendly options to high-end luxury retreats with intuitive search and filtering capabilities.',
    processImage: createSecondaryImage(
      '/Realestate/work/Processing.png',
      'Stayli Development Process'
    ),
    problemTitle: 'The Challenge',
    problemDescription: [
      'Stayli needed a digital marketplace to bridge the gap between travelers seeking unique accommodations and property owners offering exceptional stays. The challenge was to create a scalable platform that could effectively showcase diverse property types—from $95 mountain cabins to $210 beachfront suites—while maintaining consistent user experience across property categories. The platform needed to handle dynamic routing for individual property pages, support multiple property attributes (bedrooms, guests, pricing, ratings), and present complex information in an accessible format.',
      'The website required clear presentation of property features including high-quality image galleries, detailed amenities lists, room type variations, location information, and guest reviews. Additionally, the platform needed FAQ sections for customer support, testimonial displays for social proof, destination exploration features, and contact forms for inquiries—all while maintaining optimal performance with image optimization, responsive design across all devices, and SEO-friendly architecture for property discoverability.'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'Built with Next.js 14 and TypeScript, leveraging the App Router with dynamic routing patterns ([slug]) for scalable property detail pages. Implemented a robust data architecture using TypeScript interfaces for type-safe property management, including PropertyImage, PropertyAmenity, and Property models with comprehensive attributes (pricing, ratings, reviews, features, amenities). Created five core pages (Home, About, Listings, Property Detail, Contact) with dedicated component architecture for landing sections, listing displays, and property showcases.',
      'Designed a modular component system with reusable elements across hero sections, destination cards, testimonial displays, FAQ accordions, and call-to-action modules. Implemented responsive image handling with srcSet and sizes attributes for optimal loading performance across devices. Created dynamic property filtering by location, floor, size, and bedrooms with real-time search capabilities. Integrated property rating system (5-star reviews), discount badges, and multi-image carousels for property galleries. Deployed on Netlify with continuous deployment, achieving fast load times and seamless navigation between property listings and detail pages.'
    ],
    closingImage: createHeroImage(
      '/Realestate/work/Footer.png',
      'Stayli Platform Final Product'
    ),
    externalLink: 'https://realsttate.netlify.app/'
  },

  'elev8-rwanda-website': {
    id: 'elev8-rwanda-website',
    title: 'Elev8 Rwanda Corporate Website',
    description: 'Multi-brand corporate website with CMS integration and internationalization.',
    category: 'products',
    thumbnailImage: '/Elev8/Elev8-logo-dark.svg',
    heroImage: createHeroImage(
      '/Elev8/work/Heroimage.png',
      'Elev8 Rwanda Website Hero'
    ),
    secondaryImage: createSecondaryImage(
      '/Elev8/work/secondaryImage.png',
      'Elev8 Rwanda Multi-Brand Interface'
    ),
    about: {
      client: 'Elev8 Rwanda',
      contribution: 'Full-Stack Development, UI/UX Design, CMS Integration',
      year: '2024'
    },
    fullDescription: 'A comprehensive corporate website built for Elev8 Rwanda, featuring two distinct sub-brands: Elev8 Media (digital marketing and media production) and Elev8 Moments (event planning and management). The platform integrates Sanity CMS for dynamic content management, supports three languages (English, French, Arabic), and includes a complete blog system with category filtering and detailed post pages.',
    processImage: createSecondaryImage(
      '/Elev8/work/processimage.png',
      'Elev8 Development Process'
    ),
    problemTitle: 'The Challenge',
    problemDescription: [
      'Elev8 Rwanda needed a unified digital presence that could effectively showcase two distinct sub-brands while maintaining a cohesive corporate identity. The challenge was to create a scalable platform that could handle multilingual content, dynamic service offerings, and portfolio showcases for both media production and event management services.',
      'The website needed to serve multiple audiences: potential clients seeking media services, event planning customers, blog readers, and business partners. Additionally, the content team required an intuitive CMS to manage services, team members, testimonials, blog posts, and brand-specific portfolios without technical knowledge.'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'Built with Next.js 14 and TypeScript, leveraging App Router for optimal performance and SEO. Integrated Sanity CMS with custom schema types for flexible content management across home pages, services, brands, team members, testimonials, and blog posts. Implemented a robust internationalization system supporting English, French, and Arabic with locale-specific routing.',
      'Designed a modular component architecture with 12+ reusable home sections including hero, services, stats, testimonials, team showcase, blog preview, and newsletter subscription. Created dedicated brand pages for Elev8 Media and Elev8 Moments with unique service packages, portfolio galleries, and event type showcases. Implemented dark mode support with next-themes and built a comprehensive UI component library using Radix UI and Tailwind CSS for consistent design across all pages.'
    ],
    closingImage: createHeroImage(
      '/Elev8/work/ClosingImage.png',
      'Elev8 Rwanda Final Product'
    ),
    externalLink: 'https://www.elev8rwanda.com/en'
  },

  'elev8-moments-event-design': {
    id: 'elev8-moments-event-design',
    title: 'Elev8 Moments - Event Design Platform',
    description: 'Full-service event design and workshop platform for creating intentional, memorable experiences.',
    category: 'products',
    thumbnailImage: '/Elev8-Moments/Elev8-logo-moment-dark.svg',
    heroImage: createHeroImage(
      '/Elev8-Moments/work/hero%20image.png',
      'Elev8 Moments Event Design Platform'
    ),
    secondaryImage: createSecondaryImage(
      '/Elev8-Moments/work/secondary%20image.png',
      'Event Design Gallery View'
    ),
    about: {
      client: 'Elev8 Moments',
      contribution: 'Full-Stack Development, UI/UX Design, Brand Integration',
      year: '2024'
    },
    fullDescription: 'Elev8 Moments is a comprehensive digital platform designed to showcase and manage premium event design services, creative workshops, and thoughtful gifting solutions. The platform serves as both a portfolio and booking system for clients seeking intentionally curated experiences that foster connection, celebration, and meaningful moments.',
    processImage: createSecondaryImage(
      '/Elev8-Moments/work/process%20image.png',
      'Development Process'
    ),
    problemTitle: 'The Challenge',
    problemDescription: [
      'Event design businesses often struggle to effectively showcase their diverse service offerings—from event setup and décor to creative workshops and corporate gifting—in a cohesive digital experience. Traditional websites fail to capture the emotional essence and attention to detail that defines premium event services.',
      'The client needed a platform that could elegantly present multiple service categories (Event Design, Experiences & Workshops, Thoughtful Gifting) while maintaining a luxurious, intentional brand identity. The challenge was creating an intuitive navigation system that guides visitors through various offerings without overwhelming them, while also showcasing a dynamic image gallery that demonstrates the quality and creativity of their work.'
    ],
    solutionTitle: 'The Solution',
    solutionDescription: [
      'Built with Next.js 14 and TypeScript, the platform leverages modern React patterns and server-side rendering for optimal performance and SEO. The architecture features a modular component system with dedicated route sections for each service category, ensuring scalability and maintainability as the business grows.',
      'The design system implements a sophisticated color palette (#F9F2EC cream and #1E1E1E charcoal) with custom typography (NoirEtBlanc for headings, Montserrat for subheadings, Raleway for body text) that reinforces the brand\'s elegant, intentional aesthetic. Responsive layouts adapt seamlessly across devices, with carefully crafted grid systems that showcase imagery while maintaining readability. The shared Gallery component provides a unified visual experience across pages, while dedicated sections for Event Setup & Decor, Tablescapes, Florals, and Seasonal offerings allow visitors to explore specific services in depth. Interactive elements include smooth hover transitions, optimized Next.js Image components for fast loading, and strategic call-to-action placements that guide users toward booking inquiries.'
    ],
    closingImage: createHeroImage(
      '/Elev8-Moments/work/closing%20image.png',
      'Final Platform Experience'
    ),
    externalLink: 'https://moments.elev8rwanda.com/'
  },

  
}

// ============================================================================
// DERIVED DATA - Automatically generated from workDetailsData
// ============================================================================

// Get all works as an array
export const getAllWorks = (): WorkDetail[] => {
  return Object.values(workDetailsData)
}

// Get works by category for main.tsx tabs
export const getWorksByCategory = (category: 'products' | 'uiux' | '3d'): WorkDetail[] => {
  return getAllWorks().filter(work => work.category === category)
}

// Helper functions for each category
export const getProductsData = () => getWorksByCategory('products')
export const getUIUXData = () => getWorksByCategory('uiux')
export const get3DData = () => getWorksByCategory('3d')

// Get work by slug for detail pages
export const getWorkBySlug = (slug: string): WorkDetail | undefined => {
  return workDetailsData[slug]
}

// Get all work slugs (useful for static generation)
export const getAllWorkSlugs = (): string[] => {
  return Object.keys(workDetailsData)
}

// Works listing data for works/page.tsx (simplified view)
export const worksData = getAllWorks().map(work => ({
  id: work.id,
  title: work.title,
  description: work.description,
  image: work.thumbnailImage
}))
