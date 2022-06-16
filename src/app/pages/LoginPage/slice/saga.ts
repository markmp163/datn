import { put, takeLatest } from 'redux-saga/effects';
// import { loginManagerActions as actions } from '.';

import {
  NotificationError,
  NotificationSuccess,
} from 'app/components/Notification';
import { authService, loginAccount } from 'services/authServices';
import { loginManagerActions } from '.';

// function* doSomething() {}
function* handleLogin(data) {
  try {
    const rs = yield loginAccount(data?.payload);
    if (rs.data.rc === 0) {
      yield put(loginManagerActions.hanldeLoginSuccess(false));
      authService.setAccessToken(rs.data.token);
      authService.setUsername(rs.data.username);
      yield put(loginManagerActions.setLogin(true));
      NotificationSuccess('Login successfully!');
      localStorage.removeItem('cart');
    } else {
      yield put(loginManagerActions.hanldeLoginFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e: any) {
    NotificationError(e?.message);
    yield put(loginManagerActions.hanldeLoginFail(false));
  }
}
export function* loginManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(loginManagerActions.hanldeLogin, handleLogin);
}
