// client/src/pages/BlogList.tsx
import { useState, useEffect } from 'react';
import { fetchPosts, BlogPost } from '../services/blogService';

interface BlogListProps {
  onPostSelect: (postId: number) => Promise<void>;
}

export default function BlogList({ onPostSelect }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div 
            key={post.id} 
            className="p-6 bg-white rounded-lg shadow cursor-pointer"
            onClick={() => onPostSelect(post.id)}
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.publishedDate).toLocaleDateString()}
            </p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
