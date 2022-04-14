import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

import {
  clearError, releaseIngredient, archiveOrder, clearSuccess,
} from '../../services/actionCreators';

import { getIngredients, getUserThunk, refreshTokenThunk } from '../../services/thunks';

import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage, ProfilePage,
} from '../../pages';

import appStyles from './app.module.css';
import ToolTip from '../tooltip/tooltip';
import { ERROR, OK } from '../../constants';
import { jwt, token } from '../../services/api';
import ProtectedRoute from '../protected-route/protected-route';
import NotLoggedRoute from '../not-logged-route/not-logged-route';

const App = () => {
  const dispatch = useDispatch();
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const { errorMessage, successMessage } = useSelector((state) => state.api);

  const handleIngredientDetailsClose = () => dispatch(releaseIngredient());
  const handleOrderDetailsClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());
  const handleSuccessClose = () => dispatch(clearSuccess());

  useEffect(() => {
    dispatch(getIngredients());
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
        <Switch>
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
          <Route path='/' exact>
            <MainPage />
          </Route>
        </Switch>
      </div>
      {!!selectedIngredient && (
      <Modal title='Детали ингредиента' onClose={handleIngredientDetailsClose}>
        <IngredientDetails />
      </Modal>
      )}
      {!!acceptedOrder && (
      <Modal onClose={handleOrderDetailsClose}>
        <OrderDetails />
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
