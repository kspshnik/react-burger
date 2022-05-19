import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';

import TwoColumns        from '../../components/two-columns/two-columns';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import LoaderProtector from '../../components/loader-protector/loader-protector';

const MainPage = () => {
  const { isIngredientsLoading } = useSelector((state) => state.api);
  const isIngredientsLoaded = useSelector((state) => !!state.ingredients.all);
  return (
    <LoaderProtector isLoaded={!(isIngredientsLoading || !isIngredientsLoaded)}>
      <DndProvider backend={HTML5Backend}>
        <TwoColumns>
          <BurgerIngredients />
          <BurgerConstructor />
        </TwoColumns>
      </DndProvider>
    </LoaderProtector>
  );
};

export default MainPage;
