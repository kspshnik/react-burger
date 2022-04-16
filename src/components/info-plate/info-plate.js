import React from 'react';
import PropTypes from 'prop-types';

import '@ya.praktikum/react-developer-burger-ui-components';
import ipStyles from './info-plate.module.css';

const InfoPlate = ({ title, quantity }) => (
  <div className={ipStyles.plate}>
    <h3 className='text text_type_main-medium'>{title}</h3>
    <p className='text text_type_digits-large'>{quantity}</p>
  </div>
);

InfoPlate.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default InfoPlate;
