import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { cartManagerSaga } from './saga';
import { CartManagerState } from './types';

export const initialState: CartManagerState = {
  data: [],
  loading: false,
  loadingBtnPay: false,
  userInfo: {},
  localCart: [],
};

const slice = createSlice({
  name: 'cartManager',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getListCart(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
    getListCartSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload.item;
    },
    getListCartFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    getUserInfo(state, action: PayloadAction<any>) {
      state.loading = true;
    },

    getUserInfoSuccess(state, action: PayloadAction<any>) {
      state.userInfo = action.payload?.item;
      state.loading = false;
    },

    getUserInfoFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    addNewProduct(state, action: PayloadAction<any>) {
      state.loading = true;
    },

    addNewProductSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    addNewProductFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    removeProduct(state, action: PayloadAction<any>) {
      state.loading = true;
    },

    removeProductSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    removeProductFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    setLocalCart(state, action: PayloadAction<any>) {
      state.localCart = action.payload;
    },
  },
});

export const { actions: cartManagerActions } = slice;

export const useCartManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: cartManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useCartManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
