import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

const StyledCard = styled.div<StyledCardProps>`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: ${({ theme }) => theme.radii.small};
  box-shadow: ${({ theme }) => theme.shadows.elevation};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: ${({ theme }) => theme.padding.farmCard};
  position: relative;
  text-align: center;
  ${space}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
