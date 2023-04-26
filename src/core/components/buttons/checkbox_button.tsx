import { Checkbox, CheckboxProps, styled } from "@mui/material";
import { colors } from "core/contants/colors";

const CheckboxButton = styled(Checkbox)<CheckboxProps>(() => ({
  padding: 0,
  fontSize: 16,
  color: colors.primary,

  "&.Mui-checked": {
    padding: 0,
    color: colors.primary,
  },
  "&.Mui-checked + .MuiFormControlLabel-label": {
    padding: 0,
    color: colors.primary,
  },

  "& .MuiSvgIcon-root": {
    fontSize: 16,
    padding: 0,
  },
}));

export default CheckboxButton;
