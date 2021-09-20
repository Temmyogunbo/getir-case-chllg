import {
  GET_COMPANIES,
  COMPANIES_FAILED,
  COMPANIES_RECEIVED,
} from '../constants';

export const companyReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state, loading: true, hasError: false };
    case COMPANIES_RECEIVED:
      return { ...state, companies: action.companies, loading: false, hasError: false, };
    case COMPANIES_FAILED:
      return { ...state, errorMessage: action.message, loading: false, hasError: true, };
    default:
      return state;
  }
};
