import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'store';

describe('App', () => {
  it('renders header', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const headerElement = getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders main page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const mainPageElement = getByText(/rick and morty/i);
    expect(mainPageElement).toBeInTheDocument();
  });

  it('renders about page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutPageElement = getByText(/about us/i);
    expect(aboutPageElement).toBeInTheDocument();
  });

  it('renders not found page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/non-existent']}>
        <App />
      </MemoryRouter>
    );

    const notFoundPageElement = getByText(/nothing was found/i);
    expect(notFoundPageElement).toBeInTheDocument();
  });
});
