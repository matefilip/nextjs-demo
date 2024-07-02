"use client";

import { useSearchParams  } from 'next/navigation';

const ArticleDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("articleId");

  if (!id) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of article {id}.</p>
    </div>
  );
};

export default ArticleDetails;

