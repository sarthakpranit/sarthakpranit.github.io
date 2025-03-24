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
  loadById: async (id: string) => {
    const cacheKey = `project/${id}`;
    if (contentCache.has(cacheKey)) {
      return contentCache.get(cacheKey);
    }

    try {
      // Use static glob pattern for the specific file
      const files = import.meta.glob('../content/projects/*.ts', { eager: true });
      const filePath = Object.keys(files).find(path => path.includes(id));
      
      if (!filePath) {
        return null;
      }

      const content = files[filePath];
      if (content && typeof content === 'object' && 'default' in content) {
        contentCache.set(cacheKey, content.default);
        return content.default as Project;
      }
      return null;
    } catch (error) {
      console.error(`Error loading project ${id}:`, error);
      return null;
    }
  },
  clearCache: () => {
    for (const key of contentCache.keys()) {
      if (key.startsWith('project/') || key === 'projects') {
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
  loadById: async (id: string) => {
    const cacheKey = `blog/${id}`;
    if (contentCache.has(cacheKey)) {
      return contentCache.get(cacheKey);
    }

    try {
      // Use static glob pattern for the specific file
      const files = import.meta.glob('../content/blog/*.ts', { eager: true });
      const filePath = Object.keys(files).find(path => path.includes(id));
      
      if (!filePath) {
        return null;
      }

      const content = files[filePath];
      if (content && typeof content === 'object' && 'default' in content) {
        contentCache.set(cacheKey, content.default);
        return content.default as BlogPost;
      }
      return null;
    } catch (error) {
      console.error(`Error loading blog post ${id}:`, error);
      return null;
    }
  },
  clearCache: () => {
    for (const key of contentCache.keys()) {
      if (key.startsWith('blog/') || key === 'blog') {
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