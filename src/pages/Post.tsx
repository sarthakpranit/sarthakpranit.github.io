
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPostsData } from "@/data/blogPostsData";
import PostHeader from "@/components/post/PostHeader";
import PostImage from "@/components/post/PostImage";
import PostContent from "@/components/post/PostContent";
import PostNotFound from "@/components/post/PostNotFound";
import Loading from "@/components/ui/Loading";

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (id && blogPostsData[id as keyof typeof blogPostsData]) {
      setPost(blogPostsData[id as keyof typeof blogPostsData]);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!post) {
    return <PostNotFound />;
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-tight animate-fade-in">
        <PostHeader 
          title={post.title}
          date={post.date}
          categories={post.categories}
          author={post.author}
        />
        
        {post.heroImage && (
          <PostImage 
            src={post.heroImage} 
            alt={post.title} 
          />
        )}
        
        <PostContent content={post.content} />
      </div>
    </div>
  );
};

export default Post;
