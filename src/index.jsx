import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import App from './components/app/app';

import './index.css';

import rootReducer from './services/reducers';
import { BACKEND_ROUTES, PRIVATE, PUBLIC } from './constants';
import {
  PRIVATE_FEED_START,
  PRIVATE_FEED_STOP,
  PUBLIC_FEED_START,
  PUBLIC_FEED_STOP,
}                           from './services/actions';
import { socketMiddleware } from './services/store/websocket-middleware';
import {
  discardPrivateFeed,
  discardPublicFeed,
  onPrivateFeedMessage,
  onPublicFeedMessage,
  requestPrivateFeed,
  requestPublicFeed,
  setPrivateFeedClosed,
  setPrivateFeedOpened,
  setPublicFeedClosed,
  setPublicFeedOpened,
  wsError,
}                           from './services/actionCreators';

LogRocket.init('owbpwl/react-burger');

setupLogRocketReact(LogRocket);
LogRocket.getSessionURL((sessionURL) => {
  Sentry.configureScope((scope) => {
    scope.setExtra('sessionURL', sessionURL);
  });
});
Sentry.init({
  dsn: 'https://f37c7f225379469fb19d16f6454f4529@o1127696.ingest.sentry.io/6169821',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  : compose;

const publicFeedUrl = `${BACKEND_ROUTES.baseWS}${BACKEND_ROUTES.publicFeed}`;
const publicFeedActions = {
  wsStart: PUBLIC_FEED_START,
  wsStop: PUBLIC_FEED_STOP,
  connectRequest: requestPublicFeed,
  disconnectRequest: discardPublicFeed,
  onOpen: setPublicFeedOpened,
  onClose: setPublicFeedClosed,
  onError: wsError,
  onMessage: onPublicFeedMessage,
};

const privateFeedUrl = `${BACKEND_ROUTES.baseWS}${BACKEND_ROUTES.privateFeed}`;
const privateFeedActions = {
  wsStart: PRIVATE_FEED_START,
  wsStop: PRIVATE_FEED_STOP,
  connectRequest: requestPrivateFeed,
  disconnectRequest: discardPrivateFeed,
  onOpen: setPrivateFeedOpened,
  onClose: setPrivateFeedClosed,
  onError: wsError,
  onMessage: onPrivateFeedMessage,
};
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(socketMiddleware(publicFeedUrl, publicFeedActions, PUBLIC)),
  applyMiddleware(socketMiddleware(privateFeedUrl, privateFeedActions, PRIVATE)),
  sentryReduxEnhancer,
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={({ error, componentStack }) => {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-console
      console.dir(componentStack);
    }}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
