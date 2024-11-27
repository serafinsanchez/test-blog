import Post from '@/app/ui/components/Post';

export default function ApiRoutesPost() {
  const post = {
    id: "q4t8y5l",
    title: "API Routes in Next.js",
    content: "Next.js provides a powerful solution for building APIs right alongside your frontend code. This post explores how to create and use API routes in Next.js, including handling different HTTP methods, connecting to databases, and implementing authentication. Learn best practices for structuring your API routes and managing server-side logic effectively.",
    date: "2024-03-10",
    author: "David Kim"
  };

  return (
    <main className="min-h-screen bg-surface">
      <div className="container mx-auto px-4 py-20">
        <Post {...post} showFull={true} />
      </div>
    </main>
  );
} 