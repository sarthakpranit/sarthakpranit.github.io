
import React from 'react';
import { Link } from 'react-router-dom';

const PostNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold dark:text-white">Post not found</h1>
      <Link to="/blog" className="mt-4 text-primary">
        Return to blog
      </Link>
    </div>
  );
};

export default PostNotFound;
