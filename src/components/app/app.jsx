import React, { useState, useEffect } from "react";
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import { ingredients as ingredientsData } from '../../utils/data';

import ingredientsContext from "../../contexts/ingredientsContext";
const emptyOrder = {
  bun: "",
  mains: [],
  sauces: [],
};
const App = () => {
  const [ingredients, setIngredients] = useState({ });
  const [order, setOrder] = useState(emptyOrder);
  
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
      <main className= {appStyles.main}>
      
      </main>
      </ingredientsContext.Provider>
      
    </>
  )
}

export default App;
