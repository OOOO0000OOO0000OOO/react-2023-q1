import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainPage } from 'pages';
import { server } from 'mocks/server';

describe('MainPage', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should set the search query from localStorage on component mount', async () => {
    localStorage.setItem('search', 'Rick');
    render(<MainPage />);
    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  it('should set search value to the local storage on form submit', () => {
    const { getByRole } = render(<MainPage />);
    const input = getByRole('textbox');
    const button = getByRole('button');
    fireEvent.change(input, { target: { value: 'Pickle Rick' } });
    fireEvent.click(button);
    expect(localStorage.getItem('search')).toBe('Pickle Rick');
  });

  it('should search cards by submitted search query', async () => {
    const { getByRole } = render(<MainPage />);
    const input = getByRole('textbox');
    const button = getByRole('button');
    fireEvent.change(input, { target: { value: 'Morty' } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(screen.getByText('Morty Smith')).toBeInTheDocument();
    });
  });
});
