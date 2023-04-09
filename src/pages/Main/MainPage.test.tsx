import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  it('should set the searchQuery in the state onSearch', () => {
    render(<MainPage />);
    const input = screen.getByPlaceholderText('search for pokémons...');
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    expect(input).toHaveValue('Pikachu');
  });

  it('should set search value to the local storage on form submit', () => {
    const { getByRole } = render(<MainPage />);
    const input = getByRole('textbox');
    const button = getByRole('button');
    fireEvent.change(input, { target: { value: 'Windstorm' } });
    fireEvent.click(button);
    expect(localStorage.getItem('search')).toBe('Windstorm');
  });
});
