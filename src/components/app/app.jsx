import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import { initialOrder } from '../../utils/data';

import ingredientsContext from '../../contexts/ingredientsContext';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import burgerAPI from '../../utils/api';

const App = () => {
  const [ingredients, setIngredients] = useState(null);
  const [order, setOrder] = useState(initialOrder);
  const [isIngredientsLoading, setIngredientsLoadigState] = useState(false);
  const [isLoadingError, setLoadingErrorState] = useState(false);
  const [loadingError, setLoadingError] = useState('');

  const addIngredient = (id) => {
    if (!ingredients[id]) {
      return;
    }
    if (ingredients[id]?.type === 'bun') {
      setOrder([...order.filter((item) => ingredients[item]?.type !== 'bun'), id]);
    } else {
      setOrder([...order, id]);
    }
  };
  const removeIngredient = (id) => {
    setOrder([...order.filter((item) => item !== id),
      ...order.filter((item) => item === id)
        .slice(0, order.filter((item) => item === id)
          .length - 1)]);
  };

  useEffect(() => {
    // на втором этапе будет добавлено получение данных с API вместо захардкоженных
    async function getIngredientsData() {
      setIngredientsLoadigState(true);
      try {
        const ingredientsData = await burgerAPI.getIngredients();
        setIngredients(ingredientsData.reduce((acc, ingredient) => {
          acc[ingredient._id] = ingredient;
          return acc;
        }, {}));
      } catch (err) {
        setLoadingErrorState(true);
        // TODO: Сделать нормальное модальное окно с ошибкой.
        console.dir(err);
        setLoadingError(err.name);
      } finally {
        setIngredientsLoadigState(false);
      }
    }

    getIngredientsData();
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
              minusCallback={removeIngredient} />
          </main>
        </div>
      </ingredientsContext.Provider>

    </>
  );
};

export default App;
