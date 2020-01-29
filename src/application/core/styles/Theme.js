const colors = {
  blue: '#559AFF',
  black: '#363636',
  white: '#ffffff',
  gray: '#cfcfcf',
  danger: '#F36986',
  warning: '#F89B1C',
  green: '#4fd69c',
  blueDark: '#0B3978',
  blueLight: '#F5F8FA',
  grayLight: '#F9F9FB',
}

export const Theme = {
  colors: {
    ...colors,
    primary: colors.blue,
    secound: colors.blue,
    defaultTextColor: colors.black,
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Lato', sans-serif",
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}
