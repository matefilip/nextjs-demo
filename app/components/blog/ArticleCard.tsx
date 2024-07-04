"use client";

import { useRouter } from 'next/navigation';

const Card: React.FC<ArticlePreviewProps> = ({ article }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/article/${article.key}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105"
      onClick={handleClick}
    >
      <img src={article.mediaUrl} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-4">{article.title}</h2>
        <div className="absolute bottom-4 left-4 text-sm text-gray-500">
          {new Date(article.addedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Card;