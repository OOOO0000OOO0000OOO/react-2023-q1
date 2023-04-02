import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import TypeInput from './TypeInput';

const refs = {
  pokemon: React.createRef<HTMLInputElement>(),
  trainer: React.createRef<HTMLInputElement>(),
  energy: React.createRef<HTMLInputElement>(),
};

describe('TypeInput component', () => {
  it('renders correctly with expected props', () => {
    const { getByLabelText, getByText } = render(<TypeInput type={refs} />);

    expect(getByText(/type:/i)).toBeInTheDocument();

    expect(getByLabelText('pokemon')).toBeInTheDocument();
    expect(getByLabelText('trainer')).toBeInTheDocument();
    expect(getByLabelText('energy')).toBeInTheDocument();

    expect(getByLabelText('pokemon')).toHaveAttribute('checked');
  });
});
