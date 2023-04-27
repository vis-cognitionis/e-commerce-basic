import React from "react";
import { Stack, styled, StackProps } from "@mui/material";

import Cart from "./cart";
import Checkout from "./checkout";

const Container = styled(Stack)<StackProps>(({ theme }) => ({
  paddingRight: "147px",
  paddingTop: "83px",
  [theme.breakpoints.down(1180)]: {
    paddingRight: "40px",
  },
}));

const CartArea = () => {
  return (
    <Container gap={4}>
      <Cart />
      <Checkout />
    </Container>
  );
};
export default CartArea;
