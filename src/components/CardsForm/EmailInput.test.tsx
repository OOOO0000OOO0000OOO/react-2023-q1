import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import EmailInput from './EmailInput';

describe('EmailInput Component', () => {
  const errors = { email: 'email required' };
  const email = React.createRef<HTMLInputElement>();

  it('displays error if email error is given', () => {
    const { getByText } = render(<EmailInput errors={errors} email={email} />);
    const errorMessage = getByText(errors.email);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if email error is not given', () => {
    const { queryByText } = render(<EmailInput errors={{}} email={email} />);
    const errorMessage = queryByText(errors.email);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
