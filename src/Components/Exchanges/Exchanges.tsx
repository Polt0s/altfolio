import React from 'react';
import { Loader } from '../../Shared';

interface IExchanges {
  exchangesList: IExchange[];
  isLoading: boolean;
}

export const Exchanges: React.FC<IExchanges> = ({ exchangesList, isLoading }) => {

  if (isLoading) {
    console.log(exchangesList);
  }

  return (
    <>
      {isLoading ? (
        <section>
          Exchanges
        </section>
      ) : (<Loader />)}
    </>
  );
};

interface IExchange {
  coinrankingUrl: string;
  uuid: string;
  name: string;
  iconUrl: string;
  numberOfMarkets: number;
  rank: string;
  verified: boolean;
  recommended: boolean;
}
