import React from 'react';
import { useRouter } from 'next/navigation';

interface RecommendedArticlesProps {
  recommended: RecommendedArticle[];
}

const RecommendedArticles: React.FC<RecommendedArticlesProps> = ({ recommended }) => {
  const router = useRouter();
  
  return (
    <div className="fixed right-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Również polecane</h2>
      {recommended.map((rec, index) => (
        <div
          className={`relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105 border border-gray-300 mb-6 ${index !== 0 ? 'border-t border-gray-300 pt-0' : ''}`}
          onClick={() => router.push(`/blog/article/${rec.key}`)}
        >
          <div className="relative h-full">
            <img src={rec.mediaUrl} alt={rec.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-lg font-bold text-white text-center px-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
                {rec.title}
              </h2>
            </div>
          </div>
          <div className="p-4 relative">
            <div className="absolute bottom-0 right-1 text-sm text-gray-500 bg-white bg-opacity-60 px-2 py-1 rounded">
              {new Date(rec.addedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendedArticles;