import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
import ordersReducer from './orders';
import APIReducer from './API';
import DnDReducer from './dnd';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  api: APIReducer,
  DnD: DnDReducer,
});

export default rootReducer;
