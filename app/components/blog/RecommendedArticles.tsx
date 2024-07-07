import React from 'react';
import { useRouter } from 'next/navigation';
import Card from './ArticleCard';

interface RecommendedArticle {
  key: string;
  title: string;
  mediaUrl: string;
  addedAt: string;
}

interface RecommendedArticlesProps {
  recommended: RecommendedArticle[];
}

const RecommendedArticles: React.FC<RecommendedArticlesProps> = ({ recommended }) => {
  const router = useRouter();
  
  return (
    <div className="fixed right-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Również polecane</h2>
      {recommended.map((rec) => (
        <div key={rec.key} className="mb-6">
          <Card article={rec} />
        </div>
      ))}
    </div>
  );
};

export default RecommendedArticles;
