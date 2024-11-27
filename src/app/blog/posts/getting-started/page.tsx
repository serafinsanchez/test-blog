import Post from '@/app/ui/components/Post';

export default function GettingStartedPost() {
  const post = {
    id: "b4k9m2p",
    title: "Getting Started with Next.js",
    content: "Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. In this post, we'll explore the core concepts of Next.js, including its file-system based routing, server-side rendering capabilities, and how to create your first Next.js application. We'll also dive into best practices and common patterns used in Next.js development.",
    date: "2024-03-20",
    author: "Sarah Johnson"
  };

  return (
    <main className="min-h-screen bg-surface">
      <div className="container mx-auto px-4 py-20">
        <Post {...post} showFull={true} />
      </div>
    </main>
  );
} 