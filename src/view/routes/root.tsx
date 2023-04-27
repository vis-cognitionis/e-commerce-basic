import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, styled, StackProps } from "@mui/material";

import CartArea from "view/components/cart/_index";
import Header from "view/components/header/header";

const OutletContainer = styled(Stack)<StackProps>(({ theme }) => ({
  paddingLeft: "147px",
  paddingTop: "83px",
  [theme.breakpoints.down(1180)]: {
    paddingLeft: "40px",
  },
  [theme.breakpoints.down(950)]: {
    width: "70%",
  },
}));

export default function Root() {
  return (
    <>
      <Header />
      <Stack direction="row" justifyContent={"space-between"}>
        <OutletContainer direction="row">
          <Outlet />
        </OutletContainer>
        <CartArea />
      </Stack>
    </>
  );
}
