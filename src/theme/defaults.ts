import { ThemeOptions } from '@mui/material';

const defaultPalette = {
  primary: {
    lighter: '#F6D381',
    light: '#EEBE60',
    main: '#E4A02F',
    dark: '#C48122',
    darker: '#A46417',
  },

  secondary: {
    main: '#dedede',
  },

  background: {
    default: '#dedede',
  },

  text: {
    primary: '#000000',
  },

  success: {
    lighter: '#76F491',
    light: '#53EA83',
    main: '#1FDD6E',
    dark: '#16BE6C',
    darker: '#0F9F67',
  },

  info: {
    lighter: '#7AEAFB',
    light: '#59D8F7',
    main: '#24BBF2',
    dark: '#1A92D0',
    darker: '#126EAE',
  },

  warning: {
    lighter: '#FCDA89',
    light: '#FACB6B',
    main: '#F7B23B',
    dark: '#D48F2B',
    darker: '#B1701D',
  },

  error: {
    lighter: '#FFA7B5',
    light: '#FF91AE',
    main: '#FF6DA2',
    dark: '#DB4F90',
    darker: '#B7367F',
  },
};

const defaultThemeOptions = {
  palette: {
    ...defaultPalette,
  },
} satisfies ThemeOptions;

export default defaultThemeOptions;
