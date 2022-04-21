import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation } from 'react-router-dom';
import { calculateTotal, prepareDateTime, statusName } from '../../helpers';
import IngredientPlate from '../ingredient-plate/ingredient-plate';

import odStyles from './order-details.module.css';

const OrderDetails = ({ order }) => {
  const {
    createdAt, name, number, status, ingredients,
  } = order;
  const { all } = useSelector((state) => state.ingredients);
  const uniqueContent = Array.from(new Set(ingredients));
  const { state } = useLocation();
  const total = calculateTotal(all, ingredients);
  const makeIngredient = (itm) => {
    if (itm) {
      return (
        <IngredientPlate
          price={all[itm].price}
          img={all[itm].image_mobile}
          qty={ingredients.filter((ing) => ing === itm).length}
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

OrderDetails.propTypes = {
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default OrderDetails;
