import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";
import { baseColors } from "../../theme/colors";
import AppIcon from "../Svg/Icons/Logo";

const Container = styled.div<{ size: number }>`
  position: relative;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const opcacity = keyframes`
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
`;
const FloatingTokenIcon = styled(AppIcon)`
  position: absolute;
  transform: translate(25%, 25%);
  animation: ${opcacity} 1.5s linear infinite;
`;

export const Loader = styled.div<{ size: number; color: string }>`
  position: absolute;
  border: 0.4em solid rgba(0, 0, 0, 0.1);
  border-top: 0.4em solid ${(props) => props.color};
  border-radius: 50%;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  animation: ${spin} 1s linear infinite;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 4, color = baseColors.primary }) => {
  return (
    <Container size={size}>
      <Loader color={color} size={size} />
      <FloatingTokenIcon width={`${size / 1.5}rem`} />
    </Container>
  );
};

export default Spinner;
