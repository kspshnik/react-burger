import React, { FC, MouseEventHandler } from 'react';

import moStyles from './modal-overlay.module.css';
import { IGenericHandler } from '../../types/types';

type TModalOverlayProps = {
  onClose: IGenericHandler,
};

const ModalOverlay : FC<TModalOverlayProps> = ({ onClose }) => {
  const handleOverlayClick : MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div aria-hidden='true' className={moStyles.overlay} onMouseDown={handleOverlayClick} />
  );
};

export default ModalOverlay;
