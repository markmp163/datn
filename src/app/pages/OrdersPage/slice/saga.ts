// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { ordersManagerActions as actions } from '.';

import { NotificationError } from 'app/components/Notification';
import { put, takeLatest } from 'redux-saga/effects';
import { findAllOrder } from 'services/saleOrderServices';
import { ordersManagerActions } from '.';

// function* doSomething() {}

function* findOrdersByParams(data) {
  try {
    console.log(data);
    const rs = yield findAllOrder(data?.payload);
    if (rs.data.rc === 0) {
      yield put(ordersManagerActions.findAllOrderSuccess(rs.data));
    } else {
      yield put(ordersManagerActions.findAllOrderFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(ordersManagerActions.findAllOrderFail(false));
  }
}

export function* ordersManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(ordersManagerActions.findAllOrder, findOrdersByParams);
}
