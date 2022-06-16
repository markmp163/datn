import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginManagerSaga } from './saga';
import { LoginManagerState } from './types';

export const initialState: LoginManagerState = {
  loading: false,
  login: false,
};

const slice = createSlice({
  name: 'loginManager',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
    setLogin(state, action: PayloadAction<any>) {
      state.login = action.payload;
    },

    hanldeLogin(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },

    hanldeLoginSuccess(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },

    hanldeLoginFail(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: loginManagerActions } = slice;

export const useLoginManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
