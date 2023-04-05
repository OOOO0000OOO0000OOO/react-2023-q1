import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const mockCardsData = [
  {
    id: 'xy7-54',
    name: 'Pikachu',
    imageUrl: 'https://images.pokemontcg.io/xy7/54.png',
    subtype: 'Basic',
    supertype: 'Pokémon',
    hp: '70',
    ability: {
      name: 'Lightning Rod',
      text: 'Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, you may draw 2 cards.',
      type: 'Ability',
    },
  },
];

global.fetch = vi.fn().mockResolvedValue({
  json: vi.fn().mockResolvedValue({ cards: mockCardsData }),
});

describe('App', () => {
  it('renders header', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders main page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const mainPageElement = getByText(/pokémon cards/i);
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
