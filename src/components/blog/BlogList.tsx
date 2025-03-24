
import React from 'react';
import BlogCard from "@/components/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  thumbnail?: string;
  categories: string[];
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div className="space-y-12 animate-fade-up">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          thumbnail={post.thumbnail}
          categories={post.categories}
        />
      ))}
    </div>
  );
};

export default BlogList;
