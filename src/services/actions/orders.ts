/* eslint-disable @typescript-eslint/prefer-as-const */

export const SET_BUN : 'SET_BUN' = 'SET_BUN';
export const INSERT_INTERIOR : 'INSERT_INTERIOR' = 'INSERT_INTERIOR';
export const DROP_INTERIOR : 'DROP_INTERIOR' = 'DROP_INTERIOR';
export const MOVE_INTERIOR : 'MOVE_INTERIOR' = 'MOVE_INTERIOR';
export const CLEAR_BURGER : 'CLEAR_BURGER' = 'CLEAR_BURGER';
export const ARCHIVE_ORDER : 'ARCHIVE_ORDER' = 'ARCHIVE_ORDER';
export const SET_ORDER : 'SET_ORDER' = 'SET_ORDER';

type TActionTypesOrders = 'SET_BUN' | 'INSERT_INTERIOR' | 'MOVE_INTERIOR' | 'CLEAR_BURGER' | 'ARCHIVE_ORDER' | 'SET_ORDER';

export default TActionTypesOrders;
