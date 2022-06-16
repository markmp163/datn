import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { profilePageManagerSaga } from './saga';
import { ProfilePageManagerState } from './types';

export const initialState: ProfilePageManagerState = {
  loading: false,
  dataProfile: {},
  showModalEdit: false,
  loadingBtnEdit: false,
  showModalChangePass: false,
  loadingBtnChangePass: false,
};

const slice = createSlice({
  name: 'profilePageManager',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getProfile(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getProfileSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.dataProfile = action.payload;
    },
    getProfileFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    setShowModalEdit(state, action: PayloadAction<any>) {
      state.showModalEdit = action.payload;
    },
    editProfile(state, action: PayloadAction<any>) {
      state.loadingBtnEdit = true;
    },
    editProfileSuccess(state, action: PayloadAction<any>) {
      state.loadingBtnEdit = false;
    },
    editProfileFail(state, action: PayloadAction<any>) {
      state.loadingBtnEdit = false;
    },
    setShowModalChangePass(state, action: PayloadAction<any>) {
      state.showModalChangePass = action.payload;
    },
    changePass(state, action: PayloadAction<any>) {
      state.loadingBtnChangePass = true;
    },
    changePassSuccess(state, action: PayloadAction<any>) {
      state.loadingBtnChangePass = false;
    },
    changePassFail(state, action: PayloadAction<any>) {
      state.loadingBtnChangePass = false;
    },
  },
});

export const { actions: profilePageManagerActions } = slice;

export const useProfilePageManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: profilePageManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProfilePageManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
