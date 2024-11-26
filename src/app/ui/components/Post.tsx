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
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">
        {showFull ? content : isExpanded ? content : `${content.substring(0, 200)}...`}
      </p>
      {!showFull && (
        <button 
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className="text-blue-500 hover:text-blue-400 mb-4 text-sm"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      )}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {author}</span>
        <time>{date}</time>
      </div>
    </>
  );

  return (
    <article className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
      {id ? (
        <Link href={`/blog/post/${id}`} className="block">
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