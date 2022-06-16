import { productManagerActions } from '.';
import {
  findProduct,
  findListCategory,
} from './../../../../services/productServices';
import { put, takeLatest } from 'redux-saga/effects';
import { NotificationError } from 'app/components/Notification';
// import { productManagerActions as actions } from '.';

function* findProductByParams(data) {
  try {
    console.log(data);
    const rs = yield findProduct(data?.payload);
    if (rs.data.rc === 0) {
      yield put(productManagerActions.findProductSuccess(rs.data));
    } else {
      yield put(productManagerActions.findProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(productManagerActions.findProductFail(false));
  }
}

function* findCategory(data) {
  try {
    const rs = yield findListCategory();
    if (rs.data.rc === 0) {
      yield put(productManagerActions.findCategorySuccess(rs.data));
    } else {
      yield put(productManagerActions.findCategoryFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(productManagerActions.findCategoryFail(false));
  }
}

export function* productManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(productManagerActions.findProduct, findProductByParams);
  yield takeLatest(productManagerActions.findCategory, findCategory);
}
