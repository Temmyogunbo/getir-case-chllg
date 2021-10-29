import { put, takeLatest, call, select } from 'redux-saga/effects';
import axios from 'axios';
import { GET_PRODUCTS, PRODUCTS_RECEIVED, PRODUCTS_FAILED } from '../constants';
import { IProduct } from '../types';
import { getSelectedBrands } from '../selectors/brand';
import { getSelectedTags } from '../selectors/tag';
import { getSort } from '../selectors/sort';
import { getPage } from '../selectors/page';
import { getItemType } from '../selectors/itemType';

import { generateProductURL } from '../lib/generateProductUrl';

const getProducts = ({ tags, brands, page, sort, itemType }: any) =>
  axios.get<IProduct[]>(
    generateProductURL({ tags, brands, page, sort, itemType }),
  );

function* fetchProducts(action: any): any {
  try {
    const tags = yield select(getSelectedTags);
    const brands = yield select(getSelectedBrands);
    const page = yield select(getPage);
    const sort = yield select(getSort);
    const itemType = yield select(getItemType);

    const response = yield call(getProducts, {
      tags,
      brands,
      page,
      sort,
      itemType,
    });

    yield put({
      type: PRODUCTS_RECEIVED,
      products: response.data,
      count: parseInt(response['headers']['x-total-count']),
    });
  } catch (error: any) {
    yield put({ type: PRODUCTS_FAILED, message: error.message });
  }
}

function* watchProducts(): any {
  yield takeLatest(GET_PRODUCTS, fetchProducts);
}
export default watchProducts;
