import { useRouter } from 'next/navigation';

const Card: React.FC<ArticlePreviewProps> = ({ article }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/blog/article/${article.key}`);
  };

  return (
    <div
      className="relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105 border border-gray-300"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="h-64 overflow-hidden">
          <img src={article.mediaUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-lg font-bold text-white text-center px-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
            {article.title}
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm px-4 py-2">
          Dodano: {new Date(article.addedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Card;
