import React from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ERROR, INFO, OK } from '../../constants';

import ttStyles from './tooltip.module.css';

const ToolTip = ({ message, type }) => {
  const textClass = (kind) => {
    switch (kind) {
      case INFO: return 'text text_type_main-medium';
      case OK: return 'text text_type_main-medium';
      case ERROR: return 'text text_type_main-medium text_color_error';
      default: throw new TypeError('Тип всплывающего окна не соответствует!');
    }
  };
  return (
    <div className={ttStyles.tooltip}>
      <p className={`${textClass(type)}`}>{message}</p>
    </div>
  );
};

ToolTip.defaultProps = {
  type: INFO,
};

ToolTip.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ToolTip;
