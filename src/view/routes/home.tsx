import React from "react";
import { Stack } from "@mui/material";

import CartArea from "view/components/cart/_index";
import AllFilter from "view/components/filter/_index";

export default function Home() {
  return (
    <Stack
      direction="row"
      pt={"83px"}
      pr={"147px"}
      pl={"147px"}
      justifyContent="space-between"
    >
      <AllFilter />
      <CartArea />
    </Stack>
  );
}
