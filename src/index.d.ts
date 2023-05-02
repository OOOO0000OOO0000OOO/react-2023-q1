import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from 'store/types';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}
