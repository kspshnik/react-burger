import React, { useEffect, useMemo } from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import mdStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({
  onClose, title, children,
}) => {
  const portalRoot = useMemo(() => document.getElementById('modals'), []);
  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose, portalRoot]);
  const makeCaption = () => {
    if (title) {
      return (
        <div className={mdStyles.caption}>
          <h2 className={`${mdStyles.title} text text_type_main-large`}>{title}</h2>
        </div>
      );
    }
    return null;
  };
  return ReactDOM.createPortal((
    <>
      <ModalOverlay onClose={onClose} />
      <div className={`${mdStyles.modal} p-10 `}>
        <header className={`${mdStyles.header} ${title ? '' : `${mdStyles.header_nocontent}`}`}>
          {makeCaption()}
          <CloseIcon type='primary' onClick={onClose} />
        </header>
        {
          children
        }
      </div>
    </>), portalRoot);
};
Modal.defaultProps = {
  title: null,
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
