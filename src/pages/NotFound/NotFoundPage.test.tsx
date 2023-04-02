import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    render(<NotFoundPage />);
    expect(screen.getByTestId('404')).toBeInTheDocument();
  });

  it('contains a 404 heading', () => {
    const { getByRole } = render(<NotFoundPage />);
    expect(getByRole('heading')).toHaveTextContent(/404/);
  });

  it('contains a message indicating nothing was found', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText(/nothing was found/i)).toBeInTheDocument();
  });

  it('contains an image', () => {
    const { getByRole } = render(<NotFoundPage />);
    expect(getByRole('img')).toHaveAttribute('alt');
    expect(getByRole('img')).toHaveAttribute('src', '/pokemonsad.jpg');
  });
});
