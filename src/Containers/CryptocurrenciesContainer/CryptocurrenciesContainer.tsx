import React from 'react';
import { Cryptocurrencies } from '../../Components';
import { useAppSelector } from '../../Redux/hooks';

export const CryptocurrenciesContainer: React.FC = () => {
  const { cryptoList, isLoading } = useAppSelector((state) => state.crypto);

  return (
    <Cryptocurrencies coins={cryptoList.coins} isLoading={isLoading} />
  );
};
