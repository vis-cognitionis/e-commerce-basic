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

const HeaderContainer = styled("header")(({ theme }) => ({
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
  [theme.breakpoints.down(1180)]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
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

export const SearchBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.lightGray,
  padding: "8px 8px 8px 12px",
  gap: "10px",
  minWidth: "100px",
  width: "100%",
  height: "40px",
  boxSizing: "border-box",
  marginRight: "10px",
}));

export const SearchInput = styled(InputBase)<InputBaseProps>(() => ({
  width: "100%",
  height: "100%",
  fontSize: "14px",
  color: colors.textDark,
  fontFamily: "Montserrat",
}));

const HeaderSearch = styled(Stack)<StackProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "129px",
  width: "70%",
  alignItems: "center",
  [theme.breakpoints.down(1180)]: {
    gap: "29px",
  },
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
          content="ShopNest"
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
            noWrap
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
