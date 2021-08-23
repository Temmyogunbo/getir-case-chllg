import { SET_SORT } from '../constants';

export const sortReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_SORT:
      return { ...state, sort: action.sort };

    default:
      return state;
  }
};
