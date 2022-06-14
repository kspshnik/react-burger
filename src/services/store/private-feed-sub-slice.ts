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

const privateFeedSubSlice = createSlice({
  name: 'private',
  initialState,
  reducers: {
    setPrivateFeedOpened: (state) => ({
      ...state, isOpen: true, discardedAt: 0, requestedAt: +Date.now(),
    }),
    setPrivateFeedClosed: (state) => ({
      ...initialState, discardedAt: +Date.now(),
    }),
    onPrivateFeedMessage: (state, action: PayloadAction<TOrdersData>) => ({
      ...state, ...action.payload,
    }),
    requestPrivateFeed: (state) => ({
      ...state, requestedAt: +Date.now(),
    }),
    discardPrivateFeed: (state) => ({
      ...state, discardedAt: +Date.now(),
    }),
  },
});

const privateFeedReducer = privateFeedSubSlice.reducer;

export const {
  setPrivateFeedOpened,
  setPrivateFeedClosed,
  onPrivateFeedMessage,
  requestPrivateFeed,
  discardPrivateFeed,
} = privateFeedSubSlice.actions;

export default privateFeedReducer;
