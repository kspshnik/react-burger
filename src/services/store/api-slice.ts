import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAPIState } from '../../types/store.types';

const initialState : TAPIState = {
  isIngredientsLoading: false,
  isOrderLoading: false,
  isOrderSent: false,
  isOrderNotFound: false,
  errorMessage: '',
  successMessage: '',
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    ingredientsRequested: (state) => ({
      ...state, isIngredientsLoading: true, errorMessage: '',
    }),
    ingredientsReceived: (state) => ({
      ...state, isIngredientsLoading: false, errorMessage: '',
    }),
    ingredientsFailed: (state, action: PayloadAction<string>) => ({
      ...state, isIngredientsLoading: false, errorMessage: action.payload,
    }),
    placeOrderRequested: (state) => ({
      ...state, isOrderSent: true, errorMessage: '',
    }),
    placeOrderSucceed: (state) => ({
      ...state, isOrderSent: false, errorMessage: '',
    }),
    placeOrderFailed: (state, action: PayloadAction<string>) => ({
      ...state, isOrderSent: false, errorMessage: action.payload,
    }),
    getOrderRequested: (state) => ({
      ...state, isOrderLoading: true, errorMessage: '',
    }),
    getOrderSucceed: (state) => ({
      ...state, isOrderLoading: false, errorMessage: '',
    }),
    getOrderFailed: (state, action: PayloadAction<string>) => ({
      ...state, isOrderLoading: false, errorMessage: action.payload,
    }),
    getOrderNotFound: (state) => ({
      ...state, isOrderNotFound: true,
    }),
    userFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),

    refreshFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    codeRequestFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    passwordResetFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    profileUpdateFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    registerFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    loginFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    logoutFailed: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    wsError: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    generalAPIError: (state, action: PayloadAction<string>) => ({
      ...state, errorMessage: action.payload, successMessage: '',
    }),
    codeRequestSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    passwordResetSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    profileUpdateSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    registerSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    loginSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    logoutSucceed: (state, action: PayloadAction<string>) => ({
      ...state, successMessage: action.payload, errorMessage: '',
    }),
    clearError: (state) => ({
      ...state, errorMessage: '',
    }),
    clearSuccess: (state) => ({
      ...state, successMessage: '',
    }),
    clearOrderNotFound: (state) => ({
      ...state, isOrderNotFound: false,
    }),
  },
});

const apiReducer = apiSlice.reducer;

export const {
  ingredientsRequested,
  ingredientsReceived,
  ingredientsFailed,
  placeOrderRequested,
  placeOrderSucceed,
  placeOrderFailed,
  getOrderRequested,
  getOrderSucceed,
  getOrderFailed,
  getOrderNotFound,
  registerSucceed,
  registerFailed,
  loginSucceed,
  loginFailed,
  logoutSucceed,
  logoutFailed,
  passwordResetSucceed,
  passwordResetFailed,
  codeRequestSucceed,
  codeRequestFailed,
  profileUpdateSucceed,
  profileUpdateFailed,
  userFailed,
  refreshFailed,
  clearError,
  clearOrderNotFound,
  clearSuccess,
  wsError,
  generalAPIError,
} = apiSlice.actions;

export default apiReducer;
