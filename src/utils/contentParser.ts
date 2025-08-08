
interface CaseStudyFrontmatter {
  id: number;
  title: string;
  subtitle: string;
  roles: string[];
  year: string;
  client: string;
  image: string;
  heroImage: string;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  content: string;
  link: string;
}

export const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content };
  }
  
  const [, frontmatterText, markdownContent] = match;
  const frontmatter: any = {};
  
  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      try {
        // Try to parse as JSON for arrays
        frontmatter[key.trim()] = value.startsWith('[') ? JSON.parse(value) : value.replace(/"/g, '');
      } catch {
        frontmatter[key.trim()] = value.replace(/"/g, '');
      }
    }
  });
  
  return { frontmatter, content: markdownContent };
};

export const getCaseStudies = async (): Promise<CaseStudy[]> => {
  const caseStudyFiles = [
    { path: '/src/content/case-studies/cujo.md', id: 1 },
    { path: '/src/content/case-studies/healthcare.md', id: 2 },
    { path: '/src/content/case-studies/fintech.md', id: 3 }
  ];
  
  // In a real implementation, you'd fetch these files
  // For now, we'll return the structured data
  return [
    {
      id: 1,
      title: "The €200M Algorithm",
      subtitle: "Why your vacation suggestions got 400% better overnight?",
      roles: ["Product Strategy", "AI/ML Design", "Cross-functional Leadership"],
      year: "2023-2024",
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "CUJO provides the power of enterprise security solutions...",
      link: "/case-study/1"
    },
    {
      id: 2,
      title: "The Architecture of Anticipation",
      subtitle: "The invisible framework that powers personalization across 100+ teams",
      roles: ["UX Architecture", "Personalization Frameworks", "System Design"],
      year: "2024 - Today", 
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "A comprehensive healthcare platform...",
      link: "/case-study/2"
    },
    {
      id: 3,
      title: "When Everyone Wants the Front Page",
      subtitle: "How we balanced 9M daily users against 54 teams' competing business goals",
      roles: ["Lead UX Strategy", "Cross-functional Leadership", "Stakeholder Management"],
      year: "2022-2023",
      client: "Booking.com",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "Designed a comprehensive financial dashboard...",
      link: "/case-study/3"
    }
  ];
};
