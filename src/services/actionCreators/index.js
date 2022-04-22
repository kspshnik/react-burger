import { setIngredients, selectIngredient, releaseIngredient } from './ingredients';
import {
  setBun, insertInterior, dropInterior, moveInterior, clearBurger, setOrder, archiveOrder,
} from './orders';
import {
  ingredientsRequested,
  ingredientsReceived,
  ingredientsFailed,
  placeOrderRequested,
  placeOrderSucceed,
  placeOrderFailed,
  getOrderRequested,
  getOrderFailed,
  getOrderSucceed,
  userFailed,
  refreshFailed,
  clearError,
  clearSuccess,
  loginSucceed,
  loginFailed,
  logoutSucceed,
  logoutFailed,
  registerSucceed,
  registerFailed,
  codeRequestSucceed,
  codeRequestFailed,
  passwordResetSucceed,
  passwordResetFailed,
  profileUpdateSucceed,
  profileUpdateFailed,
  wsError,
  generalAPIError,
} from './API';

import { setUser, resetUser } from './user';

import {
  setRegisterName,
  setRegisterEmail,
  setRegisterPass,
  setLoginEmail,
  setLoginPass,
  setForgotEmail,
  setResetCode,
  setResetPass,
  setProfileName,
  setProfileEmail,
  setProfilePass,
  resetRegisterForm,
  resetLoginForm,
  resetForgotForm,
  resetResetForm,
  resetProfileForm,
} from './forms';

import {
  startPublicFeed,
  stopPublicFeed,
  setPublicFeedOpened,
  setPublicFeedClosed,
  onPublicFeedMessage,
  requestPublicFeed,
  discardPublicFeed,
} from './public-feed';

import {
  startPrivateFeed,
  stopPrivateFeed,
  setPrivateFeedOpened,
  setPrivateFeedClosed,
  onPrivateFeedMessage,
  requestPrivateFeed,
  discardPrivateFeed,
} from './private-feed';

import {
  captureOrder,
  releaseOrder,
} from './order-select';

export {
  setIngredients,
  selectIngredient,
  releaseIngredient,
  setBun,
  insertInterior,
  dropInterior,
  moveInterior,
  clearBurger,
  archiveOrder,
  ingredientsRequested,
  ingredientsReceived,
  ingredientsFailed,
  placeOrderRequested,
  placeOrderSucceed,
  placeOrderFailed,
  getOrderRequested,
  getOrderSucceed,
  getOrderFailed,
  clearError,
  clearSuccess,
  loginSucceed,
  loginFailed,
  logoutSucceed,
  logoutFailed,
  registerSucceed,
  registerFailed,
  codeRequestSucceed,
  codeRequestFailed,
  passwordResetSucceed,
  passwordResetFailed,
  profileUpdateSucceed,
  profileUpdateFailed,
  wsError,
  generalAPIError,
  setOrder,
  setUser,
  resetUser,
  userFailed,
  refreshFailed,
  setRegisterName,
  setRegisterEmail,
  setRegisterPass,
  setLoginEmail,
  setLoginPass,
  setForgotEmail,
  setResetCode,
  setResetPass,
  setProfileName,
  setProfileEmail,
  setProfilePass,
  resetRegisterForm,
  resetLoginForm,
  resetForgotForm,
  resetResetForm,
  resetProfileForm,
  startPublicFeed,
  stopPublicFeed,
  setPublicFeedOpened,
  setPublicFeedClosed,
  onPublicFeedMessage,
  requestPublicFeed,
  discardPublicFeed,
  startPrivateFeed,
  stopPrivateFeed,
  setPrivateFeedOpened,
  setPrivateFeedClosed,
  onPrivateFeedMessage,
  requestPrivateFeed,
  discardPrivateFeed,
  captureOrder,
  releaseOrder,
};
