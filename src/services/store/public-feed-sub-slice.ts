import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TFeedState } from '../../types/store.types';
import { TOrdersData } from '../../types/types';

const initialState : TFeedState = {
  orders: null,
  total: 0,
  totalToday: 0,
  isOpen: false,
  requestedAt: 0,
  discardedAt: 0,
};

const publicFeedSubSlice = createSlice({
  name: 'public',
  initialState,
  reducers: {
    setPublicFeedOpened: (state) => ({
      ...state, isOpen: true, discardedAt: 0, requestedAt: +Date.now(),
    }),
    setPublicFeedClosed: (state) => ({
      ...state, ...initialState, discardedAt: +Date.now(),
    }),
    onPublicFeedMessage: (state, action: PayloadAction<TOrdersData>) => ({
      ...state, ...action.payload,
    }),
    requestPublicFeed: (state) => ({
      ...state, requestedAt: +Date.now(),
    }),
    discardPublicFeed: (state) => ({
      ...state, discardedAt: +Date.now(),
    }),
  },
});

const publicFeedReducer = publicFeedSubSlice.reducer;

export const {
  setPublicFeedOpened,
  setPublicFeedClosed,
  onPublicFeedMessage,
  requestPublicFeed,
  discardPublicFeed,
} = publicFeedSubSlice.actions;

export default publicFeedReducer;
