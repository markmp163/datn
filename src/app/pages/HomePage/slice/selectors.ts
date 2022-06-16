import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.homeManager || initialState;

export const selectHomeManager = createSelector([selectSlice], state => state);
