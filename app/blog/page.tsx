"use client";

import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://api.europa.jobs/blog?Type=candidate');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();

        const { items } = data;
        if (Array.isArray(items)) {
          setArticles(items as Article[]);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {articles.map(article => (
          <Card key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

interface Article {
  id: number;
  title: string;
  key: string;
  mediaUrl: string;
  addedAt: string;
}
