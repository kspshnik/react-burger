import React from 'react';

import '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import orStyles from './order-ribbon.module.css';
import OrderPlate from '../order-plate/order-plate';

const OrderRibbon = ({ feedType }) => {
  const { orders } = useSelector((state) => state.feed[feedType]);

  return (
    <ul className={orStyles.ribbon}>
      {orders.map((order) => (
        <li key={order._id} className={orStyles.ribbon__item}>
          <OrderPlate order={order} feedType={feedType} />
        </li>
      )) }
    </ul>
  );
};

OrderRibbon.propTypes = {
  feedType: PropTypes.string.isRequired,
};

export default OrderRibbon;
