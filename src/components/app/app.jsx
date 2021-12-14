import React, { useState, useEffect } from "react";
import AppHeader from '../app-header/app-header';

import '@ya.praktikum/react-developer-burger-ui-components';
import appStyles from './app.module.css';

import { ingredients as ingredientsData } from '../../utils/data';
const emptyOrder = {
  bun: "",
  mains: [],
  sauces: [],
};
const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [order, setOrder] = useState(emptyOrder);
  
  useEffect(() => {
    // на втором этапе будет заменено на запрос к серверу
    setIngredients(ingredientsData)
  })
  
  
  return (
    <>
      <AppHeader />
      <main className= {appStyles.main}>
      
      </main>
    </>
  )
}

export default App;
