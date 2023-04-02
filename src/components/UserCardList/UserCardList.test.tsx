import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import UserCardsList from './UserCardList';
import { UserCardData } from '../../models/UserCardData';

const mockUserCards: UserCardData[] = [
  {
    id: 1,
    name: 'UserCard One',
    email: 'card1@test.com',
    date: '2000-01-01',
    attack: 'Draining Kiss',
    consent: true,
    type: 'pokemon',
    image: new File(['image'], 'image.png'),
  } as const,
  {
    id: 2,
    name: 'UserCard Two',
    email: 'card2@test.com',
    date: '2000-01-02',
    attack: 'Psychic Removal',
    consent: true,
    type: 'energy',
    image: new File(['image'], 'image.png'),
  } as const,
];

describe('UserCardsList component', () => {
  global.URL.createObjectURL = vi.fn(() => 'image.png');

  it('should render list of usercards correctly', () => {
    const { getByText } = render(<UserCardsList cards={mockUserCards} />);

    expect(getByText('UserCard One')).toBeInTheDocument();
    expect(getByText('UserCard Two')).toBeInTheDocument();

    expect(getByText('2000-01-01')).toBeInTheDocument();
    expect(getByText('2000-01-02')).toBeInTheDocument();

    expect(getByText('Draining Kiss')).toBeInTheDocument();
    expect(getByText('Psychic Removal')).toBeInTheDocument();

    expect(getByText('pokemon')).toBeInTheDocument();
    expect(getByText('energy')).toBeInTheDocument();
  });
});
