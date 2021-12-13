import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '../Pages';

export enum RouteNames {
  MAIN = '/',
  // LOGIN = '/login',
  // ABOUT = '/about',
}

export const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.MAIN} element={<MainPage />} />
      {/* <Route path="/" element={<App />} /> */}

      {/* <Navigate to={RouteNames.MAIN} replace={true} /> */}
      <Route path="*" element={<Navigate replace to={RouteNames.MAIN} />} />
    </Routes>
  );
};

{/* <Link to="/expenses">Expenses</Link> */ }