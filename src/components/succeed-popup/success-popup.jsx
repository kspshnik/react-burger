import React from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const SuccessPopup = ({ message }) => (
  <p className='text text_type_main-meduym'>{message}</p>
);

SuccessPopup.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessPopup;
