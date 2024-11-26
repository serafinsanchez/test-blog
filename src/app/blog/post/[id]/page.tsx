import { posts } from '@/app/lib/posts';
import Post from '@/app/ui/components/Post';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type PageParams = {
  id: string;
};

export default function BlogPost({
  params,
}: {
  params: PageParams;
}) {
  const { id } = params;
  
  // Find the post with matching id
  const post = posts.find(post => post.id === id);
  
  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Post
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
          showFull={true}
        />
      </div>
    </div>
  );
}

// Generate static params for all posts
export async function generateStaticParams(): Promise<PageParams[]> {
  return posts.map((post) => ({
    id: post.id,
  }));
}

// Generate metadata for each post
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const post = posts.find(post => post.id === params.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}
