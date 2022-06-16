import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.productManager || initialState;

export const selectProductManager = createSelector(
  [selectSlice],
  state => state,
);
