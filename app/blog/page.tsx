"use client";

import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // Default to page 1
  const [totalPages, setTotalPages] = useState(1); // Default to 1 page

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // Set loading to true when fetching new page

      try {
        const response = await fetch(`https://api.europa.jobs/blog?Type=candidate&pageNumber=${currentPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();

        const { items, totalPages } = data;
        if (Array.isArray(items)) {
          setArticles(items as Article[]);
          setTotalPages(totalPages);
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
  }, [currentPage]); // Run effect when currentPage changes

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
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
