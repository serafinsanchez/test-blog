'use client';

import React from 'react';
import Link from 'next/link';

interface PostProps {
  id?: string;
  title: string;
  content: string;
  author: string;
  date: string;
  showFull?: boolean;
}

export default function Post({ id, title, content, author, date, showFull = false }: PostProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const postContent = (
    <>
      <h3 className="text-xl font-semibold mb-2 text-content">{title}</h3>
      <p className="text-content/80 mb-4">
        {showFull ? content : isExpanded ? content : `${content.substring(0, 200)}...`}
      </p>
      {!showFull && content.length > 200 && (
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className="text-primary hover:text-primary-dark mb-4 text-sm"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      <div className="flex justify-between items-center text-sm text-content/60">
        <span>By {author}</span>
        <time>{date}</time>
      </div>
    </>
  );

  return (
    <article className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors bg-surface">
      {id && !showFull ? (
        <Link href={`/blog/posts/${id}`} className="block">
          {postContent}
        </Link>
      ) : (
        <div className="block">
          {postContent}
        </div>
      )}
    </article>
  );
} 