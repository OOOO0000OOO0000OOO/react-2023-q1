import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import MainPage from './MainPage';

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

describe('MainPage', () => {
  it('should render the title `Pokémon Cards`', () => {
    render(<MainPage />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Pokémon Cards'
    );
  });

  it('should set the searchQuery from localStorage on component mount', () => {
    localStorage.setItem('search', 'Pikachu');
    render(<MainPage />);
    expect(screen.queryByDisplayValue('Pikachu')).toBeInTheDocument();
  });

  it('should fetch cards data and set the state on mount', async () => {
    render(<MainPage />);
    expect(fetch).toHaveBeenCalled();
    await waitFor(() =>
      expect(screen.getByText('Pikachu')).toBeInTheDocument()
    );
  });

  it('should set the searchQuery in the state onSearch', async () => {
    render(<MainPage />);
    const input = screen.getByPlaceholderText('search for pokémons...');
    await waitFor(() => {
      userEvent.type(input, 'Pikachu');
      expect(input).toHaveValue('Pikachu');
    });
  });
});
