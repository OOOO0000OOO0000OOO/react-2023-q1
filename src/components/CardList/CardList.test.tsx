import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Character } from 'models';
import { CardList } from 'components';

const mockCards: Character[] = [
  {
    type: '',
    url: 'https://example.com/api/character/1',
    created: '2018-04-15T20:31:46.065Z',
    id: 1,
    name: 'Card One',
    status: 'Dead',
    species: 'One',
    gender: 'Male',
    origin: {
      name: 'Earth',
      url: 'https://example.com/api/location/1',
    },
    location: {
      name: 'Earth',
      url: 'https://example.com/api/location/1',
    },
    image: 'https://example.com/api/image/1.jpeg',
    episode: ['https://example.com/api/episode/1'],
  },
  {
    type: '',
    url: 'https://example.com/api/character/2',
    created: '2018-04-15T21:34:21.911Z',
    id: 2,
    name: 'Card Two',
    status: 'Alive',
    species: 'Two',
    gender: 'Female',
    origin: {
      name: 'Abadango',
      url: 'https://example.com/api/location/2',
    },
    location: {
      name: 'Abadango',
      url: 'https://example.com/api/location/2',
    },
    image: 'https://example.com/api/image/2.jpeg',
    episode: ['https://example.com/api/episode/2'],
  },
];

describe('CardList  component', () => {
  it('should render list of cards correctly', () => {
    const { getByText } = render(<CardList cards={mockCards} error={null} />);

    expect(getByText('Card One')).toBeInTheDocument();
    expect(getByText('Card Two')).toBeInTheDocument();
  });

  it('should render error message when error prop is provided', () => {
    const error = new Error('Network Error');
    render(<CardList cards={[]} error={error} />);

    expect(screen.getByTestId('error')).toBeInTheDocument();
    expect(screen.getByTestId('error').textContent).toEqual(
      `Error: ${error.message}`
    );
  });
});
