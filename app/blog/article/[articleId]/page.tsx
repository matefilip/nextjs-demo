"use client";

import React from 'react';
import Offers from '../../../components/blog/Offers';
import ArticleContent from '../../../components/blog/ArticleContent';
import RecommendedArticles from '../../../components/blog/RecommendedArticles';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface RecommendedArticle {
  id: number;
  title: string;
  key: string;
  addedAt: string;
  mediaUrl: string;
}

interface Section {
  type: string;
  content: string;
  alternativeText: string | null;
}

interface Article {
  id: number;
  addedAt: string;
  categoryId: number;
  categoryName: string;
  key: string;
  language: string;
  lastEditedAt: string | null;
  mediaUrl: string;
  metaDescription: string;
  slug: string;
  title: string;
  type: string;
  sections: Section[];
  recommended: RecommendedArticle[];
}

const ArticleDetails = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchArticle = async () => {
      const articleId = pathname.split("/").pop();
      const response = await fetch(`https://api.europa.jobs/blog/article/${articleId}`);
      const data: Article = await response.json();
      setArticle(data);
    };

    fetchArticle();
  }, [pathname]);
  return (
    <div className="flex justify-center min-h-screen bg-gray-800 text-white">
      {article ? (
        <>
          <Offers offers={article.offers} />
          <ArticleContent article={article} />
          <RecommendedArticles recommended={article.recommended} />
        </>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default ArticleDetails;
