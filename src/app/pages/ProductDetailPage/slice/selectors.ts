import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.productDetailManager || initialState;

export const selectProductDetailManager = createSelector(
  [selectSlice],
  state => state,
);
