import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UnderConstruction from '../../components/under-construction/under-construction';
import { startPublicFeed, stopPublicFeed } from '../../services/actionCreators';
import TwoColumns from '../../components/two-columns/two-columns';
import FeedInfo from '../../components/feed-info/feed-info';

const FeedPage = () => {
  const dispatch = useDispatch();
  const isFeedLoaded = useSelector((state) => !!state?.feed?.public?.orders);
  React.useEffect(() => {
    dispatch(startPublicFeed());
    return () => {
      dispatch(stopPublicFeed());
    };
  }, [dispatch]);
  return (
    <TwoColumns isLoaded={isFeedLoaded}>
      <UnderConstruction />
      <FeedInfo />
    </TwoColumns>
  );
};

export default FeedPage;
