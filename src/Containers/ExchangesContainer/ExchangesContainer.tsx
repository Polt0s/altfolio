import React from 'react';

import { Exchanges } from '../../Components';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getExchangesList } from '../../Redux/reducers/exchanges';

export const ExchangesContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { exchangesList, isLoading } = useAppSelector((state) => state.exchanges);

  React.useEffect(() => {
    dispatch(getExchangesList({}));
  }, []);

  return (
    <div>
      <Exchanges exchangesList={exchangesList} isLoading={isLoading} />
    </div>
  );
};
