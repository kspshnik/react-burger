import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as Sentry from '@sentry/react';

import App from './components/app/app';

import './index.css';

import store from './services/store/store';

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
