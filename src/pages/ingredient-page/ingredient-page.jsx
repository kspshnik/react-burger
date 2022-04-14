import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIngredient } from '../../services/actionCreators';

import ipStyles from './ingredient-page.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';

const IngredientPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const selected = useSelector((store) => store.ingredients.selected);
  const all = useSelector((store) => store.ingredients.all);

  React.useEffect(() => {
    if (all && all[id]) {
      dispatch(selectIngredient(all[id]));
    } else if (all && !all[id]) {
      history.push({ pathname: '/404', state: { ingredient: true } });
    }
  }, [all, selected, id, history, dispatch]);

  return (
    <main className={ipStyles.main}>
      {selected && (<IngredientDetails />)}
    </main>
  );
};

export default IngredientPage;
