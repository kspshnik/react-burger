import React from 'react';
import { useDispatch } from 'react-redux';
import UnderConstruction from '../../components/under-construction/under-construction';
import { startPublicFeed, stopPublicFeed } from '../../services/actionCreators';

const FeedPage = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(startPublicFeed());
    return () => {
      dispatch(stopPublicFeed());
    };
  }, [dispatch]);
  return (<UnderConstruction />);
};

export default FeedPage;
