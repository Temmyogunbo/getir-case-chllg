import { INCREMENT_ORDER, SET_ORDER, DECREMENT_ORDER } from '../constants';

import { IOrder } from '../types';
import compact from 'lodash.compact';

export const orderReducer = (state = { orders: [] }, action: any) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, orders: [...state?.orders, action.order] };

    case INCREMENT_ORDER: {
      const orders = state.orders.map((order: IOrder) => {
        if (order.slug === action.order.slug) {
          return {
            slug: order.slug,
            name: order.name,
            count: order.count! + 1,
            price: order.price,
          };
        }
        return order;
      });
      return { ...state, orders };
    }

    case DECREMENT_ORDER: {
      const orders = state.orders.map((order: IOrder) => {
        if (order.slug === action.order.slug) {
          if (action.order.count! === 1) return null;
          return {
            slug: order.slug,
            name: order.name,
            count: order.count! - 1,
            price: order.price,
          };
        }
        return order;
      });
      return { ...state, orders: compact(orders) };
    }
    default:
      return state;
  }
};
