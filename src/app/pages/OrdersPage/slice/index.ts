import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ordersManagerSaga } from './saga';
import { OrdersManagerState } from './types';

export const initialState: OrdersManagerState = {
  loading: false,
  data: [],
  params: {
    page: 1,
    size: 8,
  },
};

const slice = createSlice({
  name: 'ordersManager',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},

    findAllOrder(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    findAllOrderSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = action.payload;
    },
    findAllOrderFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },

    setParams(state, action: PayloadAction<any>) {
      state.loading = action.payload;
    },
  },
});

export const { actions: ordersManagerActions } = slice;

export const useOrdersManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ordersManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useOrdersManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
