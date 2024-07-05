import React from 'react';
import sanitizeHtml, { IOptions } from 'sanitize-html';

const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  console.log(article);
  const sanitizeOptions: IOptions = {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'img', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'hr', 'span', 'pre', 'code',
      'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption',
    ],
    disallowedTagsMode: 'discard',
    allowedAttributes: {
      a: ['href', 'target', 'rel', 'style'],
      img: ['src', 'alt', 'title', 'width', 'height', 'style'],
      table: ['border', 'cellspacing', 'cellpadding', 'style'],
      td: ['colspan', 'rowspan', 'style'],
      th: ['colspan', 'rowspan', 'style'],
      pre: ['style'],
      code: ['style'],
    },
  };

  return (
    <div className="flex-grow mx-6 p-6 bg-gray-900 rounded-lg shadow-lg" style={{ marginLeft: '16.6666%', marginRight: '16.6666%' }}>
      <img src={article.mediaUrl} alt={article.title} className="w-full h-auto rounded mb-6" />
      {article.sections.map((section, index) => {
        switch (section.type) {
          case 'text':
            const sanitizedHtml = sanitizeHtml(section.content, sanitizeOptions);
            return (
              <div key={index} className="mb-6">
                <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
              </div>
            );
          case 'link':
            return (
              <div key={index} className="mb-6 text-center text-blue-400">
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            );                     
          case 'photo':
            return (
              <div key={index} className="mb-6 flex justify-center">
                <img src={section.content} alt={section.alternativeText || "Article Image"} className="rounded" />
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