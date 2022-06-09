import {
  SET_USER,
  RESET_USER,
} from '../actions';

import { TUser } from '../../types/types';
import { TResetUserAction, TSetUserAction } from './actions.types';

export const setUser = (user: TUser) : TSetUserAction => (
  {
    type: SET_USER,
    payload: user,
  }
);
export const resetUser = () : TResetUserAction => (
  {
    type: RESET_USER,
  }
);
