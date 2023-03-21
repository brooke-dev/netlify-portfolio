import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({isOpen, onClose, text}) => {
  return isOpen ? ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>X</button>
        <p>{text}</p>
      </div>
    </div>,
    document.body
  ) : null;
}

export default Modal