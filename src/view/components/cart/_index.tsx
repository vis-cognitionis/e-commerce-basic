import React from "react";
import { Stack } from "@mui/material";

import Cart from "./cart";
import Checkout from "./checkout";

const CartArea = () => {
  return (
    <Stack gap={4} pr={"147px"} pt={"83px"}>
      <Cart />
      <Checkout />
    </Stack>
  );
};
export default CartArea;
