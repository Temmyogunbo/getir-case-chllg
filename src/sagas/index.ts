import { all } from 'redux-saga/effects';
import watchProducts  from './productSaga';
import { watchCompanies } from './companySaga';

export default function* rootSaga() {
  yield all([
    watchProducts(),
    watchCompanies(),
  ]);
}

