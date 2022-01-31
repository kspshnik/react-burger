import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

import App from './components/app/app';

import './index.css';
// import ErrorBoundary from './components/error-boundary/error-boundary';
import rootReducer from './services/reducers';

LogRocket.init('owbpwl/react-burger');
// after calling LogRocket.init()
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

const enhancer = composeEnhancers(applyMiddleware(thunk), sentryReduxEnhancer);

const state = createStore(rootReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={({ error, componentStack }) => {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-console
      console.dir(componentStack);
    }}>
      <Provider store={state}>
        <App />
      </Provider>
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
