import { Typography, TypographyProps, styled } from "@mui/material";
import { colors } from "core/contants/colors";

type TextProps = TypographyProps & {
  content: string;
};

const Text = styled((props: TextProps) => (
  <Typography children={props.content} {...props} />
))(() => ({
  fontFamily: "Montserrat",
  color: colors.textDark,
}));

export default Text;
