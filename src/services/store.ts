import * as Sentry from '@sentry/react';
import {compose} from "redux";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
  : compose;

