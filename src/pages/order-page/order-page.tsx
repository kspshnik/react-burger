import React, {FC} from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store/hooks';

import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo                            from '../../components/center-info/center-info';
import OrderDetails                          from '../../components/order-details/order-details';
import { PRIVATE, PUBLIC, REASON_404_ORDER } from '../../constants';
import { getOrderThunk }                     from '../../services/thunks';
import {TFeedType} from "../../types/websocket.types";
import {TLocationState} from "../../types/types";

type TOrderPageProps = {
  feedType: TFeedType,
}

const OrderPage : FC<TOrderPageProps> = ({ feedType }) => {
  const location = useLocation<TLocationState>();
  const dispatch = useDispatch();
  const params = React.useMemo(() => new URLSearchParams(location.search), [location]);
  const orderNumber = React.useMemo(() => Number(params.get('number')), [params]);
  const history = useHistory<TLocationState>();
  const { isIngredientsLoading, isIngredientsLoaded, isOrderNotFound } = useSelector((state) => ({
    isIngredientsLoading: state.api.isIngredientsLoading,
    isIngredientsLoaded: !!state.ingredients.all,
    isOrderNotFound: state.api.isOrderNotFound,
  }));
  const wayback = React.useMemo(() => {
    switch (feedType) {
      case PRIVATE: return '/profile/orders';
      case PUBLIC: return '/feed';
      default: throw new TypeError('Неверный тип FeedType в OrderPage!!');
    }
  }, [feedType]);
  const { order } = useSelector((state) => state.feed.select);
  React.useEffect(() => {
    if (!!orderNumber || orderNumber === 0) {
      dispatch(getOrderThunk(orderNumber));
    }
  }, [dispatch, orderNumber]);
  React.useEffect(() => {
    if (isOrderNotFound) {
      history.push({ pathname: '/404', state: { reasonFor404: REASON_404_ORDER, wayback } });
    }
  }, [history, isOrderNotFound, wayback]);

  return (
    <LoaderProtector isLoaded={!!order
                               && !isIngredientsLoading
                               && !isOrderNotFound
                               && isIngredientsLoaded}>
      <CenterInfo>
        {order && <OrderDetails order={order} />}
      </CenterInfo>
    </LoaderProtector>
  );
};


export default OrderPage;
