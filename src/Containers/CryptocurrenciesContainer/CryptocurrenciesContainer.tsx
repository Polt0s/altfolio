import React from 'react';
import { Cryptocurrencies } from '../../Components';
import { useAppSelector } from '../../Redux/hooks';
import { Loader } from '../../Shared';

export const CryptocurrenciesContainer: React.FC = () => {
  const { cryptoList, isLoading } = useAppSelector((state) => state.crypto);

  return (
    <>
      {isLoading ? (
        <Cryptocurrencies coins={cryptoList.coins} />
      ) : (
        <Loader />
      )}
    </>
  );
};
