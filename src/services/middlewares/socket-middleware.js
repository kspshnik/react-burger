import { prepareFeed } from '../../helpers';

export const socketMiddleware = (wsUrl, wsActions) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;
    const {
      wsStart, wsStop, onOpen, onClose, onError, onMessage,
    } = wsActions;
    if (type === wsStart) {
      socket = new WebSocket(`${wsUrl}`);
    } else if (socket && type === wsStop) {
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
        dispatch(onMessage(prepareFeed(JSON.parse(event.data))));
      };

      socket.onclose = (event) => {
        if (event.wasClean) {
          dispatch(onClose());
        } else {
          dispatch(onError('Соединение было разорвано сервером :('));
        }
      };
    }

    next(action);
  };
};

export default socketMiddleware;
