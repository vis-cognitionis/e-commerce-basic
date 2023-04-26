import React from "react";
import {
  Box,
  BoxProps,
  InputBase,
  InputBaseProps,
  Stack,
  StackProps,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

import { IconPrice, IconSearch, IconUser } from "core/components/icons/icons";
import { colors } from "core/contants/colors";
import { useCart } from "contexts/cart_context";
import mainStore from "view-model/main_store";
import Text from "core/components/typography/typography";

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

export const SearchBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.lightGray,
  padding: "8px 8px 8px 12px",
  gap: "10px",
  width: "408px",
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

const HeaderSearch = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "129px",
  justifyContent: "space-between",
}));

const Header = () => {
  const navigate = useNavigate();
  const { totalPrice } = useCart();

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    mainStore.setSearchName(event.target.value);
  };

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
        <SearchBox>
          <IconSearch sx={{ width: "16px", height: "auto" }} />
          <SearchInput
            placeholder="Search"
            value={mainStore.searchName}
            onChange={handleSearchName}
          />
        </SearchBox>
      </HeaderSearch>
      <HeaderInfoContainer>
        <HeaderInfo>
          <IconPrice />
          <Text
            content={`${totalPrice.toLocaleString() + " ₺"}`}
            sx={{ color: colors.textLight }}
          />
        </HeaderInfo>
        <HeaderInfo>
          <IconUser sx={{ width: "14px", height: "17px" }} />
          <Text content="User" sx={{ color: colors.textLight }} />
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default observer(Header);
