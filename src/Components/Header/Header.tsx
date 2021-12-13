import React from 'react';

import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLogo}></div>
      <nav className={styles.HeaderNavbar}>
        <span className={styles.HeaderNavbar__item}>Home</span>
        <span className={styles.HeaderNavbar__item}>Cryptocurrencies</span>
        <span className={styles.HeaderNavbar__item}>Exchanges</span>
        <span className={styles.HeaderNavbar__item}>News</span>
        <span className={styles.HeaderNavbar__item}>Sign In</span>
      </nav>
    </header>
  );
};
