import React from 'react';
import Pagination from 'components/Pagination';

import styles from './Footer.module.scss';
import classNames from 'classnames';

type FooterProps = {
  className?: string;
};

function Footer({className}: FooterProps) {
  const footerClasses = classNames(className, styles.footer);

  return (
    <footer className={footerClasses}>
      <Pagination />
    </footer>
  );
}

export default Footer;
