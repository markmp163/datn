import {
  NotificationError,
  NotificationSuccess,
} from 'app/components/Notification';
import { put, takeLatest } from 'redux-saga/effects';
import { getCurrentCart } from 'services/cartServices';
import {
  addProductToCart,
  removeProductFromCart,
  paymentSaleOrder,
} from 'services/saleOrderServices';
import { getCurrentUser } from 'services/UserServices';
import { cartManagerActions } from '.';
// import { cartManagerActions as actions } from '.';

// function* doSomething() {}
function* findCurrentCart() {
  try {
    const rs = yield getCurrentCart();
    if (rs.data.rc === 0) {
      yield put(cartManagerActions.getListCartSuccess(rs.data));
    } else {
      yield put(cartManagerActions.getListCartFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(cartManagerActions.getListCartFail(false));
  }
}

function* getCurrentUserInfo() {
  try {
    const rs = yield getCurrentUser();
    if (rs.data.rc === 0) {
      yield put(cartManagerActions.getUserInfoSuccess(rs.data));
    } else {
      yield put(cartManagerActions.getListCartFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(cartManagerActions.getListCartFail(false));
  }
}

function* removerProduct(data) {
  try {
    const rs = yield removeProductFromCart(data?.payload);
    if (rs.data.rc === 0) {
      yield put(cartManagerActions.removeProductSuccess(false));
      yield put(cartManagerActions.getListCart(true));
    } else {
      yield put(cartManagerActions.removeProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(cartManagerActions.removeProductFail(false));
  }
}

function* addProduct(data) {
  try {
    const rs = yield addProductToCart(data?.payload);
    if (rs.data.rc === 0) {
      yield put(cartManagerActions.addNewProductSuccess(false));
      yield put(cartManagerActions.getListCart(true));
    } else {
      yield put(cartManagerActions.addNewProductFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(cartManagerActions.addNewProductFail(false));
  }
}

function* paymentSaleOrderCart(data) {
  try {
    const rs = yield paymentSaleOrder(data?.payload);
    if (rs.data.rc === 0) {
      yield put(cartManagerActions.paymentSaleOrderSuccess(false));
      yield put(cartManagerActions.getListCart(true));
      NotificationSuccess(rs.data.rd);
    } else {
      yield put(cartManagerActions.paymentSaleOrderFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(cartManagerActions.paymentSaleOrderFail(false));
  }
}
export function* cartManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(cartManagerActions.getListCart, findCurrentCart);
  yield takeLatest(cartManagerActions.getUserInfo, getCurrentUserInfo);
  yield takeLatest(cartManagerActions.addNewProduct, addProduct);
  yield takeLatest(cartManagerActions.removeProduct, removerProduct);
  yield takeLatest(cartManagerActions.paymentSaleOrder, paymentSaleOrderCart);
}
