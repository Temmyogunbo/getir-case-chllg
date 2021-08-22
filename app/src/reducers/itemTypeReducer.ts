import { SET_ITEM_TYPE } from '../constants';

export const itemTypeReducer = (state = { itemType: ''}, action: any) => {
  switch (action.type) {
    case SET_ITEM_TYPE:
         return { ...state, itemType: action.itemType };

    default: 
         return state;
  }
};
