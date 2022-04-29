import { getExchangesList } from './api.actions';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IExchangesState = {
  exchangesList: [],
  isLoading: false,
};

const exchangesSlice = createSlice({
  name: 'exchanges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExchangesList.fulfilled, (state, action) => {
        state.exchangesList = action.payload.data;
        state.isLoading = true;
      });
  },
});

export const exchangesReducer = exchangesSlice.reducer;

export interface IExchangesState {
  exchangesList: any;
  isLoading: boolean;
}
