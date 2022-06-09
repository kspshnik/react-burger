import { FEED_ORDER_CAPTURE, FEED_ORDER_RELEASE } from '../actions';
import { TAcceptedOrder } from '../../types/types';
import { TCaptureOrderAction, TReleaseOrderAction } from './actions.types';

export const captureOrder = (order : TAcceptedOrder) : TCaptureOrderAction => (
  {
    type: FEED_ORDER_CAPTURE,
    payload: order,
  }
);
export const releaseOrder = () : TReleaseOrderAction => (
  {
    type: FEED_ORDER_RELEASE,
  }
);
