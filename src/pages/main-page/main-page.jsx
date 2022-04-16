import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';

import TwoColumns from '../../components/two-columns/two-columns';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

const MainPage = () => {
  const { isIngredientsLoading } = useSelector((state) => state.api);
  const isIngredientsLoaded = useSelector((state) => !!state.ingredients.all);
  return (
    <TwoColumns isLoaded={!(isIngredientsLoading || !isIngredientsLoaded)}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </TwoColumns>
  );
};

export default MainPage;
