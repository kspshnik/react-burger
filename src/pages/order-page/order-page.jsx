import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo      from '../../components/center-info/center-info';
import OrderDetails    from '../../components/order-details/order-details';
import { PRIVATE, PUBLIC, REASON_404_ORDER } from '../../constants';
import { getOrderThunk }                     from '../../services/thunks';

const OrderPage = ({ feedType }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = React.useMemo(() => new URLSearchParams(location.search), [location]);
  const orderNumber = React.useMemo(() => Number(params.get('number')), [params]);
  const history = useHistory();
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

OrderPage.propTypes = {
  feedType: PropTypes.string.isRequired,
};

export default OrderPage;
