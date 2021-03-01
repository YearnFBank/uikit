import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: shadows.base,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.cardHeader,
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: shadows.base,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.cardHeader,
};
