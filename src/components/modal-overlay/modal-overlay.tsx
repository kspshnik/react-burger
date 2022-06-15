import React, { FC, MouseEventHandler, useEffect } from 'react';

import moStyles from './modal-overlay.module.css';
import { TModalOverlayProps } from '../../types/components.props.types';

const ModalOverlay : FC<TModalOverlayProps> = ({ onClose }) => {
  const handleOverlayClick : MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleEscClose = (evt : KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);
  return (
    <div aria-hidden='true' className={moStyles.overlay} onMouseDown={handleOverlayClick} />
  );
};

export default ModalOverlay;
