import React, { FC } from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/store/hooks';
import orStyles from './order-ribbon.module.css';
import OrderPlate from '../order-plate/order-plate';
import { TOrderRibbonProps } from '../../types/components.props.types';

const OrderRibbon : FC<TOrderRibbonProps> = ({ feedType }) => {
  const { orders } = useSelector((state) => state.feed[feedType] ?? []);

  return (
    <ul className={`${orStyles.ribbon} custom-scroll`}>
      {orders!.map((order) => (
        <li key={order._id} className={orStyles.ribbon__item}>
          <OrderPlate order={order} feedType={feedType} />
        </li>
      )) }
    </ul>
  );
};

export default OrderRibbon;
