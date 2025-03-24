// Project configuration
export const PROJECT_CONFIG = {
  order: [
    'ai-personalization',
    'home-screen',
    'checkout',
    'recommendations',
    'design-system'
  ] as const,
  defaultTitle: 'Projects',
  itemsPerPage: 9,
  cacheDuration: 5 * 60 * 1000, // 5 minutes
} as const;

// Blog configuration
export const BLOG_CONFIG = {
  defaultTitle: 'Blog',
  itemsPerPage: 6,
  cacheDuration: 5 * 60 * 1000, // 5 minutes
  readingTime: {
    wordsPerMinute: 200,
  },
} as const;

// Navigation configuration
export const NAV_CONFIG = {
  main: [
    { id: 'projects', title: 'Projects', path: '/projects' },
    { id: 'blog', title: 'Blog', path: '/blog' },
    { id: 'about', title: 'About', path: '/about' },
  ] as const,
  footer: [
    { id: 'projects', title: 'Projects', path: '/projects' },
    { id: 'timeline', title: 'Experience', path: '/timeline' },
    { id: 'blog', title: 'Articles', path: '/blog' },
    { id: 'about', title: 'About', path: '/about' },
  ] as const,
} as const;

// Social links
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/sarthakpranit',
  twitter: 'https://twitter.com/sarthakpranit',
  medium: 'https://medium.com/@sarthakpranit',
  github: 'https://github.com/sarthakpranit',
  email: 'sarthakpranit@gmail.com',
} as const;

// Site metadata
export const SITE_METADATA = {
  title: 'Sarthak Pranit',
  description: 'Lead Product Designer specializing in AI-driven personalization, recommendation systems, and scalable UX platforms.',
  location: 'Amsterdam',
  role: 'Lead Product Designer',
} as const;

// Content paths
export const CONTENT_PATHS = {
  projects: '../content/projects/*.ts',
  blog: '../content/blog/*.ts',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  projectNotFound: 'Project not found',
  blogPostNotFound: 'Blog post not found',
  loadError: 'Failed to load content',
  invalidId: 'Invalid content ID',
} as const; 