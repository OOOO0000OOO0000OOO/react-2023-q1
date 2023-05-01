import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { characterSlice } from 'store/character';
import { formSlice } from 'store/form';
import { APISlice } from 'store/api';

const rootReducer = combineReducers({
  character: characterSlice.reducer,
  form: formSlice.reducer,
  [APISlice.reducerPath]: APISlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof setupStore>;
export type StoreDispatch = Store['dispatch'];

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(APISlice.middleware),
    preloadedState,
  });
