import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from 'components';
import { Provider } from 'react-redux';
import { store } from 'store';

describe('SearchBar', () => {
  it('should render an input with search value', () => {
    const mockQuery = 'bcxbvxh54';
    const { getByRole } = render(
      <Provider store={store}>
        <SearchBar searchQuery={mockQuery} />
      </Provider>
    );
    const input = getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe(mockQuery);
  });

  it('should update search query on input change', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <SearchBar searchQuery="" />
      </Provider>
    );
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input.value).toBe('test query');
  });
});
