import env from 'env-var'

export const API_URL = env.get('REACT_APP_API_URL').asString();
export const PAGE_SIZE = env.get('REACT_APP_PAGE_SIZE').asString()