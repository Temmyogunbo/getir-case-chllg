import { combineReducers } from 'redux';
import { companyReducer } from './companyReducer';
import { productReducer } from './productReducer';
import { pageReducer } from './pageReducer';
import { sortReducer } from './sortReducer';
import { brandReducer } from './brandReducer';
import { tagReducer } from './tagReducer';
import { orderReducer } from './orderReducer';
import { itemTypeReducer } from './itemTypeReducer';

import { IInitialState } from '../types';

const appReducer = combineReducers({
  companyReducer,
  productReducer,
  tagReducer,
  sortReducer,
  brandReducer,
  pageReducer,
  orderReducer,
  itemTypeReducer,
});

const initialState = {
  orderReducer: { orders: [] },
  tagReducer: { tags: [] },
  productReducer: { products: [] },
  companyReducer: { companies: [] },
  brandReducer: { brands: [] },
  sortReducer: { sort: '' },
  pageReducer: { page: 0 },
  itemTypeReducer: { itemType: '' },
};
/**
 * Handles all state
 *
 * @param {object} state - application state
 * @param {object} action - contains what to do
 *
 * @returns {object} new state
 */
export const rootReducer = (
  state: Readonly<IInitialState> = initialState,
  action: any,
  //@ts-ignore
) => appReducer(state, action);
