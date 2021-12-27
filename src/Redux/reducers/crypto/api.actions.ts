import { CryptoAPI } from '../../../Api';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IGetCryptoList } from '../../../Api';

const prefix = 'crypto/';
const getCryptoListPrefix = `${prefix}getCryptoList`;

export const getCryptoList = createAsyncThunk(
  getCryptoListPrefix,
  async (data: IGetCryptoList) => {
    const response = await CryptoAPI.getCryptoList(data);
    return response.data;
  }
);
