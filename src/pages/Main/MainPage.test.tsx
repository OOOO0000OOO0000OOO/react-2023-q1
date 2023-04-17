import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainPage } from 'pages';
import { server } from 'mocks/server';
import { character1 } from 'mocks/data';
import { Provider } from 'react-redux';
import { store } from 'store';

describe('MainPage', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should search cards by submitted search query', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: character1.name } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText(character1.name)).toBeInTheDocument();
    });
  });
});
