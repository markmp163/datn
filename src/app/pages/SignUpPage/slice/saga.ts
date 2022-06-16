import { put, takeLatest } from 'redux-saga/effects';
// import { signUpManagerActions as actions } from '.';
import { signUpManagerActions } from '.';

import { registerAccount } from 'services/authServices';
import {
  NotificationError,
  NotificationSuccess,
} from 'app/components/Notification';

// function* doSomething() {}

function* handleSignUp(data) {
  try {
    const rs = yield registerAccount(data?.payload);
    if (rs.data.rc === 0) {
      yield put(signUpManagerActions.signUpSuccess(false));
      yield put(signUpManagerActions.setNextToLogin(true));
      NotificationSuccess('Sign up successfully!');
    } else {
      yield put(signUpManagerActions.signUpFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(signUpManagerActions.signUpFail(false));
  }
}

export function* signUpManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(signUpManagerActions.signUp, handleSignUp);
}
