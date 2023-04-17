import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'store/character';
import { APISlice } from 'store/api';

const rootReducer = combineReducers({
  character: characterSlice.reducer,
  [APISlice.reducerPath]: APISlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});
