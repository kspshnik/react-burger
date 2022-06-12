import React from 'react';

import { useSelector } from '../../services/store/hooks';
import fiStyles from './feed-info.module.css';
import InfoPlate from '../info-plate/info-plate';
import InfoGrid from '../info-grid/info-grid';
import { DONE, PENDING } from '../../constants';
import { prepareOrders } from '../../services/helpers';

const FeedInfo = () => {
  const { total, totalToday, orders } = useSelector((state) => state.feed.public);
  const { pendingOrders, doneOrders } = orders ? {
    pendingOrders: prepareOrders(orders, PENDING),
    doneOrders: prepareOrders(orders, DONE),
  } : { pendingOrders: [], doneOrders: [] };

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
