import {
  Stack,
  StackProps,
  Box,
  BoxProps,
  InputBase,
  InputBaseProps,
  styled,
} from "@mui/material";
import { colors } from "core/contants/colors";

export const SearchContainer = styled(Stack)<StackProps>(() => ({
  width: "100%",
  height: "83px",
  maxHeight: "83px",
  overflowX: "hidden",
  overflowY: "scroll",
  gap: "10px",

  "&::-webkit-scrollbar": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb:vertical": {
    borderRadius: "20px",
    backgroundColor: colors.gray,
  },
  "&::-webkit-scrollbar-track:vertical": {
    backgroundColor: "transparent",
  },
}));

export const SearchBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.lightGray,
  padding: "8px 8px 8px 12px",
  gap: "10px",
  width: "190px",
  height: "40px",
  boxSizing: "border-box",
}));

export const SearchInput = styled(InputBase)<InputBaseProps>(() => ({
  width: "100%",
  height: "100%",
  fontSize: "14px",
  color: colors.textDark,
  fontFamily: "Montserrat",
}));
