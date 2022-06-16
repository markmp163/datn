import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { signUpManagerSaga } from './saga';
import { SignUpManagerState } from './types';

export const initialState: SignUpManagerState = {
  loading: false,
  nextToLogin: false,
};

const slice = createSlice({
  name: 'signUpManager',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },

    setNextToLogin(state, action: PayloadAction<any>) {
      state.nextToLogin = action.payload;
    },

    signUp(state, action: PayloadAction<any>) {
      state.loading = true;
    },

    signUpSuccess(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },

    signUpFail(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: signUpManagerActions } = slice;

export const useSignUpManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: signUpManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSignUpManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
