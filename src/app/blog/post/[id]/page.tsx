import { posts } from '@/app/lib/posts';
import Post from '@/app/ui/components/Post';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Post
        title={post.title}
        content={post.content}
        author={post.author}
        date={post.date}
        showFull={true}
      />
    </div>
  );
}
