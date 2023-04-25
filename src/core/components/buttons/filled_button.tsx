import React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { colors } from "core/contants/colors";

const FilledButton = styled((props: ButtonProps) => (
  <Button disableRipple {...props} />
))(() => ({
  width: "100%",
  height: "auto",
  minHeight: "30px",
  background: colors.primary,
  "&:hover": {
    background: colors.primary,
  },
  borderRadius: "4px",
  textTransform: "capitalize",
}));

export default FilledButton;
