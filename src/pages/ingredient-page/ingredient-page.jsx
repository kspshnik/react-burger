import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ipStyles from './ingredient-page.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { selectIngredient } from '../../services/actionCreators';

const IngredientPage = () => {
  const { id } = useParams();
  const chosen = useSelector((state) => {
    if (state && state?.ingredients && state?.ingredients?.all) {
      return state.ingredients.all[id];
    }
    return null;
  });
  const selected = useSelector((state) => state?.ingredients?.selected);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (chosen) {
      dispatch(selectIngredient(chosen));
    }
  }, [dispatch, chosen]);
  return (
    <main className={ipStyles.main}>
      {selected && (<IngredientDetails />)}
    </main>
  );
};

export default IngredientPage;
