import React from 'react';
import PropTypes from 'prop-types';

import moStyles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div aria-hidden='true' className={moStyles.overlay} onMouseDown={handleOverlayClick}>
      {children}
    </div>
  );
};
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
