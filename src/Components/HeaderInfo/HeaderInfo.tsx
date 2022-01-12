import React from 'react';
import millify from 'millify';
import { Grid, Box } from '@mui/material';

import type { IStats } from '../Header';
import { Loader } from '../../Shared';

interface IHeaderInfo {
  stats: IStats;
  isLoading: boolean;
}

export const HeaderInfo: React.FC<IHeaderInfo> = ({ stats, isLoading }) => {

  return (
    <Box>
      {!isLoading ? (
        <Grid container spacing={2}>
          <Grid item xs={2}><span>Total Cryptocurrencies {stats.total}</span></Grid>
          <Grid item xs={2}><span>Total Exchanges {millify(stats.totalExchanges)}</span></Grid>
          <Grid item xs={2}><span>Total Market Cap: {`$${millify(stats.totalMarketCap)}`}</span></Grid>
          <Grid item xs={2}><span>Total 24h Volume {`$${millify(stats.total24hVolume)}`}</span></Grid>
          <Grid item xs={2}><span>Total Cryptocurrencies {stats.total}</span></Grid>
          <Grid item xs={2}><span>Total Market {millify(stats.totalMarkets)}</span></Grid>
        </Grid>
      ) : <Loader />}
    </Box>
  );
};
