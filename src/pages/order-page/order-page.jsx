import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo from '../../components/center-info/center-info';
import OrderDetails from '../../components/order-details/order-details';
import {
  startPublicFeed, stopPublicFeed,
} from '../../services/actionCreators';

const OrderPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const latestOrders = useSelector((state) => state?.feed?.public?.orders);
  const selectedOrder = useSelector((state) => state?.feed?.select.order);
  const { isOpen } = useSelector((store) => store.feed.public);
  const isOrderNonExist = React.useMemo(
    () => (latestOrders
      ? !latestOrders?.find((item) => item._id === id)
      : false),
    [id, latestOrders],
  );
  const foundOrder = React.useMemo(
    () => latestOrders?.find((item) => item._id === id),
    [latestOrders, id],
  );
  const order = React.useMemo(() => selectedOrder || foundOrder, [selectedOrder, foundOrder]);
  console.dir(order);

  React.useEffect(() => {
    if (!!latestOrders && isOrderNonExist) {
      history.push({ pathname: '/404', state: { order: true } });
    }
  }, [history, isOrderNonExist, latestOrders]);

  React.useEffect(() => {
    if (!order && !latestOrders && !isOpen) {
      console.dir('Запрос публичного фида из /feed:id!');
      dispatch(startPublicFeed());
    }
    return () => {
      if (isOpen) {
        dispatch(stopPublicFeed());
      }
    };
  }, [dispatch, isOpen, latestOrders, order]);

  return (
    <LoaderProtector isLoaded={!!order}>
      <CenterInfo>
        <OrderDetails order={order} />
      </CenterInfo>
    </LoaderProtector>
  );
};

export default OrderPage;
