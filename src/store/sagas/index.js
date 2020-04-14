import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga,
} from './auth';
import * as actionTypes from '../actions/actionTypes';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
    takeEvery(actionTypes.AUTH_USER, authUserSaga),
    takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga),
  ]);
}

export function* watchBurgerBuilder() {
  yield takeEvery(actionTypes.INIT_IGREDIENTS, initIngredientsSaga);
}

export function* watchPurchaseBurger() {
  yield takeEvery(actionTypes.PURCHASE_BURGER_INITIATE, purchaseBurgerSaga);
  yield takeEvery(actionTypes.FETCH_ORDER, fetchOrdersSaga);
}
