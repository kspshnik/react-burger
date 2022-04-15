export const socketMiddleware = (wsUrl, wsActions) => (store) => {
  let socket = null;

  return (next) => (action) => {
    const { dispatch } = store;
    const { type } = action;
    const {
      wsInit, onOpen, onClose, onError, onMessage,
    } = wsActions;
    if (type === wsInit) {
      socket = new WebSocket(`${wsUrl}`);
    }
    if (socket) {
      socket.onopen = (event) => {
        console.log(`${wsUrl} - onOpen:`);
        console.dir(event);
        dispatch({ type: onOpen, payload: event });
      };

      socket.onerror = (event) => {
        console.log(`${wsUrl} - onError:`);
        console.dir(event);
        dispatch({ type: onError, payload: event });
      };

      socket.onmessage = (event) => {
        console.log(`${wsUrl} - onMEssage:`);
        console.dir(event);
        dispatch({ type: onMessage, payload: JSON.parse(event.data) });
      };

      socket.onclose = (event) => {
        console.log(`${wsUrl} - onError:`);
        console.dir(event);
        dispatch({ type: onClose, payload: event });
      };
    }

    next(action);
  };
};

export default socketMiddleware;
