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
  clearError, releaseIngredient, archiveOrder, clearSuccess, publicFeedDeselect,
} from '../../services/actionCreators';

import { getIngredientsThunk, getUserThunk, refreshTokenThunk } from '../../services/thunks';

import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage, ProfilePage,
} from '../../pages';

import appStyles from './app.module.css';
import ToolTip from '../tooltip/tooltip';
import { ERROR, OK, PUBLIC } from '../../constants';
import { jwt, token } from '../../services/api';
import ProtectedRoute from '../protected-route/protected-route';
import NotLoggedRoute from '../not-logged-route/not-logged-route';
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import FeedPage from '../../pages/feed-page/feed-page';
import OrderPage from '../../pages/order-page/order-page';
import OrderDetails from '../order-details/order-details';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const publicFeedSelected = useSelector((state) => state.feed.public.selected);
  //  const privateFeedSelected = useSelector((state) => state.feed.private.selected);
  const { errorMessage, successMessage } = useSelector((state) => state.api);
  const handleIngredientDetailsClose = () => {
    dispatch(releaseIngredient());
    history.push({ pathname: '/', state: { background: null } });
  };
  const handlePublicFeedOrderDetailsClose = () => {
    dispatch(publicFeedDeselect());
    history.push({ pathname: '/feed', state: { background: null } });
  };
  const handleOrderAcceptClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());
  const handleSuccessClose = () => dispatch(clearSuccess());

  useEffect(() => {
    if (background && !selectedIngredient) {
      history.push({ pathname: location.pathname, state: { background: null } });
    }
  }, [background, selectedIngredient, history, location]);

  useEffect(() => {
    dispatch(getIngredientsThunk());
    if (jwt.test()) {
      dispatch(getUserThunk());
    } else if (token.test()) {
      dispatch(refreshTokenThunk(getUserThunk));
    }
  }, [dispatch]);

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
          <ProtectedRoute path='/profile'>
            <ProfilePage />
          </ProtectedRoute>
          <Route path='/ingredients/:id'>
            <IngredientPage />
          </Route>
          <Route exact path='/feed'>
            <FeedPage />
          </Route>
          <Route path='/feed/:id'>
            <OrderPage feedType={PUBLIC} />
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
      {(!!background && !!publicFeedSelected) && (
        <Modal title='' onClose={handlePublicFeedOrderDetailsClose}>
          <OrderDetails order={publicFeedSelected} />
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
