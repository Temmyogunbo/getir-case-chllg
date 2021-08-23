import { SET_PAGE_NUMBER } from '../constants';

export const pageReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_PAGE_NUMBER:
      return { ...state, page: action.page };

    default:
      return state;
  }
};
