import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { CardData } from '../../models';

const mockCards: CardData[] = [
  {
    id: '1',
    name: 'Card One',
    supertype: 'This is card one',
    imageUrl: 'https://www.example.com/image1.png',
    types: [],
  },
  {
    id: '2',
    name: 'Card Two',
    supertype: 'This is card two',
    imageUrl: 'https://www.example.com/image2.png',
    types: [],
  },
];

describe('CardList  component', () => {
  it('should render list of cards correctly', () => {
    const { getByText } = render(
      <CardList cards={mockCards} searchQuery="" error={null} />
    );

    expect(getByText('Card One')).toBeInTheDocument();
    expect(getByText('Card Two')).toBeInTheDocument();
  });

  it('should filter cards based on search query', () => {
    const { getByText, queryByText } = render(
      <CardList cards={mockCards} searchQuery="one" error={null} />
    );

    expect(getByText('Card One')).toBeInTheDocument();
    expect(queryByText('Card Two')).toBeNull();
  });

  it('should render error message when error prop is provided', () => {
    const error = new Error('Network Error');
    render(<CardList cards={[]} searchQuery="" error={error} />);

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByTestId('error').textContent).toEqual(
      `Error: ${error.message}`
    );
  });
});
