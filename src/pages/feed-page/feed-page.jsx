import React from 'react';
import { useDispatch } from 'react-redux';
import UnderConstruction from '../../components/under-construction/under-construction';
import { startPublicFeed, stopPublicFeed } from '../../services/actionCreators';
import TwoColumns from '../../components/two-columns/two-columns';

const FeedPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startPublicFeed());
    return () => {
      dispatch(stopPublicFeed());
    };
  }, [dispatch]);
  return (
    <TwoColumns>
      <UnderConstruction />
      <UnderConstruction />
    </TwoColumns>
  );
};

export default FeedPage;
