import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import JsCookie from 'js-cookie';
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';

import { clearError, releaseIngredient, archiveOrder } from '../../services/actionCreators';
import { getIngredients, getUser } from '../../services/thunks';
import {
  ForgotPage, LoginPage, MainPage, RegisterPage, ResetPage,
} from '../../pages';
import appStyles from './app.module.css';
import { JWT_TOKEN, REFRESH_TOKEN } from '../../constants';

const App = () => {
  const dispatch = useDispatch();
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const errorMessage = useSelector((state) => state.API);

  const handleIngredientDetailsClose = () => dispatch(releaseIngredient());
  const handleOrderDetailsClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());

  useEffect(() => {
    JsCookie.set(JWT_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjYxMmIxMjViOWE0MDAxYjZlMzFhYyIsImlhdCI6MTY0Njk3MzcyOSwiZXhwIjoxNjQ2OTc0OTI5fQ.AVCQmts-3DVz4-yfT9F1F1DtdQpLypUt654g-Dnzt7c');
    localStorage.setItem(REFRESH_TOKEN, 'a134e3880e664f7ad6d1c535198159dd16de17e31d8d936e6f0f83acace6831d44fd9f0abd98fb5');
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
      <Modal onClose={handleErrorClose}>
        <ErrorPopup message={errorMessage} />
      </Modal>
      )}
    </>
  );
};

export default Sentry.withProfiler(App);
