import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import { TPopupProps } from '../components.props.types';

const SuccessPopup : FC<TPopupProps> = ({ message }) => (
  <p className='text text_type_main-meduym'>{message}</p>
);

export default SuccessPopup;
