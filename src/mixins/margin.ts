import type { ViewStyle } from 'react-native';

import { em, EmValue } from '../functions/em';
import type { StyleContextValue } from '../style-context';
import type { ThemeContextValue } from '../theme-context';

export type MarginValue =
  | EmValue
  | {
      x?: EmValue;
      y?: EmValue;
      t?: EmValue;
      l?: EmValue;
      b?: EmValue;
      r?: EmValue;
    };

export function margin(
  value: MarginValue,
  context: StyleContextValue,
  theme: ThemeContextValue
): ViewStyle {
  if (typeof value === 'object') {
    return {
      ...(value.x ? { marginHorizontal: em(value.x, context, theme) } : {}),
      ...(value.y ? { marginVertical: em(value.y, context, theme) } : {}),
      ...(value.t ? { marginTop: em(value.t, context, theme) } : {}),
      ...(value.l ? { marginLeft: em(value.l, context, theme) } : {}),
      ...(value.b ? { marginBottom: em(value.b, context, theme) } : {}),
      ...(value.r ? { marginRight: em(value.r, context, theme) } : {}),
    };
  } else {
    return {
      margin: em(value, context, theme),
    };
  }
}
