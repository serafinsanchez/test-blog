import React from 'react';

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">About</h1>
        <div className="max-w-2xl text-lg">
          <p>Welcome to our website. This is the about page where you can learn more about us.</p>
        </div>
      </main>
    </div>
  );
}


