import React from 'react';
import { Header } from './Components';
import { RootRoutes } from './Routes';

// import styles from './Application.module.css';

export const Application: React.FC = () => {
  return (
    <>
      <Header />
      <RootRoutes />
    </>
  );
};
