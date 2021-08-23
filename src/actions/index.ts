import {
  GET_PRODUCTS,
  GET_COMPANIES,
  COMPANIES_RECEIVED,
  COMPANIES_FAILED,
  PRODUCTS_RECEIVED,
  PRODUCTS_FAILED,
  SET_BRANDS,
  SET_PAGE_NUMBER,
  SET_SORT,
  SET_TAGS,
  SET_ORDER,
  INCREMENT_ORDER,
  DECREMENT_ORDER,
  SET_ALL_TAGS,
  SET_ALL_BRANDS,
  SET_ITEM_TYPE,
} from '../constants';
import { IProduct, ICompany, IOrder, ItemTypes } from '../types';

export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (products: IProduct) => ({
  type: PRODUCTS_RECEIVED,
  products,
});

export const getProductsFailure = (message: string) => ({
  type: PRODUCTS_FAILED,
  message,
});

export const getCompanies = () => ({
  type: GET_COMPANIES,
});

export const getCompaniesSuccess = (companies: ICompany) => ({
  type: COMPANIES_RECEIVED,
  companies,
});

export const getCompaniesFailure = (message: string) => ({
  type: COMPANIES_FAILED,
  message,
});

export const setTags = (tag: string) => ({
  type: SET_TAGS,
  tag,
});

export const setAllTags = (tags: string[]) => ({
  type: SET_ALL_TAGS,
  tags,
});

export const setBrands = (brand: string) => ({
  type: SET_BRANDS,
  brand,
});

export const setAllBrands = (brands: string[]) => ({
  type: SET_ALL_BRANDS,
  brands,
});

export const setSort = (sort: string) => ({
  type: SET_SORT,
  sort,
});

export const setPageNumber = (page: number) => ({
  type: SET_PAGE_NUMBER,
  page,
});

export const setOrder = (order: IOrder) => ({
  type: SET_ORDER,
  order: {
    ...order,
    count: 1,
  },
});

export const incrementOrder = (order: IOrder) => ({
  type: INCREMENT_ORDER,
  order,
});

export const decrementOrder = (order: IOrder) => ({
  type: DECREMENT_ORDER,
  order,
});

export const setItemType = (itemType: ItemTypes) => ({
  type: SET_ITEM_TYPE,
  itemType,
});

