import React from "react";
import { Stack } from "@mui/material";
import CustomContainer from "core/components/containers/container";

const CartArea = () => {
  return (
    <Stack gap={1.5}>
      <CustomContainer
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={<p>cart area</p>}
      />
      <CustomContainer
        sx={{ width: "213px", height: "auto" }}
        isFilter={false}
        children={<p>checkout</p>}
      />
    </Stack>
  );
};
export default CartArea;
