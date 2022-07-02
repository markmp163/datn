import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.ordersManager || initialState;

export const selectOrdersManager = createSelector(
  [selectSlice],
  state => state,
);
