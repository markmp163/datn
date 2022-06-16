import { put, takeLatest } from 'redux-saga/effects';
// import { productDetailManagerActions as actions } from '.';

import {
  NotificationError,
  NotificationSuccess,
} from 'app/components/Notification';
import { findProductById } from 'services/productServices';
import { productDetailManagerActions } from '.';
import { addProductToCart } from 'services/saleOrderServices';

// function* doSomething() {}
function* findProductDetail(data) {
  try {
    const rs = yield findProductById(data?.payload);
    if (rs.data.rc === 0) {
      yield put(productDetailManagerActions.getProductSucces(rs.data));
    } else {
      yield put(productDetailManagerActions.getProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(productDetailManagerActions.getProductFail(false));
  }
}
// addProductToCart;

function* addToCart(data) {
  try {
    const rs = yield addProductToCart(data?.payload);
    if (rs.data.rc === 0) {
      yield put(productDetailManagerActions.addToCartSuccess(false));
      NotificationSuccess('Added to cart.');
    } else {
      yield put(productDetailManagerActions.addToCartFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(productDetailManagerActions.addToCartFail(false));
  }
}
export function* productDetailManagerSaga() {
  yield takeLatest(productDetailManagerActions.getProduct, findProductDetail);
  yield takeLatest(productDetailManagerActions.addToCart, addToCart);
}
