import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';

import { TModalWindowProps } from '../../types/components.props.types';

const ErrorPopup : FC<TModalWindowProps> = ({ message }) => (
  <p className='text text_type_main-medium text_color_error'>{message}</p>
);

export default ErrorPopup;
