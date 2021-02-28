import { Colors } from "./types";

export const baseColors = {
  failure: "#AD1457",
  primary: "#827864",
  primaryBright: "#9c927d",
  primaryDark: "#504835",
  secondary: "#68899F",
  success: "#40C4FF",
  warning: "#FFB237",
  text: "#403C42",
  input: "#F8F6EF",
  borderColor: "#F8F6EF",
  tertiary: "#F8F6EF",
  overlay: "#090907",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#403C42",
  invertedContrast: "#FFFFFF",
  textDisabled: "#BDC2C4",
  card: "#FFFFFF",
  cardHeader: "#7E989D",
  textSubtle: baseColors.primary,
  gradients: {
    bubblegum: "#97BBC7B0;",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#000",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: baseColors.secondary,
  tertiary: "#AAB4BB",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FFF",
  borderColor: baseColors.primaryBright,
  card: "#1e1e1e",
  cardHeader: "#1e1e1e",
  gradients: {
    bubblegum: baseColors.primary,
  },
};
