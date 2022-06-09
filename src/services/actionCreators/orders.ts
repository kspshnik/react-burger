import { nanoid } from 'nanoid';
import {
  INSERT_INTERIOR, CLEAR_BURGER, DROP_INTERIOR, MOVE_INTERIOR, SET_BUN, ARCHIVE_ORDER, SET_ORDER,
} from '../actions';
import { TIngredient, TOrderRecord } from '../../types/types';
import {
  TArchiveOrderAction,
  TClearBurgerAction,
  TDropInteriorAction,
  TInsertInteriorAction,
  TSetBunAction, TSetOrderAction,
} from './actions.types';

export const setBun = (bun : TIngredient) : TSetBunAction => (
  {
    type: SET_BUN,
    payload: { ...bun, bcid: nanoid() },
  }
);
export const insertInterior = (ingredient : TIngredient) : TInsertInteriorAction => (
  {
    type: INSERT_INTERIOR,
    payload: { ...ingredient, bcid: nanoid() },
  }
);
export const dropInterior = (ingredient : TIngredient) : TDropInteriorAction => (
  {
    type: DROP_INTERIOR,
    payload: ingredient,
  }
);
export const clearBurger = () : TClearBurgerAction => (
  {
    type: CLEAR_BURGER,
  }
);
export const moveInterior = (ingredient : TIngredient, to : number) => (
  {
    type: MOVE_INTERIOR,
    payload: { ingredient, to },
  }
);
export const archiveOrder = () : TArchiveOrderAction => (
  {
    type: ARCHIVE_ORDER,
  }
);
export const setOrder = (order : TOrderRecord) : TSetOrderAction => (
  {
    type: SET_ORDER,
    payload: order,
  }
);
