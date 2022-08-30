import classNames from 'classnames';
import React from 'react';

import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

function Card({children, className}: CardProps) {
  const articleDetailsClasses = classNames(className, styles.card);

  return <div className={articleDetailsClasses}>{children}</div>;
}

export default Card;
