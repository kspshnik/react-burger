import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';

import { ERROR, INFO, OK } from '../../constants';

import ttStyles from './tooltip.module.css';
import { TTooltipProps } from '../components.props.types';

const ToolTip : FC<TTooltipProps> = ({ message, type }) => {
  const textClass = (kind : string) => {
    switch (kind) {
      case INFO:
      case OK: return 'text text_type_main-medium';
      case ERROR: return 'text text_type_main-medium text_color_error';
      default: throw new TypeError('Тип всплывающего окна не соответствует!');
    }
  };
  return (
    <div className={ttStyles.tooltip}>
      <p className={`${textClass(type || INFO)}`}>{message}</p>
    </div>
  );
};

ToolTip.defaultProps = {
  type: INFO,
};

export default ToolTip;
