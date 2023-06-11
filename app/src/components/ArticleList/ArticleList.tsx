import React, {useState} from 'react';
import ArticleListItem from 'components/ArticleListItem';

import {useArticlesContext} from 'context/articles/ArticleContext';

import styles from './ArticleList.module.scss';
import {ArticlesContextInterface} from 'context/articles/typings';
import {Article} from 'types/articles';

function ArticleList({articles}: any) {
  const {setSelectedArticle, wasArticleRead} =
    useArticlesContext() as ArticlesContextInterface;

  const [articleSelected, setArticleSelected] = useState<Article | undefined>();

  const handleClick = (article: any) => {
    setSelectedArticle(article);
    setArticleSelected(article);
  };

  if (!articles) return null;

  return (
    <ul className={styles.articleList}>
      {articles.map((article: any) => (
        <li
          onClick={() => {
            handleClick(article);
          }}
          className={styles.articleListItem}
        >
          <ArticleListItem
            author={article.author}
            image={article.urlToImage}
            title={article.title}
            read={wasArticleRead(article.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ArticleList;
