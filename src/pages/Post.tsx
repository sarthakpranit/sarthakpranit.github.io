
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPostsData } from "@/data/blogPostsData";
import PostHeader from "@/components/post/PostHeader";
import PostImage from "@/components/post/PostImage";
import PostContent from "@/components/post/PostContent";
import PostNavigation from "@/components/post/PostNavigation";
import PostNotFound from "@/components/post/PostNotFound";
import Loading from "@/components/ui/Loading";

// Create an array of post IDs for navigation
const postIds = Object.keys(blogPostsData);

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would fetch data from an API
    if (id && blogPostsData[id as keyof typeof blogPostsData]) {
      setPost(blogPostsData[id as keyof typeof blogPostsData]);
    }
    setIsLoading(false);
  }, [id]);

  const handleNavigation = (direction: 'next' | 'prev') => {
    if (!id) return;
    
    const currentIndex = postIds.indexOf(id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % postIds.length;
    } else {
      newIndex = (currentIndex - 1 + postIds.length) % postIds.length;
    }
    
    navigate(`/post/${postIds[newIndex]}`);
  };

  // Get next and previous post details for buttons
  const getAdjacentPost = (direction: 'next' | 'prev') => {
    if (!id) return null;
    
    const currentIndex = postIds.indexOf(id);
    if (currentIndex === -1) return null;
    
    let adjacentIndex;
    if (direction === 'next') {
      adjacentIndex = (currentIndex + 1) % postIds.length;
    } else {
      adjacentIndex = (currentIndex - 1 + postIds.length) % postIds.length;
    }
    
    const adjacentId = postIds[adjacentIndex];
    return {
      id: adjacentId,
      title: blogPostsData[adjacentId as keyof typeof blogPostsData]?.title || 'Article'
    };
  };

  const prevPost = getAdjacentPost('prev');
  const nextPost = getAdjacentPost('next');

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
        
        {/* Post Navigation */}
        <PostNavigation 
          prevPost={prevPost}
          nextPost={nextPost}
          onNavigate={handleNavigation}
        />
      </div>
    </div>
  );
};

export default Post;
