import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import opStyles from './order-plate.module.css';
import {
  DONE, PRIVATE, PUBLIC,
}                                                      from '../../constants';
import ContentRibbon                                   from '../content-ribbon/content-ribbon';
import { calculateTotal, prepareDateTime, statusName } from '../../services/helpers';
import { captureOrder }                                from '../../services/actionCreators';

const OrderPlate = ({ order, feedType }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const {
    createdAt, name, number, status, ingredients, _id,
  } = order;
  const { all } = useSelector((state) => state.ingredients);

  const isDone = () => status === DONE;
  const total = calculateTotal(all, ingredients);
  const onClick = () => {
    dispatch(captureOrder(order));
    const pathToGo = feedType === PUBLIC ? `/feed/${_id}/?number=${number}` : `/profile/orders/${_id}/?number=${number}`;
    history.push({ pathname: `${pathToGo}`, state: { background: location } });
  };

  return (
    <button type='button' className={`${opStyles.order} p-6 mb-4`} onClick={onClick}>
      <div className={`${opStyles.order__line} mb-6`}>
        <p className='text text_type_digits-default text_color_primary'>
          {`#${number}`}
        </p>
        <p className='text text_type_main-default text_color_inactive'>
          {prepareDateTime(createdAt)}
        </p>
      </div>
      <div className={`${opStyles.order__line} mb-6`}>
        <h3 className={`${opStyles.order__caption} text text_type_main-medium text_color_primary`}>
          {name}
        </h3>
        {feedType === PRIVATE && (
          <p className={`text text_type_main-default ${isDone() ? 'text_color_success' : 'text_color_primary'} mb-2`}>
            {statusName(status)}
          </p>
        )}
      </div>
      <div className={opStyles.order__line}>
        <ContentRibbon content={ingredients} />
        <div className={opStyles.order__price}>
          <p className='text text_type_digits-default text_color_primary mr-2'>{total}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </button>

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
