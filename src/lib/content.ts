import { Project, BlogPost } from '../types/content';

// Cache for content to avoid repeated imports
const contentCache = new Map<string, any>();

// Generic content loader with caching
async function loadContent<T>(path: string, id?: string): Promise<T | null> {
  const cacheKey = id ? `${path}/${id}` : path;
  
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey);
  }

  try {
    const content = await import(/* @vite-ignore */ path);
    if (content && typeof content === 'object' && 'default' in content) {
      contentCache.set(cacheKey, content.default);
      return content.default as T;
    }
    return null;
  } catch (error) {
    console.error(`Error loading content from ${path}:`, error);
    return null;
  }
}

// Project content management
export const projectContent = {
  loadAll: async () => {
    const cacheKey = 'projects';
    if (contentCache.has(cacheKey)) {
      return contentCache.get(cacheKey);
    }

    try {
      // Use static glob pattern
      const files = import.meta.glob('../content/projects/*.ts', { eager: true });
      const items: Project[] = [];

      for (const path in files) {
        const content = files[path];
        if (content && typeof content === 'object' && 'default' in content) {
          items.push(content.default as Project);
        }
      }

      const sortedItems = items.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      contentCache.set(cacheKey, sortedItems);
      return sortedItems;
    } catch (error) {
      console.error('Error loading projects:', error);
      return [];
    }
  },
  loadById: (id: string) => {
    return loadContent<Project>(`../content/projects/${id}.ts`);
  },
  clearCache: () => {
    for (const key of contentCache.keys()) {
      if (key.startsWith('../content/projects/') || key === 'projects') {
        contentCache.delete(key);
      }
    }
  }
};

// Blog content management
export const blogContent = {
  loadAll: async () => {
    const cacheKey = 'blog';
    if (contentCache.has(cacheKey)) {
      return contentCache.get(cacheKey);
    }

    try {
      // Use static glob pattern
      const files = import.meta.glob('../content/blog/*.ts', { eager: true });
      const items: BlogPost[] = [];

      for (const path in files) {
        const content = files[path];
        if (content && typeof content === 'object' && 'default' in content) {
          items.push(content.default as BlogPost);
        }
      }

      const sortedItems = items.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      contentCache.set(cacheKey, sortedItems);
      return sortedItems;
    } catch (error) {
      console.error('Error loading blog posts:', error);
      return [];
    }
  },
  loadById: (id: string) => {
    return loadContent<BlogPost>(`../content/blog/${id}.ts`);
  },
  clearCache: () => {
    for (const key of contentCache.keys()) {
      if (key.startsWith('../content/blog/') || key === 'blog') {
        contentCache.delete(key);
      }
    }
  }
};

// Export legacy functions for backward compatibility
export const loadProjects = projectContent.loadAll;
export const loadProject = projectContent.loadById;
export const loadBlogPosts = blogContent.loadAll;
export const loadBlogPost = blogContent.loadById; 