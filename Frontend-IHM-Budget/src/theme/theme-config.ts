import type { CommonColors } from '@mui/material/styles';

import type { ThemeCssVariables } from './types';
import type { PaletteColorNoChannels } from './core/palette';

type ThemeConfig = {
  classesPrefix: string;
};

export const themeConfig: ThemeConfig = {
  classesPrefix: 'min imal',
  // fontFamily: {
  //   primary: 'DM Sans Variable',
  //   secondary: 'Barlow',
  // },
  // palette: {
  // warning: {
  //   lighter: '#FFF5CC',
  //   light: '#FFD666',
  //   main: '#FFAB00',
  //   dark: '#B76E00',
  //   darker: '#7A4100',
  //   contrastText: '#1C252E',
  //   mainChannel: '255, 171, 0',
  //   lightChannel: '255, 214, 102',
  //   darkChannel: '183, 110, 0',
  //   contrastTextChannel: '28, 37, 46',
  // },
  // error: {
  //   lighter: '#FFE9D5',
  //   light: '#FFAC82',
  //   main: '#FF5630',
  //   dark: '#B71D18',
  //   darker: '#7A0916',
  //   contrastText: '#FFFFFF',
  //   mainChannel: '255, 86, 48',
  //   lightChannel: '255, 172, 130',
  //   darkChannel: '183, 29, 24',
  //   contrastTextChannel: '255, 255, 255',
  // },
  // grey: {
  //   '50': '#FCFDFD',
  //   '100': '#F9FAFB',
  //   '200': '#F4F6F8',
  //   '300': '#DFE3E8',
  //   '400': '#C4CDD5',
  //   '500': '#919EAB',
  //   '600': '#637381',
  //   '700': '#454F5B',
  //   '800': '#1C252E',
  //   '900': '#141A21',
  // },
  // common: { black: '#000000', white: '#FFFFFF' },
  // },
  // cssVariables: {
  //   cssVarPrefix: '',
  //   colorSchemeSelector: 'data-color-scheme',
  // },
};
