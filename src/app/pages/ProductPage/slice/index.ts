import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { productManagerSaga } from './saga';
import { ProductManagerState } from './types';

export const initialState: ProductManagerState = {
  listLoading: false,
  params: {
    page: 1,
    size: 8,
  },
  listProduct: [],
  total: 0,
  listCategory: [],
  loadingCategory: false,
  listCategoryChoosed: [],
  price: [],
  nameFilter: '',
};

const slice = createSlice({
  name: 'productManager',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    setListLoading(state, action: PayloadAction<any>) {
      state.listLoading = action.payload;
    },
    setParams(state, action: PayloadAction<any>) {
      state.params = action.payload;
    },
    findProduct(state, action: PayloadAction<any>) {
      state.listLoading = true;
    },
    findProductSuccess(state, action: PayloadAction<any>) {
      state.listLoading = false;
      state.listProduct = action.payload.data;
      state.total = action.payload.total_item;
    },
    findProductFail(state, action: PayloadAction<any>) {
      state.listLoading = action.payload;
    },

    findCategory(state, action: PayloadAction<any>) {
      state.loadingCategory = true;
    },
    findCategorySuccess(state, action: PayloadAction<any>) {
      state.loadingCategory = false;
      state.listCategory = action.payload.data;
    },
    findCategoryFail(state, action: PayloadAction<any>) {
      state.loadingCategory = false;
    },

    setTotal(state, action: PayloadAction<any>) {
      state.total = action.payload;
    },

    setChoosedCategory(state, action: PayloadAction<any>) {
      state.listCategoryChoosed = [
        ...state.listCategoryChoosed,
        action.payload,
      ];
    },
    removeChoosedCategory(state, action: PayloadAction<any>) {
      state.listCategoryChoosed = state.listCategoryChoosed?.filter(
        c => c !== action.payload,
      );
    },
    setNameFilter(state, action: PayloadAction<any>) {
      state.nameFilter = action.payload;
    },
    setPriceFilter(state, action: PayloadAction<any>) {
      state.price = action.payload;
    },
  },
});

export const { actions: productManagerActions } = slice;

export const useProductManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: productManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useProductManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
