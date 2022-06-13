import React, { FC } from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store/hooks';
import opStyles from './order-plate.module.css';
import {
  DONE, PRIVATE, PUBLIC,
} from '../../constants';
import ContentRibbon from '../content-ribbon/content-ribbon';
import { calculateTotal, prepareDateTime, statusName } from '../../services/helpers';
import { captureOrder } from '../../services/store';
import { TOrderPlateProps } from '../../types/components.props.types';

const OrderPlate : FC<TOrderPlateProps> = ({ order, feedType }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    createdAt, name, number, status, ingredients, _id,
  } = order;
  const { all } = useSelector((state) => state.ingredients);

  const isDone = () => status === DONE;
  const total = calculateTotal(all!, ingredients as Array<string>);
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
        <ContentRibbon content={ingredients as Array<string>} />
        <div className={opStyles.order__price}>
          <p className='text text_type_digits-default text_color_primary mr-2'>{total}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </button>

  );
};

export default OrderPlate;
