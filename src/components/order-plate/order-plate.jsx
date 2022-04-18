import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import opStyles from './order-plate.module.css';
import {
  DONE, PRIVATE,
} from '../../constants';
import ContentRibbon from '../content-ribbon/content-ribbon';
import { calculateTotal, prepareDateTime, statusName } from '../../helpers';

const OrderPlate = ({ order, feedType }) => {
  const {
    createdAt, name, number, status, ingredients,
  } = order;
  /*   _id, */
  const { all } = useSelector((state) => state.ingredients);

  const isDone = () => status === DONE;
  const total = calculateTotal(all, ingredients);

  return (
    <div className={`${opStyles.order} p-6 mb-4`}>
      <div className={`${opStyles.order__line} mb-6`}>
        <p className='text text_type_digits-default'>
          {`#${number}`}
        </p>
        <p className='text text_type_main-default text_color_inactive'>
          {prepareDateTime(createdAt)}
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
          <p className='text text_type_digits-default mr-2'>{total}</p>
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
