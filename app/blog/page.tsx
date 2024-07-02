"use client";

import { useRouter } from 'next/navigation';

export default function Blog() {
  const router = useRouter();

  const navigateToArticle = async () => {
    router.push('/blog/article/page.tsx?articleId=1');
  };

  return (
    <div>
      <h1>Welcome to the Blog</h1>
      <p>This is the landing page of the blog.</p>
      <button onClick={navigateToArticle}>Go to Article</button>
    </div>
  );
}
