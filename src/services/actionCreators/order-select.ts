import { FEED_ORDER_CAPTURE, FEED_ORDER_RELEASE } from '../actions';
import { TOrder } from '../../types/types';
import { TCaptureOrderAction, TReleaseOrderAction } from './actions.types';

export const captureOrder = (order : TOrder) : TCaptureOrderAction => (
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
