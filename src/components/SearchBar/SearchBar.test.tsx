import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const onSearch = vi.fn();
  const onChange = vi.fn();
  const props = { onSearch, onChange, searchQuery: '' };

  it('should render an input and a button', () => {
    const { getByRole } = render(<SearchBar {...props} />);

    expect(getByRole('textbox')).toBeDefined();
    expect(getByRole('button')).toBeDefined();
  });

  it('should update search query on input change', () => {
    const { getByRole } = render(<SearchBar {...props} />);
    const input = getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test query' } });

    expect(input.value).toBe('test query');
  });

  it('should call onSearch with search query on form submit', () => {
    const { getByRole } = render(<SearchBar {...props} />);

    const input = getByRole('textbox');
    const button = getByRole('button');

    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    expect(onSearch).toHaveBeenCalledWith('test query');
  });
});
