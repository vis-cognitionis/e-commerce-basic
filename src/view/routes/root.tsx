import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import CartArea from "view/components/cart/_index";
import Header from "view/components/header/header";

export default function Root() {
  return (
    <>
      <Header />
      <Stack direction="row">
        <Stack direction="row" pt={"83px"} pl={"147px"}>
          <Outlet />
        </Stack>
        <CartArea />
      </Stack>
    </>
  );
}
