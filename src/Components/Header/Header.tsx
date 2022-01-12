import React from 'react';
import { HeaderInfo } from '../HeaderInfo';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

interface IHeader {
  routes: IRoutes;
  stats: IStats;
  isLoading: boolean;
}

export const Header: React.FC<IHeader> = ({ routes, stats, isLoading }) => {

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.HeaderLogo}>
        </div>
        <nav className={styles.HeaderNavbar}>

          <Link to={routes.home}>
            <span className={styles.HeaderNavbar__item}>Home</span>
          </Link>

          <Link to={routes.cryptocurrencies}>
            <span className={styles.HeaderNavbar__item}>Cryptocurrencies</span>
          </Link>

          <Link to={routes.exchanges}>
            <span className={styles.HeaderNavbar__item}>Exchanges</span></Link>

          <Link to={routes.news}>
            <span className={styles.HeaderNavbar__item}>News</span>
          </Link>

          <span className={styles.HeaderNavbar__item}>
            Sign In
          </span>

        </nav>
      </header>

      <HeaderInfo stats={stats} isLoading={isLoading} />
    </>
  );
};

interface IRoutes {
  home: string,
  cryptocurrencies: string,
  exchanges: string,
  news: string,
}

export interface IStats {
  base: "USD"
  limit: number;
  offset: number;
  order: number;
  total: number;
  total24hVolume: number;
  totalExchanges: number;
  totalMarketCap: number;
  totalMarkets: number;
}
