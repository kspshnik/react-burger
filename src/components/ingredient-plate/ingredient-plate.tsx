import React, { FC } from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import inpStyles from './ingredient-plate.module.css';
import { TIngredientPlateProps } from '../../types/components.props.types';

const IngredientPlate : FC<TIngredientPlateProps> = ({
  img, name, qty, price,
}) => (
  <li className={`${inpStyles.plate} mb-4`}>
    <div className={inpStyles.plate__info}>
      <img className={inpStyles.plate__image} src={img} alt={name} />
      <p className={`${inpStyles.plate__text} text text_type_main-default pl-4`}>
        {name}
      </p>
    </div>
    <div className={inpStyles.plate__price}>
      <p className='text text_type_digits-default mr-2'>
        {`${qty} x ${price}`}
      </p>
      <CurrencyIcon type='primary' />
    </div>
  </li>
);

export default IngredientPlate;
