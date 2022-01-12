import React from 'react';
import { Header } from '../../Components';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { getCryptoList } from '../../Redux/reducers/crypto';

export const HeaderContainer: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { cryptoList } = useAppSelector((state) => state.crypto);
  const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(getCryptoList({ limit: 100 }))
  //     .then(() => setIsLoading(false))
  //     .catch(() => setIsLoading(false));
  // }, []);

  const routes = {
    home: '/',
    cryptocurrencies: '/cryptocurrencies',
    exchanges: '/exchanges',
    news: '/news',
  };

  return (
    <div>
      <Header routes={routes} stats={cryptoList.stats} isLoading={isLoading} />
    </div>
  );
};
