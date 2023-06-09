import React from 'react';
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from 'components';

describe('Header component', () => {
  it('should render the correct links with the correct styles', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    const homeLink = screen.getByRole('link', { name: /cards/i });

    expect(homeLink.className).contain('linkActive');

    fireEvent.click(aboutLink);

    expect(aboutLink.className).contain('linkActive');
  });
});
