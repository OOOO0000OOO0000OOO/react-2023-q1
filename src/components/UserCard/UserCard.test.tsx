import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

const mockUserCard = {
  id: 10,
  name: 'John Doe',
  email: 'johndoe@test.com',
  date: '2022-01-01',
  attack: 'Poison Powder',
  consent: true,
  type: 'trainer',
  image: new File(['image'], 'image.png', { type: 'image/png' }),
} as const;

describe('UserCard component', () => {
  global.URL.createObjectURL = vi.fn(() => 'image.png');

  it('should be in the document', () => {
    render(<UserCard {...mockUserCard} />);

    expect(screen.getByTestId('user-card')).toBeInTheDocument();
  });

  it('should render the user card data', () => {
    const { getByRole, getByText } = render(<UserCard {...mockUserCard} />);

    expect(getByRole('img').getAttribute('src')).toBe('image.png');

    expect(getByRole('heading').textContent).toBe(mockUserCard.name);

    expect(getByText(mockUserCard.type)).toBeInTheDocument();
    expect(getByText(mockUserCard.date)).toBeInTheDocument();
    expect(getByText(mockUserCard.attack)).toBeInTheDocument();
  });
});
