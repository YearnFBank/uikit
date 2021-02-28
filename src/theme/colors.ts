import { Colors } from "./types";

export const baseColors = {
  failure: `${process.env.REACT_APP_COLOR_BASE_FAILURE ?? "#AD1457"}`,
  primary: `${process.env.REACT_APP_COLOR_BASE_PRIMARY ?? "#827864"}`,
  primaryBright: `${process.env.REACT_APP_COLOR_BASE_PRIMARY_BRIGHT ?? "#9c927d"}`,
  primaryDark: `${process.env.REACT_APP_COLOR_BASE_PRIMARY_DARK ?? "#504835"}`,
  secondary: `${process.env.REACT_APP_COLOR_BASE_SECONDARY ?? "#68899F"}`,
  success: `${process.env.REACT_APP_COLOR_BASE_SUCCESS ?? "#40C4FF"}`,
  warning: `${process.env.REACT_APP_COLOR_BASE_WARNING ?? "#FFB237"}`,
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: `${process.env.REACT_APP_COLOR_LIGHT_BACKGROUND ?? "#FAF9FA"}`,
  backgroundDisabled: `${process.env.REACT_APP_COLOR_LIGHT_BACKGROUND_DISABLED ?? "#E9EAEB"}`,
  contrast: `${process.env.REACT_APP_COLOR_LIGHT_CONTRAST ?? "#403C42"}`,
  invertedContrast: `${process.env.REACT_APP_COLOR_LIGHT_INVERTED_CONTRAST ?? "#FFFFFF"}`,
  text: `${process.env.REACT_APP_COLOR_LIGHT_TEXT ?? "#403C42"}`,
  input: `${process.env.REACT_APP_COLOR_LIGHT_INPUT ?? "#F8F6EF"}`,
  textDisabled: `${process.env.REACT_APP_COLOR_LIGHT_TEXT_DISABLED ?? "#BDC2C4"}`,
  card: `${process.env.REACT_APP_COLOR_LIGHT_CARD ?? "#FFFFFF"}`,
  cardHeader: `${process.env.REACT_APP_COLOR_LIGHT_CARD_HEADER ?? "#7E989D"}`,
  textSubtle: `${process.env.REACT_APP_COLOR_LIGHT_TXTSUBTLE ?? baseColors.primary}`,
  borderColor: `${process.env.REACT_APP_COLOR_LIGHT_BORDER_COLOR ?? "#F8F6EF"}`,
  tertiary: `${process.env.REACT_APP_COLOR_LIGHT_TERTIARY ?? "#F8F6EF"}`,
  overlay: `${process.env.REACT_APP_COLOR_LIGHT_OVERLAY ?? "#090907"}`,
  gradients: {
    bubblegum: baseColors.primary,
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: `${process.env.REACT_APP_COLOR_DARK_BACKGROUND ?? "#000"}`,
  backgroundDisabled: `${process.env.REACT_APP_COLOR_DARK_BACKGROUND_DISABLED ?? "#3c3742"}`,
  contrast: `${process.env.REACT_APP_COLOR_DARK_CONTRAST ?? "#FFFFFF"}`,
  invertedContrast: `${process.env.REACT_APP_COLOR_DARK_INVERTED_CONTRAST ?? "#191326"}`,
  text: `${process.env.REACT_APP_COLOR_DARK_TEXT ?? "#FFFFFF"}`,
  input: `${process.env.REACT_APP_COLOR_DARK_INPUT ?? baseColors.secondary}`,
  textDisabled: `${process.env.REACT_APP_COLOR_DARK_TEXT_DISABLED ?? "#666171"}`,
  card: `${process.env.REACT_APP_COLOR_DARK_CARD ?? "#1e1e1e"}`,
  cardHeader: `${process.env.REACT_APP_COLOR_DARK_CARD_HEADER ?? "#1e1e1e"}`,
  borderColor: `${process.env.REACT_APP_COLOR_DARK_BORDER_COLOR ?? baseColors.primaryBright}`,
  tertiary: `${process.env.REACT_APP_COLOR_DARK_TERTIARY ?? "#AAB4BB"}`,
  overlay: `${process.env.REACT_APP_COLOR_DARK_OVERLAY ?? "#090907"}`,
  textSubtle: `${process.env.REACT_APP_COLOR_DARK_TXTSUBTLE ?? "#FFF"}`,
  gradients: {
    bubblegum: baseColors.primary,
  },
};
