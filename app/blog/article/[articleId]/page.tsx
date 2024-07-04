"use client";

import React from 'react';
import Offers from '../../../components/blog/Offers';
import ArticleContent from '../../../components/blog/ArticleContent';
import RecommendedArticles from '../../../components/blog/RecommendedArticles';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import LoadingSpinner from '@/app/components/LoadingSpinner';

const ArticleDetails = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const articleId = pathname.split("/").pop();
      try{
        const response = await fetch(`https://api.europa.jobs/blog/article/${articleId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data: Article = await response.json();
        setArticle(data);
      }
      catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
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
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ArticleDetails;
