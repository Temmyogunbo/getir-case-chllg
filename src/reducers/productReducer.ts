import { GET_PRODUCTS, PRODUCTS_RECEIVED, PRODUCTS_FAILED } from '../constants';

export const productReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case PRODUCTS_RECEIVED:
      return {
        ...state,
        products: action.products,
        count: action.count,
        loading: false,
      };
    case PRODUCTS_FAILED:
      return { ...state, message: action.message, loading: false };
    default:
      return state;
  }
};
