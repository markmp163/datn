const lightTheme = {
  primary: 'rgba(215,113,88,1)',
  text: 'rgba(58,52,51,1)',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: 'rgba(58,52,51,0.12)',
  borderLight: 'rgba(58,52,51,0.05)',
  borderBlack: '#000',
  blackColor: '#000',
  blackColorBlur: 'rgba(0,0,0,0.1)',
  textLight: 'rgba(241,233,231,1)',
  goldColor: 'rgb(205,153,0)',
  redColor: 'rgb(247,0,0)',
  redDark: 'rgb(179,47,45)',
  redBlur: 'rgb(236,200,197)',
  secondaryFont: 'Courier New',
  grayColor: '#ccc',
  brightGrayColor: 'rgb(242,242,242)',
  whiteColor: 'rgb(255,255,255)',
  greenColor: 'rgb(0,247,1)',
  greenBlur: 'rgb(222,242,214)',
  greenDark: 'rgb(90,112,82)',
};

// const darkTheme: Theme = {
//   primary: 'rgba(220,120,95,1)',
//   text: 'rgba(241,233,231,1)',
//   textSecondary: 'rgba(241,233,231,0.6)',
//   background: 'rgba(0,0,0,1)',
//   backgroundVariant: 'rgba(28,26,26,1)',
//   border: 'rgba(241,233,231,0.15)',
//   borderLight: 'rgba(241,233,231,0.05)',
//   borderBlack: '#000',
// };

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  // dark: darkTheme,
};
