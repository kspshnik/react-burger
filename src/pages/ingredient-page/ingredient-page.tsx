import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store/hooks';
import { selectIngredient } from '../../services/store';

import ipStyles from './ingredient-page.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { REASON_404_INGREDIENT } from '../../constants';

const IngredientPage = () => {
  const history = useHistory<TLocationState>();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const selected = useSelector((store) => store.ingredients.selected);
  const all = useSelector((store) => store.ingredients.all);

  React.useEffect(() => {
    if (all && all[id]) {
      dispatch(selectIngredient(all[id]));
    } else if (all && !all[id]) {
      history.push({ pathname: '/404', state: { reasonFor404: REASON_404_INGREDIENT } });
    }
  }, [all, selected, id, history, dispatch]);

  return (
    <main className={ipStyles.main}>
      {selected && (<IngredientDetails />)}
    </main>
  );
};

export default IngredientPage;
