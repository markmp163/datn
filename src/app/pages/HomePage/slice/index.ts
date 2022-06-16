import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homeManagerSaga } from './saga';
import { HomeManagerState } from './types';

export const initialState: HomeManagerState = {
  listHotProduct: [],
  listNewProduct: [],
  loadingListHot: false,
  loadingListNew: false,
  showModalChangeLanguage: false,
};

const slice = createSlice({
  name: 'homeManager',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getListHotProduct(state, action: PayloadAction<any>) {
      state.loadingListHot = true;
    },
    getListHotProductSuccess(state, action: PayloadAction<any>) {
      state.loadingListHot = false;
      state.listHotProduct = action.payload?.data;
    },
    getListHotProductFail(state, action: PayloadAction<any>) {
      state.loadingListHot = false;
    },
    getListNewProduct(state, action: PayloadAction<any>) {
      state.loadingListNew = true;
    },
    getListNewProductSuccess(state, action: PayloadAction<any>) {
      state.listNewProduct = action.payload?.data;
      state.loadingListNew = false;
    },
    getListNewProductFail(state, action: PayloadAction<any>) {
      state.loadingListNew = false;
    },

    setShowModalChangeLanguage(state, action: PayloadAction<any>) {
      state.showModalChangeLanguage = action.payload;
    },
  },
});

export const { actions: homeManagerActions } = slice;

export const useHomeManagerSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homeManagerSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomeManagerSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
