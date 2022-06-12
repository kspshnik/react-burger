import { nanoid } from 'nanoid';
import { TRibbonItemIngredient } from '../../types/types';

const prepareIngredientsForRibbonItem = (
  ingredients: Array<string>,
) : Array<TRibbonItemIngredient> => ingredients
  .filter((item) => !!item)
  .slice(0, 6)
  .reverse()
  .map((item) => ({ _id: item, key: nanoid() }));

export default prepareIngredientsForRibbonItem;
