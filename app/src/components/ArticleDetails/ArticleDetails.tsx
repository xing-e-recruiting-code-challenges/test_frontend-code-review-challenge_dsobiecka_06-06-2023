import classNames from 'classnames';
import React from 'react';
import {useArticlesContext} from 'context/articles/ArticleContext';
import Card from 'components/ui/Card';

import styles from './ArticleDetails.module.scss';
import formatDate from 'utils/formatDate';
import {ArticlesContextInterface} from 'context/articles/typings';

type ArticleDetailsProps = {
  className?: string;
};

function ArticleDetails({className}: ArticleDetailsProps) {
  const articleDetailsClasses = classNames(className, styles.articleDetails);
  const titleClasses = classNames(styles.title, styles.h1);

  const {selectedArticle, isLoading} =
    useArticlesContext() as ArticlesContextInterface;

  if (!selectedArticle) {
    const placeholderText = !isLoading && 'Please select an article';

    return (
      <div className={articleDetailsClasses}>
        <Card>{placeholderText}</Card>
      </div>
    );
  }

  const {
    urlToImage: image,
    title,
    author,
    description,
    content,
    publishedAt,
    url,
  } = selectedArticle;

  return (
    <div className={articleDetailsClasses}>
      <Card>
        <article>
          <div className={titleClasses}>{title}</div>
          <div className={styles.descriptionWrapper}>
            {image && (
              <img
                src={image}
                loading="lazy"
                className={styles.image}
              ></img>
            )}
            <div className={styles.description}>{description}</div>
          </div>
          <div className={styles.content}>{content}</div>
          <a href={url} rel="noopener noreferrer" className={styles.url}>
            Read More
          </a>

          <footer className={styles.footer}>
            {author && (
              <>
                <span>{author}</span>
                <span className={styles.separator}>&#10625;</span>
              </>
            )}
            <span>{formatDate(publishedAt)}</span>
          </footer>
        </article>
      </Card>
    </div>
  );
}

export default ArticleDetails;
