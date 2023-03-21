import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

// configuring the redux store here
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddlewares => getDefaultMiddlewares({
    serializableCheck: false,
  }).concat(apiSlice.middleware),
});
