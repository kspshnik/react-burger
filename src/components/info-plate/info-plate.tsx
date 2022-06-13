import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import ipStyles from './info-plate.module.css';
import { TInfoPlateProps } from '../../types/components.props.types';

const InfoPlate : FC<TInfoPlateProps> = ({ title, quantity }) => (
  <div className={ipStyles.plate}>
    <h3 className='text text_type_main-medium'>{title}</h3>
    <p className='text text_type_digits-large'>{quantity}</p>
  </div>
);

export default InfoPlate;
