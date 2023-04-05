import React from 'react';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  it('should render the correct links with the correct styles', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    const homeLink = screen.getByRole('link', { name: /home/i });

    expect(aboutLink.style.color).toBe('black');
    expect(homeLink.style.color).toBe('darkcyan');

    fireEvent.click(aboutLink);

    expect(aboutLink.style.color).toBe('darkcyan');
    expect(homeLink.style.color).toBe('black');
  });
});
