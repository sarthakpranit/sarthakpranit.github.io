
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPostsData } from "@/data/blogPostsData";
import PostHeader from "@/components/post/PostHeader";
import PostImage from "@/components/post/PostImage";
import PostContent from "@/components/post/PostContent";
import PostNotFound from "@/components/post/PostNotFound";
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
        <div className="mt-16">
          <Separator className="mb-8" />
          <div className="flex justify-between items-center">
            <Button variant="ghost" onClick={() => handleNavigation('prev')}>
              <div className="flex items-center text-dark hover:text-primary">
                <ArrowLeft size={16} className="mr-2" />
                <span>{prevPost?.title || 'Previous Article'}</span>
              </div>
            </Button>
            
            <Button variant="ghost" asChild>
              <Link to="/blog" className="flex items-center text-dark hover:text-primary">
                <span>All Articles</span>
              </Link>
            </Button>
            
            <Button variant="ghost" onClick={() => handleNavigation('next')}>
              <div className="flex items-center text-dark hover:text-primary">
                <span>{nextPost?.title || 'Next Article'}</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
