import { FEED_ORDER_CAPTURE, FEED_ORDER_RELEASE } from '../actions';

export const captureOrder = (order) => ({ type: FEED_ORDER_CAPTURE, payload: order });
export const releaseOrder = () => ({ type: FEED_ORDER_RELEASE });
