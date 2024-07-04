import React from 'react';

const ArticleContent = ({ article }) => {
  return (
    <div className="flex-grow mx-6 p-6 bg-gray-900 rounded-lg shadow-lg" style={{ marginLeft: '16.6666%', marginRight: '16.6666%' }}>
      <img src={article.mediaUrl} alt={article.title} className="w-full h-auto rounded mb-6" />
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
  );
};

export default ArticleContent;
