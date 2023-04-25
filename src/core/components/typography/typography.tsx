import { Typography, TypographyProps, styled } from "@mui/material";
import { colors } from "core/contants/colors";

type TextProps = TypographyProps & {
  content: string;
  isButtonText?: boolean;
};

const Text = styled((props: TextProps) => (
  <Typography children={props.content} {...props} />
))(({ isButtonText = false }) => ({
  color: isButtonText ? colors.textLight : colors.textDark,
  fontFamily: "Montserrat",
}));

export default Text;
