import Post from '@/app/ui/components/Post'

export default function Posts() {
  const posts = [
    {
      id: "getting-started",
      title: "Getting Started with Next.js",
      content: "Next.js is a powerful React framework that makes building full-stack web applications simple and efficient...",
      date: "2024-03-20",
      author: "Sarah Johnson"
    },
    {
      id: "api-routes",
      title: "API Routes in Next.js",
      content: "Next.js provides a powerful solution for building APIs right alongside your frontend code...",
      date: "2024-03-10",
      author: "David Kim"
    },
    {
      id: "image-optimization",
      title: "Optimizing Images in Next.js",
      content: "Image optimization is crucial for web performance. Next.js provides built-in Image component...",
      date: "2024-03-05",
      author: "Lisa Thompson"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <Post
              key={post.id}
              {...post}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 