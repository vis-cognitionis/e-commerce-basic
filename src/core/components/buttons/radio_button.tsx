import { Radio, styled } from "@mui/material";

const RadioButton = styled(Radio)(() => ({
  padding: 0,
  fontSize: 16,
  color: "#2A59FE",

  "&.Mui-checked": {
    padding: 0,
    color: "#2A59FE",
  },
  "&.Mui-checked + .MuiFormControlLabel-label": {
    padding: 0,
    color: "#2A59FE",
  },

  "& .MuiSvgIcon-root": {
    fontSize: 16,
    padding: 0,
  },
}));

export default RadioButton;
