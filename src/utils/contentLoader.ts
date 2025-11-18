// Content loader utility for markdown files

export interface CaseStudyFrontmatter {
  id: number;
  title: string;
  subtitle: string;
  roles: string[];
  year: string;
  client: string;
  image: string;
  heroImage: string;
}

export interface CaseStudy {
  frontmatter: CaseStudyFrontmatter;
  content: string;
  sections: {
    introduction?: string;
    problem?: string;
    solution?: string;
    conclusion?: string;
  };
}

// Hardcoded case study data as fallback
const fallbackCaseStudies: CaseStudy[] = [
  {
    frontmatter: {
      id: 1,
      title: "Traveller Intent Framework",
      subtitle: "Teaching AI systems to understand what travelers actually want, across hotels, flights, restaurants, and everything in between",
      roles: ["Lead Designer, Marketplace"],
      year: "2024",
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg"
    },
    content: "traveller-intent-framework", // Reference to MDX file
    sections: {
      introduction: "Creating a shared language for understanding traveler intent across 94 teams at Booking.com, with €200M+ revenue impact.",
      problem: "Different teams at Booking.com built isolated systems to understand traveler intent, making it impossible to deliver a connected trip experience.",
      solution: "Designed a unified Intent Framework based on three models: Choices (fundamental decisions), Actions (progression stages), and Needs (explicit and implicit signals).",
      conclusion: "The framework became core to Booking.com's Connected Trip strategy, giving teams a shared language that made coordination faster and enabled new AI-powered experiences."
    }
  },
  {
    frontmatter: {
      id: 2,
      title: "The Architecture of Anticipation",
      subtitle: "The invisible framework that powers personalization across 100+ teams",
      roles: ["UX Architecture", "Personalization Frameworks", "System Design"],
      year: "2024 - Today", 
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg"
    },
    content: "",
    sections: {
      introduction: "A comprehensive healthcare platform that connects patients, doctors, and medical staff through intuitive digital interfaces. The project focused on reducing complexity while maintaining clinical accuracy.",
      problem: "Healthcare systems often struggle with fragmented communication and complex interfaces that hinder rather than help patient care.",
      solution: "We created a unified platform that streamlines workflows, improves communication, and provides clear, actionable insights for healthcare professionals.",
      conclusion: "The healthcare platform successfully reduced administrative overhead and improved patient outcomes through thoughtful design and user-centered approach."
    }
  },
  {
    frontmatter: {
      id: 3,
      title: "When Everyone Wants the Front Page",
      subtitle: "How we balanced 9M daily users against 54 teams' competing business goals",
      roles: ["Lead UX Strategy", "Cross-functional Leadership", "Stakeholder Management"],
      year: "2022",
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg"
    },
    content: "",
    sections: {
      introduction: "Designed a comprehensive financial dashboard that helps users track expenses, manage investments, and plan for the future. The challenge was making complex financial data accessible and actionable.",
      problem: "Traditional financial tools are often overwhelming and fail to provide clear insights that help users make informed decisions.",
      solution: "We created an intuitive dashboard with smart data visualization, personalized insights, and actionable recommendations that empower users to take control of their finances.",
      conclusion: "The fintech dashboard successfully transformed how users interact with their financial data, leading to increased engagement and better financial outcomes."
    }
  }
];

// Load all case studies (currently using fallback data)
export function loadAllCaseStudies(): CaseStudy[] {
  console.log('Loading case studies from fallback data');
  return fallbackCaseStudies;
}

// Load a specific case study by ID
export function loadCaseStudyById(id: number): CaseStudy | null {
  const caseStudies = loadAllCaseStudies();
  return caseStudies.find(cs => cs.frontmatter.id === id) || null;
}

// Load case study metadata for listing
export function loadCaseStudyMetadata() {
  const caseStudies = loadAllCaseStudies();
  // Only show case study #1 on home page
  return caseStudies
    .filter(cs => cs.frontmatter.id === 1)
    .map(cs => ({
      id: cs.frontmatter.id,
      title: cs.frontmatter.title,
      subtitle: cs.frontmatter.subtitle,
      roles: cs.frontmatter.roles,
      year: cs.frontmatter.year,
      client: cs.frontmatter.client,
      image: cs.frontmatter.image,
      link: `/case-study/${cs.frontmatter.id}`
    }));
}

// Generic markdown loader for single files
export function loadMarkdownContent(path: string): string {
  const modules = import.meta.glob('/src/content/*.md', { eager: true, query: '?raw', import: 'default' });
  const mod = modules[path] as string | undefined;
  if (!mod) throw new Error(`Markdown file not found: ${path}`);
  // Remove frontmatter if present
  return mod.replace(/^---[\s\S]*?---/, '').trim();
} 