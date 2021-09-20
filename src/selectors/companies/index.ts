export const getCompanyReducer = (state: any) => state.companyReducer;

export const getCompanies = (state: any) => getCompanyReducer(state).companies;



export const hasCompaniesError = (state: any) => getCompanyReducer(state).hasError

export const getCompaniesError = (state: any) =>
  getCompanyReducer(state).errorMessage;