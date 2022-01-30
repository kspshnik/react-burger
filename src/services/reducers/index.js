import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
import ordersReducer from './orders';
import APIReducer from './API';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  api: APIReducer,
});

export default rootReducer;
