import React from 'react';
import type { Response } from 'express';
import {
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { setupStore, type RootState } from 'store';
import { App } from 'app';
import { APISlice as api } from 'store/api';

const store = setupStore();

const setPreloadedState = (preloadedState: RootState) =>
  `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c'
  )}`;

export const render = async (
  url: string,
  response: Response,
  options: RenderToPipeableStreamOptions
) => {
  await store.dispatch(api.endpoints.getCharacters.initiate({ name: '' }));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));

  const preloadedState = store.getState();

  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    {
      bootstrapScriptContent: setPreloadedState(preloadedState),
      ...options,
    }
  );
};
