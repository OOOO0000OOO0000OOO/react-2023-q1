import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import UserInput from './UserInput';

describe('UserInput Component', () => {
  const mockProps = {
    label: 'name:',
    name: 'name',
    errors: { name: 'test required' },
    inputRef: React.createRef<HTMLInputElement>(),
  } as const;

  it('displays error message if error is given', () => {
    const { getByText } = render(<UserInput {...mockProps} />);
    const errorMessage = getByText(mockProps.errors.name);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if error is not given', () => {
    const { queryByText } = render(<UserInput {...mockProps} errors={{}} />);
    const errorMessage = queryByText(mockProps.errors.name);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
