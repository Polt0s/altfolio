import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';

import { CryptoCard } from './CryptoCard';
import { Loader } from '../../Shared';

interface ICryptocurrencies {
  coins: ICoins[];
  isLoading?: boolean;
}

export const Cryptocurrencies: React.FC<ICryptocurrencies> = ({ coins, isLoading }) => {
  const [cryptos, setCryptos] = React.useState<ICoins[]>(coins);

  // React.useEffect(() => {
  //   setCryptos(coins);
  // }, []);

  return (
    <>
      {isLoading ? (
        <Box style={{ marginTop: 50 }}>
          <Grid container spacing={2}>
            {coins.map((coin) => (
              <Grid item xs={12} key={coin.uuid}>
                <Link to={`/crypto/${coin.id}`}>
                  <CryptoCard>
                    <h3 style={{}}>{coin.rank}</h3>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img style={{ width: 35, marginRight: 10 }} src={coin.iconUrl} />
                      <p>{coin.name} {coin.symbol}</p>
                    </div>

                    <span>Price: {millify(Number(coin.price))}</span>
                    <span>Market Cap: {millify(coin.marketCap)}</span>
                    <span>Daily Change: {coin.change}%</span>
                    <span>volume: {millify(coin.volume)}</span>
                  </CryptoCard>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : <Loader />}
    </>
  );
};

interface ICoins {
  id: number;
  uuid: string;
  marketCap: number;
  price: string;
  change: number;
  rank: number;
  name: string;
  iconUrl: string;
  symbol: string;
  circulatingSupply: number;
  volume: number;
}