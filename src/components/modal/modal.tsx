import React, {
  FC, useMemo,
} from 'react';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ReactDOM from 'react-dom';
import mdStyles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { TModalProps } from '../../types/components.props.types';

const Modal : FC<TModalProps> = ({
  onClose, title, children,
}) => {
  const portalRoot = useMemo(() => document.getElementById('modals'), []) as Element;

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

export default Modal;
