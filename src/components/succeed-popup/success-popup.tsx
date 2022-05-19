import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { TPopupProps } from '../components.props.types';

const SuccessPopup : FC<TPopupProps> = ({ message }) => (
  <p className='text text_type_main-meduym'>{message}</p>
);

SuccessPopup.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessPopup;
