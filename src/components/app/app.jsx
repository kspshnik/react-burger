import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';

import * as Sentry from '@sentry/react';

import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import IngredientsContext from '../../contexts/ingredientsContext';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import burgerAPI from '../../utils/api';
import portalReducer from '../../reducers/portal-reducer';
import {
  ACTION_CLOSE,
  ACTION_OPEN_INGREDIENT,
  ACTION_OPEN_ORDER,
  ACTION_SHOW_ERROR,
  BAD_ORDER_NO,
} from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';

const App = () => {
  const [ingredients, setIngredients] = useState({});
  const [order, setOrder] = useState([]);
  const [confirmedOrder, setConfirmedOrder] = useState({});
  const [isModal, modalDispatch] = useReducer(portalReducer, {
    ingredient: false,
    order: false,
    error: false,
    id: null,
    message: '',
  });

  const addIngredient = useCallback((id) => {
    if (!ingredients[id]) {
      return;
    }
    if (ingredients[id]?.type === 'bun') {
      setOrder((oldOrder) => [...oldOrder.filter((item) => ingredients[item]?.type !== 'bun'), id]);
    } else {
      setOrder((oldOrder) => [...oldOrder, id]);
    }
  }, [ingredients]);
  const removeIngredient = useCallback((id) => {
    setOrder((oldOrder) => [...oldOrder.filter((item) => item !== id),
      ...oldOrder.filter((item) => item === id)
        .slice(0, oldOrder.filter((item) => item === id)
          .length - 1)]);
  }, []);
  const handlePortalClose = () => modalDispatch(ACTION_CLOSE);
  const handleOpenIngredient = (id) => {
    modalDispatch({ ...ACTION_OPEN_INGREDIENT, payload: id });
  };
  //  Позже будет добавлена работа с номером заказа
  const handlePlaceOrder = async () => {
    try {
      const orderPromise = burgerAPI.placeOrder(order);
      const placedOrder = await orderPromise;
      setConfirmedOrder(placedOrder);
      modalDispatch({ ...ACTION_OPEN_ORDER });
      setOrder([]);
    } catch (err) {
      modalDispatch({ ...ACTION_SHOW_ERROR, payload: err.message });
    }
  };
  // const showError = () => modalDispatch(ACTION_SHOW_ERROR);
  useEffect(() => {
    async function getData() {
      try {
        const ingredientsData = await burgerAPI.getIngredients();
        setIngredients(ingredientsData.data.reduce((acc, ingredient) => {
          acc[ingredient._id] = ingredient;
          return acc;
        }, {}));
      } catch (err) {
        // TODO: Сделать нормальное модальное окно с ошибкой.
        modalDispatch({ ...ACTION_SHOW_ERROR, payload: err.message });
      }
    }

    getData();
  }, []);
  return (
    <>
      <AppHeader />
      <IngredientsContext.Provider value={ingredients}>
        <div className={appStyles.wrapper}>
          <main className={appStyles.main}>
            <BurgerIngredients
              order={order}
              plusCallback={addIngredient}
              detailsCallback={handleOpenIngredient} />
            <BurgerConstructor
              order={order}
              minusCallback={removeIngredient}
              detailsCallback={handlePlaceOrder}
              plusCallback={addIngredient} />
          </main>
        </div>
        {isModal.ingredient && (
          <Modal title='Детали ингредиента' onClose={handlePortalClose}>
            <IngredientDetails id={isModal.id} />
          </Modal>
        )}
        {isModal.order && (
          <Modal onClose={handlePortalClose}>
            <OrderDetails
              no={confirmedOrder.order.number
                ? String(confirmedOrder.order.number)
                : BAD_ORDER_NO} />
          </Modal>
        )}
        {isModal.error && (
          <Modal onClose={handlePortalClose}>
            <ErrorPopup message={isModal.message} />
          </Modal>
        )}

      </IngredientsContext.Provider>

    </>
  );
};

export default Sentry.withProfiler(App);
