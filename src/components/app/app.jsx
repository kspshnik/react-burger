import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';
import SuccessPopup from '../succeed-popup/success-popup';

import {
  clearError, releaseIngredient, archiveOrder, clearSuccess,
} from '../../services/actionCreators';

import { getIngredients, getUser } from '../../services/thunks';

import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage, ProfilePage,
} from '../../pages';

import appStyles from './app.module.css';

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
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <div className={appStyles.wrapper}>
        <AppHeader />
        <Switch>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/register'>
            <RegisterPage />
          </Route>
          <Route path='/forgot-password'>
            <ForgotPage />
          </Route>
          <Route path='/reset-password'>
            <ResetPage />
          </Route>
          <Route path='/profile'>
            <ProfilePage />
          </Route>
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
        <ErrorPopup message={errorMessage} />
      </Modal>
      )}
      {!!successMessage && (
        <Modal title='Поздравляем!' onClose={handleSuccessClose}>
          <SuccessPopup message={successMessage} />
        </Modal>
      )}
    </>
  );
};

export default Sentry.withProfiler(App);
