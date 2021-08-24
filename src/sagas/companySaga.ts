import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { API_URL } from '../config/env';
import { GET_COMPANIES } from '../constants';
import { ICompany } from '../types';
import { getCompaniesSuccess, getCompaniesFailure } from '../actions';

const getCompanies = () => axios.get<ICompany[]>(`${API_URL}/companies`);

function* fetchCompanies(): any {
  try {
    const response = yield call(getCompanies);
    yield put(getCompaniesSuccess(response.data));
  } catch (error) {
    yield put(getCompaniesFailure(error.message));
  }
}

function* watchCompanies(): any {
  yield takeLatest(GET_COMPANIES, fetchCompanies);
}
export { watchCompanies };
