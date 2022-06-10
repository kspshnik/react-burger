import { PRIVATE, WS_THROTTLE_THRESHOLD } from '../../constants';
import { jwt }                            from '../api';

const socketMiddleware = (wsBaseUrl, wsActions, feedType) => (store) => {
  let socket = null;

  return (next) => (action) => {
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
        const { message = 'При соединении с сервером произошла неизвестная ошибка :(' } = event;
        dispatch(onError(message));
      };

      socket.onmessage = (event) => {
        const {
          success,
          orders,
          total,
          totalToday,
          message = 'При получении заказов произошла ошибка :(',
        } = JSON.parse(event.data);
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
