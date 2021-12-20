import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { useInView } from 'react-intersection-observer';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import biStyles from './burger-ingredients.module.css';

import ScrollArea from '../scroll-area/scroll-area';
import Preloader from '../preloader/preloader';

import IngredientsContext from '../../contexts/ingredientsContext';
import IngredientsGrid from '../ingredients-grid/ingredients-grid';

const BurgerIngredients = ({ order, plusCallback, detailsCallback }) => {
  const ingredients = useContext(IngredientsContext);
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
  }, [ingredients]);
  return (
    <>
      {!isDataLoaded && <div className={biStyles.loading}><Preloader /></div>}
      {isDataLoaded && (
        <section className={biStyles.section}>
          <header className={`${biStyles.header} pt-10 pb-5`}>
            <h2 className={`${biStyles.title} text text_type_main-large`}>Соберите бургер</h2>
          </header>
          <nav className={biStyles.menu}>
            <Tab
              active={bunsInView}
              value='Булки'
              onClick={() => bunsRef.current.scrollIntoView()}>
              Булки
            </Tab>
            <Tab
              active={saucesInView && !bunsInView && !mainsInView}
              value='Соусы'
              onClick={() => {
                saucesRef.current.scrollIntoView();
              }}>
              Соусы
            </Tab>
            <Tab active={mainsInView} value='Начинки' onClick={() => (mainsRef.current.scrollIntoView())}>Начинки</Tab>
          </nav>
          <ScrollArea ref={baseRef} contentClass={`${biStyles.scroll} custom-scroll`}>
            <div ref={bunsWatchRef}>
              <h3 ref={bunsRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Булки</h3>
              <IngredientsGrid order={order} plusCallback={plusCallback} detailsCallback={detailsCallback} type='bun' />
            </div>
            <div ref={saucesWatchRef}>
              <h3 ref={saucesRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Соусы</h3>
              <IngredientsGrid
                order={order}
                plusCallback={plusCallback}
                detailsCallback={detailsCallback}
                type='sauce' />
            </div>
            <div ref={mainsWatchRef}>
              <h3 ref={mainsRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Начинки</h3>
              <IngredientsGrid order={order} plusCallback={plusCallback} detailsCallback={detailsCallback} type='main' />
            </div>
          </ScrollArea>
        </section>
      )}
    </>
  );
};

BurgerIngredients.propTypes = {
  order: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  plusCallback: PropTypes.func.isRequired,
  detailsCallback: PropTypes.func.isRequired,
};

export default BurgerIngredients;
