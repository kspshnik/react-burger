import React, { useState, useEffect, useCallback } from "react";
import AppHeader                                   from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import { ingredients as ingredientsData } from '../../utils/data';

import ingredientsContext from "../../contexts/ingredientsContext";
import BurgerIngredients  from "../burger-ingredients/burger-ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState({ });
  const [order, setOrder] = useState([]);
  
const addIngredient = (id) => {
  console.log(`Добавляем ингредиент с id = '${id}!'`);
  if (!ingredients[id]) {
    console.error(`Нет ингредиента с id = '${id}'!!!`);
    return;
  }
  if ((ingredients[id].type === 'bun') && order.some((item) => item.id === id)) {
    // будет заменено на показ модалки с сообщением об ошибке
    console.warn(`Не бывает двух булок в одном заказе!!!'!!!`);
    return undefined;
  }
    setOrder([...order, id]);
  };
    const removeIngredient = (id) => {
    setOrder(order.filter((item) => item !== id));
  };
  useEffect(() => {
    // на втором этапе будет добавлено получение данных с API вместо захардкоженных
    setIngredients(ingredientsData.reduce((acc, ingredient) => {
      acc[ingredient._id] = ingredient;
      return acc;
    }, {}))
  }, []);
 
  return (
    <>
      <AppHeader />
      <ingredientsContext.Provider value={ingredients}>
      <div className={appStyles.wrapper}>
        <main className= {appStyles.main}>
          <BurgerIngredients order={order} plusCallback={(ingr) => {addIngredient(ingr)}} />
        </main>
      </div>
      </ingredientsContext.Provider>
      
    </>
  )
}

export default App;
