import React, { useEffect, useMemo } from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import mdStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({
  onClose, title, children,
}) => {
  const portalElement = useMemo(() => document.createElement('div'), []);
  portalElement.id = 'modal';
  const portalRoot = useMemo(() => document.body, []);
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    portalRoot.appendChild(portalElement);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      portalRoot.removeChild(portalElement);
    };
  }, [onClose, portalRoot, portalElement]);
  return ReactDOM.createPortal((
    <ModalOverlay onClose={onClose}>
      <div className={`${mdStyles.modal} p-10`}>
        <header className={mdStyles.header}>
          <div className={mdStyles.caption}>
            <h2 className={`${mdStyles.title} text text_type_main-large`}>{title}</h2>
          </div>
          <CloseIcon type='primary' onClick={onClose} />
        </header>
        {
          children
        }
      </div>
    </ModalOverlay>), portalElement);
};
Modal.defaultProps = {
  title: '   ',
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
