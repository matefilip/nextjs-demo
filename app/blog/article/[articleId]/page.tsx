"use client";

import { usePathname  } from 'next/navigation'

const ArticleDetails = () => {
  const articleId  = usePathname().split("/").pop();

  if (!articleId) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>This is the content of article {articleId}.</p>
    </div>
  );
};

export default ArticleDetails;