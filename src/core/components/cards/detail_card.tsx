import React from "react";
import { Box, styled, BoxProps } from "@mui/material";
import { colors } from "core/contants/colors";

const DetailCardContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "10px",
  gap: "10px",
  position: "relative",
  width: "1061px",
  height: "457px",
  background: colors.background,
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  boxSizing: "border-box",
}));

const DetailCard = () => {
  return <DetailCardContainer></DetailCardContainer>;
};
export default DetailCard;
