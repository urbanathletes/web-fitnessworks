import React from 'react';
import './styles.css';

function Modal({ isOpen, closeModal }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <a href="https://form.fitnessworks.co.id/99k" target="_blank" rel="noopener noreferrer">
          <img
            src="/image/home/promo_99.png"
            alt="Popup"
            style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}

          />
        </a>
      </div>
    </div>
  );
}

export default Modal;

