import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { UserInput } from 'components';

describe('UserInput Component', () => {
  const mockProps = {
    name: 'name',
    register: vi.fn(),
    options: {},
    error: { message: 'test required' },
  } as const;

  it('displays error message if error is given', () => {
    const { getByText } = render(<UserInput {...mockProps} />);
    const errorMessage = getByText(mockProps.error.message);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if error is not given', () => {
    const { queryByText } = render(<UserInput {...mockProps} error={{}} />);
    const errorMessage = queryByText(mockProps.error.message);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
