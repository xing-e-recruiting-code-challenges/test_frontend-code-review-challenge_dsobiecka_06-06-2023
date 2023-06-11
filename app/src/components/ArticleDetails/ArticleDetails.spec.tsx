import React from 'react';
import {render} from '@testing-library/react';
import {useArticlesContext} from 'context/articles/ArticleContext';
import mockArticles from 'mocks/articles';

import ArticleDetails from './ArticleDetails';

jest.mock('context/articles/ArticleContext');

const useArticlesContextMock = useArticlesContext as jest.MockedFunction<
  typeof useArticlesContext
>;
const mockArticle = mockArticles.articles[1];

describe('ArticleDetails', () => {
  beforeEach(() => {
    useArticlesContextMock.mockImplementation(() => ({
      selectedArticle: mockArticle,
      setSelectedArticle: () => {},
      articles: [],
      isError: false,
      isLoading: false,
      setSearchQuery: () => {},
      wasArticleRead: () => {},
      addReadArticleById: () => {},
      pagination: {
        currentPage: 1,
        setCurrentPage: () => {},
        totalArticles: 1,
        articlesPerPage: 10,
      },
    }));
  });

  it('should render correctly', () => {
    const {container} = render(<ArticleDetails />);

    expect(container).toMatchSnapshot();
  });
});
