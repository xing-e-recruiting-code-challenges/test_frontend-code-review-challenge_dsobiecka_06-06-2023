import React from 'react';
import classNames from 'classnames';

import styles from './Header.module.scss';
import Search from 'components/Search';

type HeaderProps = {
  className?: string;
};

function Header({className}: HeaderProps) {
  const headerClasses = classNames(className, styles.header);

  return (
    <header className={headerClasses}>
      <div className={styles.headerContent}>
        <Search />
      </div>
    </header>
  );
}

export default Header;
