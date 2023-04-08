import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MainPage } from 'pages';

describe('MainPage', () => {
  it('should render the title `Pokémon Cards`', () => {
    render(<MainPage />);
    expect(screen.getByRole('heading')).toHaveTextContent('Rick and Morty');
  });

  it('should set the searchQuery from localStorage on component mount', () => {
    localStorage.setItem('search', 'Pikachu');
    render(<MainPage />);
    expect(screen.queryByDisplayValue('Pikachu')).toBeInTheDocument();
  });

  it('should set the searchQuery in the state onSearch', async () => {
    render(<MainPage />);
    const input = screen.getByPlaceholderText('search for pokémons...');
    userEvent.type(input, 'Pikachu');
    expect(input).toHaveValue('Pikachu');
  });
});
