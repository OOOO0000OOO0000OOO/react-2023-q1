import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ModalCardLoader } from 'components';

describe('ModalCardLoader component', () => {
  it('displays skeleton elements', () => {
    const { getByTestId } = render(<ModalCardLoader />);

    expect(getByTestId('image-skeleton')).toBeInTheDocument();
    expect(getByTestId('title-skeleton')).toBeInTheDocument();
    expect(getByTestId('line-skeletons')).toBeInTheDocument();
  });
});
