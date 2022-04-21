import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import LoaderProtector from '../../components/loader-protector/loader-protector';
import CenterInfo from '../../components/center-info/center-info';
import OrderDetails from '../../components/order-details/order-details';
import { PRIVATE, PUBLIC, REASON_404_ORDER } from '../../constants';

const OrderPage = ({ feedType }) => {
  const { id } = useParams();
  const history = useHistory();
  const latestPublicOrders = useSelector((state) => state?.feed.public?.orders);
  const latestPrivateOrders = useSelector((state) => state?.feed.private?.orders);
  const selectedOrder = useSelector((state) => state?.feed?.select.order);
  const latestOrders = feedType === PUBLIC ? latestPublicOrders : latestPrivateOrders;
  const wayback = feedType === PRIVATE ? '/profile/orders' : '/feed';
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
      history.push({ pathname: '/404', state: { reasonFor404: REASON_404_ORDER, wayback } });
    }
  }, [history, isOrderNonExist, latestOrders, wayback]);

  return (
    <LoaderProtector isLoaded={!!order}>
      <CenterInfo>
        <OrderDetails order={order || {}} />
      </CenterInfo>
    </LoaderProtector>
  );
};

OrderPage.propTypes = {
  feedType: PropTypes.string.isRequired,
};

export default OrderPage;
