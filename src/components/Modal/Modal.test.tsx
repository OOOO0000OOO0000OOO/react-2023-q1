import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  const onClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render when isOpen is true', () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        Hello World
      </Modal>
    );
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  it('does not render anything when isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={onClose}>
        Hello World
      </Modal>
    );
    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when the overlay is clicked', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onClose}>
        Hello World
      </Modal>
    );
    fireEvent.click(getByTestId('overlay'));
    expect(onClose).toHaveBeenCalled();
  });

  it('does not call onClose when the modal content is clicked', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={onClose}>
        Hello World
      </Modal>
    );
    fireEvent.click(getByTestId('modal'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
