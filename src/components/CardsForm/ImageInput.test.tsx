import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ImageInput from './ImageInput';

const mockProps = {
  errors: {},
  image: React.createRef<HTMLInputElement>(),
};

describe('ImageInput component', () => {
  it('should render an input element', () => {
    const { getByLabelText } = render(<ImageInput {...mockProps} />);
    const input = getByLabelText('image:');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'file');
  });

  it('should display error message if there is an image error', () => {
    render(<ImageInput {...mockProps} errors={{ image: 'image error' }} />);
    expect(screen.getByText('image error')).toBeInTheDocument();
  });

  it('should display error message if there is no image errors', () => {
    render(<ImageInput {...mockProps} />);
    expect(screen.queryByText('image error')).not.toBeInTheDocument();
  });
});
