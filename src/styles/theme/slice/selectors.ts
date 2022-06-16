import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';
import { themes } from '../themes';

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => {
    // if (theme.selected === 'system') {
    //   return isSystemDark ? themes.dark : themes.light;
    // }
    // return themes[theme.selected];
    return themes.light;
  },
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  theme => theme.selected,
);
