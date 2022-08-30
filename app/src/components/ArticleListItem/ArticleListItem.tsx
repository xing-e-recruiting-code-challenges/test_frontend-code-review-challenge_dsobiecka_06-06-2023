import React from 'react';
import Card from 'components/ui/Card';

import styles from './ArticleListItem.module.scss';
import classNames from 'classnames';

type ArticleListItemProps = {
  author?: string;
  image?: string;
  title: string;
  read?: boolean;
};

function ArticleListItem({author, image, title, read}: ArticleListItemProps) {
  const containerClasses = classNames(styles.container, {
    [styles.read]: read,
  });
  const titleClasses = classNames(styles.title, styles.h1);

  return (
    <Card>
      <article className={containerClasses}>
        {image && (
          <img
            src={image}
            loading="lazy"
            className={styles.image}
          ></img>
        )}
        <div className={styles.info}>
          <div className={titleClasses}>{title}</div>
          <div className={styles.author}>{author}</div>
        </div>
      </article>
    </Card>
  );
}

export default ArticleListItem;
