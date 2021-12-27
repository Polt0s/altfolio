import { configureStore } from '@reduxjs/toolkit';
import { cryptoReducer } from './reducers';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
