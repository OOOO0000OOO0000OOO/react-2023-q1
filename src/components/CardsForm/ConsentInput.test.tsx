import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ConsentInput from './ConsentInput';

describe('ConsentInput Component', () => {
  const errors = { consent: 'consent required' };
  const consent = React.createRef<HTMLInputElement>();

  it('displays error if consent error is given', () => {
    const { getByText } = render(
      <ConsentInput errors={errors} consent={consent} />
    );
    const errorMessage = getByText(errors.consent);

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not display error message if consent error is not given', () => {
    const { queryByText } = render(
      <ConsentInput errors={{}} consent={consent} />
    );
    const errorMessage = queryByText(errors.consent);

    expect(errorMessage).not.toBeInTheDocument();
  });
});
