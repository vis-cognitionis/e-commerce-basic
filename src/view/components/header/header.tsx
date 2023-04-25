import React from "react";
import {
  Stack,
  StackProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { IconPrice, IconUser } from "core/components/icons/icons";

const HeaderContainer = styled("header")(() => ({
  width: "100%",
  height: "50px",
  display: "flex",
  position: "fixed",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "147px",
  paddingRight: "147px",
  boxSizing: "border-box",
  background: "#2A59FE",
}));

const HeaderTitle = styled(Typography)<TypographyProps>(() => ({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontWeight: 800,
  fontSize: 24,
  display: "flex",
  color: "#FFFFFF",
  margin: 0,
}));

const HeaderInfoContainer = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "17px",
}));

const HeaderInfo = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  alignItems: "center",
}));

const SearchInput = styled("input")(() => ({
  width: "408px",
  height: "40px",
}));

const InfoText = styled(Typography)<TypographyProps>(() => ({
  fontFamily: "Montserrat",
  color: "#FFFFFF",
}));

const HeaderSearch = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "129px",
  justifyContent: "space-between",
}));

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSearch>
        <HeaderTitle>Eteration</HeaderTitle>
        <SearchInput type="search" />
      </HeaderSearch>
      <HeaderInfoContainer>
        <HeaderInfo>
          <IconPrice />
          <InfoText>117.000 ₺</InfoText>
        </HeaderInfo>
        <HeaderInfo>
          <IconUser sx={{ width: "14px", height: "17px" }} />
          <InfoText>User</InfoText>
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
