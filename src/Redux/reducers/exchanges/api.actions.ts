import { ExchangesAPI } from '../../../Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IGetExchangesList } from '../../../Api';

const prefix = 'exchanges/';
const getExchangesListPrefix = `${prefix}getExchangesList`;

export const getExchangesList = createAsyncThunk(
  getExchangesListPrefix,
  async (data: IGetExchangesList) => {
    const response = await ExchangesAPI.getExchangesList(data);
    return response.data;
  }
);
