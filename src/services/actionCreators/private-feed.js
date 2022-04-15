import {
  PRIVATE_FEED_CLOSE,
  PRIVATE_FEED_DESELECT,
  PRIVATE_FEED_MESSAGE,
  PRIVATE_FEED_OPEN,
  PRIVATE_FEED_SELECT,
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
} from '../actions';

export const startPrivateFeed = () => ({ type: PRIVATE_FEED_START });
export const stopPrivateFeed = () => ({ type: PRIVATE_FEED_STOP });
export const setPrivateFeedOpened = () => ({ type: PRIVATE_FEED_OPEN });
export const setPrivateFeedClosed = () => ({ type: PRIVATE_FEED_CLOSE });
export const onPrivateFeedMessage = (data) => ({ type: PRIVATE_FEED_MESSAGE, payload: data });
export const privateFeedSelect = (_id) => ({ type: PRIVATE_FEED_SELECT, payload: _id });
export const privateFeedDeselect = () => ({ type: PRIVATE_FEED_DESELECT });
