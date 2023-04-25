import React from "react";
import { Stack, styled, StackProps } from "@mui/material";

import { colors } from "core/contants/colors";

const CardContainer = styled(Stack)<StackProps>(() => ({
  alignItems: "flex-start",
  padding: "10px",
  gap: "15px",
  position: "absolute",
  width: "180px",
  height: "302px",
  background: colors.background,
  boxSizing: "border-box",
}));

const ProductCard = () => {
  return <CardContainer></CardContainer>;
};
export default ProductCard;
