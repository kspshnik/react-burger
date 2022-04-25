import { combineReducers } from 'redux';
import privateFeedReducer from './private-feed';
import publicFeedReducer from './public-feed';
import orderSelectReducer from './order-select';

const feedReducer = combineReducers({
  private: privateFeedReducer,
  public: publicFeedReducer,
  select: orderSelectReducer,
});

export default feedReducer;
