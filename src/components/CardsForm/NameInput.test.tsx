import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import NameInput from './NameInput';

describe('NameInput Component', () => {
  const mockProps = {
    errors: { name: 'name required' },
    name: React.createRef<HTMLInputElement>(),
  };

  it('displays error if name error is given', () => {
    const { getByText } = render(<NameInput {...mockProps} />);
    const errorMessage = getByText(mockProps.errors.name);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if name error is not given', () => {
    const { queryByText } = render(<NameInput {...mockProps} errors={{}} />);
    const errorMessage = queryByText(mockProps.errors.name);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
