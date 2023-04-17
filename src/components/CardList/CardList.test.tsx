import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { CardList } from 'components';
import { character1, character2, invalidName } from 'mocks/data';
import { server } from 'mocks/server';

describe('CardList component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should render list of cards correctly', async () => {
    render(
      <Provider store={store}>
        <CardList name="" />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(character1.name)).toBeInTheDocument();
      expect(screen.getByText(character2.name)).toBeInTheDocument();
    });
  });

  it('should render 404 when invalid name is provided', async () => {
    render(
      <Provider store={store}>
        <CardList name={invalidName} />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByTestId('404'));
    });
  });
});
