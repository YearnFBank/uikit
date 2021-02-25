import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const ClosebButton = styled(Button)<ButtonProps>`
  padding: 0;
  position: absolute;
  top: 4px;
  right: 4px;
  width: ${({ size }) => (size === "sm" ? "32px" : "40px")};
  height: ${({ size }) => (size === "sm" ? "32px" : "40px")};
`;

export default ClosebButton;
