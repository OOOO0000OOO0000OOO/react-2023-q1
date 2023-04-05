import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage Component', () => {
  it('should render an h3 tag with about us text', () => {
    const { getByRole } = render(<AboutPage />);
    const header = getByRole('heading', { name: /about us/i });

    expect(header).toBeInTheDocument();
  });

  it('should render a paragraph tag with some text', () => {
    const { getByText } = render(<AboutPage />);
    const paragraph = getByText(/lorem ipsum dolor/i);

    expect(paragraph).toBeInTheDocument();
  });
});
