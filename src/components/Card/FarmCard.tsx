import React from "react";
import StyledFarmCard from "./StyledFarmCard";

const Card: React.FC = ({ ...props }) => {
  return <StyledFarmCard {...props} />;
};
export default Card;
