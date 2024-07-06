interface RecommendedArticle {
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

  interface ArticlePreview {
    title: string;
    key: string;
    mediaUrl: string;
    addedAt: string;
  }
  
  interface Article {
    mediaUrl: string;
    title: string;
    sections: Section[];
    recommended: RecommendedArticle[];
    offers: Offer[];
  }

  interface Employer {
    name: string;
    website: string;
  }
  
  interface Offer {
    title: string;
    addedAt: string;
    employer: Employer;
    location: {
      countryName: string;
    };
    salary: Salary;
  }

  interface Salary {
    frequency: 'monthly' | 'hourly' | string;
    amountMin?: number;
    amountMax?: number;
    currency?: string;
  }
  
  interface OffersProps {
    offers: Offer[];
  }

  interface RecommendedArticlesProps {
    recommended: RecommendedArticle[];
  }

  interface ArticleContentProps {
    article: Article;
  }

  interface ArticlePreviewProps {
    article: ArticlePreview;
  }