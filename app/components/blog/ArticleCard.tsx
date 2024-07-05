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
  style={{ height: 'calc(100% - 2px)' }} // Adjusted height to ensure no white strip
>
  <div className="relative h-full">
    <img src={article.mediaUrl} alt={article.title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h2 className="text-lg font-bold text-white text-center px-2" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)' }}>
        {article.title}
      </h2>
    </div>
  </div>
  <div className="p-4 relative">
    <div className="absolute bottom-10 left-2 text-sm text-gray-500 bg-white bg-opacity-60 px-2 py-1 rounded">
      {new Date(article.addedAt).toLocaleDateString()}
    </div>
  </div>
</div>
  );
};

export default Card;