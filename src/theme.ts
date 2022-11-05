import type { DynamicColor } from './dynamic-color';
import type { DynamicFont } from './dynamic-font';

export type NumberValue = number | `${number}em`;
export type NumberValueWithPercentage = NumberValue | `${number}%`;

export interface BaseTheme {
  em?: number;

  colors?: Record<string, ReturnType<typeof DynamicColor['create']>>;
  fonts?: Record<
    string,
    Record<string, ReturnType<typeof DynamicFont['create']>>
  >;
  tracking?: Record<string, NumberValue>;
  spacing?: Record<string, NumberValue>;
  leading?: Record<string, number>;

  extend?: Omit<BaseTheme, 'em' | 'extend'>;
}

export function makeTheme<T extends BaseTheme>(theme: T): T {
  return theme;
}
