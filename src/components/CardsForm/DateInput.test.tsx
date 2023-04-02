import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import DateInput from './DateInput';

describe('DateInput Component', () => {
  const errors = { date: 'date required' };
  const date = React.createRef<HTMLInputElement>();

  it('displays error if date error is given', () => {
    const { getByText } = render(<DateInput errors={errors} date={date} />);
    const errorMessage = getByText(errors.date);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if date error is not given', () => {
    const { queryByText } = render(<DateInput errors={{}} date={date} />);
    const errorMessage = queryByText(errors.date);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
