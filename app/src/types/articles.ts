type Source = {
  id: string | null;
  name: string;
};

export type Article = {
  source: any;
  author: string | null;
  title: string;
  description: string;
  url: any;
  urlToImage: any;
  publishedAt: string;
  content: string;
  id: string;
};

export type Articles = Article[];

export type ArticlesResponse = {
  articles: Article[];
};
