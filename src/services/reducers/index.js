import { combineReducers } from 'redux';

import ingredientsReducer from './ingredients';
import ordersReducer from './orders';
import APIReducer from './API';
import userReducer from './user';

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: ordersReducer,
  api: APIReducer,
  user: userReducer,
});

export default rootReducer;
