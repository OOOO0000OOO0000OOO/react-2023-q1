import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const container = useMemo(() => document.body, []);
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return isOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            onClick={onClose}
            className={styles.overlay}
            data-testid="overlay"
          >
            <div
              className={styles.modal}
              onClick={stopPropagation}
              data-testid="modal"
            >
              <button onClick={onClose} className={styles.closeButton}></button>
              {children}
            </div>
          </div>
        </React.Fragment>,
        container
      )
    : null;
};

export default Modal;
