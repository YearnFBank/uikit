import React from "react";
import styled  from "styled-components";
import { CoffeeLoading } from 'react-loadingg';
import { SpinnerProps } from "./types";
import { baseColors} from "../../theme/colors";

const Container = styled.div`
  position: relative;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 160, color= baseColors.primary }) => {
  return (
    <Container>
        <CoffeeLoading
            type="Rings"
            color={color}
            height={size}
            width={size}
            timeout={3000} // 3 secs
        />
    </Container>
  );
};

export default Spinner;
