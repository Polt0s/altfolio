import { getCryptoList } from './api.actions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IRecordingState = {
  cryptoList: [],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoList.fulfilled, (state, action) => {
        state.cryptoList = action.payload.data;
      });
  },
});

export const cryptoReducer = cryptoSlice.reducer;

export interface IRecordingState {
  cryptoList: any;
}