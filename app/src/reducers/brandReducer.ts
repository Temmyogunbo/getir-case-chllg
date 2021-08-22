import { SET_BRANDS , SET_ALL_BRANDS} from '../constants';

export const brandReducer = (state = { brands: [] }, action: any) => {
  switch (action.type) {
    case SET_BRANDS: {
      if(state.brands.length === 0) {
        return { ...state, brands: [action.brand] };
      }
      //@ts-ignore
      if(state.brands.includes('All')) {
        return { ...state, brands: [] };

      }
      //@ts-ignore
      if(state.brands.includes(action.brand)) {
        const filteredBrands = state.brands.filter((brand) => brand !== action.brand)
        return { ...state, brands: filteredBrands }
      }
      return { ...state, brands: [...state.brands, action.brand] }
    }

    case SET_ALL_BRANDS: {
      if(state.brands.length === action.brands.length) {
        return { ...state, brands: [] };
      }
      return { ...state, brands: [...action.brands] };
    }

    default: 
         return state;
  }
};