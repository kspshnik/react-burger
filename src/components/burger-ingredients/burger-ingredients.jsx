import React, { useState, useContext, useRef, useEffect } from "react";

import {useInView} from "react-intersection-observer";

import ScrollArea     from "../scroll-area/scroll-area";
import IngredientCard from "../ingredient-card/ingredient-card";
import {Tab}          from "@ya.praktikum/react-developer-burger-ui-components";

import biStyles from './burger-ingredients.module.css';

import ingredientsContext from "../../contexts/ingredientsContext";

const BurgerIngredients = ({order, plusCallback}) => {
  const ingredients = useContext(ingredientsContext);
  const ingredientsValues = !!ingredients ? Object.values(ingredients) : [];
  const baseRef = useRef(null);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);
  const [bunsWatchRef, bunsInView] = useInView({
                                                     threshold: 0.55,
                                                     root: baseRef.current,
                                                   });
  const [saucesWatchRef, saucesInView] = useInView({
                                                     threshold: [0.43, 0.64],
                                                     root: baseRef.current,
                                                   });
  const [mainsWatchRef, mainsInView] = useInView({
                                                     threshold: 0.25,
                                                     root: baseRef.current,
                                                   });
  const [isDataLoaded, setDataState] = useState(false);
  useEffect(() => {
    setDataState(!!ingredients);
  },[ingredients]);
  return (
    <>
      {!isDataLoaded && <p className={biStyles.loading}>Информация загружается...</p>}
      {isDataLoaded && <section className={biStyles.section}>
        <header className={`${biStyles.header} pt-10 pb-5`}>
        <h2 className={`${biStyles.title} text text_type_main-large`}>Соберите бургер</h2>
        </header>
        <nav className={biStyles.menu}>
        <Tab active={bunsInView} value="Булки" onClick={() => bunsRef.current.scrollIntoView()}>Булки</Tab>
        <Tab active={saucesInView} value="Соусы" onClick={() => {saucesRef.current.scrollIntoView()}}>Соусы</Tab>
        <Tab active={mainsInView} value="Начинки" onClick={()=>(mainsRef.current.scrollIntoView())}>Начинки</Tab>
        </nav>
        <ScrollArea ref={baseRef} contentClass={`${biStyles.scroll} custom-scroll`}>
        <div ref={bunsWatchRef}>
        <h3 ref={bunsRef} className={`{$biStyles.title} text text_type_main-medium mb-6 mt-10`}>Булки</h3>
        <ul className={biStyles.grid}>
      {ingredientsValues.filter((el) => el.type === "bun").map((item) => {
        const {_id, name, price, image} = item;
        const count = order.filter((val) => val === _id).length;
        return (<IngredientCard id={_id}
        name={name}
        price={price}
        img={image}
        count={count}
        plusCallback={plusCallback}
        key={_id} /> )})}
        </ul>
        </div>
        <div ref={saucesRef}>
        <h3 className={`{$biStyles.title} text text_type_main-medium mb-6 mt-10`}>Соусы</h3>
        <ul ref={saucesWatchRef} className={biStyles.grid}>
      {ingredientsValues.filter((el) => el.type === "sauce").map((item) => {
    
        const {_id, name, price, image} = item;
        const count = order.filter((val) => val === _id).length;
        return (<IngredientCard id={_id}
        name={name}
        price={price}
        img={image}
        count={count}
        plusCallback={plusCallback}
        key={_id} />)})}
        </ul>
        </div>
        <div ref={mainsWatchRef}>
        <h3 ref={mainsRef} className={`{$biStyles.title} text text_type_main-medium mb-6 mt-10`}>Начинки</h3>
        <ul className={biStyles.grid}>
      {ingredientsValues.filter((el) => el.type === "main").map((item) => {
        const {_id, name, price, image} = item;
        const count = order.filter((val) => val === _id).length;
        return (<IngredientCard id={_id}
        name={name}
        price={price}
        img={image}
        count={count}
        plusCallback={plusCallback}
        key={_id} />)})}
        </ul>
        </div>
        </ScrollArea>
        </section>}
    </>
  )
}

export default BurgerIngredients
