
import { useEffect } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogList from "@/components/blog/BlogList";
import { blogPostsData } from "@/data/blogPostsData";

const Blog = () => {
  // Convert blog posts object to array format
  const postsArray = Object.entries(blogPostsData).map(([id, post]) => ({
    id,
    title: post.title,
    excerpt: post.content.substring(0, 150) + "...",
    date: post.date,
    thumbnail: post.heroImage,
    categories: post.categories,
  }));

  // Ensure proper scroll position when navigating to the blog page
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set page title for screen readers
    document.title = "Articles | Sarthak Pranit";
  }, []);

  return (
    <main 
      className="min-h-screen pt-32 pb-20 px-6"
      id="main-content"
      tabIndex={-1}
    >
      <div className="max-w-4xl mx-auto">
        <BlogHeader />
        <BlogList posts={postsArray} />
      </div>
    </main>
  );
};

export default Blog;
