import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import ingredientsContext from '../../contexts/ingredientsContext';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import burgerAPI from '../../utils/api';

const App = () => {
  const [ingredients, setIngredients] = useState(null);
  const [order, setOrder] = useState(initialOrder);
  const [isIngredientsLoading, setIngredientsLoadingState] = useState(false);
  const [isLoadingError, setLoadingErrorState] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  const addIngredient = React.useCallback((id) => {
    if (!ingredients[id]) {
      return;
    }
    if (ingredients[id]?.type === 'bun') {
      setOrder((oldOrder) => [...oldOrder.filter((item) => ingredients[item]?.type !== 'bun'), id]);
    } else {
      setOrder((oldOrder) => [...oldOrder, id]);
    }
  }, [ingredients]);
  const removeIngredient = React.useCallback((id) => {
    setOrder((oldOrder) => [...oldOrder.filter((item) => item !== id),
      ...oldOrder.filter((item) => item === id)
        .slice(0, oldOrder.filter((item) => item === id)
          .length - 1)]);
  }, []);

  useEffect(() => {
    async function getData() {
      setIngredientsLoadingState(true);
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
        setLoadingErrorState(true);
        // TODO: Сделать нормальное модальное окно с ошибкой.
        console.dir(err);
        setLoadingError(err.name);
      } finally {
        setIngredientsLoadingState(false);
      }
    }

    getData();
    console.log('Установили ингредиенты и заказ!');
  }, []);

  return (
    <>
      <AppHeader />
      <ingredientsContext.Provider value={ingredients}>
        <div className={appStyles.wrapper}>
          <main className={appStyles.main}>
            <BurgerIngredients
              order={order}
              plusCallback={addIngredient} />
            <BurgerConstructor
              order={order}
              minusCallback={removeIngredient}
              plusCallback={addIngredient} />
          </main>
        </div>
      </ingredientsContext.Provider>

    </>
  );
};

export default App;
