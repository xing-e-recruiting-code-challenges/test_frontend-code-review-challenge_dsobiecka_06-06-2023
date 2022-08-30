import React from 'react';
import {Link} from 'react-router-dom';

import {useArticlesContext} from 'context/articles/ArticleContext';

import styles from './Pagination.module.scss';
import {ArticlesContextInterface} from 'context/articles/typings';

function Pagination() {
  const {pagination} = useArticlesContext() as ArticlesContextInterface;
  const {currentPage, totalArticles, articlesPerPage} = pagination;

  if (totalArticles === 0) {
    return null;
  }

  const firstArticleInPageNumber = 1 + (currentPage - 1) * 10;
  const lastArticleInPageNumber =
    firstArticleInPageNumber + articlesPerPage - 1;
  const lastArticleInPageNumberLastPage =
    lastArticleInPageNumber > totalArticles
      ? totalArticles
      : lastArticleInPageNumber;

  const lastPage = Math.ceil(totalArticles / articlesPerPage);

  const getNextPageLink = () => {
    const nextPage = currentPage === lastPage ? lastPage : currentPage + 1;

    return `/${nextPage}`;
  };

  const getPreviousPageLink = () => {
    const previousPage = currentPage === 1 ? 1 : currentPage - 1;

    return `/${previousPage}`;
  };

  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link to="/1" className={styles.link}>
              {'<<'}
            </Link>
          </li>
          <li>
            <Link to={getPreviousPageLink()} className={styles.link}>
              {'<'}
            </Link>
          </li>
          <li className={styles.currentPage}>{currentPage}</li>
          <li>
            <Link to={getNextPageLink()} className={styles.link}>
              {'>'}
            </Link>
          </li>
          <li>
            <Link to={`/${lastPage}`} className={styles.link}>
              {'>>'}
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.legend}>
        Articles {firstArticleInPageNumber} - {lastArticleInPageNumberLastPage}{' '}
        of {totalArticles}
      </div>
    </div>
  );
}

export default Pagination;
