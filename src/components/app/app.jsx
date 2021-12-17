import React, { useEffect, useState } from 'react';
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import { ingredients as ingredientsData, initialOrder } from '../../utils/data';

import ingredientsContext from '../../contexts/ingredientsContext';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const App = () => {
  const [ingredients, setIngredients] = useState({});
  const [order, setOrder] = useState(initialOrder);

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
    setIngredients(ingredientsData.reduce((acc, ingredient) => {
      acc[ingredient._id] = ingredient;
      return acc;
    }, {}));
  }, []);

  return (
    <>
      <AppHeader />
      <ingredientsContext.Provider value={ingredients}>
        <div className={appStyles.wrapper}>
          <main className={appStyles.main}>
            <BurgerIngredients
              order={order}
              plusCallback={(ingr) => {
                addIngredient(ingr);
              }} />
            <BurgerConstructor
              order={order}
              minusCallback={(ingr) => {
                removeIngredient(ingr);
              }} />
          </main>
        </div>
      </ingredientsContext.Provider>

    </>
  );
};

export default App;
