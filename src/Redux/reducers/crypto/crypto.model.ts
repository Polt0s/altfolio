import { getCryptoList } from './api.actions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: ICryptoState = {
  cryptoList: [],
  isLoading: false,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoList.fulfilled, (state, action) => {
        state.cryptoList = action.payload.data;
        state.isLoading = true;
      });
  },
});

export const cryptoReducer = cryptoSlice.reducer;

export interface ICryptoState {
  cryptoList: any;
  isLoading: boolean;
}
