import React, { FC, useEffect } from 'react';
import {
  Route, Switch, useHistory, useLocation,
} from 'react-router-dom';
import { useSelector, useDispatch } from '../../services/store/hooks';

import '@ya.praktikum/react-developer-burger-ui-components';

import {
  ERROR,
  OK,
  PRIVATE,
  PUBLIC,
} from '../../constants';

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
} from '../../services/store';

import { getIngredientsThunk, getUserThunk, refreshTokenThunk } from '../../services/thunks';

import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage,
} from '../../pages';

import { jwt, token } from '../../services/api';

import ProtectedRoute from '../protected-route/protected-route';
import NotLoggedRoute from '../not-logged-route/not-logged-route';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderPage from '../../pages/order-page/order-page';
import OrderDetails from '../order-details/order-details';
import ProfileSidebar from '../profile-sidebar/profile-sidebar';
import OrdersFeed from '../orders-feed/orders-feed';
import ProfileForm from '../profile-form/profile-form';
import TwoColumns from '../two-columns/two-columns';
import AppHeader from '../app-header/app-header';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderAccept from '../order-accept/order-accept';
import ToolTip from '../tooltip/tooltip';

import appStyles from './app.module.css';
import { TLocation, TLocationState } from '../../types/types';

const App : FC = () => {
  const dispatch = useDispatch();
  const history = useHistory<TLocationState>();
  const location = useLocation<TLocationState>();
  const background = location.state && location.state.background;
  const { loggedIn } = useSelector((state) => state.user);
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const orderSelected = useSelector((state) => state.feed.select.order);
  const isPublicFeedOpen = useSelector((state) => state.feed.public.isOpen);
  const isPrivateFeedOpen = useSelector((state) => state.feed.private.isOpen);
  const { errorMessage, successMessage } = useSelector((state) => state.api);

  /*  useEffect(() => {
    console.log('Location has changed!');
    console.dir(location);
  }, [location]); */

  const handleIngredientDetailsClose = () => {
    dispatch(releaseIngredient());
    history.push({
      ...location.state.background as TLocationState | TLocation,
      state: { background: null },
    });
  };
  const orderDetailsClose = () => {
    dispatch(releaseOrder());
    history.push({
      ...location.state.background as TLocationState | TLocation,
      state: { background: null },
    });
  };
  const handleOrderAcceptClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());
  const handleSuccessClose = () => dispatch(clearSuccess());
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
    if (location.pathname.includes('/feed') && location.pathname.length < 7 && !isPublicFeedOpen) {
      dispatch(startPublicFeed());
    } else if (!location.pathname.includes('/feed') && isPublicFeedOpen) {
      dispatch(stopPublicFeed());
    }
  }, [dispatch, location.pathname, isPublicFeedOpen]);

  React.useEffect(() => {
    if (location.pathname.includes('/profile/orders') && location.pathname.length < 17 && !isPrivateFeedOpen && loggedIn) {
      dispatch(startPrivateFeed());
    } else if (!location.pathname.includes('/profile/orders') && isPrivateFeedOpen) {
      dispatch(stopPrivateFeed());
    }
  }, [dispatch, location.pathname, isPrivateFeedOpen, loggedIn]);

  return (
    <>
      <div className={appStyles.wrapper}>
        <AppHeader />

        <Switch location={background as TLocation || location}>
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

export default App;
