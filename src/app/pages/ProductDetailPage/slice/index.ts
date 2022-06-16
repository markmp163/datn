import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { productDetailManagerSaga } from './saga';
import { ProductDetailManagerState } from './types';

export const initialState: ProductDetailManagerState = {
  loadingBtnAdd: false,
  loading: false,
  productData: {},
  showMoreDesc: false,
  quantity: 1,
};

const slice = createSlice({
  name: 'productDetailManager',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getProduct(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    getProductSucces(state, action: PayloadAction<any>) {
      state.loading = false;
      state.productData = action.payload.item;
    },
    getProductFail(state, action: PayloadAction<any>) {
      state.loading = false;
    },
    setShowMoreDescription(state, action: PayloadAction<any>) {
      state.showMoreDesc = action.payload;
    },
    setQuantity(state, action: PayloadAction<any>) {
      state.quantity = action.payload;
    },
    addToCart(state, action: PayloadAction<any>) {
      state.loadingBtnAdd = true;
    },
    addToCartSuccess(state, action: PayloadAction<any>) {
      state.loadingBtnAdd = false;
    },
    addToCartFail(state, action: PayloadAction<any>) {
      state.loadingBtnAdd = false;
    },
  },
});

export const { actions: productDetailManagerActions } = slice;

export const useProductDetailManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: productDetailManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProductDetailManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
