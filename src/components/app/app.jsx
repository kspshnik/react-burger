import React, { useEffect } from 'react';
import {
  Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderAccept from '../order-accept/order-accept';

import {
  clearError,
  releaseIngredient,
  archiveOrder,
  clearSuccess,
  releaseOrder,
  startPublicFeed,
  stopPublicFeed,
  startPrivateFeed,
  stopPrivateFeed,
} from '../../services/actionCreators';

import { getIngredientsThunk, getUserThunk, refreshTokenThunk } from '../../services/thunks';

import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage,
} from '../../pages';

import appStyles from './app.module.css';
import ToolTip from '../tooltip/tooltip';
import {
  ERROR,
  OK,
  PRIVATE,
  PUBLIC,
} from '../../constants';
import { jwt, token } from '../../services/api';
import ProtectedRoute from '../protected-route/protected-route';
import NotLoggedRoute from '../not-logged-route/not-logged-route';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderPage from '../../pages/order-page/order-page';
import OrderDetails from '../order-details/order-details';
// import ppStyles       from '../../pages/profile-page/profile-page.module.css';
import ProfileSidebar from '../profile-sidebar/profile-sidebar';
import OrdersFeed from '../orders-feed/orders-feed';
import ProfileForm from '../profile-form/profile-form';
import TwoColumns from '../two-columns/two-columns';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const orderSelected = useSelector((state) => state.feed.select.order);
  const isPublicFeedOpen = useSelector((state) => state.feed.public.isOpen);
  const isPrivateFeedOpen = useSelector((state) => state.feed.private.isOpen);
  const { errorMessage, successMessage } = useSelector((state) => state.api);
  const handleIngredientDetailsClose = () => {
    dispatch(releaseIngredient());
    history.push({ ...location.state.background, state: { background: null } });
  };
  const orderDetailsClose = () => {
    dispatch(releaseOrder());
    history.push({ ...location.state.background, state: { background: null } });
  };
  const handleOrderAcceptClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());
  const handleSuccessClose = () => dispatch(clearSuccess());
  useEffect(() => console.dir(location), [location]);

  React.useEffect(() => {
    if (!(orderSelected || selectedIngredient) && location?.state?.background) {
      history.push({ ...location, state: { background: null } });
    }
  }, [orderSelected, selectedIngredient, location, history]);

  useEffect(() => {
    dispatch(getIngredientsThunk());
    if (jwt.test()) {
      dispatch(getUserThunk());
    } else if (token.test()) {
      dispatch(refreshTokenThunk(getUserThunk));
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (location.pathname.includes('/feed') && !isPublicFeedOpen) {
      dispatch(startPublicFeed());
    } else if (!location.pathname.includes('/feed') && isPublicFeedOpen) {
      dispatch(stopPublicFeed());
    }
  }, [dispatch, location.pathname, isPublicFeedOpen]);

  React.useEffect(() => {
    if (location.pathname.includes('/profile/orders') && !isPrivateFeedOpen) {
      dispatch(startPrivateFeed());
    } else if (!location.pathname.includes('/profile/orders') && isPrivateFeedOpen) {
      dispatch(stopPrivateFeed());
    }
  }, [dispatch, location.pathname, isPrivateFeedOpen]);

  return (
    <>
      <div className={appStyles.wrapper}>
        <AppHeader />
        <Switch location={background || location}>
          <NotLoggedRoute path='/login'>
            <LoginPage />
          </NotLoggedRoute>
          <NotLoggedRoute path='/register'>
            <RegisterPage />
          </NotLoggedRoute>
          <NotLoggedRoute path='/forgot-password'>
            <ForgotPage />
          </NotLoggedRoute>
          <NotLoggedRoute path='/reset-password'>
            <ResetPage />
          </NotLoggedRoute>
          <ProtectedRoute exact path='/profile'>
            <TwoColumns profile>
              <ProfileSidebar />
              <ProfileForm />
            </TwoColumns>
          </ProtectedRoute>
          <ProtectedRoute exact path='/profile/orders'>
            <TwoColumns profile>
              <ProfileSidebar />
              <OrdersFeed />
            </TwoColumns>
          </ProtectedRoute>
          <ProtectedRoute path='/profile/orders/:id'>
            <OrderPage feedType={PRIVATE} />
          </ProtectedRoute>
          <Route path='/ingredients/:id'>
            <IngredientPage />
          </Route>
          <Route exact path='/feed/:id'>
            <OrderPage feedType={PUBLIC} />
          </Route>
          <Route exact path='/feed'>
            <FeedPage />
          </Route>
          <Route path='/' exact>
            <MainPage />
          </Route>
          <Route path='/404'>
            <NotFoundPage />
          </Route>
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      {(!!background && !!selectedIngredient) && (
      <Modal title='Детали ингредиента' onClose={handleIngredientDetailsClose}>
        <IngredientDetails />
      </Modal>
      )}
      {(!!background && !!orderSelected) && (
        <Modal onClose={orderDetailsClose}>
          <OrderDetails order={orderSelected} />
        </Modal>
      )}
      {!!acceptedOrder && (
      <Modal onClose={handleOrderAcceptClose}>
        <OrderAccept />
      </Modal>
      )}
      {!!errorMessage && (
      <Modal title='К сожалению, произошла ошибка!' onClose={handleErrorClose}>
        <ToolTip type={ERROR} message={errorMessage} />
      </Modal>
      )}
      {!!successMessage && (
        <Modal title='Поздравляем!' onClose={handleSuccessClose}>
          <ToolTip type={OK} message={successMessage} />
        </Modal>
      )}
    </>
  );
};

export default Sentry.withProfiler(App);
