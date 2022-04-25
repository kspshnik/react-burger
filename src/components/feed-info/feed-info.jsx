import React from 'react';

import { useSelector } from 'react-redux';
import fiStyles from './feed-info.module.css';
import InfoPlate from '../info-plate/info-plate';
import InfoGrid from '../info-grid/info-grid';
import { DONE, PENDING } from '../../constants';

const FeedInfo = () => {
  const { total, totalToday, orders } = useSelector((state) => state.feed.public);
  const pendingOrders = orders.reverse()
    .filter((order) => order.status === PENDING)
    .map((order) => order.number).slice(15);
  const doneOrders = orders.reverse()
    .filter((order) => order.status === DONE)
    .map((order) => order.number);

  return (
    <section className={fiStyles.info}>
      <InfoGrid
        pendingOrders={pendingOrders.slice(0, 15)}
        doneOrders={doneOrders.slice(0, 15)} />
      <InfoPlate title='Выполнено за все время:' quantity={total} />
      <InfoPlate title='Выполнено за сегодня:' quantity={totalToday} />
    </section>
  );
};

export default FeedInfo;
