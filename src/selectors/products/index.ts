export const getProductReducer = (state: any) => state.productReducer;

export const getProducts = (state: any) => getProductReducer(state).products;

export const hasProductsError = (state: any) => getProductReducer(state).hasError

export const getProductsError = (state: any) =>
  getProductReducer(state).errorMessage;

export const getItemTypes = (state: any) =>
  getProducts(state).map((product: any) => product.itemType);
