
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
      title: "CUJO Smart Firewall",
      subtitle: "Redesigning home network security for the modern family",
      roles: ["Product Design", "User Research", "Prototyping"],
      year: "2024",
      client: "CUJO AI",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "CUJO provides the power of enterprise security solutions...",
      link: "/case-study/1"
    },
    {
      id: 2,
      title: "Healthcare Platform",
      subtitle: "Streamlining patient care through digital innovation",
      roles: ["UX/UI Design", "Design System", "User Testing"],
      year: "2023",
      client: "MedTech Solutions",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "A comprehensive healthcare platform...",
      link: "/case-study/2"
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      subtitle: "Creating intuitive financial management tools",
      roles: ["Product Strategy", "Visual Design", "Data Visualization"],
      year: "2023",
      client: "FinanceFlow",
      image: "/placeholder.svg",
      heroImage: "/placeholder.svg",
      content: "Designed a comprehensive financial dashboard...",
      link: "/case-study/3"
    }
  ];
};
