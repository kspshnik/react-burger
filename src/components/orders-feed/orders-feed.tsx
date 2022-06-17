import React, { FC } from 'react';

import { useDispatch, useSelector } from '../../services/store/hooks';

import { startPrivateFeed, stopPrivateFeed } from '../../services/store';
import OrderRibbon from '../order-ribbon/order-ribbon';
import { PRIVATE } from '../../constants';
import LoaderProtector from '../loader-protector/loader-protector';

const OrdersFeed : FC = () => {
  const dispatch = useDispatch();
  const isFeedLoaded = useSelector((state) => !!state?.feed?.private?.orders);
  const isIngredientsLoaded = useSelector((state) => !!state?.ingredients?.all);

  React.useEffect(() => {
    dispatch(startPrivateFeed());
    return () => {
      dispatch(stopPrivateFeed());
    };
  }, [dispatch]);

  return (
    <LoaderProtector isLoaded={isFeedLoaded && isIngredientsLoaded}>
      <OrderRibbon feedType={PRIVATE} />
    </LoaderProtector>

  );
};

export default OrdersFeed;
