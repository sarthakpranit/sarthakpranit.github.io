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
      title: "The €200M Algorithm",
      subtitle: "Why your vacation suggestions got 400% better overnight",
      roles: ["Product Strategy", "AI/ML Design", "Cross-functional Leadership"],
      year: "2023",
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg"
    },
    content: "",
    sections: {
      introduction: "CUJO provides the power of enterprise security solutions for simple and elegant devices. I helped CUJO shape their brand and user experience.",
      problem: "The challenge was to simplify complex network security concepts for everyday users, making it accessible and manageable through an intuitive interface.",
      solution: "We designed a user-friendly mobile app and web dashboard that provides real-time threat detection, parental controls, and device management, all while maintaining a seamless user experience.",
      conclusion: "The CUJO project demonstrated the power of user-centric design in transforming complex technology into an accessible and valuable tool for everyday users. By focusing on simplicity and ease of use, we helped CUJO establish itself as a leader in home network security."
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
  return caseStudies.map(cs => ({
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