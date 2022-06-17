import React, { FC } from 'react';
import { useDispatch, useSelector } from '../../services/store/hooks';

import { startPublicFeed, stopPublicFeed } from '../../services/store';
import TwoColumns from '../../components/two-columns/two-columns';
import FeedInfo from '../../components/feed-info/feed-info';
import OrderRibbon from '../../components/order-ribbon/order-ribbon';
import { PUBLIC } from '../../constants';

import fpStyles from './feed-page.module.css';
import LoaderProtector from '../../components/loader-protector/loader-protector';

const FeedPage : FC = () => {
  const dispatch = useDispatch();
  const isFeedLoaded = useSelector((state) => !!state?.feed?.public?.orders);
  const isIngredientsLoaded = useSelector((state) => !!state?.ingredients?.all);
  React.useEffect(() => {
    dispatch(startPublicFeed());
    return () => {
      dispatch(stopPublicFeed());
    };
  }, [dispatch]);
  return (
    <LoaderProtector isLoaded={isFeedLoaded && isIngredientsLoaded}>
      <TwoColumns>
        <div className={fpStyles.wrapper}>
          <OrderRibbon feedType={PUBLIC} />
        </div>
        <FeedInfo />
      </TwoColumns>
    </LoaderProtector>
  );
};

export default FeedPage;
