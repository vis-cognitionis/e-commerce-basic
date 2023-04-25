import React from "react";
import { Stack, StackProps, styled } from "@mui/material";

import { IconPrice, IconUser } from "core/components/icons/icons";
import { colors } from "core/contants/colors";
import Text from "core/components/typography/typography";
import { useNavigate } from "react-router-dom";

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
  background: colors.primary,
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

const HeaderSearch = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "129px",
  justifyContent: "space-between",
}));

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderSearch>
        <Text
          content="Eteration"
          sx={{
            color: colors.textLight,
            lineHeight: 1.5,
            fontWeight: 800,
            cursor: "pointer",
          }}
          variant="h5"
          onClick={() => navigate("/")}
        />

        <SearchInput type="search" />
      </HeaderSearch>
      <HeaderInfoContainer>
        <HeaderInfo>
          <IconPrice />
          <Text content="117.000 ₺" sx={{ color: colors.textLight }} />
        </HeaderInfo>
        <HeaderInfo>
          <IconUser sx={{ width: "14px", height: "17px" }} />
          <Text content="User" sx={{ color: colors.textLight }} />
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
