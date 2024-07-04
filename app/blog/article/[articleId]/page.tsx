"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface Employer {
  id: number;
  name: string;
  logoUrl: string;
}

interface Offer {
  id: number;
  slug: string;
  title: string;
  employer: Employer;
  location: {
    countryName: string;
  };
  salary: {
    amountMin: number;
    amountMax: number;
    frequency: string;
    type: string;
    currency: string;
  };
  videoUrl: string | null;
}

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
  offers: Offer[];
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
      <div className="fixed left-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Offers</h2>        
      {article.offers.map((offer, index) => (
          <div key={offer.id} className={`mb-6 ${index !== 0 ? 'border-t border-gray-700 pt-4' : ''}`}>
            <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
            <p className="text-gray-300 mb-2">{offer.location.countryName}</p>
            <p className="text-gray-400">
              {offer.salary.amountMin && offer.salary.amountMax ? (
                `${offer.salary.amountMin} - ${offer.salary.amountMax} ${offer.salary.currency} / ${offer.salary.frequency}`
              ) : offer.salary.amountMin ? (
                `From ${offer.salary.amountMin} ${offer.salary.currency} / ${offer.salary.frequency}`
              ) : offer.salary.amountMax ? (
                `Up to ${offer.salary.amountMax} ${offer.salary.currency} / ${offer.salary.frequency}`
              ) : (
                'Undisclosed salary'
              )}
            </p>
          </div>
        ))}
      </div>
          
          <div className="flex-grow w-2/3 mx-6 p-6 bg-gray-900 rounded-lg shadow-lg">
            <img src={article.mediaUrl} alt={article.title} className="w-full h-auto rounded mb-6"/>
            {article.sections.map((section, index) => {
              switch (section.type) {
                case 'text':
                  return (
                    <div key={index} className="mb-6">
                      <div dangerouslySetInnerHTML={{ __html: section.content }}></div>
                    </div>
                  );
                case 'link':
                  return (
                    <div key={index} className="mb-6">
                      <a href={section.content} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{section.content}</a>
                    </div>
                  );
                case 'photo':
                  return (
                    <div key={index} className="mb-6">
                      <img src={section.content} alt={section.alternativeText || "Article Image"} className="w-full h-auto rounded" />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
  
          <div className="fixed right-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
            <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Recommended Articles</h2>
            {article.recommended.map((rec, index) => (
              <div key={rec.id} className={`mb-6 ${index !== 0 ? 'border-t border-gray-700 pt-4' : ''}`}>
                <h3 className="text-lg font-bold text-white mb-2">{rec.title}</h3>
                <img src={rec.mediaUrl} alt={rec.title} className="w-full h-auto rounded mb-2" />
              </div>
            ))}
          </div>

        </>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );  
} 

export default ArticleDetails;