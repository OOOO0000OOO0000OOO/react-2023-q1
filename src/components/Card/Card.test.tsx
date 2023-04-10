import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Character } from 'models';
import { Card } from 'components';

const mockCard: Character = {
  id: 1,
  url: 'https://example.com/api/character/1',
  created: '2018-04-15',
  name: 'Plutonian Hostess',
  status: 'Dead',
  species: 'Alie',
  type: 'Plutonian',
  gender: 'Female',
  origin: {
    name: 'Pluto',
    url: 'https://example.com/api/location/1',
  },
  location: {
    name: 'Pluto',
    url: 'https://example.com/api/location/1',
  },
  image: 'https://example.com/api/image/1.jpeg',
  episode: ['https://example.com/api/episode/1'],
};

describe('Card', () => {
  it('should be in the document', () => {
    render(<Card {...mockCard} onClick={() => {}} />);

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });

  it('should render the card data', () => {
    render(<Card {...mockCard} onClick={() => {}} />);

    expect(screen.getByTestId('card')).toBeInTheDocument();

    expect(screen.getByRole('img')).toHaveAttribute('src', mockCard.image);
    expect(screen.getByRole('heading')).toHaveTextContent(mockCard.name);
  });
});
