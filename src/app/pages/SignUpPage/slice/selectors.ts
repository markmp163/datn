import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.signUpManager || initialState;

export const selectSignUpManager = createSelector(
  [selectSlice],
  state => state,
);
