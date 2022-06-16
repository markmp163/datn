import {
  NotificationError,
  NotificationSuccess,
} from 'app/components/Notification';
import { put, takeLatest } from 'redux-saga/effects';
import { getCurrentUser, updateUser, changePass } from 'services/UserServices';
import { profilePageManagerActions as actions } from '.';

// function* doSomething() {}

function* getCurrentUserInfo() {
  try {
    const rs = yield getCurrentUser();
    if (rs.data.rc === 0) {
      yield put(actions.getProfileSuccess(rs?.data?.item));
    } else {
      yield put(actions.getProfileSuccess(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(actions.getProfileFail(false));
  }
}

function* updateUserInfo(data) {
  try {
    const rs = yield updateUser(data?.payload?.data, data?.payload?.id);

    if (rs.data.rc === 0) {
      yield put(actions.editProfileSuccess(false));
      NotificationSuccess(rs.data.rd);
      yield put(actions.setShowModalEdit(false));
      yield put(actions.getProfile(true));
    } else {
      yield put(actions.editProfileFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(actions.editProfileFail(false));
  }
}

function* changePassword(data) {
  try {
    const rs = yield changePass(data?.payload);
    if (rs.data.rc === 0) {
      yield put(actions.changePassSuccess(false));
      NotificationSuccess(rs.data.rd);
      yield put(actions.setShowModalChangePass(false));
    } else {
      yield put(actions.changePassFail(false));
      NotificationError(rs.data.rd);
    }
  } catch (e) {
    NotificationError('Error');
    yield put(actions.changePassFail(false));
  }
}

export function* profilePageManagerSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  yield takeLatest(actions.getProfile, getCurrentUserInfo);
  yield takeLatest(actions.editProfile, updateUserInfo);
  yield takeLatest(actions.changePass, changePassword);
}
