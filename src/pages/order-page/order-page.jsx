import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo from '../../components/center-info/center-info';
import OrderDetails from '../../components/order-details/order-details';
import { PRIVATE, PUBLIC } from '../../constants';
import {
  startPrivateFeed, startPublicFeed, stopPrivateFeed, stopPublicFeed,
} from '../../services/actionCreators';

const OrderPage = ({ feedType }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.feed[feedType]);

  const startFeed = React.useCallback(() => {
    if (feedType === PUBLIC) {
      dispatch(startPublicFeed());
    } else if (feedType === PRIVATE) {
      dispatch(startPrivateFeed());
    } else throw new TypeError('Неверный тип фида передан!');
  }, [dispatch, feedType]);

  const stopFeed = React.useCallback(() => {
    if (feedType === PUBLIC) {
      dispatch(stopPublicFeed());
    } else if (feedType === PRIVATE) {
      dispatch(stopPrivateFeed());
    } else throw new TypeError('Неверный тип фида передан!');
  }, [dispatch, feedType]);

  React.useEffect(() => {
    dispatch(startFeed());
    return () => {
      dispatch(stopFeed());
    };
  }, [dispatch, startFeed, stopFeed]);

  const order = React.useMemo(() => {
    if (orders) {
      return orders.find((item) => item._id === id);
    }
    return {};
  }, [orders, id]);

  React.useEffect(() => {
    if (orders || !order) {
      history.push({ pathname: '/404', state: { order: true } });
    }
  }, [history, id, orders, order]);

  return (
    <LoaderProtector isLoaded={!!id && !!orders}>
      <CenterInfo>
        <OrderDetails order={order} />
      </CenterInfo>
    </LoaderProtector>
  );
};

OrderPage.propTypes = {
  feedType: PropTypes.string.isRequired,
};

export default OrderPage;
