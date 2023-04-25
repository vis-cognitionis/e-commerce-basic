import { Typography, TypographyProps, styled } from "@mui/material";

type TextProps = TypographyProps & {
  content: string;
  color?: string;
};

const Text = styled((props: TextProps) => (
  <Typography children={props.content} {...props} />
))(({ color = "#000000" }) => ({
  color: color,
  fontFamily: "Montserrat",
}));

export default Text;
