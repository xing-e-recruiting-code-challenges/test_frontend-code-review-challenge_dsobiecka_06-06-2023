import React from 'react';
import {Link} from 'react-router-dom';

import styles from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Page Not Found</h1>
      <Link to="/">Go back to Homepage</Link>
    </div>
  );
}

export default NotFound;
