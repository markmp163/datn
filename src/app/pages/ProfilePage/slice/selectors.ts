import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) =>
  state.profilePageManager || initialState;

export const selectProfilePageManager = createSelector(
  [selectSlice],
  state => state,
);
