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
  const selectedOrder = useSelector((state) => state?.feed?.select);
  const { isOpen } = useSelector((store) => store.feed.public);
  const foundOrder = React.useMemo(
    () => latestOrders?.find((item) => item._id === id),
    [latestOrders, id],
  );
  const order = React.useMemo(() => selectedOrder || foundOrder, [selectedOrder, foundOrder]);
  console.dir(order);
  console.log('--------');
  console.dir(selectedOrder);

  React.useEffect(() => {
    if (!!latestOrders && !foundOrder) {
      history.push({ pathname: '/404', state: { order: true } });
    }
  }, [history, foundOrder, latestOrders]);

  React.useEffect(() => {
    if (!order && !!latestOrders && !isOpen) {
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
