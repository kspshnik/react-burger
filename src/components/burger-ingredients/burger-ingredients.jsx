import React, { useRef } from 'react';

import { useInView } from 'react-intersection-observer';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import biStyles from './burger-ingredients.module.css';

import ScrollArea from '../scroll-area/scroll-area';
import DropZone   from '../drop-zone/drop-zone';

import IngredientsGrid from '../ingredients-grid/ingredients-grid';
import { ORDER }        from '../../constants';
import { dropInterior } from '../../services/actionCreators';

const BurgerIngredients = () => {
  const baseRef = useRef(null);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);

  const dispatch = useDispatch();

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
  const handleDrop = (item) => dispatch(dropInterior(item));
  return (
    <section className={`${biStyles.section} mb-10`}>
      <header className={`${biStyles.header} pt-10 pb-5`}>
        <h2 className={`${biStyles.title} text text_type_main-large`}>Соберите бургер</h2>
      </header>
      <DropZone
        contentClass={biStyles.drop}
        hoverClass={biStyles.drop_targeted}
        type={ORDER}
        handleDrop={handleDrop}>
        <nav className={biStyles.menu}>
          <Tab
            active={bunsInView}
            value='Булки'
            onClick={() => {
              baseRef.current.scroll(0, bunsRef.current.offsetTop);
            }}>
            Булки
          </Tab>
          <Tab
            active={saucesInView && !bunsInView && !mainsInView}
            value='Соусы'
            onClick={() => {
              baseRef.current.scroll(0, saucesRef.current.offsetTop);
            }}>
            Соусы
          </Tab>
          <Tab
            active={mainsInView || (!saucesInView && !bunsInView)}
            value='Начинки'
            onClick={() => {
              baseRef.current.scroll(0, mainsRef.current.offsetTop);
            }}>
            Начинки
          </Tab>
        </nav>
        <ScrollArea ref={baseRef} contentClass={`${biStyles.scroll} custom-scroll`}>
          <div ref={bunsWatchRef}>
            <h3 ref={bunsRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Булки</h3>
            <IngredientsGrid type='bun' />
          </div>
          <div ref={saucesWatchRef}>
            <h3 ref={saucesRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Соусы</h3>
            <IngredientsGrid type='sauce' />
          </div>
          <div ref={mainsWatchRef}>
            <h3 ref={mainsRef} className='{$biStyles.title} text text_type_main-medium mb-6 mt-10'>Начинки</h3>
            <IngredientsGrid type='main' />
          </div>
        </ScrollArea>
      </DropZone>
    </section>
  );
};

export default BurgerIngredients;
