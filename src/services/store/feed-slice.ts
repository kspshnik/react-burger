import { combineReducers } from 'redux';
import { createAction } from '@reduxjs/toolkit';

import privateFeedReducer from './private-feed-sub-slice';

import publicFeedReducer from './public-feed-sub-slice';

import orderSelectReducer from './order-select-sub-slice';

const PRIVATE_FEED_START = 'PRIVATE_FEED_START' as const;
const PRIVATE_FEED_STOP = 'PRIVATE_FEED_STOP' as const;
const PUBLIC_FEED_START = 'PUBLIC_FEED_START' as const;
const PUBLIC_FEED_STOP = 'PUBLIC_FEED_STOP' as const;

const startPrivateFeed = createAction(PRIVATE_FEED_START);
const stopPrivateFeed = createAction(PRIVATE_FEED_STOP);
const startPublicFeed = createAction(PUBLIC_FEED_START);
const stopPublicFeed = createAction(PUBLIC_FEED_STOP);

const feedReducer = combineReducers({
  private: privateFeedReducer,
  public: publicFeedReducer,
  select: orderSelectReducer,
});

export {
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
  startPrivateFeed,
  stopPrivateFeed,
  startPublicFeed,
  stopPublicFeed,
};

export default feedReducer;
