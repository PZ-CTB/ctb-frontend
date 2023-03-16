import { ThemeOptions } from '@mui/material';

//

const defaultPalette = {
  primary: {
    lighter: '#F6D1FA',
    light: '#CB75E6',
    main: '#7A20AE',
    dark: '#47107D',
    darker: '#240653',
    contrastText: '#FFFFFF',
  },

  secondary: {
    lighter: '#CCF7F0',
    light: '#64D4D2',
    main: '#0E6270',
    dark: '#073A50',
    darker: '#021E35',
    contrastText: '#FFFFFF',
  },

  success: {
    lighter: '#F3FBC9',
    light: '#CBE85F',
    main: '#85B503',
    dark: '#588201',
    darker: '#355600',
  },

  info: {
    lighter: '#CAFDFC',
    light: '#61E0F3',
    main: '#009ED8',
    dark: '#005C9B',
    darker: '#002F67',
  },

  warning: {
    lighter: '#FEF2CC',
    light: '#FDCD67',
    main: '#F99704',
    dark: '#B35D02',
    darker: '#773400',
  },

  error: {
    lighter: '#FCE3D5',
    light: '#F19581',
    main: '#D13030',
    dark: '#96182E',
    darker: '#640928',
  },
};

//

const defaultThemeOptions: ThemeOptions = {
  palette: {
    ...defaultPalette,
  },
};

export default defaultThemeOptions;
