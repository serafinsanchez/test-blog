import Post from '@/app/ui/components/Post';

export default function ImageOptimizationPost() {
  const post = {
    id: "f3d7s9a",
    title: "Optimizing Images in Next.js",
    content: "Image optimization is crucial for web performance. Next.js provides built-in Image component and automatic optimization features that make handling images a breeze. We'll dive into using the Next.js Image component, explore its various properties, and learn about automatic image optimization, lazy loading, and best practices for responsive images.",
    date: "2024-03-05",
    author: "Lisa Thompson"
  };

  return (
    <main className="min-h-screen bg-surface">
      <div className="container mx-auto px-4 py-20">
        <Post {...post} showFull={true} />
      </div>
    </main>
  );
} 