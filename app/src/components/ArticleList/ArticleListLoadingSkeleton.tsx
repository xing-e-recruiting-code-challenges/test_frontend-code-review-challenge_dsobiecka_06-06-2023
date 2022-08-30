import React from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import Card from 'components/ui/Card';
import styles from './ArticleListLoadingSkeleton.module.scss';

function ArticleListLoadingSkeleton() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.listItem}>
          <div className={styles.leftCol}>
            <div className={styles.image}>
              <Skeleton
                height="100%"
                containerClassName={styles.imageSkeleton}
              />
            </div>
          </div>
          <div className={styles.rightCol}>
            <Skeleton />
            <div className={styles.mb0}>
              <Skeleton count={3} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ArticleListLoadingSkeleton;
