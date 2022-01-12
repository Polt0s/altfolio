import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, CryptocurrenciesPage, ExchangesPage } from '../Pages';

export enum RouteNames {
  HOME = '/',
  CRYPTOCURRENCIES = '/cryptocurrencies',
  EXCHANGES = '/exchanges',
  NEWS = '/news',
}

export const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.CRYPTOCURRENCIES} element={<CryptocurrenciesPage />} />
      <Route path={RouteNames.EXCHANGES} element={<ExchangesPage />} />

      <Route path="*" element={<Navigate replace to={RouteNames.HOME} />} />

    </Routes>
  );
};
