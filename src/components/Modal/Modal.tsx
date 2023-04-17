import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  const container = useMemo(() => document.body, []);
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
  return ReactDOM.createPortal(
    <React.Fragment>
      <div onClick={onClose} className={styles.overlay} data-testid="overlay">
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
  );
};

export default Modal;
