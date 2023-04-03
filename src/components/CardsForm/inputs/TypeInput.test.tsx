import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import TypeInput from './TypeInput';

const mockRefs = ['pokemon', 'trainer', 'energy'] as const;
describe('TypeInput component', () => {
  it('renders correctly with expected props', () => {
    const { getByLabelText, getByText } = render(
      <TypeInput name="type" register={vi.fn()} types={mockRefs} options={{}} />
    );

    expect(getByText(/type:/i)).toBeInTheDocument();

    expect(getByLabelText('pokemon')).toBeInTheDocument();
    expect(getByLabelText('trainer')).toBeInTheDocument();
    expect(getByLabelText('energy')).toBeInTheDocument();
  });
});
