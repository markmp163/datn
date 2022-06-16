import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.loginManager || initialState;

export const selectLoginManager = createSelector([selectSlice], state => state);
