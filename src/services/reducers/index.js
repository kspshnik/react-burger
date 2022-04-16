import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
import ordersReducer from './orders';
import APIReducer from './API';
import userReducer from './user';
import formsReducer from './forms';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  api: APIReducer,
  user: userReducer,
  forms: formsReducer,
});

export default rootReducer;
