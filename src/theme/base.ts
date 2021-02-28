import { MediaQueries, Breakpoints, Spacing, Shadows } from "./types";
import { baseColors } from "./colors";

const hexToRgb = (hex:string) =>{
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}


export const breakpointMap: { [key: string]: number } = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
};

const primary = hexToRgb(baseColors.primary)
export const shadows: Shadows = {
  elevation: `box-shadow: 0 3px 3px -2px rgba(${primary?.join(',')} ,.2),0 3px 4px 0 rgba(${primary?.join(',')},.14),0 1px 8px 0 rgba(${primary?.join(',')},.12)!important;`,
  base: `0px 0px 0px 1px  ${baseColors.primary}, 0px 0px 0px 4px  ${baseColors.primary}`,
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: `0 3px 1px -2px ${baseColors.primary},0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0  ${baseColors.primary} ;`,
  success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: `0px 0px 0px 1px  ${baseColors.primary}, 0px 0px 0px 4px  ${baseColors.primary}`,
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",

};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "2px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const padding = {
  small: "2px",
  default: "16px",
  card: "32px",
  farmCard: "24px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,
  padding,
};
