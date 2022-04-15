import { combineReducers } from 'redux';
import privateFeedReducer from './private-feed';
import publicFeedReducer from './public-feed';

const feedReducer = combineReducers({
  private: privateFeedReducer,
  public: publicFeedReducer,
});

export default feedReducer;
