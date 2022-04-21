import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo from '../../components/center-info/center-info';
import OrderDetails from '../../components/order-details/order-details';
import {
  startPublicFeed, stopPublicFeed,
} from '../../services/actionCreators';
import { PRIVATE, PUBLIC } from '../../constants';

const OrderPage = ({ feedType }) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const latestPublicOrders = useSelector((state) => state?.feed.public?.orders);
  const latestPrivateOrders = useSelector((state) => state?.feed.private?.orders);
  const selectedOrder = useSelector((state) => state?.feed?.select.order);
  const isPublicFeedOpen = useSelector((store) => store?.feed?.public?.isOpen);
  const isPrivateFeedOpen = useSelector((store) => store?.feed?.private?.isOpen);
  const latestOrders = feedType === PUBLIC ? latestPublicOrders : latestPrivateOrders;
  const isOpen = feedType === PRIVATE ? isPrivateFeedOpen : isPublicFeedOpen;
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

  React.useEffect(() => {
    if (!!latestOrders && isOrderNonExist) {
      history.push({ pathname: '/404', state: { order: true } });
    }
  }, [history, isOrderNonExist, latestOrders]);

  React.useEffect(() => {
    if (!order && !latestOrders && !isOpen) {
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

OrderPage.propTypes = {
  feedType: PropTypes.string.isRequired,
};

export default OrderPage;
