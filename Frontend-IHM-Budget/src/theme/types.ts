import type {
  Shadows,
  ColorSystemOptions,
  SupportedColorScheme,
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles';

import type { CustomShadows } from './core/custom-shadows';

export type ThemeColorScheme = SupportedColorScheme;
export type ThemeCssVariables = {
  cssVarPrefix?: string;
  colorSchemeSelector?: string;
  disableCssColorScheme?: boolean;
  shouldSkipGeneratingVar?: (keys: string[]) => boolean;
};

type ColorSchemeOptionsExtended = ColorSystemOptions & {
  shadows?: Shadows;
  customShadows?: CustomShadows;
};

export type ThemeOptions = MuiThemeOptions & {
  defaultColorScheme?: ThemeColorScheme;
  colorSchemes?: Partial<Record<ThemeColorScheme, ColorSchemeOptionsExtended>>;
  cssVariables?: ThemeCssVariables;
};
