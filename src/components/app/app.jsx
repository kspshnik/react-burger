import React, {
  useCallback, useEffect, useReducer, useState,
} from 'react';
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import ingredientsContext from '../../contexts/ingredientsContext';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import burgerAPI from '../../utils/api';
import Portal from '../portal/portal';
import portalReducer from '../../reducers/portal-reducer';
import {
  ACTION_CLOSE, ACTION_OPEN_INGREDIENT, ACTION_OPEN_ORDER, ACTION_SHOW_ERROR,
} from '../../utils/constants';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import ErrorPopup from '../error-popup/error-popup';

const App = () => {
  const [ingredients, setIngredients] = useState(null);
  const [order, setOrder] = useState(null);
  const [isPortal, setPortalState] = useState(false);
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
  const handleOpenOrder = () => modalDispatch(ACTION_OPEN_ORDER);
  // const showError = () => modalDispatch(ACTION_SHOW_ERROR);
  useEffect(() => {
    setPortalState(isModal.ingredient || isModal.order || isModal.error);
  }, [isModal.ingredient, isModal.order, isModal.error]);
  useEffect(() => {
    async function getData() {
      try {
        const [ingredientsData, orderData] = await Promise.all(
          [burgerAPI.getIngredients(), burgerAPI.getOrder()],
        );
        const allIds = ingredientsData.data.reduce((acc, item) => [...acc, item._id], []);
        setIngredients(ingredientsData.data.reduce((acc, ingredient) => {
          acc[ingredient._id] = ingredient;
          return acc;
        }, {}));
        setOrder(orderData.filter((item) => allIds.includes(item)));
      } catch (err) {
        // TODO: Сделать нормальное модальное окно с ошибкой.
        console.dir(err);
        modalDispatch({ ...ACTION_SHOW_ERROR, payload: err.message });
      }
    }

    getData();
  }, []);

  return (
    <>
      <AppHeader />
      <ingredientsContext.Provider value={ingredients}>
        <div className={appStyles.wrapper}>
          <main className={appStyles.main}>
            <BurgerIngredients
              order={order || []}
              plusCallback={addIngredient}
              detailsCallback={handleOpenIngredient} />
            <BurgerConstructor
              order={order || []}
              minusCallback={removeIngredient}
              detailsCallback={handleOpenOrder}
              plusCallback={addIngredient} />
          </main>
        </div>
        {isPortal && (
          <Portal handleClose={handlePortalClose}>
            {isModal.ingredient && (
              <Modal title='Детали ингредиента' onClose={handlePortalClose}>
                <IngredientDetails id={isModal.id} />
              </Modal>
            )}
            {isModal.order && (
              <Modal onClose={handlePortalClose}>
                <OrderDetails />
              </Modal>
            )}
            {isModal.error && (
              <Modal onClose={handlePortalClose}>
                <ErrorPopup message={isModal.message} />
              </Modal>
            )}
          </Portal>
        )}
      </ingredientsContext.Provider>

    </>
  );
};

export default App;
