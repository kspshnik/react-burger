import React from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import mdStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({
  onClose, title, children,
}) => (
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
  </ModalOverlay>
);
Modal.defaultProps = {
  title: '   ',
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default Modal;
