import { nanoid } from 'nanoid';
import {
  INSERT_INTERIOR, CLEAR_BURGER, DROP_INTERIOR, MOVE_INTERIOR, SET_BUN, ARCHIVE_ORDER, SET_ORDER,

} from '../actions';

export const setBun = (bun) => ({ type: SET_BUN, payload: { ...bun, bcid: nanoid() } });
export const insertInterior = (ingredient) => ({
  type: INSERT_INTERIOR,
  payload: { ...ingredient, bcid: nanoid() },
});
export const dropInterior = (ingredient) => ({ type: DROP_INTERIOR, payload: ingredient });
export const clearBurger = () => ({ type: CLEAR_BURGER });
export const moveInterior = (ingredient, to) => ({
  type: MOVE_INTERIOR,
  payload: { ingredient, to },
});
export const archiveOrder = () => ({ type: ARCHIVE_ORDER });
export const setOrder = (order) => ({ type: SET_ORDER, payload: order });
