import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.card,
  boxShadow: "0 3px 1px -2px rgba(25, 19, 38, 0.05),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) ;",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.cardHeader,
};

export const dark: CardTheme = {
  background: darkColors.card,
  boxShadow: "0 3px 1px -2px rgba(25, 19, 38, 0.05),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12) ;",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: lightColors.cardHeader,
};
