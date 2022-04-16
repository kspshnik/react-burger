import React from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ErrorPopup = ({ message }) => (
  <p className='text text_type_main-medium text_color_error'>{message}</p>
);

ErrorPopup.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorPopup;
