import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/store/hooks';
import { selectIngredient } from '../../services/store';

import ipStyles from './ingredient-page.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { REASON_404_INGREDIENT } from '../../constants';
import { TLocationState } from '../../types/types';

const IngredientPage = () => {
  const history = useHistory<TLocationState>();
  const location = useLocation<TLocationState>();
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const selected = useSelector((store) => store.ingredients.selected);
  const all = useSelector((store) => store.ingredients.all);
  React.useEffect(() => {
    if (all && all[id] && !location.state) {
      dispatch(selectIngredient(all[id]));
    } else if (all && !all[id]) {
      history.push({ pathname: '/404', state: { reasonFor404: REASON_404_INGREDIENT } });
    } else if (location.state && location.state.background === null) history.push({ pathname: '/' });
  }, [all, selected, id, history, dispatch, location.state, location]);

  return (
    <main className={ipStyles.main}>
      {selected && (<IngredientDetails />)}
    </main>
  );
};

export default IngredientPage;
