import {
  GET_COMPANIES,
  COMPANIES_FAILED,
  COMPANIES_RECEIVED,
} from '../constants';

export const companyReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, loading: true };
    case COMPANIES_RECEIVED:
      return { ...state, companies: action.companies, loading: false };
    case COMPANIES_FAILED:
      return { ...state, message: action.message, loading: false };
    default:
      return state;
  }
};
