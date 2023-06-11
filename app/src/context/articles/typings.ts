import {Article, Articles} from 'types/articles';

export interface ArticlesContextInterface {
  selectedArticle: Article | undefined;
  setSelectedArticle: Function;
  articles: Articles;
  isError: boolean;
  isLoading: boolean;
  setSearchQuery: Function;
  pagination: PaginationInterface;
  addReadArticleById: Function;
  wasArticleRead: Function;
}

export interface PaginationInterface {
  currentPage: number;
  setCurrentPage: Function;
  totalArticles: number;
  articlesPerPage: number;
}
