// eslint-disable @typescript-eslint/unbound-method
import { Middleware } from 'redux';
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { PRIVATE, WS_THROTTLE_THRESHOLD } from '../../constants';
import { jwt } from '../api';
// Рецепт, указанный на сайте Redux: https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
// не сработал, по-прежнему выдаёт ошибку, хотя сделал ровно как написали:
// определил RootState от rootReducer, а не от getStore()
// eslint-disable-next-line import/no-cycle
import { RootState } from './store';
import { TFeedType, TWebSocket, TWSActions } from '../../types/websocket.types';
import { TAPIError, TAPIWSResponseData } from '../../types/api.types';
import {
  TAllIngredients, TIngredient, TMoveData, TOrder, TOrderRecord, TOrdersData, TUser,
} from '../../types/types';

type TPayloadType = string | TAllIngredients | TIngredient | TOrder | TOrderRecord
| TMoveData | TOrdersData | TUser;
export type TActionType =
  ReturnType<ActionCreatorWithoutPayload> | ReturnType<ActionCreatorWithPayload<TPayloadType>>;

// eslint-disable-next-line @typescript-eslint/ban-types
const socketMiddleware = (
  wsBaseUrl : string,
  wsActions : TWSActions,
  feedType : TFeedType,
  // eslint-disable-next-line @typescript-eslint/ban-types
) : Middleware<{}, RootState> => {
  let socket : TWebSocket = null;
  return (store) => (next) => (action: TActionType) => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { dispatch, getState } = store;
    const { type } = action;

    const {
      wsStart, wsStop, connectRequest, disconnectRequest, onOpen, onClose, onError, onMessage,
    } = wsActions;
    if (type === wsStart && !getState().feed[feedType].isOpen) {
      if ((Date.now() - getState().feed[feedType].requestedAt) > WS_THROTTLE_THRESHOLD) {
        dispatch(connectRequest());
        socket = new WebSocket(`${wsBaseUrl}${feedType === PRIVATE ? `?token=${jwt.get()}` : ''}`);
      }
    } else if (socket && type === wsStop
      && (Date.now() - getState().feed[feedType].discardedAt) > WS_THROTTLE_THRESHOLD) {
      dispatch(disconnectRequest());
      socket.close(1000);
    }

    if (socket) {
      socket.onopen = () => {
        dispatch(onOpen());
      };

      socket.onerror = (event) => {
        const { message = 'При соединении с сервером произошла неизвестная ошибка :(' } = event as unknown as TAPIError;
        dispatch(onError(message));
      };

      socket.onmessage = (event: MessageEvent<string>) => {
        const {
          success,
          orders,
          total,
          totalToday,
          message = 'При получении заказов произошла ошибка :(',
        } = JSON.parse(event.data) as TAPIWSResponseData;
        if (success) {
          dispatch(onMessage({ orders, total, totalToday }));
        } else {
          dispatch(onError(message));
        }
      };

      socket.onclose = (event) => {
        if (event.wasClean) {
          dispatch(onClose());
        } else {
          dispatch(onError('Соединение было разорвано сервером :('));
          dispatch(onClose());
        }
      };
    }

    next(action);
  };
};

export default socketMiddleware;
