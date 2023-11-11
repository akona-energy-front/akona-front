import React from 'react';
import styles from '../scss/Modal.module.scss';

function Modal({ children, onClose }) {
  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
