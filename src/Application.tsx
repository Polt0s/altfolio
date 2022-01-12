import React from 'react';
import { HeaderContainer } from './Containers';
import { RootRoutes } from './Routes';

import styles from './Application.module.css';

export const Application: React.FC = () => {
  return (
    <div className={styles.Application}>
      <HeaderContainer />
      <div className={styles.Application__Container}>
        <RootRoutes />
      </div>
    </div>
  );
};
