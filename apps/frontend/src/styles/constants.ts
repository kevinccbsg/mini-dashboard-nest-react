export const COLORS = {
  bg: '#262D34',
  white: '#FFF',
  black: '#000',
  primary: '#0ABB87',
  secondary: '#262D34',
};

export const SIZES = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const DEVICES = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  laptop: `(min-width: ${SIZES.laptop})`,
  laptopL: `(min-width: ${SIZES.laptopL})`,
  desktop: `(min-width: ${SIZES.desktop})`,
  desktopL: `(min-width: ${SIZES.desktop})`
};
