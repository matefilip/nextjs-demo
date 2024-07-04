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
    id: number;
    title: string;
    key: string;
    mediaUrl: string;
    addedAt: string;
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

  interface Employer {
    name: string;
    website: string;
  }
  
  interface Offer {
    title: string;
    employer: Employer;
    location: {
      countryName: string;
    };
    salary: {
      amountMin: number;
      amountMax: number;
      frequency: string;
      currency: string;
    };
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