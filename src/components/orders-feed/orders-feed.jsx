import React from 'react';

import { useDispatch } from 'react-redux';

import UnderConstruction from '../under-construction/under-construction';
import { startPrivateFeed, stopPrivateFeed } from '../../services/actionCreators';

const OrdersFeed = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(startPrivateFeed());
    return () => {
      dispatch(stopPrivateFeed());
    };
  }, [dispatch]);

  return (<UnderConstruction />);
};

export default OrdersFeed;
