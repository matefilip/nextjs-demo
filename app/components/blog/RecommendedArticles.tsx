import React from 'react';
import { useRouter } from 'next/navigation';

interface RecommendedArticlesProps {
  recommended: RecommendedArticle[];
}

const RecommendedArticles: React.FC<RecommendedArticlesProps> = ({ recommended }) => {
  const router = useRouter();
  
  return (
    <div className="fixed right-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Recommended Articles</h2>
      {recommended.map((rec, index) => (
        <div
          className={`mb-6 ${index !== 0 ? 'border-t border-gray-700 pt-4' : ''} p-4 hover:bg-gray-700 cursor-default`}
          onClick={() => router.push(`/blog/article/${rec.key}`)}
        >
          <h3 className="text-lg font-bold text-white mb-2">{rec.title}</h3>
          <img src={rec.mediaUrl} alt={rec.title} className="w-full h-auto rounded mb-2" />
        </div>
      ))}
    </div>
  );
};

export default RecommendedArticles;
