import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { characterSlice } from 'store/character';
import { formSlice } from 'store/form';
import { APISlice } from 'store/api';

const rootReducer = combineReducers({
  character: characterSlice.reducer,
  form: formSlice.reducer,
  [APISlice.reducerPath]: APISlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APISlice.middleware),
});
