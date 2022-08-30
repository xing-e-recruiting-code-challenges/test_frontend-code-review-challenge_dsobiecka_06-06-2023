import React from 'react';

import styles from './Layout.module.scss';

import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import {Outlet} from 'react-router-dom';

function Layout() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Layout;
