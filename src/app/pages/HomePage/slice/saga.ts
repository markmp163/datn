import { NotificationError } from 'app/components/Notification';
import { put, takeLatest } from 'redux-saga/effects';
// import { homeManagerActions as actions } from '.';

import { findProduct } from 'services/productServices';
import { homeManagerActions } from '.';

// function* doSomething() {}

function* findHotProduct(data) {
  try {
    const rs = yield findProduct(data?.payload);
    if (rs.data.rc === 0) {
      yield put(homeManagerActions.getListHotProductSuccess(rs.data));
    } else {
      yield put(homeManagerActions.getListHotProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(homeManagerActions.getListHotProductFail(false));
  }
}

function* findNewProduct(data) {
  try {
    const rs = yield findProduct(data?.payload);
    if (rs.data.rc === 0) {
      yield put(homeManagerActions.getListNewProductSuccess(rs.data));
    } else {
      yield put(homeManagerActions.getListNewProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(homeManagerActions.getListNewProductFail(false));
  }
}

export function* homeManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(homeManagerActions.getListHotProduct, findHotProduct);
  yield takeLatest(homeManagerActions.getListNewProduct, findNewProduct);
}
