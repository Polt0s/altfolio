import { configureStore } from '@reduxjs/toolkit';
import { cryptoReducer, exchangesReducer } from './reducers';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    exchanges: exchangesReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
