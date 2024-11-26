import { posts } from '@/app/lib/posts'
import Post from '@/app/ui/components/Post'

export default function Posts() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
      <div className="space-y-8">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
} 