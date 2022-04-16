import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import opStyles from './order-plate.module.css';
import {
  BUN,
  CREATED, DONE, PENDING, PRIVATE,
} from '../../constants';
import ContentRibbon from '../content-ribbon/content-ribbon';

const OrderPlate = ({ order, feedType }) => {
  const {
    createdAt, name, number, status, ingredients,
  } = order;
  /*   _id, */
  const { all } = useSelector((state) => state.ingredients);

  const statusName = (stage) => {
    switch (stage) {
      case CREATED: {
        return 'Создан';
      }
      case PENDING: {
        return 'Готовится';
      }
      case DONE: {
        return 'Выполнен';
      }
      default: {
        throw new TypeError('Неверная стадия приготовления!');
      }
    }
  };
  const isDone = () => status === DONE;
  const calculateTotal = () => {
    const bun = ingredients.find((item) => all[item]?.type === BUN);
    const total = ingredients.reduce((acc, item) => {
      if (!item || !all[item] || !all[item]?.price) {
        return acc;
      }
      return acc + all[item].price;
    }, 0);
    const extra = (!!bun && !!all[bun].price) ? all[bun].price : 0;
    return total + extra;
  };

  return (
    <div className={`${opStyles.order} p-6 mb-4`}>
      <div className={`${opStyles.order__line} mb-6`}>
        <p className='text text_type_digits-default'>
          {`#${number}`}
        </p>
        <p className='text text_type_main-default text_color_inactive'>
          {createdAt}
        </p>
      </div>
      <div className={`${opStyles.order__line} mb-6`}>
        <h3 className={`${opStyles.order__caption} text text_type_main-medium`}>
          {name}
        </h3>
        {feedType === PRIVATE && (
          <p className={`text text_type_main-default ${isDone() ? 'text_color_success' : ''} mb-2`}>
            {statusName(status)}
          </p>
        )}
      </div>
      <div className={opStyles.order__line}>
        <ContentRibbon content={ingredients} />
        <div className={opStyles.order__price}>
          <p className='text text_type_digits-default mr-2'>{calculateTotal()}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>

  );
};

OrderPlate.propTypes = {
  order: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  feedType: PropTypes.string.isRequired,
};

export default OrderPlate;
