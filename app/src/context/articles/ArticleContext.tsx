import React, {createContext, useContext, useEffect, useState} from 'react';
import useFetchArticles from 'hooks/useFetchArticles';
import {Articles, Article} from 'types/articles';
import {ArticlesContextInterface} from './typings';

type ArticlesContextProviderProps = {
  children: React.ReactNode;
};

const ARTICLES_PER_PAGE = 10;

const ArticlesContext = createContext<ArticlesContextInterface | null>(null);

const ArticlesContextProvider = ({children}: ArticlesContextProviderProps) => {
  // selected article state
  const [selectedArticle, setSelectedArticle] = useState<Article | undefined>();

  // search state
  const [searchQuery, setSearchQuery] = useState<string>();

  // pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedArticles, setPaginatedArticles] = useState<Articles>([]);

  // request data
  const {data, isError, isLoading} = useFetchArticles(searchQuery);

  // read articles
  const [readArticlesIds, setReadArticlesIds] = useState<string[]>([]);

  const wasArticleRead = (id: string): boolean => {
    return false;
  };

  const addReadArticleById = (id: string) => {
    return;
  };

  useEffect(() => {
    if (data?.articles) {
      const firstArticleOfPage = (currentPage - 1) * ARTICLES_PER_PAGE;
      const lastArticleOfPage = currentPage * ARTICLES_PER_PAGE;
      const articlesToShow = data?.articles.slice(
        firstArticleOfPage,
        lastArticleOfPage
      );

      setPaginatedArticles(articlesToShow);
    }
  }, [data, currentPage]);

  return (
    <ArticlesContext.Provider
      value={{
        selectedArticle,
        setSelectedArticle,
        articles: paginatedArticles,
        isError,
        isLoading,
        setSearchQuery,
        addReadArticleById,
        wasArticleRead,
        pagination: {
          currentPage,
          setCurrentPage,
          totalArticles: data?.articles?.length || 0,
          articlesPerPage: ARTICLES_PER_PAGE,
        },
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

function useArticlesContext() {
  return useContext(ArticlesContext);
}

export default ArticlesContextProvider;
export {useArticlesContext};
