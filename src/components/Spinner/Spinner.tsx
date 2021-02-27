import React from "react";
import styled from "styled-components";
import ReactLoading from 'react-loading';
import { SpinnerProps } from "./types";
import { baseColors } from "../../theme/colors";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 160, color = baseColors.primary }) => {
  return (
    <Container>
      <ReactLoading
      type="spin"
        color={color}
        height={size}
        width={size}
      />
    </Container>
  );
};

export default Spinner;
