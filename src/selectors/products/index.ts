export const getProducts = (state: any) => state.productReducer.products;
export const getItemTypes = (state: any) =>
  getProducts(state).map((product: any) => product.itemType);
