import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { CryptoCard } from './CryptoCard';
import { Loader, Input } from '../../Shared';
import { Grid, Box } from '@mui/material';

interface ICryptocurrencies {
  coins: ICoins[];
  // isLoading?: boolean;
}

export const Cryptocurrencies: React.FC<ICryptocurrencies> = ({ coins }) => {
  const [cryptos, setCryptos] = React.useState<ICoins[]>(coins);
  const [searchCoin, setSearchCoin] = React.useState('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchCoin(event.currentTarget.value);
  };

  React.useEffect(() => {
    if (coins) {
      const filterData = coins.filter((coin) => coin.name.toLowerCase().includes(searchCoin));
      setCryptos(filterData);
    }
  }, [coins, searchCoin]);


  return (
    <>
      <Box style={{ marginTop: 50 }}>
        <div style={{ marginBottom: 20 }}>
          <Input
            name="searchCoin"
            placeholder='Enter coin name'
            onChange={handleChange}
          />
        </div>

        <Grid container spacing={2}>
          {cryptos.map((coin) => (
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
                </CryptoCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
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
}