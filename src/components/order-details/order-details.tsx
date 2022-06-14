import React, { FC, ReactNode } from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store/hooks';
import { calculateTotal, prepareDateTime, statusName } from '../../services/helpers';
import IngredientPlate from '../ingredient-plate/ingredient-plate';

import odStyles from './order-details.module.css';
import { TOrderDetailsProps } from '../../types/components.props.types';
import { TAllIngredients, TLocationState } from '../../types/types';

const OrderDetails : FC<TOrderDetailsProps> = ({ order }) => {
  const {
    createdAt, name, number, status, ingredients,
  } = order;
  const { all = {} } = useSelector((state) => state.ingredients || {});
  const uniqueContent = Array.from(new Set(Object.keys(ingredients)));
  const { state } = useLocation<TLocationState>();
  const total = calculateTotal(all as TAllIngredients, ingredients as Array<string>);
  const makeIngredient = (itm : string) : ReactNode => {
    const ingrs = ingredients as Array<string>;
    if (all && itm && all[itm] && Array.isArray(ingredients)) {
      return (
        <IngredientPlate
          price={all[itm].price}
          img={all[itm].image_mobile}
          qty={ingrs.filter((ing) => ing === itm).length}
          name={all[itm].name}
          key={itm} />
      );
    }
    return null;
  };
  return (
    <div className={odStyles.order__wrapper}>
      <section className={odStyles.order}>
        <p className={`text text_type_digits-default mb-10 ${state?.background ? '' : 'mt-30'}`}>
          #
          {number}
        </p>
        <p className={`${odStyles.order__align} text text_type_main-medium mb-3`}>{name}</p>
        <p className={`${odStyles.order__align} text text_type_main-default text_color_success mb-10`}>
          {statusName(status)}
        </p>
        <p className={`${odStyles.order__align} text text_type_digits-default mb-6`}>Состав:</p>
        <ul className={`${odStyles.order__scroll} mb-10`}>
          {uniqueContent.map((item) => makeIngredient(item))}
        </ul>
        <div className={odStyles.order__info}>
          <p className='text text_type_main-default text_color_inactive'>
            {prepareDateTime(createdAt)}
          </p>
          <div className={odStyles.order_price}>
            <p className='text text_type_digits-default'>{total}</p>
            <CurrencyIcon type='primary' />
          </div>

        </div>

      </section>
    </div>
  );
};

export default OrderDetails;
