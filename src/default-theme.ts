import { DynamicColor } from './dynamic-color';
import { makeTheme } from './theme';

export const defaultTheme = makeTheme({
  em: 4,
  colors: {
    black: DynamicColor.create({ light: '#000000' }),
    white: DynamicColor.create({ light: '#ffffff' }),
  },
  spacing: {
    '2xs': '0.5em',
    'xs': '1em',
    'sm': '2em',
    'base': '3em',
    'lg': '5em',
    'xl': '7em',
    '2xl': '10em',
  },
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  leading: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  borderRadius: {
    'none': 0,
    'xs': '0.125em',
    'sm': '0.25em',
    'md': '0.375em',
    'lg': '0.5em',
    'xl': '0.75em',
    '2xl': '1em',
    '3xl': '1.5em',
    'full': 9999,
  },
});

export type DefaultTheme = typeof defaultTheme;
