import React, {useEffect, useRef} from 'react';
import ArticleDetails from 'components/ArticleDetails';
import ArticleList from 'components/ArticleList';
import {useNavigate, useParams} from 'react-router-dom';

import styles from './Home.module.scss';
import {useArticlesContext} from 'context/articles/ArticleContext';
import {ArticlesContextInterface} from 'context/articles/typings';

function Home() {
  const {page} = useParams();
  const navigate = useNavigate();
  const {articles, pagination} =
    useArticlesContext() as ArticlesContextInterface;
  const {setCurrentPage, totalArticles, articlesPerPage} = pagination;
  const listContainerRef = useRef<HTMLDivElement>(null);
  const lastPage = Math.ceil(totalArticles / articlesPerPage);

  // update page if url changes
  useEffect(() => {
    if (!page) return;

    const pageAsNumber = Number(page);

    if (
      isNaN(pageAsNumber) ||
      (lastPage > 0 && pageAsNumber > lastPage) ||
      pageAsNumber < 1
    ) {
      navigate('/1');
    }
  }, [setCurrentPage, page, lastPage, navigate]);

  // scroll to top whenever the article list changes
  useEffect(() => {
    if (articles && listContainerRef.current) {
      listContainerRef.current.scrollTo(0, 0);
    }
  }, [articles]);

  return (
    <>
      <div className={styles.listContainer} ref={listContainerRef}>
        <ArticleList articles={articles} />
      </div>
      <ArticleDetails className={styles.articleDetails} />
    </>
  );
}

export default Home;
