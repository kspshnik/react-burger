import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';

import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';

import { clearError, releaseIngredient, archiveOrder } from '../../services/actionCreators';
import { getIngredients, getUser } from '../../services/thunks';
import { MainPage } from '../../pages';
import appStyles from './app.module.css';
import JsCookie from "js-cookie";
import {JWT_TOKEN} from "../../constants";

const App = () => {
  const dispatch = useDispatch();
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const errorMessage = useSelector((state) => state.API);

  const handleIngredientDetailsClose = () => dispatch(releaseIngredient());
  const handleOrderDetailsClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());

  useEffect(() => {
    JsCookie.set(JWT_TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjYxMmIxMjViOWE0MDAxYjZlMzFhYyIsImlhdCI6MTY0Njk1NDQxMSwiZXhwIjoxNjQ2OTU1NjExfQ.VflgnY-OaFOOL8OCxwtRYkOu9mUUwoNHCTEpTZprTt8');
    dispatch(getIngredients());
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      <div className={appStyles.wrapper}>
        <AppHeader />
        <MainPage />
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
