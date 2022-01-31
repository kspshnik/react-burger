import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';
import biStyles from '../burger-ingredients/burger-ingredients.module.css';
import Preloader from '../preloader/preloader';
import { clearError, releaseIngredient, archiveOrder } from '../../services/actionCreators';
import getIngredients from '../../services/thunks/get-ingredients';

const App = () => {
  const dispatch = useDispatch();

  const { isIngredientsLoading } = useSelector((state) => state.api);
  // useSelector((state) => state.API);
  const isIngredientsLoaded = useSelector((state) => !!state.ingredients.all);
  const selectedIngredient = useSelector((store) => store.ingredients.selected);
  const acceptedOrder = useSelector((state) => state.orders.accepted);
  const errorMessage = useSelector((state) => state.API);

  const handleIngredientDetailsClose = () => dispatch(releaseIngredient());
  const handleOrderDetailsClose = () => dispatch(archiveOrder());
  const handleErrorClose = () => dispatch(clearError());

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  return (
    <>
      <AppHeader />
      <div className={appStyles.wrapper}>
        {(isIngredientsLoading || !isIngredientsLoaded)
            && <div className={biStyles.loading}><Preloader /></div>}
        {(!isIngredientsLoading && isIngredientsLoaded)
            && (
            <main className={appStyles.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
            )}
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
