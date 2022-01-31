import { DND_START, DND_STOP } from '../actions';

export const onDragStart = (bcid) => ({ type: DND_START, payload: bcid });
export const onDragStop = () => ({ type: DND_STOP });
