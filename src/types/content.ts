// Base content interface
export interface BaseContent {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
}

// Project specific types
export interface Project extends BaseContent {
  client: string;
  role: string;
  categories: string[];
  heroImage: string;
  content: string;
  technologies?: string[];
  links?: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
}

// Blog post specific types
export interface BlogPost extends BaseContent {
  author: string;
  readingTime: string;
  tags: string[];
  content: string;
  featuredImage?: string;
  excerpt?: string;
}

// Content loading types
export interface ContentLoader<T> {
  loadAll: () => Promise<T[]>;
  loadById: (id: string) => Promise<T | null>;
  clearCache: () => void;
}

// Navigation types
export interface NavigationItem {
  id: string;
  title: string;
  path: string;
}

export interface ProjectNavigation {
  nextProjectId: string | null;
  previousProjectId: string | null;
  nextProjectTitle: string;
  previousProjectTitle: string;
}

// Error types
export interface ContentError {
  code: string;
  message: string;
  details?: unknown;
}

// Cache types
export interface ContentCache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  clear: () => void;
  has: (key: string) => boolean;
} 